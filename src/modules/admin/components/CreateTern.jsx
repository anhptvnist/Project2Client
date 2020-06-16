import React, { Component } from 'react';
import { connect } from 'react-redux';
import { AdminActions } from '../redux/actions';
class CreateTern extends Component {
    constructor(props) {
        super(props);
        this.state = {
            Tern:{}
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
        
        var {code,startDate, endDate} = this.state;
        var Tern= { code, startDate, endDate};
        if(Tern !== undefined){
		    this.props.createTern(Tern);
        }
    }
    render() { 
        const {} = this.props;
        return ( 
            <React.Fragment>
                <a className="btn btn-primary" data-toggle="modal" href="#modal-id">Thêm học kỳ</a>
                <div className="modal fade" id="modal-id">
                    <div className="modal-dialog modal-department">
                        <div className="modal-content">
                            <div className="modal-header">
                            <h4 className="modal-title">Thêm học kỳ</h4>
                            </div>
                            <div className="modal-body">
                                <form style={{ marginBottom: '20px' }}>
                                    <div className="row">
                                        <div className="form-group col-sm-12">
                                            <label>Học kỳ</label>
                                            <input type="text" className="form-control" name="code" onChange={this.handleChange}/><br/>
                                        </div>
                                        <div className="form-group col-sm-12">
                                            <label>Thời gian bắt đầu</label>
                                            <input type="date" className="form-control" name="startDate" onChange={this.handleChange}/><br/>
                                        </div>
                                        <div className="form-group col-sm-12">
                                            <label>Thời gian kết thúc</label>
                                            <input type="date" className="form-control" name="endDate" onChange={this.handleChange}/><br/>
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
    createTern: AdminActions.createTern,
};
const ConnectCreateTern = connect(mapState, actionCreators)(CreateTern);
export { ConnectCreateTern as CreateTern };