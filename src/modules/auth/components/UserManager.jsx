import React, { Component } from 'react';
import { connect } from 'react-redux';
import { AuthActions } from '../redux/actions';
import CreateUser from './CreateUser';



class UserManager extends Component {
    constructor(props) {
        super(props);
        this.state = {}
    }
    render() {
        return (
            <React.Fragment>
                <div className="box">
                    <div className="box-body qlht">
                        Heee
                    </div>
                    Hello, Test Thanh cong
                </div>
            <CreateUser></CreateUser>
            </React.Fragment>
        )

    }

}

function mapState(state) {

}

const actionCreators = {
};
const connectedUserManager = connect(mapState, actionCreators)(UserManager);
export { connectedUserManager as UserManager };