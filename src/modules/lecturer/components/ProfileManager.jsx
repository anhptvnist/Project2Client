import React, { Component } from 'react';
import { connect } from 'react-redux';
import { AdminActions } from '../../admin/redux/actions';
import { EditProfile } from './EditProfile';

class ProfileManager extends Component {
    constructor(props) {
        super(props);
        this.state = {};
        this.handleChange = this.handleChange.bind(this);
        // this.handleSearchData =this.handleSearchData.bind(this);
    }
    handleChange(event) {
        const { name, value } = event.target;
        this.setState({
            [name]: value
        });

    }
    formatDate(date) {
        var d = new Date(date),
            month = '' + (d.getMonth() + 1),
            day = '' + d.getDate(),
            year = d.getFullYear();

        if (month.length < 2)
            month = '0' + month;
        if (day.length < 2)
            day = '0' + day;

        return [day, month, year].join('-');
    }

    componentWillMount() {
        this.props.getProfile(localStorage.getItem("userId"));
    }


    render() {
        var profile;
        const { admin } = this.props;
        if (admin && admin.profile !== undefined) {
            profile = admin.profile
        }
        console.log("profile", profile)

        return (
            <React.Fragment>
                <div className="box">
                    <div className="box-body qlht">
                        <div className="row">
                            <div className="col-12">
                                <div className="text-center" >
                                    <h1>Hồ sơ cá nhân</h1>
                                </div>
                                <hr />
                            </div>
                        </div>
                        <div className="col-6">
                            <div style={{ "padding-left": "20px" }}>
                                <div className="row" >
                                    <label>Họ và tên:</label> &nbsp;
                                <label>{
                                        (profile !== undefined) ?
                                            profile.userId.name : "Đang load"

                                    }</label>
                                </div>

                                <div className="row">
                                    <label>Ngày sinh:</label> &nbsp;
                                <label>{
                                        (profile !== undefined) ?
                                            this.formatDate(profile.birth) : "Đang load"
                                    }</label>
                                </div>
                                <div className="row">
                                    <label>Chức vụ:</label> &nbsp;
                                <label>Giảng viên</label>
                                </div>
                                <div className="row">
                                    <label>Trình độ:</label> &nbsp;
                                <label>{
                                        (profile !== undefined) ?
                                            profile.degree : "Đang load"
                                    }</label>
                                </div>
                                <div className="row">
                                    <label>Khoa/Viện:</label> &nbsp;
                                <label>{
                                        (profile !== undefined) ?
                                            profile.parent.parent : "Đang load"
                                    }</label>
                                </div>
                                <div className="row">
                                    <label>Email:</label> &nbsp;
                                <label>{
                                        (profile !== undefined) ?
                                            profile.userId.email : "Đang load"
                                    }</label>
                                </div>
                                <div className="row">
                                    <label>Số điện thoại:</label> &nbsp;
                                <label>{
                                        (profile !== undefined) ?
                                            profile.phone : "Đang load"
                                    }</label>
                                </div>
                            </div>
                        </div>
                    </div>
                    <hr/>
                    <div style={{"margin-left": "900px"}}>
                        <EditProfile/>
                    </div>
                </div>
            </React.Fragment>
        )

    }

}

function mapState(state) {
    var { auth, admin } = state;
    return { auth, admin };
}

const actionCreators = {
    getProfile: AdminActions.getProfile,
};
const connectedProfileManager = connect(mapState, actionCreators)(ProfileManager);
export { connectedProfileManager as ProfileManager };