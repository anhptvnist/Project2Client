import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';


class Item extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }
    render() { 
        const { name, path, icon, translate, pending=false } = this.props;
        return ( 
            <li className={ window.location.pathname === path ? "active" : "" }>
                <Link to={ path }>
                    <i className={ icon } /> <span>{name}</span>
                    {
                        pending && <span className="label label-warning" title="trial - chưa đưa vào hoạt động">trial</span>
                    }
                </Link>
            </li>
        );
    }
}
 
 
const mapStateToProps = state => {
    return state;
}

export default connect( mapStateToProps, null )(Item);