import React, { Component } from 'react';
import { connect } from 'react-redux';
import { AdminActions } from '../../admin/redux/actions';
import { LecturerActions } from '../redux/actions';
import profile from '../../../layout/profile';
class EditProfile extends Component {
    constructor(props) {
        super(props);
        this.state = {
            subjects:{}
        }
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit =this.handleSubmit.bind(this);
    }
    componentDidMount(){
        this.props.getSubjects();
        this.props.getProfile(localStorage.getItem("userId"));
    }
    handleChange(event){
        const{name, value}= event.target;
        this.setState({
            [name]: value
        });
        
    }
    handleSubmit(){
        
        // var {name, code, parent} = this.state;
        var profile= { 
            id : localStorage.getItem("userId"),
            parent: this.state.parent,
            phone: this.state.phone,
            birth: this.state.birth,
            degree: this.state.degree,
        };
     
        if(profile !== undefined){
		    this.props.editProfile(profile);
        }
    }
    render() { 
        var {phone, birth, degree, parent} = this.state;
        var oldprofile;
        const { admin } = this.props;
        if (admin && admin.profile !== undefined) {
            oldprofile = admin.profile
        }
        var listSubjects;
        if(admin && admin.subjects !== undefined){
            listSubjects=admin.subjects
        }
        //  console.log("=========", this.state.parent);
        
        return ( 
            <React.Fragment>
                <a className="btn btn-primary" data-toggle="modal" href="#modal-id" style={{"margin-bottom":"15px"}}>Sửa thông tin cá nhân</a>
                <div className="modal fade" id="modal-id">
                    <div className="modal-dialog modal-department">
                        <div className="modal-content">
                            <div className="modal-header">
                            <h4 className="modal-title">Sửa thông tin cá nhân</h4>
                            </div>
                            <div className="modal-body">
                                <form style={{ marginBottom: '20px' }}>
                                    <div className="row">
                                        <div className="form-group col-sm-12">
                                            <label>Ngày sinh</label>
                                            {
                                        (profile !== undefined) ?
                                        <div><input type="date" className="form-control" defaultValue={profile.birth} name="birth" onChange={this.handleChange}/><br/></div>: "Đang load"
                                    }
                                            
                                        </div>
                                        <div className="form-group col-sm-12">
                                            <label>Số điện thoại</label>
                                            {
                                        (profile !== undefined) ?
                                        <div><input type="text" className="form-control" defaultValue={profile.phone||''} name="phone" onChange={this.handleChange}/><br/></div>: "Đang load"
                                    }
                                        </div>
                                        <div className="form-group col-sm-12">
                                            <label>Bộ môn</label>
                                            <select 
                                                className="form-control" 
                                                style={{width: '100%'}} 
                                                name="parent"
                                                onChange={this.handleChange}>
                                                    {  (typeof listSubjects !== "undefined" && listSubjects.length !== 0) ?
                                                        listSubjects.map((item) =>
                                                        <option value={item._id}>{item.name}</option>):<option value='null'>Chưa có bộ môn nào</option>
                                                    
                                                    }   
                                            </select>
                                        </div> 
                                        <div className="form-group col-sm-12">
                                            <label>Trình độ</label>
                                            <input type="text" className="form-control" name="degree"  onChange={this.handleChange}/><br/>
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
    var { auth, admin } = state;
    return { auth, admin };
}

const actionCreators = {
    editProfile: AdminActions.editProfile,
    getProfile: AdminActions.getProfile,
    getSubjects: AdminActions.getSubjects,
};
const ConnectEditProfile = connect(mapState, actionCreators)(EditProfile);
export { ConnectEditProfile as EditProfile };