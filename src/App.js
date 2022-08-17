import React, { Component } from 'react';
import { connect } from 'react-redux';
import { BrowserRouter as Router } from 'react-router-dom';

import BaseRouter from './route';
import * as actions from './store/actions/auth';
import CustomLayout from './components/Layout';
import { ToastContainer } from 'react-toastify';

import './css/body.css';
import './css/heading.css';
import './css/styles.css';
import 'react-toastify/dist/ReactToastify.css';
import 'react-multi-carousel/lib/styles.css';
//import firebase  from './firebase'

class App extends Component {
  componentDidMount() {
    this.props.onTryAutoSignup();
  }

  render() {
    return (
      <div >
        <Router>
          <CustomLayout {...this.props}>
            <BaseRouter />
            <ToastContainer autoClose={3000} />
          </CustomLayout>
        </Router>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    isAuthenticated: state.auth.token !== null
  }
}

const mapDispatchToProps = dispatch => {
  return {
    onTryAutoSignup: () => dispatch(actions.authCheckState())
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
