import React, { Component } from 'react';
import { connect } from 'react-redux';
import { AdminActions } from '../redux/actions';
class CreateSubject extends Component {
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
    }
    handleChange(event){
        const{name, value}= event.target;
        this.setState({
            [name]: value
        });
        
    }
    handleSubmit(){
        
        // var {name, code, parent} = this.state;
        var subject= { 
            name: this.state.name,
            code: this.state.code,
            parent: this.state.parent,
            weightEndtern: this.state.weightEndtern,
            weightMidtern: parseInt(this.state.weightMidtern),
            credits: parseInt(this.state.credits)
        };
     
        if(subject !== undefined){
		    this.props.createSubject(subject);
        }
    }
    render() { 
        var {name, code, parent, weightEndtern, weightMidtern, credits} = this.state;
        this.state.weightEndtern = 100 - this.state.weightMidtern;
        const {} = this.props;
        var listSubjects, role;
        const {admin}=this.props;
        if(admin && admin.subjects !== undefined){
            listSubjects=admin.subjects
        }
        //  console.log("=========", this.state.parent);
        
        return ( 
            <React.Fragment>
                <a className="btn btn-primary" data-toggle="modal" href="#modal-id">Thêm học phần</a>
                <div className="modal fade" id="modal-id">
                    <div className="modal-dialog modal-department">
                        <div className="modal-content">
                            <div className="modal-header">
                            <h4 className="modal-title">Thêm học phần</h4>
                            </div>
                            <div className="modal-body">
                                <form style={{ marginBottom: '20px' }}>
                                    <div className="row">
                                        <div className="form-group col-sm-12">
                                            <label>Tên học phần</label>
                                            <input type="text" className="form-control" name="name" onChange={this.handleChange}/><br/>
                                        </div>
                                        <div className="form-group col-sm-12">
                                            <label>Mã học phần</label>
                                            <input type="text" className="form-control" name="code" onChange={this.handleChange}/><br/>
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
                                            <label>Trọng số giữa kỳ</label>
                                            <input type="number" className="form-control" name="weightMidtern"  min="1" max="100" onChange={this.handleChange}/><br/>
                                        </div>    
                                        <div className="form-group col-sm-12">
                                                <label>Trọng số cuối kỳ:</label> &nbsp;
                                                    {
                                                         (this.state.weightMidtern !== undefined) ?
                                                         this.state.weightEndtern:" Chưa thiết lập trọng số giữa kỳ"
                                                     
                                                     }   
                                                   
                                            <br/>
                                        </div> 
                                        <div className="form-group col-sm-12">
                                            <label>Số tín chỉ</label>
                                            <input type="number" className="form-control" name="credits"  min="1" max="5" onChange={this.handleChange}/><br/>
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
    createSubject: AdminActions.createSubject,
    getSubjects: AdminActions.getSubjects,
};
const ConnectCreateSubject = connect(mapState, actionCreators)(CreateSubject);
export { ConnectCreateSubject as CreateSubject };