import React, { Component } from 'react';
import Item from './item';
// import { getLinkOfRole } from '../../../redux-actions/User/User.action';
import { connect } from 'react-redux';
import { AuthActions } from '../modules/auth/redux/actions';



const menu = [
    {
        name: 'user',
        path: '/admin/user',
        icon: 'fa fa-users'
    }, {
        name: 'department',
        path: '/admin/department',
        icon: 'fa fa-building'
    }, {
        name: 'resource',
        path: '/admin/resource',
        icon: 'fa fa-file'
    }, {
        name: 'role',
        path: '/admin/role',
        icon: 'fa fa-key'
    }, {
        name: 'tasktemplate',
        path: '/task-template',
        icon: 'fa fa-tasks'
    }, {
        name: 'kpimember',
        path: '/kpi-member/overview',
        icon: 'fa fa-tasks'
    }, {
        name: 'cocautochuc',
        path: '/cocautochuc',
        icon: 'fa fa-th'
    }, {
        name: 'reporttask',
        path: '/task-report',
        icon: 'fa fa-th'
    }
];

class SideBar extends Component {
    constructor(props) {
        super(props);
        this.state = {
            currentRole: localStorage.getItem("role"),
            myname: localStorage.getItem("name"),
        }
    }
    componentDidMount() {
        // if (localStorage.getItem('currentRole')) {
        //     this.props.getLinkOfRole();
        // }
        // this.props.getUserByID(localStorage.getItem("userId"));
    }

    checkURL = (url) => {
        var result = true;
        return result;
    }

