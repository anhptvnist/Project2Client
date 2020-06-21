import React, { Component } from 'react';
import { connect } from 'react-redux';
import { AdminActions } from '../redux/actions';
class CreateSession extends Component {
    constructor(props) {
        super(props);
        this.state = {
            Session:{}
        }
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit =this.handleSubmit.bind(this);
    }
    componentDidMount(){
        this.props.getTern();
    }
    handleChange(event){
        const{name, value}= event.target;
        this.setState({
            [name]: value
        });
        
    }
    handleSubmit(){
        
        var {startDate, endDate, tern} = this.state;
        var session= {startDate, endDate, tern};
        if(session !== undefined){
		    this.props.createSession(session);
        }
    }
    render() { 
        const {admin} = this.props;
        var listTerns, listTern = [];
        if(admin && admin.listtern !== undefined){
            listTerns=admin.listtern
            for(let i in listTerns){
                if(listTerns[i].status !== 2){
                    listTern.push(listTerns[i]);
                }
            }
        }
        return ( 
            <React.Fragment>
                <a className="btn btn-primary" data-toggle="modal" href="#modal-id">Thêm phiên đăng ký</a>
                <div className="modal fade" id="modal-id">
                    <div className="modal-dialog modal-department">
                        <div className="modal-content">
                            <div className="modal-header">
                            <h4 className="modal-title">Thêm phiên đăng ký</h4>
                            </div>
                            <div className="modal-body">
                                <form style={{ marginBottom: '20px' }}>
                                    <div className="row">
                                        <div className="form-group col-sm-12">
                                            <label>Học kỳ</label>

                                            {   (typeof listTern !== "undefined" && listTern.length !== 0)?
                                                     <select 
                                                     className="form-control" 
                                                     style={{width: '100%'}} 
                                                     defaultValue= {listTern[0].code}
                                                     name="tern"
                                                     onChange={this.handleChange}>
                                                         <option value='null'>Chọn kỳ học</option>
                                                          {  (typeof listTern !== "undefined" && listTern.length !== 0) ?
                                                        listTern.map((item) =>
                                                        <option value={item._id}>{item.code}</option>):<option value='null'>Chưa có học kỳ nào</option>
                                                    
                                                    }   
                                            </select>:
                                                      <select 
                                                        className="form-control" 
                                                        style={{width: '100%'}} 
                                                        name="tern"
                                                        onChange={this.handleChange}>
                                                             {  (typeof listTern !== "undefined" && listTern.length !== 0) ?
                                                        listTern.map((item) =>
                                                        <option value={item._id}>{item.code}</option>):<option value='null'>Chưa có học kỳ nào</option>
                                                    
                                                    }   
                                            </select>
                                            }    
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
    var { auth , admin} = state;
    return {auth, admin };
}

const actionCreators = {
    getTern: AdminActions.getTern,
    createSession: AdminActions.createSession,
};
const ConnectCreateSession = connect(mapState, actionCreators)(CreateSession);
export { ConnectCreateSession as CreateSession };