import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import { connect } from 'react-redux';

import * as actions from '../actions';
import ErrorBoundry from './ErrorBoundry.js';
import Header from './Header.js';
import Dashboard from './Dashboard.js';
import PostNew from './posts/PostNew.js';
import Landing from './Landing.js';

class App extends Component {
  componentDidMount() {
    this.props.fetchUser();
  }

  render() {
    return <div className='container'>
      <ErrorBoundry>
        <Header />
        <Switch>
          <Route exact path='/' component={Landing} />
          <Route exact path='/posts' component={Dashboard} />
          <Route path='/posts/new' component={PostNew} />
        </Switch>
      </ErrorBoundry>
    </div>
  }
};

export default connect(null, actions)(App);