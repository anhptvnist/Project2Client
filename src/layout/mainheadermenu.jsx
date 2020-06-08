import React, { Component } from 'react';
import { connect } from 'react-redux';
import { AuthActions } from '../modules/auth/redux/actions';
// import "./MainHeaderMenu.css";


class MainHeaderMenu extends Component {

    constructor(props) {
        super(props);
        this.state = {
            currentRole: localStorage.getItem('currentRole'),
            timer: {
                task: this.props.id,
                startTimer: "",
                stopTimer: null,
                user: localStorage.getItem("id"),
                time: 0,
            },
            startTimer: false,
            pauseTimer: false,

        }
        this.clickButton = this.clickButton.bind(this);
        this.selectHandle = this.selectHandle.bind(this);
    }
    convertTime = (duration) => {
        // var milliseconds = parseInt((duration % 1000) / 100),
        var seconds = Math.floor((duration / 1000) % 60),
            minutes = Math.floor((duration / (1000 * 60)) % 60),
            hours = Math.floor((duration / (1000 * 60 * 60)) % 24);

        hours = (hours < 10) ? "0" + hours : hours;
        minutes = (minutes < 10) ? "0" + minutes : minutes;
        seconds = (seconds < 10) ? "0" + seconds : seconds;

        return hours + ":" + minutes + ":" + seconds;
    }
    componentDidMount() {
        // this.props.getRoles();
        // this.createJS();
    }
    // createJS = () => {
    //     window.$(".modal-content").on("mousedown", function (mousedownEvt) {
    //         var $draggable = window.$(this);
    //         var x = mousedownEvt.pageX - $draggable.offset().left,
    //             y = mousedownEvt.pageY - $draggable.offset().top;
    //         window.$("body").on("mousemove.draggable", function (mousemoveEvt) {
    //             $draggable.closest(".modal-dialog").offset({
    //                 "left": mousemoveEvt.pageX - x,
    //                 "top": mousemoveEvt.pageY - y
    //             });
    //         });
    //         window.$("body").one("mouseup", function () {
    //             window.$("body").off("mousemove.draggable");
    //         });
    //         $draggable.closest(".modal").one("bs.modal.hide", function () {
    //             window.$("body").off("mousemove.draggable");
    //         });
    //     });
    // }
    selectHandle(e) {
        this.setState({ currentRole: e.target.value });
        localStorage.setItem('currentRole', e.target.value);
        // this.props.getLinkOfRole();
        // window.location.reload();
    }

    clickButton() {
        console.log("click i18n")
    }

    render() {
        var currentTimer;
        const { auth, user, translate, performtasks } = this.props;
        const { currentRole, pauseTimer, startTimer } = this.state;
        const { time } = this.state.timer;
        // if (typeof performtasks.currentTimer !== "undefined") currentTimer = performtasks.currentTimer;
        return (
            <div className="navbar-custom-menu">
                <ul className="nav navbar-nav">
                    <li>
                       
                    </li>
                    <li className="dropdown user user-menu">
                        <a href="#abc" className="dropdown-toggle" data-toggle="dropdown">
                            <img src="dist/img/user2-160x160.jpg" className="user-image" alt="User Avatar" />
                            <span className="hidden-xs"> {auth.name}</span>
                        </a>
                        <ul className="dropdown-menu">
                            {/* User image */}
                            <li className="user-header">
                                <img src="dist/img/user2-160x160.jpg" className="img-circle" alt="User Avatar" />
                                <p>
                                    {auth.name}
                                    <small>{auth.email}</small>
                                </p>
                            </li>
                            <li className="user-footer">
                                <div className="row">
                                    <div className="col-sm-6">
                                        <a href="#abc" className="btn btn-default btn-flat">Hồ sơ</a>
                                    </div>
                                    <div className="col-sm-6">
                                        <button type="button" className="btn btn-default btn-flat" onClick={this.props.logout}>Đăng xuất</button>
                                    </div>
                                </div>
                            </li>
                        </ul>
                    </li>
                   
                    
                </ul>
                
            </div>
        );
    }
}
const mapStateToProps = state => {
    return state;
}

const mapDispatchToProps = { 
        logout: AuthActions.logout,
        
}

export default connect(mapStateToProps, mapDispatchToProps)(MainHeaderMenu);
