import React, { Component } from 'react';
import MainHeader from './header';
import {SideBar} from './sidebar';
// import Footer from './footer/components/footer';
import Content from './content';
import { connect } from 'react-redux';

class Layout extends Component {
    constructor(props) {
        super(props);
        this.state = {}
    }
    render() { 
        const { translate, auth } = this.props;
        return ( 
            <React.Fragment>
                <MainHeader/>
                <SideBar />
                <Content arrPage={this.props.arrPage} isLoading={this.props.isLoading} pageName="Home">{ this.props.children }</Content>
                {/* <Footer /> */}
            </React.Fragment>
         );
    }
}
 
const mapStateToProps = state => {
    return state;
}

export default connect( mapStateToProps, null )(Layout);