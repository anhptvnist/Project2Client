import React, { Component } from 'react';
import { connect } from 'react-redux';
import { StudentActions } from '../redux/actions';
import { AdminActions } from '../../admin/redux/actions';
import Swal from 'sweetalert2';





class RegisterClass extends Component {
    constructor(props) {
        super(props);
        this.state = {
            showModalEdit: "",
            Nowtern: '',
        };
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

    componentDidMount() {
        this.props.getListClassofTern();
        this.props.getlistClassofStudent(localStorage.getItem("userId"))
        this.props.getTern();
    }
    handleSearchData(event){
        event.preventDefault();
        var {subject} = this.state;
        if(subject !== undefined){
            this.props.getListClassofTern(subject);
        }
        if(subject == ''){
            this.props.getListClassofTern();
        }
        console.log("=====", subject)
        // this.props.searchUser(role);
    }
    handleSubmitData(event, listClasses, listRegister) {
        event.preventDefault();
        // console.log("listClasssssssss", listClasses);
        var tmp, check = 0, checktime = 0, checksubject = 0, test;
        var { idclass } = this.state;
        for (let i in listClasses) {
            if (listClasses[i].code == idclass) {
                check = 1;
                tmp = listClasses[i]
                break;
            } else {
                check = 4
            }
        }
        // check =4 không có lớp
        // check =2 trùng lịch học, 
        //checksubject = 4 trùng môn học
        if (check == 1) {
            for (let i in listRegister) {
                if (listRegister[i].subjectId.code == tmp.subjectId.code) {
                    checksubject = 4;
                    break;
                } else {
                    checksubject = 1;
                }
            }
        }

        if (check == 4) {
            Swal.fire({
                title: "Mã lớp không tồn tại",
                type: 'warning',
                icon: 'warning',
                confirmButtonColor: '#3085d6',
                confirmButtonText: 'Xác nhận'
            })
        }
        if (checksubject == 4) {
            Swal.fire({
                title: "Môn học đã đăng ký. Trùng môn học",
                type: 'warning',
                icon: 'warning',
                confirmButtonColor: '#3085d6',
                confirmButtonText: 'Xác nhận'
            })
        }

        if (check == 1 && checksubject == 1) {
            for (let i in listRegister) {
                if (listRegister[i].day == tmp.day) {
                    if (listRegister[i].startDate < tmp.endDate
                        && listRegister[i].startDate > tmp.startDate
                    ) {
                        checktime = 4;
                        test = listRegister[i];
                        break;
                    }
                    if (listRegister[i].endDate > tmp.startDate
                        && listRegister[i].endDate < tmp.endDate
                    ) {
                        checktime = 4;
                        test = listRegister[i];
                        break;
                    }
                    if (listRegister[i].startDate > tmp.startDate
                        && listRegister[i].endDate < tmp.endDate
                    ) {
                        checktime = 4;
                        test = listRegister[i];
                        break;
                    }
                    if (listRegister[i].startDate < tmp.startDate
                        && listRegister[i].endDate > tmp.endDate
                    ) {
                        checktime = 4;
                        test = listRegister[i];
                        break;
                    }
                }
                checktime = 1;
            }
        }
        if (checktime == 4) {
            Swal.fire({
                title: `Trùng lịch học với mã lớp ${test.code}
                        thời gian: Thứ ${test.day} bắt đầu từ ${test.startDate} - ${test.endDate}`,
                type: 'warning',
                icon: 'warning',
                confirmButtonColor: '#3085d6',
                confirmButtonText: 'Xác nhận'
            })
        }

        if (idclass !== null && check == 1 && checksubject == 1 && checktime == 1) {
            this.props.registerClass(localStorage.getItem("userId"), tmp.tern._id, idclass);
            //  this.props.getListClassofTern();
        }

    }


    render() {
        var listClass, index = 0, listClasses = [], listTern, listregister, listRegister = [];
        const { student, admin } = this.props;
        if (student && student.listclassoftern !== undefined) {
            listClass = student.listclassoftern;
        }
        if (student && student.listclassofstudent !== undefined) {
            listregister = student.listclassofstudent;
        }
        for (let i in listClass) {
            listClasses.push(listClass[i]);
            // this.state.Nowtern = listClasses[0].tern._id;
        }

        for (let i in listregister) {
            for (let j in listregister[i].listclass) {
                listRegister.push(listregister[i].listclass[j]);
            }

        }
        return (
            <React.Fragment>
                <div className="box">
                    {listClasses.length !== 0 ?
                        <div className="box-body qlht">
                            <br />

                            <div className="row">
                                <div className="col-12">
                                    <div className="text-center" >
                                        <h1>Các lớp mở đăng ký</h1>
                                    </div>

                                </div>

                                <div className="row">
                                    <div className="form-inline">
                                        <div className="form-group" style={{ marginLeft: "30px" }}>
                                            <label>Mã môn học</label>
                                            <input type="text" className="form-control" onChange={this.handleChange} name="subject" style={{ width: "50%" }}></input>
                                        </div>
                                    </div>
                                    <div className="form-inline" style={{ margin: "10px" }}>
                                        <div className="form-group">
                                            <button type="button" className="btn btn-success" onClick={(event) => this.handleSearchData(event)}>Tìm kiếm</button>
                                        </div>
                                    </div>
                                </div>

                                {/* <div className="form-inline" style={{ margin: "10px" }}>
                               <div className="form-group">
                                   <button type="button" className="btn btn-success" onClick={(event) => this.handleSearchData(event)}>Tìm kiếm</button>
                               </div>
                           </div> */}
                                {/* <div style={{ "margin-left": "900px", "margin-top": "10px" }}>
                               <div className="form-group">
                       <button type="button" className="btn btn-success" onClick={() => this.handleSearchData()}>Tìm kiếm</button> */}
                                {/* <CreateClass /> */}
                                {/* </div> */}
                                {/* </div> */}

                            </div>
                            <br></br>
                            <table id="example1" className="table table-bordered table-striped">
                                <thead>
                                    <tr>
                                        <th title="index" style={{ width: "30px" }}>STT</th>
                                        <th title="Học kỳ">Học kỳ</th>
                                        <th title="Mã lớp">Mã lớp</th>
                                        <th title="Trạng thái">Trạng thái</th>
                                        <th title="Thời gian">Thời gian</th>
                                        <th title="Thứ">Thứ</th>
                                        <th title="Mã môn học">Mã môn học</th>
                                        <th title="Môn học">Môn học</th>
                                        <th title="Số lượng">Số lượng</th>
                                    </tr>
                                </thead>
                                <tbody>

                                    {
                                        (typeof student && student.listclassoftern.length !== 0) ?
                                            student.listclassoftern.map((item, index) =>
                                                <tr>
                                                    <td>{index + 1}</td>
                                                    <td>{item.tern.code}</td>
                                                    <td>{item.code}</td>
                                                    <td>{item.status == '0' ? "Chưa bắt đầu" : (item.status == '1' ? "Đang hoạt động" : "Đã kết thúc")}</td>
                                                    <td>{item.day}</td>
                                                    <td>{item.startDate}-{item.endDate}</td>
                                                    <td>{item.subjectId.code}</td>
                                                    <td>{item.subjectId.name}</td>
                                                    <td>{item.slot}/{item.slotmax}</td>
                                                </tr>


                                            ) : "Không có dữ liệu"
                                    }
                                </tbody>
                            </table>
                            <br />
                            <hr />
                            <div className="col-12">
                                <div className="text-center" >
                                    <h1>Đăng ký</h1>
                                </div>

                            </div>
                            <div className="row">
                                <div className="form-inline">
                                    <div className="form-group" style={{ marginLeft: "30px" }}>
                                        <label>Mã lớp</label>
                                        <input type="text" className="form-control" onChange={this.handleChange} name="idclass" style={{ width: "50%" }}></input>
                                    </div>
                                </div>
                                <div className="form-inline" style={{ margin: "10px" }}>
                                    <div className="form-group">
                                        <button type="button" className="btn btn-success" onClick={(event) => this.handleSubmitData(event, listClasses, listRegister)}>Đăng ký</button>
                                    </div>
                                </div>
                            </div>
                            <table id="example1" className="table table-bordered table-striped">
                                <thead>
                                    <tr>
                                        <th title="index" style={{ width: "30px" }}>STT</th>
                                        <th title="Học kỳ">Học kỳ</th>
                                        <th title="Mã lớp">Mã lớp</th>
                                        <th title="Trạng thái">Trạng thái</th>
                                        <th title="Thời gian">Thời gian</th>
                                        <th title="Thứ">Thứ</th>
                                        <th title="Mã môn học">Mã môn học</th>
                                        <th title="Môn học">Môn học</th>
                                        <th title="Số lượng">Số lượng</th>
                                    </tr>
                                </thead>
                                <tbody>

                                    {
                                        (typeof student && student.listclassofstudent !== undefined) ?
                                            student.listclassofstudent[0].listclass.map((item, index) =>
                                                <tr>
                                                    <td>{index + 1}</td>
                                                    <td>{item.tern.code}</td>
                                                    <td>{item.code}</td>
                                                    <td>{item.status == '0' ? "Chưa bắt đầu" : (item.status == '1' ? "Đang hoạt động" : "Đã kết thúc")}</td>
                                                    <td>{item.day}</td>
                                                    <td>{item.startDate}-{item.endDate}</td>
                                                    <td>{item.subjectId.code}</td>
                                                    <td>{item.subjectId.name}</td>
                                                    <td>{item.slot}/{item.slotmax}</td>
                                                </tr>


                                            ) : "Không có dữ liệu"
                                    }
                                </tbody>
                            </table>
                        </div> : <div className="col-12">
                            <div className="text-center" >
                                <h1>Chưa mở đăng ký</h1>
                            </div>

                        </div>

                    }

                </div>

            </React.Fragment>
        )

    }

}

function mapState(state) {
    var { admin, student } = state;
    return { admin, student };
}

const actionCreators = {
    getListClassofTern: StudentActions.getListClassofTern,
    getTern: AdminActions.getTern,
    getlistClassofStudent: StudentActions.getlistClassofStudent,
    registerClass: StudentActions.registerClass,
};
const connectedRegisterClass = connect(mapState, actionCreators)(RegisterClass);
export { connectedRegisterClass as RegisterClass };