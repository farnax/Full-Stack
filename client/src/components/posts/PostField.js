import React from 'react';

export default ({ input, label, meta: { error, touched } }) => {
  return <div>
    <label>{label}</label>
    <input {...input} />
    <div className="red-text" style={{marginBottom: '20px', fontWeight: 'bold'}}>
      {touched && error}
    </div>
  </div>
};