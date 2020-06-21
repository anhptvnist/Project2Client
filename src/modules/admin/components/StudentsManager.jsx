import React, { Component } from 'react';
import { connect } from 'react-redux';
import { AdminActions } from '../redux/actions';
import { EditStudent } from './EditStudent';




class StudentsManager extends Component {
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
    handleSearchData(event) {
        event.preventDefault();
        var { code } = this.state;
        if (code == '') {
            code = undefined
        }
        this.props.getStudents(code);

    }
    handleUpdateData(event){
        event.preventDefault();
        this.props.updateStudent();
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
    componentDidMount() {
        this.props.getStudents();
    }
    render() {
        var listStudents, role;
        const { admin } = this.props;
        // if(admin && admin.subject !== undefined){
        //     listStudents=admin.subject
        // }
        if (admin && admin.liststudents !== undefined) {
            listStudents = admin.liststudents;
        }
        return (
            <React.Fragment>
                <div className="box">
                    <div className="box-body qlht">
                        <div className="row">
                            <div className="form-inline">
                                <div className="form-group">
                                    <label>MSSV</label>
                                    <input type="text" className="form-control" name="code" onChange={this.handleChange} style={{ width: "100px" }}></input>

                                </div>
                            </div>
                            <div className="form-inline" style={{ margin: "10px" }}>
                                <div className="form-group">
                                    <button type="button" className="btn btn-success" onClick={(event) => this.handleSearchData(event)}>Tìm kiếm</button>
                                </div>
                            </div>
                            <div style={{ "margin-left": "600px", "margin-top": "10px" }}>
                                <div className="form-group">
                                    <button type="button" className="btn btn-primary" onClick={(event) => this.handleUpdateData(event)} >Cập nhật</button>
                                    {/* <CreateUser/> */}
                                </div>
                            </div>
                        </div>
                        <table id="example1" className="table table-bordered table-striped">
                            <thead>
                                <tr>
                                    <th title="index" style={{ width: "30px" }}>STT</th>
                                    <th title="MSSV">MSSV</th>
                                    <th title="Tên">Họ và tên</th>
                                    <th title="Mức cảnh báo">Mức cảnh báo</th>
                                    <th title="Số tín chỉ đã qua">Số tín chỉ đã qua</th>
                                    <th title="Số tín chỉ nợ">Số tín chỉ nợ</th>
                                    <th title="CPA">CPA</th>
                                    <th title="Hành động">Hành động</th>
                                </tr>
                            </thead>
                            <tbody>

                                {
                                    (admin && admin.liststudents !== undefined) ?
                                        admin.liststudents.map((item, index) =>
                                            <tr>
                                                <td>{index + 1}</td>
                                                <td>{item.code ? item.code : "Cần thêm"}</td>
                                                <td>{item.userId.name}</td>
                                                <td>{item.warning}</td>
                                                <td>{item.pass}</td>
                                                <td>{item.fail}</td>
                                                <td>{item.cpa}</td>
                                                <td>
                                                    <div style={{ margin: "auto" }}>
                                                    <a href="#abc" className="copy" data-toggle="modal"  onClick={()=> this.showModalEdit(item._id)}
                                                        data-backdrop="static" data-keyboard="false" title="Chỉnh sửa hồ sơ học sinh" href="#showedit"><i className="fa fa-edit"></i></a>
                                                    </div>
                                                    {this.state.showModalEdit === item._id ?
                                                    <EditStudent studenttest={item} />: null }
                                                </td>
                                                
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
    var { auth, admin } = state;
    return { auth, admin };
}

const actionCreators = {
    getStudents: AdminActions.getStudents,
    updateStudent: AdminActions.updateStudent,
};
const connectedStudentsManager = connect(mapState, actionCreators)(StudentsManager);
export { connectedStudentsManager as StudentsManager };