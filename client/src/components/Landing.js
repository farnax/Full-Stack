import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

class Landing extends Component {
  render() {
    let button;
    if (this.props.auth) {
      button = [
        <Link to="/posts" key='2'>
          <button className='btn purple darken-2'>See posts</button>
        </Link>
      ];
    } else button = false;

    return (
      <div>
        <h1 style={{ fontSize: "2.5rem" }} key='1'>
          Welcome to our 'Tell us about you afraid of'service!
        </h1>
        {button}
      </div>
    );
  }
}
const mapStateToProps = ({ auth }) => auth;

export default connect(mapStateToProps)(Landing);