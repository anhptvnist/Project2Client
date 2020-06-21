import React, { Component } from 'react';
import { connect } from 'react-redux';
import { StudentActions } from '../redux/actions';
import { AdminActions } from '../../admin/redux/actions';




class ListPoint extends Component {
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
            this.props.getPointOfStudent(localStorage.getItem("userId"), idtern);
        }
        // this.props.searchUser(role);
    }
    componentDidMount() {
        this.props.getPointOfStudent(localStorage.getItem("userId"));
        this.props.getInfoOfStudent(localStorage.getItem("userId"))
        this.props.getTern();
    }

    render() {
        var listClass, index = 0, listClasses = [], listTern, info;
        const { student, admin } = this.props;
        if (admin && admin.listtern !== undefined) {
            listTern = admin.listtern;
        }
        if (student && student.listpoint !== undefined) {
            listClass = student.listpoint;
        }

        if (student && student.info !== undefined) {
            info = student.info
        }

        return (
            <React.Fragment>
                <div className="box">
                    <div className="box-body qlht">
                        <br />
                        <div className="text-center" >
                            <h3>Thông tin chi tiết</h3>
                        </div>
                        {
                            (info !== undefined) ?
                                <div style={{marginLeft: "20px"}}>
                                    <div>
                                        <label>Họ và tên:</label> &nbsp;
                                        <label>{info.userId.name}</label>
                                    </div>
                                    <div>
                                        <label>Mã số sinh viên:</label> &nbsp;
                                        <label>{info.code}</label>
                                    </div>
                                    <div>
                                        <label>Số tín chỉ đã qua:</label> &nbsp;
                                        <label>{info.pass}</label>
                                    </div>
                                    <div>
                                        <label>Số tín nợ:</label> &nbsp;
                                        <label>{info.fail}</label>
                                    </div>
                                    <div>
                                        <label>Mức cảnh cáo:</label> &nbsp;
                                        <label>{info.warning}</label>
                                    </div>
                                    <div>
                                        <label>CPA:</label> &nbsp;
                                        <label>{info.cpa}</label>
                                    </div>
                                </div> : "Không có dữ liệu"
                        }
                        <hr/>
                        <div className="text-center" >
                            <h4>Danh sách học phần</h4>
                        </div>
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
                                    <th title="Mã lớp">Mã môn học</th>
                                    <th title="Môn học">Môn học</th>
                                    <th title="Điểm chữ">Điểm chữ</th>
                                </tr>
                            </thead>
                            <tbody>

                                {
                                    (student && student.listpoint !== undefined && listClass.length !== 0) ?
                                        listClass.map((item, index) =>
                                            <tr>
                                                <td style={{ width: "30px" }} >{index = index + 1}</td>
                                                <td>{item.tern.code}</td>
                                                <td>{item.subject.code}</td>
                                                <td>{item.subject.name}</td>
                                                <td>{item.result}</td>
                                            </tr>


                                        ) : "Không có dữ liệu"
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
    var { student, admin } = state;
    return { student, admin };
}

const actionCreators = {
    getListClassOfTern: StudentActions.getListClassTernofStudent,
    getTern: AdminActions.getTern,
    getPointOfStudent: StudentActions.getPointOfStudent,
    getInfoOfStudent: StudentActions.getInfoOfStudent
};
const connectedListPoint = connect(mapState, actionCreators)(ListPoint);
export { connectedListPoint as ListPoint };