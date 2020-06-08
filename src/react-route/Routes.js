import React, { Component } from 'react';
import { Route,Switch } from 'react-router-dom';
import { connect } from 'react-redux';
import Login from '../modules/auth/components/login';
import Home from '../modules/home/index';
import { PrivateRoute, AuthRoute } from './CombineRoutes';
import Layout from '../layout/layout';
import { UserManager } from '../modules/auth/components/UserManager';
const privatePage = [                                                                                   
    { path: '/', exact: true, component: () => <Home/> },
    { path: '/home', exact: true, component: () => <Home/> },
    { path: '/usermanager', exact: true, component: () => <UserManager/>}
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