    render() {
        const { auth } = this.props;
        return (
            <React.Fragment>
                <aside className="main-sidebar sidebar-dark-primary elevation-4" style={{position: 'fixed'}}>
                    <section className="sidebar">
                        {/* Sidebar user panel */}
                        <div className="user-panel mt-3 pb-3 mb-3 d-flex">
                            <div className="image">
                                <img src="dist/img/user2-160x160.jpg" class="img-circle elevation-2" alt="User Image" />
                            </div>
                            <div className="info">
                                <a href="#" className="d-block">{this.state.myname}</a>
                                <a href="#abc"><i className="fa fa-circle text-success" /> Online</a>
                            </div>

                        </div>
                        {/* search form */}
                        <form action="#" method="get" className="sidebar-form">
                            <div className="input-group">
                                <input type="text" name="q" className="form-control" />
                                <span className="input-group-btn">
                                    <button type="submit" name="search" id="search-btn" className="btn btn-primary"><i className="fa fa-search" />
                                    </button>
                                </span>
                            </div>
                        </form>
                        <nav className="mt-2">
                            <ul className="nav nav-pills nav-sidebar flex-column" data-widget="treeview" role="menu" data-accordion="false">
                                <li className="text-white text-center">MENU</li>
                                <li>
                                    {/* <a href="/">
                                    <i className="" /> <span>Home</span> 
                                </a> */}
                                </li>
                                {/* {
                                typeof (user.links) !== 'undefined' ?
                                    (
                                        user.links.map(link => (
                                            menu.map(item =>
                                                (link.resource.url === item.path) ?
                                                    <Item
                                                        key={item.name}
                                                        name="Hello"
                                                        path={item.path}
                                                        icon={item.icon}
                                                    /> : null
                                            )
                                        ))
                                    ) : null
                            } */}
                                {
                                    this.state.currentRole == "0" &&
                                    <div>
                                        <li className="nav-item has-treeview">
                                            <a href="#abc" className="nav-link">
                                                <i className="nav-icon fa fa-users" /> <p>
                                                    Quản lý người dùng
                                        <i className="right fas fa-angle-left"></i>
                                                </p>

                                            </a>
                                            <ul className="nav nav-treeview">
                                                <li className="nav-item"><a href="/usermanager" className="nav-link">Quản lý người dùng</a></li>
                                                {/* <li className="nav-item"><a href="/task-management" className="nav-link">Dashboard</a></li> */}
                                            </ul>
                                        </li>

                                        <li class="nav-item has-treeview">
                                            <a href="#" class="nav-link">
                                                <i class="nav-icon fas fa-copy"></i> <p>
                                                    Quản lý học tập
                                        <i class="fas fa-angle-left right"></i>
                                                </p>
                                            </a>
                                            <ul class="nav nav-treeview">

                                                <li class="nav-item">
                                                    <a href="/subjectsmanager" class="nav-link">
                                                        <i class="far fa-circle nav-icon"></i>
                                                        <p>Quản lý bộ môn</p>
                                                    </a>
                                                </li>
                                                <li class="nav-item">
                                                    <a href="/subjectmanager" class="nav-link">
                                                        <i class="far fa-circle nav-icon"></i>
                                                        <p>Quản lý học phần</p>
                                                    </a>
                                                </li>
                                                <li class="nav-item">
                                                    <a href="/classmanager" class="nav-link">
                                                        <i class="far fa-circle nav-icon"></i>
                                                        <p>Danh sách lớp học</p>
                                                    </a>
                                                </li>
                                                <li class="nav-item">
                                                    <a href="/ternmanager" class="nav-link">
                                                        <i class="far fa-circle nav-icon"></i>
                                                        <p>Danh sách kỳ học</p>
                                                    </a>
                                                </li>
                                            </ul>
                                        </li>

                                        <li className="nav-item has-treeview">
                                            <a href="#abc" className="nav-link">
                                                <i className="nav-icon fa fa-calendar" /> <p>
                                                    Quản lý đăng ký
                                        <i className="right fas fa-angle-left"></i>
                                                </p>

                                            </a>
                                            <ul className="nav nav-treeview">
                                                <li className="nav-item"><a href="/sessionmanager" className="nav-link">Quản lý phiên đăng ký</a></li>
                                                <li className="nav-item"><a href="/assignment" className="nav-link">Phân công giảng dạy</a></li>
                                                {/* <li className="nav-item"><a href="/task-management" className="nav-link">Dashboard</a></li> */}
                                            </ul>
                                        </li>
                                    </div>
                                }
                                {/* Test */}

                                {
                                    (this.state.currentRole == '1') &&
                                    <div>
                                        <li className="nav-item has-treeview">
                                            <a href="#abc" className="nav-link">
                                                <i className="nav-icon fa fa-user" /> <p>
                                                    Hồ Sơ
                                        <i className="right fas fa-angle-left"></i>
                                                </p>

                                            </a>
                                            <ul className="nav nav-treeview">
                                                <li className="nav-item"><a href="/profile" className="nav-link">Hồ sơ cá nhân</a></li>
                                                {/* <li className="nav-item"><a href="/task-management" className="nav-link">Dashboard</a></li> */}
                                            </ul>
                                        </li>
                                        <li className="nav-item has-treeview">
                                            <a href="#abc" className="nav-link">
                                                <i className="nav-icon fas fa-copy" /> <p>
                                                    Quản lý học tập
                                <i className="right fas fa-angle-left"></i>
                                                </p>

                                            </a>
                                            <ul className="nav nav-treeview">
                                                <li className="nav-item"><a href="/lecturermanager" className="nav-link">Danh sách lớp học</a></li>
                                                <li className="nav-item"><a href="/assignment" className="nav-link">Nhập điểm</a></li>
                                                {/* <li className="nav-item"><a href="/task-management" className="nav-link">Dashboard</a></li> */}
                                            </ul>
                                        </li>
                                    </div>
                                }

{
                                    (this.state.currentRole == '2') &&
                                    <div>
                                        <li className="nav-item has-treeview">
                                            <a href="#abc" className="nav-link">
                                                <i className="nav-icon fa fa-user" /> <p>
                                                    Hồ Sơ
                                        <i className="right fas fa-angle-left"></i>
                                                </p>

                                            </a>
                                            <ul className="nav nav-treeview">
                                                <li className="nav-item"><a href="/profile" className="nav-link">Hồ sơ cá nhân</a></li>
                                                {/* <li className="nav-item"><a href="/task-management" className="nav-link">Dashboard</a></li> */}
                                            </ul>
                                        </li>
                                        <li className="nav-item has-treeview">
                                            <a href="#abc" className="nav-link">
                                                <i className="nav-icon fas fa-copy" /> <p>
                                                    Quản lý học tập
                                <i className="right fas fa-angle-left"></i>
                                                </p>

                                            </a>
                                            <ul className="nav nav-treeview">
                                                <li className="nav-item"><a href="/registerclass" className="nav-link">Đăng ký lớp</a></li>
                                                <li className="nav-item"><a href="/assignment" className="nav-link">Kết quả học tập</a></li>
                                                <li className="nav-item"><a href="/assignment" className="nav-link">Danh sách lớp</a></li>
                                                {/* <li className="nav-item"><a href="/task-management" className="nav-link">Dashboard</a></li> */}
                                            </ul>
                                        </li>
                                    </div>
                                }
                                {/* End Test */}

                            </ul>
                        </nav>
                    </section>
                </aside>
            </React.Fragment>
        );
    }
}

function mapState(state) {
    var { auth } = state;
    return { auth };
}


const actionCreators = {
    getUserByID: AuthActions.getUserByID,
};
const connectedSideBar = connect(mapState, actionCreators)(SideBar);
export { connectedSideBar as SideBar };