import React, { Component, useImperativeHandle } from 'react';
import { connect } from 'react-redux';
import { AdminActions } from '../redux/actions';
import Swal from 'sweetalert2';

class EditStudent extends Component {
    constructor(props) {
        super(props);
        this.state = {

        }
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }
    componentDidMount() {
    }
    handleChange(event) {
        const { name, value } = event.target;
        this.setState({
            [name]: value
        });
    }
    handleSubmit(event, id){
        event.preventDefault();
        var{code, grade}= this.state;
        var infostudent= {
            code: code,
            id: id,
            grade: grade,
        }
        if(code !== undefined && grade !==undefined){
            this.props.editStudent(infostudent);
        }
    }

    render() {
        const { studenttest } = this.props;
        return (
            <React.Fragment>
                <div className="modal fade" id={`showedit`}>
                    <div className="modal-dialog">
                        <div className="modal-content">
                            <div className="modal-header">
                                <h4 className="modal-title" >Thông tin chi tiết sinh viên</h4>
                            </div>
                            <div className="modal-body">
                                <div className="form-group col-sm-12">
                                    <div className="row">
                                        <label>Họ và tên:</label> &nbsp;
                                        <label>{studenttest.userId.name}</label>
                                    </div>
                                    <br />
                                    <div className="row">
                                        <label>Mã số sinh viên</label> &nbsp;
                                        <input type="text" className="form-control" name="code" onChange={this.handleChange}></input>
                                    </div>
                                    <br />
                                    <div className="row">
                                        <label>Khóa</label> &nbsp;
                                        <input type="text" className="form-control" name="grade" onChange={this.handleChange}></input>
                                    </div>
                                    <br/>
                                    <div className="modal-footer">
                                        <button type="button" className="btn btn-danger pull-left" data-dismiss="modal"><i className="fa fa-close"></i> Đóng</button>
                                        <button type="button" className="btn btn-primary" onClick={(event) => { this.handleSubmit(event, studenttest._id) }} data-dismiss="modal"><i className="fa fa-save"></i> Lưu</button>
                                    </div>
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
    editStudent: AdminActions.editStudent,
};
const ConnectEditStudent = connect(mapState, actionCreators)(EditStudent);
export { ConnectEditStudent as EditStudent };