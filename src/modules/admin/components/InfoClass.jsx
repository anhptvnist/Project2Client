import React, { Component } from 'react';
import { connect } from 'react-redux';
import { AdminActions } from '../redux/actions';
import Swal from 'sweetalert2';

class InfoClass extends Component {
    constructor(props) {
        super(props);
        this.state = {
            Class: {}
        }
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }
    componentDidMount() {

        this.props.getLecturer();

        // this.props.getSubject();
    }
    handleChange(event) {
        const { name, value } = event.target;
        this.setState({
            [name]: value
        });


    }

    handleSubmitLec(event, id) {
        event.preventDefault();
        var { lecturerId } = this.state;
        this.state.check = 2;
        if (lecturerId !== null || lecturerId !== undefined) {
            this.props.getListClassofLec(lecturerId, id);
        }
    }


    handleSubmit(event, id, idclass) {
        event.preventDefault();
        var { lecturerId } = this.state;
        console.log("=====", this.state.check);
        if (lecturerId !== null && lecturerId !== undefined && this.state.check == 2) {
            this.props.assignment(lecturerId, id, idclass);
        }
        if (this.state.check == 1 || this.state.check == undefined) {
            Swal.fire({
                title: "Vui lòng chọn lại giảng viên",
                type: 'warning',
                confirmButtonColor: '#3085d6',
                confirmButtonText: 'Xác nhận'
            })
        }
    }
    render() {

        const { admin } = this.props;
        var listTerns, listSubject, listTern = [], listLecturer, listclasslec, check;
        var { check } = this.state
        if (admin && admin.listlecturer !== undefined) {
            listLecturer = admin.listlecturer;
        }
        const { classtest } = this.props;
        if (admin && admin.listclassoflec !== undefined) {
            listclasslec = admin.listclassoflec;
            listclasslec.listclass.map(item => {
                if (item.day == classtest.day) {
                    if (item.startDate < classtest.endDate
                        && item.startDate > classtest.startDate
                    ) {
                        this.state.check = 1;
                    }
                    if (item.endDate > classtest.startDate
                        && item.endDate < classtest.endDate
                    ) {
                        this.state.check = 1;
                    }
                    if (item.startDate > classtest.startDate
                        && item.endDate < classtest.endDate
                    ) {
                        this.state.check = 1;
                    }
                    if (item.startDate < classtest.startDate
                        && item.endDate > classtest.endDate
                    ) {
                        this.state.check = 1;
                    }
                }

            });
        }
        let checklist = (admin.listclassoflec !== undefined)
        console.log("+++", classtest);
        return (
            <React.Fragment>
                <div className="modal fade" id={`showedit`}>
                    <div className="modal-dialog" style={{ maxWidth: "none" }}>
                        <div className="modal-content" style={{ width: "900px", margin: "auto" }}>
                            <div className="modal-header">
                                <h4 className="modal-title" >Thông tin chi tiết lớp học</h4>
                            </div>
                            <div className="modal-body">
                                <form style={{ marginBottom: '20px' }}>
                                    <div className="form-group col-sm-12">
                                        <div className="row">
                                            <div className="">
                                                <label>Học kỳ:</label> &nbsp;
                                            <label>{classtest.tern.code}</label>
                                            </div>
                                        </div>
                                        <br />
                                        <div className="row">
                                            <div className="">
                                                <label>Mã lớp:</label> &nbsp;
                                            <label>{classtest.code}</label>
                                            </div>
                                        </div>
                                        <br />
                                        <div className="row">
                                            <div className="">
                                                <label>Môn học:</label> &nbsp;
                                            <label>{classtest.subjectId.name}</label>
                                            </div>
                                        </div>
                                        <br />
                                        <div className="row">
                                            <div className="">
                                                <label>Thời gian:</label> &nbsp;
                                            <label> {
                                                    (classtest.day == 0) ?
                                                        "Chủ nhật" : "Thứ " + classtest.day
                                                }
                                                    &nbsp;
                                                    &nbsp;
                                                    &nbsp;
                                                {classtest.startDate} - {classtest.endDate}</label>
                                            </div>
                                        </div>
                                        <br />
                                        <div className="row">
                                            <div className="">
                                                <label>Giảng viên:</label> &nbsp;
                                            {
                                                    (classtest && classtest.lecturerId != null) ?
                                                        <label>{classtest.lecturerId.degree} &nbsp; {classtest.lecturerId.userId.name}</label> : "Chưa phân công"
                                                }

                                            </div>
                                        </div>
                                    </div>

                                    <div>
                                        <h5>Danh sách lớp</h5>
                                    </div>

                                    <table id="example1" className="table table-bordered table-striped">
                                        <thead>
                                            <tr>
                                                <th title="index">STT</th>
                                                <th title="Học kỳ">MSSV</th>
                                                <th title="Ngày bắt đầu">Họ và tên</th>
                                                <th title="Ngày kết thúc">Điểm giữa kỳ</th>
                                                <th title="Hành động">Điểm cuối kỳ</th>
                                                <th title="Thời gian">Đánh giá</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            {
                                                (classtest && classtest.students.length != 0) ?
                                                    classtest.students.map((item, index) =>
                                                        <tr>
                                                            <td>{index + 1}</td>
                                                            <td>{item.student.code}</td>
                                                            <td>{item.student.userId.name}</td>
                                                            <td>{item.midPoint ? item.midPoint : "Chưa đánh giá"}</td>
                                                            <td>{item.endPoint ? item.endPoint : "Chưa đánh giá"}</td>
                                                            <td>{item.result ? item.result : "Chưa đánh giá"}</td>

                                                        </tr>
                                                    ) : "Chưa có sinh viên đăng ký"

                                            }
                                        </tbody>
                                    </table>

                                </form>
                            </div>
                            <div className="modal-footer">
                                <button type="button" className="btn btn-danger pull-left" data-dismiss="modal"><i className="fa fa-close"></i> Đóng</button>
                                <button type="button" className="btn btn-primary" onClick={(event) => { this.handleSubmit(event, classtest.tern._id, classtest._id) }} data-dismiss="modal"><i className="fa fa-save"></i> Lưu</button>
                            </div>
                        </div>
                    </div>
                </div>
            </React.Fragment>
        );
    }
}

function mapState(state) {
    var { auth, admin } = state;
    return { auth, admin };
}

const actionCreators = {
    // getTern: AdminActions.getTern,
    getLecturer: AdminActions.getLecturer,
    getListClassofLec: AdminActions.getListClassofLec,
    assignment: AdminActions.assignment,
};
const ConnectInfoClass = connect(mapState, actionCreators)(InfoClass);
export { ConnectInfoClass as InfoClass };