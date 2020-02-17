import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

import Payments from './Payments.js';
import AccounPannel from './AccountPannel.js';

const Header = ({ auth, items }) => {
  return (
    <nav>
      <div className="nav-wrapper purple darken-2">
        <Link to={auth ? "/posts" : "/"} className="left brand-logo" style={{paddingLeft: '10px'}}>
          Sasha
        </Link>
        <ul className="right">
          { 
            items.map((item, index) => {
              return <li key={index}>
                {item}
              </li>
            }) 
          }
        </ul>
      </div>
    </nav>
  );
};

const loginPannel = [
  <a href="/auth/google">Login with Google</a>,
  <a href="/auth/facebook">Login with Facebook</a>
];

const accountPannel = [
  <Payments />,
  <a href='/api/logout'>Logout</a>
];

class HeaderContainer extends Component {
  render() {
    const auth = this.props.auth;
    
    switch (this.props.auth) {
      case null: 
        return <Header items={loginPannel}/>;
      case false:
        return <Header items={loginPannel}/>;
      default:
        return <Header auth={auth} items={accountPannel} />; 
    }
  }
}

const mapStateToProps = ({ auth }) => auth;

export default connect(mapStateToProps)(HeaderContainer);