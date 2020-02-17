import { handleActions } from 'redux-actions';

import { FETCH_USER } from '../actions/types.js';

export const authReducer = handleActions(
  {
    [FETCH_USER]: (state, action) => ({
      ...state,
      auth: action.payload || false
    })
  }, 
  { auth: null }
);

