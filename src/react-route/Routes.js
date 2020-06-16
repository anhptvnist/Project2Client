import React, { Component } from 'react';
import { Route,Switch } from 'react-router-dom';
import { connect } from 'react-redux';
import Login from '../modules/auth/components/login';
import Home from '../modules/home/index';
import { PrivateRoute, AuthRoute } from './CombineRoutes';
import Layout from '../layout/layout';
import { UserManager } from '../modules/auth/components/UserManager';
import {SubjectsManager}  from '../modules/admin/components/SubjectsManager';
import {SubjectManager}  from '../modules/admin/components/SubjectManager';
import {TernManager}  from '../modules/admin/components/TernManager';
import {ProfileManager} from '../modules/lecturer/components/ProfileManager';
import {SessionManager} from '../modules/admin/components/SessionManager';
import {ClassManager} from '../modules/admin/components/ClassManager';
import {Assignment} from '../modules/admin/components/Assignment';
import {LecClassManager} from '../modules/lecturer/components/LecClassManager';
import {RegisterClass} from '../modules/student/components/RegisterClass';
const privatePage = [                                                                                   
    { path: '/', exact: true, component: () => <Home/> },
    { path: '/home', exact: true, component: () => <Home/> },
    { path: '/usermanager', exact: true, component: () => <UserManager/>},
    { path: '/subjectsmanager', exact: true, component: () => <SubjectsManager/>},
    { path: '/subjectmanager', exact: true, component: () => <SubjectManager/>},
    { path: '/ternmanager', exact: true, component: () => <TernManager/>},
    { path: '/profile', exact: true, component: () => <ProfileManager/>},
    { path: '/sessionmanager', exact: true, component: () => <SessionManager/>},
    { path: '/classmanager', exact: true, component: () => <ClassManager/>},
    { path: '/assignment', exact: true, component: () => <Assignment/>},
    { path: '/lecturermanager', exact: true, component: () => <LecClassManager/>},
    { path: '/registerclass', exact: true, component: () => <RegisterClass/>},

]
class Routes extends Component{
    render(){
        const { auth} = this.props;
        return(
        <React.Fragment>
                    <AuthRoute auth={ auth } exact path="/login" component={Login} />
                    {
                    privatePage.map( page => (
                        <PrivateRoute 
                            key={ page.path }
                            auth={ auth }
                            exact={ page.exact }
                            path={ page.path } 
                            layout={ Layout } 
                            component={ page.component } 
                        />
                    ))
                    }
        </React.Fragment>
        )
    }
};


const mapStateToProps = state => {
    return state;
};

export default connect(mapStateToProps, null)(Routes);