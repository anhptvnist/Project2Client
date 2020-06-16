import React, { Component } from 'react';
import { connect } from 'react-redux';
import { AdminActions } from '../redux/actions';
class CreateClass extends Component {
    constructor(props) {
        super(props);
        this.state = {
            Class: {}
        }
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }
    componentDidMount() {
        this.props.getTern();
        this.props.getSubject();
    }
    handleChange(event) {
        const { name, value } = event.target;
        this.setState({
            [name]: value
        });

    }
    handleSubmit() {

        var { startDate, endDate, tern , code, subjectId, slotmax, day} = this.state;
       
        var newclass = { startDate, endDate, tern , code, subjectId, slotmax, day };
        if (newclass !== undefined) {
             this.props.createClass(newclass);
        }
    }
    render() {
        const { admin } = this.props;
        var listTerns, listSubject, listTern = [];
        if (admin && admin.listtern !== undefined) {
            listTerns = admin.listtern
            for (let i in listTerns) {
                if (listTerns[i].status !== 2) {
                    listTern.push(listTerns[i]);
                }
            }
        }
        if (admin && admin.subject !== undefined) {
            listSubject = admin.subject
        }
        return (
            <React.Fragment>
                <a className="btn btn-primary" data-toggle="modal" href="#modal-id">Thêm lớp</a>
                <div className="modal fade" id="modal-id">
                    <div className="modal-dialog modal-department">
                        <div className="modal-content">
                            <div className="modal-header">
                                <h4 className="modal-title">Thêm lớp</h4>
                            </div>
                            <div className="modal-body">
                                <form style={{ marginBottom: '20px' }}>
                                    <div className="row">
                                        <div className="form-group col-sm-12">
                                            <label>Học kỳ</label>

                                            {(typeof listTern !== "undefined" && listTern.length !== 0) ?
                                                <select
                                                    className="form-control"
                                                    style={{ width: '100%' }}
                                                    // defaultValue={"3"}
                                                    name="tern"
                                                    onChange={this.handleChange}>
                                                    
                                                        <option value='null'>Chọn kỳ học</option>
                                                    {(typeof listTern !== "undefined" && listTern.length !== 0) ?
                                                        listTern.map((item) =>
                                                            <option value={item._id}>{item.code}</option>) : <option value='null'>Chưa có học kỳ nào</option>

                                                    }
                                                </select> :
                                                <select
                                                    className="form-control"
                                                    style={{ width: '100%' }}
                                                    name="tern"
                                                    onChange={this.handleChange}>
                                                         <option value='null'>Chọn kỳ học</option>
                                                    {(typeof listTern !== "undefined" && listTern.length !== 0) ?
                                                        listTern.map((item) =>
                                                            <option value={item._id}>{item.code}</option>) : <option value='null'>Chưa có học kỳ nào</option>

                                                    }
                                                </select>
                                            }
                                        </div>
                                        <div className="form-group col-sm-12">
                                            <label>Mã lớp</label>
                                            <input type="text" className="form-control" name="code" onChange={this.handleChange} required="required"/><br />
                                        </div>
                                        <div className="form-group col-sm-12">
                                            <label>Môn học</label>
                                            {
                                                <select
                                                    className="form-control"
                                                    style={{ width: '100%' }}
                                                    name="subjectId"
                                                    onChange={this.handleChange}>
                                                         <option value='null'>Chọn môn học</option>
                                                    {(typeof listSubject !== "undefined" && listSubject.length !== 0) ?
                                                        listSubject.map((item) =>
                                                            <option value={item._id}>{item.name}</option>) : <option value='null'>Chưa có môn học nào</option>
                                                    }
                                                </select>
                                            }

                                        </div>
                                        <div className="form-group col-sm-12">
                                            <label>Thứ</label>
                                            <select
                                                className="form-control"
                                                style={{ width: '100%' }}
                                                name="day"
                                                onChange={this.handleChange}>
                                                <option value='null'>Chọn thứ</option>   
                                                <option value="2">Thứ 2</option>
                                                <option value="3">Thứ 3</option>
                                                <option value="4">Thứ 4</option>
                                                <option value="5">Thứ 5</option>
                                                <option value="6">Thứ 6</option>
                                                <option value="7">Thứ 7</option>
                                                <option value="0">Chủ nhật</option>
                                            </select>
                                        </div>
                                        <div className="form-group col-sm-12">
                                            <label>Thời gian bắt đầu</label>
                                            <input type="time" className="form-control" name="startDate" onChange={this.handleChange} /><br />
                                        </div>
                                        <div className="form-group col-sm-12">
                                            <label>Thời gian kết thúc</label>
                                            <input type="time" className="form-control" name="endDate" onChange={this.handleChange} /><br />
                                        </div>
                                        <div className="form-group col-sm-12">
                                            <label>Số lượng sinh viên tối đa</label>
                                            <input type="number" className="form-control" name="slotmax" onChange={this.handleChange} /><br />
                                        </div>
                                    </div>
                                </form>
                            </div>
                            <div className="modal-footer">
                                <button type="button" className="btn btn-danger pull-left" data-dismiss="modal"><i className="fa fa-close"></i> Đóng</button>
                                <button type="button" className="btn btn-primary" onClick={this.handleSubmit} data-dismiss="modal"><i className="fa fa-save"></i> Lưu</button>
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
    getTern: AdminActions.getTern,
    createClass: AdminActions.createClass,
    getSubject: AdminActions.getSubject,
};
const ConnectCreateClass = connect(mapState, actionCreators)(CreateClass);
export { ConnectCreateClass as CreateClass };