
import logo from './logo.svg';
import './App.css';
import React, { Component } from 'react';
import { Router } from "react-router-dom";
import { createBrowserHistory } from 'history';
import Routes from './react-route/Routes';
import store from './redux/store';


const history = createBrowserHistory();
class App extends Component {
  constructor(props) {
      super(props);
      this.state = { }
  }
  componentDidMount() {
     
  }
  render() {
      return (
          <React.Fragment>
              <Router history={history} >
                  <Routes/>
              </Router>
          </React.Fragment>
      );
  }
}
export default App;