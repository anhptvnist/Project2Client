import React, { Component } from 'react';
import { connect } from 'react-redux';
import { AdminActions } from '../redux/actions';
import {CreateTern} from './CreateTern';



class TernManager extends Component {
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
    formatDate(date) {
        var d = new Date(date),
            month = '' + (d.getMonth() + 1),
            day = '' + d.getDate(),
            year = d.getFullYear();

        if (month.length < 2)
            month = '0' + month;
        if (day.length < 2)
            day = '0' + day;

        return [day, month, year].join('-');
    }
    // handleSearchData(){
    //     console.log("======", this.state);
    //     var {role} = this.state;
    //     this.props.searchUser(role);
    // }
    componentDidMount(){
        this.props.getTern();
    }

    handleEndTern = (event, id) => {
        event.preventDefault();
        if(id){
            this.props.endTern(id);
        }
    }
    handleStartTern = (event, id) => {
        event.preventDefault();
        if(id){
            this.props.startTern(id);
        }
    }
    render() {
        var listTern, role;
        const {admin}=this.props;
        if(admin && admin.listtern !== undefined){
            listTern=admin.listtern
        }
        var check;
        for(let i in listTern){
            if(listTern[i].status == 1)
                check=1;
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
                                    <CreateTern/>
                                </div>
                            </div>
                        </div>

                        <table id="example1" className="table table-bordered table-striped">
                                            <thead>
                                                <tr>
                                                    <th title="index">STT</th>
                                                    <th title="Học kỳ">Học kỳ</th>
                                                    <th title= "Ngày bắt đầu">Ngày bắt đầu</th>
                                                    <th title="Ngày kết thúc">Ngày kết thúc</th>
                                                    <th title= "Trạng thái">Trạng thái</th>
                                                    <th title="Hành động">Hành động</th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                {
                                                    (typeof listTern !== "undefined" && listTern.length !== 0) ?
                                                        listTern.map((item, index) =>
                                                            <tr key={index}>
                                                                <td>{index+1}</td>
                                                                <td>{item.code}</td>
                                                                <td>{this.formatDate(item.startDate)}</td>
                                                                <td>{this.formatDate(item.endDate)}</td>
                                                                <td>{item.status=='0'?"Chưa bắt đầu" :(item.status=='1'?"Đang hoạt động":"Đã kết thúc")}</td>
                                                                <td>
                                                                    {
                                                                        (check == 1 && item.status == 1 ) &&
                                                                        <div>
                                                                        <a href="#" className="add_circle" title="Kết thúc kỳ học" onClick={(event)=>this.handleEndTern(event, item._id)}><i className="nav-icon fa fa-pause-circle"></i></a>
                                                                        </div>
                                                                    }
                                                                    {
                                                                        (check == undefined && item.status == 0) &&
                                                                        <div>
                                                                        <a href="#" className="add_circle" title="Bắt đầu kỳ học" onClick={(event)=>this.handleStartTern(event, item._id)}><i className="nav-icon fa fa-play-circle"></i></a>
                                                                        </div>
                                                                    }
                                                                
                                                                </td>
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
    getTern: AdminActions.getTern,
    startTern: AdminActions.startTern,
    endTern: AdminActions.endTern,
};
const connectedTernManager = connect(mapState, actionCreators)(TernManager);
export { connectedTernManager as TernManager };