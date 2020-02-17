import { handleActions } from 'redux-actions';

import { FETCH_POSTS } from '../actions/types.js';

export const postsReducer = handleActions(
  {
    [FETCH_POSTS]: (state, action) => ({
      ...state,
      posts: action.payload
    })
  }, 
  { posts: [] }
);