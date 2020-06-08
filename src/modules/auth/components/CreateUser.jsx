import React, { Component } from 'react';

class CreateUser extends Component {
    constructor(props) {
        super(props);
        this.state = {}
    }
    render() { 
        const {inputChange} = this.props;
        return ( 
            <React.Fragment>
                <a className="btn btn-success" data-toggle="modal" href="#modal-id"><i className="fas fa-plus"/>Tạo tài khoản</a>
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
                                            <input type="text" className="form-control" name="name" onChange={ inputChange }/><br/>
                                        </div>
                                        <div className="form-group col-sm-12">
                                            <label>Email</label>
                                            <input type="email" className="form-control" name="email" onChange={ inputChange }/><br/>
                                        </div>
                                        <div className="form-group col-sm-12">
                                            <label>Password</label>
                                            <input type="password" className="form-control" name="password" onChange={ inputChange }/><br/>
                                        </div>
                                        <div className="form-group col-sm-12">
                                            <label>Vai trò</label>
                                            <select 
                                                className="form-control" 
                                                style={{width: '100%'}} 
                                                name="role" 
                                                onChange={inputChange}>  
                             
                                                        <option value='0'>Admin</option>
                                                        <option value='1'>Lecturter</option>
                                                        <option value='2'>Student</option>    
                                                    
                                                
                                            </select>
                                        </div>
                                        
                                    </div>
                                </form>
                            </div>
                            <div className="modal-footer">
                            <button type="button" className="btn btn-danger pull-left" data-dismiss="modal"><i className="fa fa-close"></i> x</button>
                            <button type="button" className="btn btn-primary"  data-dismiss="modal"><i className="fa fa-save"></i> Lưu</button>
                            </div>
                        </div>
                    </div>
                </div>
            </React.Fragment>
         );
    }
}
 
export default CreateUser;