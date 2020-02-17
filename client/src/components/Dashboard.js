import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

import PostsList from './posts/PostsList.js';

const Dashboard = ({ auth }) => {
  const button = (
    <div className="fixed-action-btn">
      <Link to="posts/new" className="btn-floating btn-large purple darken-2 pulse">
        <i className="material-icons">add</i>
      </Link>
    </div>
  );

  if (auth === null || auth === false) return false;
  else {
    return <div>
      <p style={{padding: '10px', fontSize: '1.5rem'}}>You can add New Post {auth.credits} times.</p>
      <PostsList />
      {auth!==null && auth.credits>=1  ? button : false}
    </div>
  }
}

const mapStateToProps = ({ auth }) => auth;

export default connect(mapStateToProps)(Dashboard);


