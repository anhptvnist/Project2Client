import React, { Component } from 'react';
import { connect } from 'react-redux';
import { AdminActions } from '../../admin/redux/actions';
import Swal from 'sweetalert2';
import { LecturerActions } from '../redux/actions';

class EditPoint extends Component {
    constructor(props) {
        super(props);
        let data = this.getData();
        this.state = {
            Class: {},
            results: data.results,
        }
        // this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }
    componentDidMount() {

        this.props.getLecturer();

        // this.props.getSubject();
    }
    getData() {
        let results = {};
        let { classtest } = this.props;
        let liststudent = classtest.students;
        console.log("----------", liststudent);
        for (let i in liststudent) {
            results[`midPoint-${liststudent[i]._id}`] = {
                value: liststudent[i].midPoint ? liststudent[i].midPoint : undefined,
                student: liststudent[i]._id,
            }
            results[`endPoint-${liststudent[i]._id}`] = {
                value: liststudent[i].endPoint ? liststudent[i].endPoint : undefined,
                student: liststudent[i]._id,
            }
            results[`result-${liststudent[i]._id}`] = {
                value: liststudent[i].result ? liststudent[i].result : undefined,
                student: liststudent[i]._id,
            }
        }

        return {
            results: results
        }
    }
    // handleChange(event) {
    //     const { name, value } = event.target;
    //     this.setState({
    //         [name]: value
    //     });


    // }\
    handleChangeMidPoint = async (e, id) => {
        let value = parseInt(e.target.value);
        let name = e.target.name;
        let { classtest } = this.props
        await this.setState(state => {
            state.results[`${name}`] = {
                value: value,
                student: id,
            }
            return {
                ...state,
            }
        });
        if (this.state.results[`endPoint-${id}`].value !== undefined
            && this.state.results[`midPoint-${id}`].value !== undefined) {
            var midPoint = this.state.results[`midPoint-${id}`].value;
            // console.log("====", midPoint);
            var endPoint = this.state.results[`endPoint-${id}`].value;
            // console.log("=======end", endPoint);
            var result = (midPoint * classtest.subjectId.weightMidtern
                + endPoint * classtest.subjectId.weightEndtern) / 100
            await this.setState(state => {
                state.results[`result-${id}`] = {
                    value: result,
                    student: id,
                }
                return {
                    ...state,
                }
            });
        }
    }

    handleChangeEndPoint = async (e, id) => {
        let value = parseInt(e.target.value);
        let name = e.target.name;
        await this.setState(state => {
            state.results[`${name}`] = {
                value: value,
                student: id,
            }
            return {
                ...state,
            }
        });
        var { classtest } = this.props
        if (this.state.results[`endPoint-${id}`].value !== undefined
            && this.state.results[`midPoint-${id}`].value !== undefined) {
            var midPoint = this.state.results[`midPoint-${id}`].value;
            console.log("====", midPoint);
            var endPoint = this.state.results[`endPoint-${id}`].value;
            console.log("=======end", endPoint);
            var result = (midPoint * classtest.subjectId.weightMidtern
                + endPoint * classtest.subjectId.weightEndtern) / 100
            await this.setState(state => {
                state.results[`result-${id}`] = {
                    value: result,
                    student: id,
                }
                return {
                    ...state,
                }
            });
        }

    }
    handleSubmit(event) {
        event.preventDefault();
        console.log("thisssss", this.state);
        const { classtest } = this.props;
        let id = classtest._id;
        let listclass = {
            id: id,
            results: this.state.results
        }
        this.props.setPointOfStudent(listclass);

    }

    render() {
        const { classtest } = this.props;


        return (
            <React.Fragment>
                <div className="modal fade" id={`showedit`}>
                    <div className="modal-dialog" style={{ maxWidth: "none" }}>
                        <div className="modal-content" style={{ width: "900px", margin: "auto" }}>
                            <div className="modal-header">
                                <h4 className="modal-title" >Thông tin chi tiết lớp học</h4>
                            </div>
                            <div className="modal-body">
                                <div className="form-group col-sm-12">
                                    <form style={{ marginBottom: '20px' }}>
                                        <div className="row">
                                            <label>Học kỳ:</label> &nbsp;
                                            <label>{classtest.tern.code}</label>
                                        </div>
                                        <br />
                                        <div className="row">
                                            <label>Mã lớp:</label> &nbsp;
                                            <label>{classtest.code}</label>
                                        </div>
                                        <br />
                                        <div className="row">
                                            <label>Môn học:</label> &nbsp;
                                            <label>{classtest.subjectId.name}</label>
                                        </div>
                                        <br />
                                        <div className="row">
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
                                        <br/>
                                        <div className="row">
                                            <label>Trọng số:</label> &nbsp;
                                            <label>{classtest.subjectId.weightMidtern}-{classtest.subjectId.weightEndtern}</label>
                                        </div>
                                        <br />
                                    </form>
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
                                                        <td>Cần thêm code </td>
                                                        <td>{item.student.userId.name}</td>
                                                        <td >
                                                            <input type="number" className="form-control"
                                                                value={this.state.results[`midPoint-${item._id}`] ? this.state.results[`midPoint-${item._id}`].value : undefined}
                                                                name={`midPoint-${item._id}`} onChange={(e) => this.handleChangeMidPoint(e, item._id)}
                                                                style={{ width: "100px" }}></input>
                                                        </td>
                                                        <td>
                                                            <input type="number" className="form-control" name={`endPoint-${item._id}`}
                                                                value={this.state.results[`endPoint-${item._id}`] ? this.state.results[`endPoint-${item._id}`].value : undefined}
                                                                onChange={(e) => this.handleChangeEndPoint(e, item._id)}
                                                                style={{ width: "100px" }}></input>
                                                        </td>
                                                        <td>
                                                            {
                                                                (this.state.results[`result-${item._id}`].value !== undefined) ?
                                                                    this.state.results[`result-${item._id}`].value : null
                                                            }
                                                        </td>
                                                    </tr>
                                                ) : "Chưa có sinh viên đăng ký"

                                        }
                                    </tbody>
                                </table>
                                <div className="modal-footer">
                                    <button type="button" className="btn btn-danger pull-left" data-dismiss="modal"><i className="fa fa-close"></i> Đóng</button>
                                    <button type="button" className="btn btn-primary" onClick={(event) => { this.handleSubmit(event) }} data-dismiss="modal"><i className="fa fa-save"></i> Lưu</button>
                                </div>
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
    setPointOfStudent: LecturerActions.setPointOfStudent,
};
const ConnectEditPoint = connect(mapState, actionCreators)(EditPoint);
export { ConnectEditPoint as EditPoint };