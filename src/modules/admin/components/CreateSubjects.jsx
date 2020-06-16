import React, { Component } from 'react';
import { connect } from 'react-redux';
import { AdminActions } from '../redux/actions';
class CreateSubjects extends Component {
    constructor(props) {
        super(props);
        this.state = {
            subjects:{}
        }
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit =this.handleSubmit.bind(this);
    }
    handleChange(event){
        const{name, value}= event.target;
        this.setState({
            [name]: value
        });
        
    }
    handleSubmit(){
        
        var {name, code, parent} = this.state;
        var subjects= { name, code, parent};
        if(subjects !== undefined){
		    this.props.createSubjects(subjects);
        }
    }
    render() { 
        const {} = this.props;
        return ( 
            <React.Fragment>
                <a className="btn btn-primary" data-toggle="modal" href="#modal-id">Thêm bộ môn</a>
                <div className="modal fade" id="modal-id">
                    <div className="modal-dialog modal-department">
                        <div className="modal-content">
                            <div className="modal-header">
                            <h4 className="modal-title">Thêm bộ môn</h4>
                            </div>
                            <div className="modal-body">
                                <form style={{ marginBottom: '20px' }}>
                                    <div className="row">
                                        <div className="form-group col-sm-12">
                                            <label>Tên Bộ Môn</label>
                                            <input type="text" className="form-control" name="name" onChange={this.handleChange}/><br/>
                                        </div>
                                        <div className="form-group col-sm-12">
                                            <label>Mã Bộ Môn</label>
                                            <input type="text" className="form-control" name="code" onChange={this.handleChange}/><br/>
                                        </div>
                                        <div className="form-group col-sm-12">
                                            <label>Viện</label>
                                            <input type="text" className="form-control" name="parent" onChange={this.handleChange}/><br/>
                                        </div>                                        
                                    </div>
                                </form>
                            </div>
                            <div className="modal-footer">
                            <button type="button" className="btn btn-danger pull-left" data-dismiss="modal"><i className="fa fa-close"></i> Đóng</button>
                            <button type="button" className="btn btn-primary"  onClick={this.handleSubmit} data-dismiss="modal"><i className="fa fa-save"></i> Lưu</button>
                            </div>
                        </div>
                    </div>
                </div>
            </React.Fragment>
         );
    }
}
 
function mapState(state) {
    return state;
}

const actionCreators = {
    createSubjects: AdminActions.createSubjects,
};
const ConnectCreateSubjects = connect(mapState, actionCreators)(CreateSubjects);
export { ConnectCreateSubjects as CreateSubjects };