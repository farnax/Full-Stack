import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router'
import _ from 'lodash';

import * as actions from '../../actions';
import formFields from './formFields.js';

const PostFormReview = ({ onCancel, formValues, sendPost, history }) => {
  const reviewFields = _.map(formFields, ({ label, name }) => {
    return (
      <div key={name}>
        <label>{label}</label>
        <div>
          {formValues[name]}
        </div>
      </div>
    );
  });

  return (
    <div>
      <h5>Confirm you Post info</h5>
      {reviewFields}
      <button 
        className="btn-flat yellow darken-2 white-text" 
        onClick={onCancel}>
        Back
      </button>
      <button 
        className="btn-flat right teal white-text"
        onClick={() => sendPost(formValues, history)}>
        Send Post
      </button>
    </div>
  );
};

const mapStateToProps = ({ form }) => {
  return { formValues: form.postForm.values };
};

export default connect(mapStateToProps, actions)(withRouter(PostFormReview));