import React from 'react';

import Payments from './Payments.js';

const AcconutPannel = () => {
  return (
    <ul id='nav-mobile' className='right'>
      <Payments />
      <li>
        <a href='/api/logout'>Logout</a>
      </li>
    </ul>
  );
};

export default AcconutPannel;