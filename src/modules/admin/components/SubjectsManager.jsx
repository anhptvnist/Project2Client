import React, { Component } from 'react';
import { connect } from 'react-redux';
import { AdminActions } from '../redux/actions';
import {CreateSubjects} from './CreateSubjects';



class SubjectsManager extends Component {
    constructor(props) {
        super(props);
        this.state = {};
        this.handleChange = this.handleChange.bind(this);
        // this.handleSearchData =this.handleSearchData.bind(this);
    }
    handleChange(event){
        const{name, value}= event.target;
        this.setState({
            [name]: value
        });
        
    }
    // handleSearchData(){
    //     console.log("======", this.state);
    //     var {role} = this.state;
    //     this.props.searchUser(role);
    // }
    componentDidMount(){
        this.props.getSubjects();
    }
    render() {
        var listSubjects, role;
        const {admin}=this.props;
        if(admin && admin.subjects !== undefined){
            listSubjects=admin.subjects
        }
        
        return (
            <React.Fragment>
                <div className="box">
                    <div className="box-body qlht">
                        <div className="row">
                            {/* <div className="form-inline">
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
                            </div> */}
                            {/* <div className="form-inline" style={{ margin: "10px" }}>
                                <div className="form-group">
                                    <button type="button" className="btn btn-success" onClick={() => this.handleSearchData()}>Tìm kiếm</button>
                                </div>
                            </div> */}
                            <div  style={{ "margin-left": "900px", "margin-top": "10px" }}>
                                <div className="form-group">
                                    {/* <button type="button" className="btn btn-success" onClick={() => this.handleSearchData()}>Tìm kiếm</button> */}
                                    <CreateSubjects/>
                                </div>
                            </div>
                        </div>

                        <table id="example1" className="table table-bordered table-striped">
                                            <thead>
                                                <tr>
                                                    <th title="index">STT</th>
                                                    <th title="Tên">Tên Bộ Môn</th>
                                                    <th title= "Mã Bộ Môn">Mã Bộ Môn</th>
                                                    <th title="Viện">Viện</th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                {
                                                    (typeof listSubjects !== "undefined" && listSubjects.length !== 0) ?
                                                        listSubjects.map((item, index) =>
                                                            <tr key={index}>
                                                                <td>{index+1}</td>
                                                                <td>{item.name}</td>
                                                                <td>{item.code}</td>
                                                                <td>{item.parent}</td>
                                                                {/* <td>{item.role=='0'?"Admin" :(item.role=='1'?"Lecturter":"Student")}</td> */}
                                                            </tr>) : "Không có dữ liệu"
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
    var { auth , admin} = state;
    return {auth, admin };
}

const actionCreators = {
    getSubjects: AdminActions.getSubjects,
};
const connectedSubjectsManager = connect(mapState, actionCreators)(SubjectsManager);
export { connectedSubjectsManager as SubjectsManager };