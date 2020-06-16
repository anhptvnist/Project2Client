import React, { Component } from 'react';
import { connect } from 'react-redux';
import { AdminActions } from '../redux/actions';
import { CreateClass } from './CreateClass';



class ClassManager extends Component {
    constructor(props) {
        super(props);
        this.state = {};
        this.handleChange = this.handleChange.bind(this);
        // this.handleSearchData =this.handleSearchData.bind(this);
    }
    handleChange(event) {
        const { name, value } = event.target;
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
    componentDidMount() {
        this.props.getClass();
    }

    // handleEndClass = (event, id) => {
    //     event.preventDefault();
    //     if (id) {
    //         this.props.endClass(id);
    //     }
    // }
    handleDeleteSession = (event, id) => {
        event.preventDefault();
        if (id) {
            this.props.deleteClass(id);
        }
    }
    // handleStartClass = (event, id) => {
    //     event.preventDefault();
    //     if (id) {
    //         this.props.startClass(id);
    //     }
    // }
    render() {
        var listClass, role;
        const { admin } = this.props;
        if (admin && admin.listclass !== undefined) {
            listClass = admin.listclass
        }
        var check;
        for (let i in listClass) {
            if (listClass[i].status == 1)
                check = 1;
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
                            <div style={{ "margin-left": "900px", "margin-top": "10px" }}>
                                <div className="form-group">
                                    {/* <button type="button" className="btn btn-success" onClick={() => this.handleSearchData()}>Tìm kiếm</button> */}
                                    <CreateClass />
                                </div>
                            </div>
                        </div>

                        <table id="example1" className="table table-bordered table-striped">
                            <thead>
                                <tr>
                                    <th title="index">STT</th>
                                    <th title="Học kỳ">Học kỳ</th>
                                    <th title="Ngày bắt đầu">Mã lớp</th>
                                    <th title="Ngày kết thúc">Số lượng</th>
                                    <th title="Hành động">Trạng thái</th>
                                    <th title="Thời gian">Thời gian</th>
                                    <th title="Thứ">Thứ</th>
                                    <th title="Hành động">Hành động</th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    (typeof listClass !== "undefined" && listClass.length !== 0) ?
                                        listClass.map((item, index) =>
                                            <tr key={index}>
                                                <td>{index + 1}</td>
                                                <td>{item.tern.code}</td>
                                                <td>{item.code}</td>
                                                <td>{item.slot}/{item.slotmax}</td>
                                                <td>{item.status == '0' ? "Chưa bắt đầu" : (item.status == '1' ? "Đang hoạt động" : "Đã kết thúc")}</td>
                                                <td>{item.startDate}-{item.endDate}</td>
                                                <td>
                                                    {
                                                        (item.day == 0) ?
                                                            "Chủ nhật" : "Thứ " + item.day
                                                    }
                                                </td>
                                                <td>
                                                    <div style={{ margin: "auto" }}>
                                                        <a href="#" className="add_circle" title="Xóa kỳ học" onClick={(event) => this.handleDeleteSession(event, item._id)}><i className="nav-icon fa fa-trash" style={{ color: "red" }}></i></a>
                                                    </div>
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
    var { auth, admin } = state;
    return { auth, admin };
}

const actionCreators = {
    getClass: AdminActions.getClass,
    deleteClass: AdminActions.deleteClass,
};
const connectedClassManager = connect(mapState, actionCreators)(ClassManager);
export { connectedClassManager as ClassManager };