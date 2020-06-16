import React, { Component } from 'react';
import { connect } from 'react-redux';
import { LecturerActions } from '../redux/actions';
import { AdminActions } from '../../admin/redux/actions';




class LecClassManager extends Component {
    constructor(props) {
        super(props);
        this.state = {
            showModalEdit: "",
        };
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
    handleSearchData(event){
        event.preventDefault();
        var {idtern} = this.state;
        if(idtern !== undefined){
            this.props.getListClassofLec(localStorage.getItem("userId"), idtern);
        }
        // this.props.searchUser(role);
    }
    componentDidMount() {
        this.props.getListClassofLec(localStorage.getItem("userId"));
        this.props.getTern();
    }




    render() {
        var listClass, index = 0, listClasses = [], listTern;
        const { lecturer, admin } = this.props;
        if (admin && admin.listtern !== undefined) {
            listTern = admin.listtern;
        }
        if (lecturer && lecturer.listclassoflec !== undefined) {
            listClass = lecturer.listclassoflec;
            for (let i in listClass) {
                for (let j in listClass[i].listclass) {
                    listClasses.push(listClass[i].listclass[j]);
                }

            }
        }

        console.log("=========", listClasses);

        return (
            <React.Fragment>
                <div className="box">
                    <div className="box-body qlht">
                        <br/>
                        <div className="row">
                        <div className="form-inline">
                                <div className="form-group">
                                    <label>Học kỳ:</label>
                                    {
                                        <select
                                            name="idtern"
                                            id={`select-role`}
                                            onChange={this.handleChange}
                                            className="form-control select2">
                                                <option value='undefined'>Tất cả</option>
                                            {
                                                (listTern !== undefined)?
                                                listTern.map(item=>
                                                <option value={item._id}>{item.code}</option>
                                                    ):<option value='undefined'>Tất cả</option>
                                            }
                                        </select>
                                    }

                                </div>
                            </div>
                        
                        <div className="form-inline" style={{ margin: "10px" }}>
                                <div className="form-group">
                                    <button type="button" className="btn btn-success" onClick={(event) => this.handleSearchData(event)}>Tìm kiếm</button>
                                </div>
                            </div>
                        {/* <div style={{ "margin-left": "900px", "margin-top": "10px" }}>
                                <div className="form-group">
                        <button type="button" className="btn btn-success" onClick={() => this.handleSearchData()}>Tìm kiếm</button> */}
                        {/* <CreateClass /> */}
                        {/* </div> */}
                            {/* </div> */}
                        
                            </div>
                        <br></br>
                        <table id="example1" className="table table-bordered table-striped">
                            <thead>
                                <tr>
                                    <th title="index" style={{ width: "30px" }}>STT</th>
                                    <th title="Học kỳ">Học kỳ</th>
                                    <th title="Mã lớp">Mã lớp</th>
                                    <th title="Trạng thái">Trạng thái</th>
                                    <th title="Thời gian">Thời gian</th>
                                    <th title="Thứ">Thứ</th>
                                    <th title="Môn học">Môn học</th>
                                    <th title="Số lượng">Số lượng</th>
                                </tr>
                            </thead>
                            <tbody>

                                {
                                    (typeof listClasses.length !== 0) ?
                                        listClasses.map((item, index) =>
                                            <tr>
                                                <td style={{ width: "30px" }} >{index = index + 1}</td>
                                                <td>{item.tern.code}</td>
                                                <td>{item.code}</td>
                                                <td>{item.status == '0' ? "Chưa bắt đầu" : (item.status == '1' ? "Đang hoạt động" : "Đã kết thúc")}</td>
                                                <td>{item.day}</td>
                                                <td>{item.startDate}-{item.endDate}</td>
                                                <td>{item.subjectId.name}</td>
                                                <td>{item.slot}/{item.slotmax}</td>
                                            </tr>


                                        ) : "Không có dữ liệu"
                                }
                            </tbody>
                        </table>
                    </div>
                </div>

            </React.Fragment>
        )

    }

}

function mapState(state) {
    var { lecturer, admin } = state;
    return { lecturer, admin };
}

const actionCreators = {
    getListClassofLec: LecturerActions.getListClassofLec,
    getTern: AdminActions.getTern,
};
const connectedLecClassManager = connect(mapState, actionCreators)(LecClassManager);
export { connectedLecClassManager as LecClassManager };