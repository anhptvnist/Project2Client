import React, { Component } from 'react';
import { connect } from 'react-redux';
import { AuthActions } from '../modules/auth/redux/actions';
import { LOCAL_SERVER_API } from '../env';

class Profile extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        const {auth, translate}=this.props;
        return ( 
            <li className="dropdown user user-menu">
                <a href='#abc' className="dropdown-toggle btn" data-toggle="dropdown" style={{width: '55px', height: '50px'}}>
                    {/* <img src={LOCAL_SERVER_API+auth.user.avatar} className="user-image" alt="User Avatar" /> */}
                </a>
                <ul className="dropdown-menu">
                    {/* User image */}
                    <li className="user-header">
                        {/* <img src={LOCAL_SERVER_API+auth.user.avatar} className="img-circle" alt="User Avatar" /> */}
                        <p>
                            {auth.user.name}
                            <small>{auth.user.email}</small>
                        </p>
                    </li>
                    <li className="user-footer">
                        
                        <div className="row">
                            <div style={{marginTop: '10px'}} className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
                                <a style={{ width: '100%' }} href="#modal-profile" data-toggle="modal" className="btn btn-default btn-flat"><i className="fa fa-info-circle"></i> Hồ sơ </a>
                            </div>
                            <div style={{marginTop: '10px'}} className="col-xs-12 col-sm-12 col-md-6 col-lg-6">
                                <a style={{ width: '100%' }} href="#modal-security" data-toggle="modal" className="btn btn-default btn-flat"><i className="fa fa-gear"></i> Bảo mật</a>
                            </div>
                            <div style={{marginTop: '10px'}} className="col-xs-12 col-sm-12 col-md-6 col-lg-6">
                                <button style={{ width: '100%' }} type="button" className="btn btn-default btn-flat pull-right" onClick={this.props.logout()}><i className="fa fa-sign-out"></i> Đăng xuất </button>
                            </div>
                        </div>
                    </li>
                </ul>
            </li>
         );
    }
}

const mapStateToProps = state => {
    return state;
}

const mapDispatchToProps = { 
        logout: AuthActions.logout,
        
}

export default connect(mapStateToProps, mapDispatchToProps)(Profile);