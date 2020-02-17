import React, { Component } from 'react';
import { reduxForm, Field } from 'redux-form';
import { Link } from 'react-router-dom';
import _ from 'lodash';

import PostField from './PostField.js';
import formFields from './formFields.js';

class PostForm extends Component {
  renderFields() {
    return _.map(formFields, ({ label, name }) => {
      return (
        <Field
          key={name}
          component={PostField}
          type="text"
          label={label}
          name={name}
        />
      );
    });
  }

  render() {
    return (
      <div>
         <form onSubmit={this.props.handleSubmit(this.props.onPostSubmit)}>
          {this.renderFields()}
          <Link to ='/posts' className='btn-flat red white-text'>
            Cancel
          </Link>
          <button className="btn-flat right teal white-text" type="submit">
            Submit
          </button>
        </form>
      </div>
    );
  }
}

function validate(values) {
  const errors = {};
  
  _.each(formFields, ({ name }) => {
   if (!values[name]) {
    errors[name] = 'Provide a value';
   }
  });

  return errors;
}

export default reduxForm({
  validate,
  form: 'postForm',
  destroyOnUnmount: false
})(PostForm);