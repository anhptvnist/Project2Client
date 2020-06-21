import React, { Component } from 'react';
import { connect } from 'react-redux';
import { LecturerActions } from '../redux/actions';
import { AdminActions } from '../../admin/redux/actions';
import { EditPoint } from './EditPoint'



class SetPoint extends Component {
    constructor(props) {
        super(props);
        this.state = {
            showModalEdit: "",
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
    handleSearchData(event) {
        event.preventDefault();
        var { idtern } = this.state;
        if (idtern !== undefined) {
            this.props.getListClassofLec(localStorage.getItem("userId"), idtern);
        }
        // this.props.searchUser(role);
    }
    componentDidMount() {
        this.props.getListClassofLec(localStorage.getItem("userId"));
        this.props.getTern();
    }
    handleShowEdit(event, id) {
        event.preventDefault();
        console.log("===", id)
        this.props.infoClass(id);
    }

    
    showModalEdit = async (id) => {
        await this.setState(state => {
            return {
                ...state,
                showModalEdit: id
            }
        })
        var element = document.getElementsByTagName("BODY")[0];
        element.classList.add("modal-open");
        var modal = document.getElementById(`showedit`);
        modal.classList.add("in");
        modal.style = "display: block; padding-right: 17px;";
    }

    render() {
        var listClass, index = 0, listClasses = [], listTern;
        const { lecturer, admin } = this.props;
        if (admin && admin.listtern !== undefined) {
            listTern = admin.listtern;
        }
        if (lecturer && lecturer.listclassoflec !== undefined) {
            listClass = lecturer.listclassoflec;
            for (let i in listClass) {
                for (let j in listClass[i].listclass) {
                    listClasses.push(listClass[i].listclass[j]);
                }

            }
        }

        // console.log("=========", listClasses);

        return (
            <React.Fragment>
                <div className="box">
                    <div className="box-body qlht">
                        <br />
                        <div className="row">
                            <div className="form-inline">
                                <div className="form-group">
                                    <label>Học kỳ:</label>
                                    {
                                        <select
                                            name="idtern"
                                            id={`select-role`}
                                            onChange={this.handleChange}
                                            className="form-control select2">
                                            <option value='undefined'>Tất cả</option>
                                            {
                                                (listTern !== undefined) ?
                                                    listTern.map(item =>
                                                        <option value={item._id}>{item.code}</option>
                                                    ) : <option value='undefined'>Tất cả</option>
                                            }
                                        </select>
                                    }

                                </div>
                            </div>

                            <div className="form-inline" style={{ margin: "10px" }}>
                                <div className="form-group">
                                    <button type="button" className="btn btn-success" onClick={(event) => this.handleSearchData(event)}>Tìm kiếm</button>
                                </div>
                            </div>
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
                                    <th title="Môn học">Môn học</th>
                                    <th title="Số lượng">Số lượng</th>
                                    <th title="Hành động">Hành động</th>
                                </tr>
                            </thead>
                            <tbody>

                                {
                                    (typeof listClasses.length !== 0) ?
                                        listClasses.map((item, index) =>
                                            <tr>
                                                <td style={{ width: "30px" }} >{index = index + 1}</td>
                                                <td>{item.tern.code}</td>
                                                <td>{item.code}</td>
                                                <td>{item.status == '0' ? "Chưa bắt đầu" : (item.status == '1' ? "Đang hoạt động" : "Đã kết thúc")}</td>
                                                <td>{item.day}</td>
                                                <td>{item.startDate}-{item.endDate}</td>
                                                <td>{item.subjectId.name}</td>
                                                <td>{item.slot}/{item.slotmax}</td>
                                                <td> <a href="#abc" onClick={(event) => this.handleShowEdit(event, item._id)}
                                                    className="copy" title="Xem chi tiết" >
                                                    <i className="fa fa-info-circle" style={{ color: "#007bff" }}></i></a></td>
                                            </tr>
                                        ) : "Không có dữ liệu"
                                }
                            </tbody>
                        </table>
                        <div>
                            {
                                (lecturer && lecturer.infoclass !== undefined) &&
                                <div>
                                    <br />
                                    <hr />
                                    <h4 className="text-center">Thông tin chi tiết</h4>
                                    <div className="form-inline" style={{ float: "right", margin: "20px" }}>
                                        <div className="form-group">
                                        <a href="#abc" onClick={()=>
                                                            this.showModalEdit(lecturer.infoclass._id)} className="copy" data-toggle="modal"
                                                            data-backdrop="static" data-keyboard="false" title="Xem chi tiết" href="#showedit"><button className="btn btn-primary">Sửa điểm</button></a>
                                        </div>
                                        {this.state.showModalEdit === lecturer.infoclass._id ?
                                                    <EditPoint classtest={lecturer.infoclass} />: null }
                                    </div>
                                    <table id="example1" className="table table-bordered table-striped">
                                        <thead>
                                            <tr>
                                                <th title="index" style={{ width: "30px" }}>STT</th>
                                                <th title="Học kỳ">MSSV</th>
                                                <th title="Mã lớp">Họ và tên</th>
                                                <th title="Trạng thái">Điểm giữa kỳ</th>
                                                <th title="Thời gian">Điểm cuối kỳ</th>
                                                <th title="Thứ">Đánh giá</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            {
                                                (lecturer.infoclass.students.lenght !== 0) ?
                                                    lecturer.infoclass.students.map((item, index) =>
                                                        <tr>
                                                            <td>{index + 1}</td>
                                                            <td>Chua co</td>
                                                            <td>{item.student.userId.name}</td>
                                                            <td>{(item.midPoint != null) ? item.midPoint : "Chưa đánh giá"}</td>
                                                            <td>{(item.endPoint != null) ? item.endPoint : "Chưa đánh giá"}</td>
                                                            <td>{(item.result != null) ? item.result : "Chưa đánh giá"}</td>
                                                        </tr>
                                                    ) : "Không có học sinh đăng ký"

                                            }
                                        </tbody>
                                    </table>
                                </div>
                            }

                        </div>
                    </div>

                </div>

            </React.Fragment>
        )

    }

}

function mapState(state) {
    var { lecturer, admin } = state;
    return { lecturer, admin };
}

const actionCreators = {
    getListClassofLec: LecturerActions.getListClassofLec,
    getTern: AdminActions.getTern,
    setPointOfStudent: AdminActions.setPointOfStudent,
    infoClass: LecturerActions.infoClass,
};
const connectedSetPoint = connect(mapState, actionCreators)(SetPoint);
export { connectedSetPoint as SetPoint };