import React, { Component } from 'react';
import { connect } from 'react-redux';
import { AuthActions } from '../redux/actions';
import {CreateUser} from './CreateUser';



class UserManager extends Component {
    constructor(props) {
        super(props);
        this.state = {};
        this.handleChange = this.handleChange.bind(this);
        this.handleSearchData =this.handleSearchData.bind(this);
    }
    handleChange(event){
        const{name, value}= event.target;
        this.setState({
            [name]: value
        });
        
    }
    handleSearchData(){
        console.log("======", this.state);
        var {role} = this.state;
        this.props.searchUser(role);
    }
    componentDidMount(){
        this.props.getUser();
    }
    render() {
        var listUser, role;
        const {auth}=this.props;
        if(auth.listuser && auth.listuser !== undefined){
            listUser=auth.listuser
        }
        
        return (
            <React.Fragment>
                <div className="box">
                    <div className="box-body qlht">
                        <div className="row">
                            <div className="form-inline">
                                <div className="form-group">
                                    <label>Vai trò:</label>
                                    {
                                        <select
                                            name="role"
                                            id={`select-role`}
                                            onChange={this.handleChange}
                                            className="form-control select2">
                                            <option value='3'>Tất cả</option>
                                            <option value='0'>Admin</option>
                                            <option value='1'>Lecturter</option>
                                            <option value='2'>Student</option>
                                        </select>
                                    }

                                </div>
                            </div>
                            <div className="form-inline" style={{ margin: "10px" }}>
                                <div className="form-group">
                                    <button type="button" className="btn btn-success" onClick={() => this.handleSearchData()}>Tìm kiếm</button>
                                </div>
                            </div>
                            <div  style={{ "margin-left": "600px", "margin-top": "10px" }}>
                                <div className="form-group">
                                    {/* <button type="button" className="btn btn-success" onClick={() => this.handleSearchData()}>Tìm kiếm</button> */}
                                    <CreateUser/>
                                </div>
                            </div>
                        </div>

                        <table id="example1" className="table table-bordered table-striped">
                                            <thead>
                                                <tr>
                                                    <th title="index">STT</th>
                                                    <th title="Tên">Tên</th>
                                                    <th title="Email">Email</th>
                                                    <th title="Vai trò">Vai trò</th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                {
                                                    (typeof listUser !== "undefined" && listUser.length !== 0) ?
                                                        listUser.map((item, index) =>
                                                            <tr key={index}>
                                                                <td>{index+1}</td>
                                                                <td>{item.name}</td>
                                                                <td>{item.email}</td>
                                                                <td>{item.role=='0'?"Admin" :(item.role=='1'?"Lecturter":"Student")}</td>
                                                            </tr>) : null
                                                }
                                            </tbody>
                                        </table>
                    </div>
                </div>
            </React.Fragment>
        )

    }

}

function mapState(state) {
    var { auth } = state;
    return {auth };
}

const actionCreators = {
    getUser: AuthActions.getUser,
    searchUser: AuthActions.searchUser
};
const connectedUserManager = connect(mapState, actionCreators)(UserManager);
export { connectedUserManager as UserManager };