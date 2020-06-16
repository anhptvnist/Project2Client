import React, { Component } from 'react';
import { connect } from 'react-redux';
import { AuthActions } from '../redux/actions';
class CreateUser extends Component {
    constructor(props) {
        super(props);
        this.state = {
            user:{}
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
        console.log("======", this.state);
        var {name, email, password, role } = this.state;
        var user = { name, email, password, role};
        if(user.name !== undefined){
		    this.props.register(user);
        }
    }
    render() { 
        const {} = this.props;
        return ( 
            <React.Fragment>
                <a className="btn btn-primary" data-toggle="modal" href="#modal-id">Tạo tài khoản</a>
                <div className="modal fade" id="modal-id">
                    <div className="modal-dialog modal-department">
                        <div className="modal-content">
                            <div className="modal-header">
                            <h4 className="modal-title">Tạo tài khoản</h4>
                            </div>
                            <div className="modal-body">
                                <form style={{ marginBottom: '20px' }}>
                                    <div className="row">
                                        <div className="form-group col-sm-12">
                                            <label>Tên</label>
                                            <input type="text" className="form-control" name="name" onChange={this.handleChange}/><br/>
                                        </div>
                                        <div className="form-group col-sm-12">
                                            <label>Email</label>
                                            <input type="email" className="form-control" name="email" onChange={this.handleChange}/><br/>
                                        </div>
                                        <div className="form-group col-sm-12">
                                            <label>Password</label>
                                            <input type="password" className="form-control" name="password" onChange={this.handleChange}/><br/>
                                        </div>
                                        <div className="form-group col-sm-12">
                                            <label>Vai trò</label>
                                            <select 
                                                className="form-control" 
                                                style={{width: '100%'}} 
                                                name="role" defaultValue="0"
                                                onChange={this.handleChange}>  
                             
                                                        <option value='0'>Admin</option>
                                                        <option value='1'>Lecturter</option>
                                                        <option value='2'>Student</option>    
                                            </select>
                                        </div>
                                        
                                    </div>
                                </form>
                            </div>
                            <div className="modal-footer">
                            <button type="button" className="btn btn-danger pull-left" data-dismiss="modal"><i className="fa fa-close"></i>Đóng </button>
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
    register: AuthActions.register,
};
const CreateUsers = connect(mapState, actionCreators)(CreateUser);
export { CreateUsers as CreateUser };