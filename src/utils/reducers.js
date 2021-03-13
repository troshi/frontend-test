import { SET_REDDIT_POSTS } from './actionTypes';

// eslint-disable-next-line import/no-anonymous-default-export
export default function (state = [], action) {
  switch (action.type) {
    case SET_REDDIT_POSTS:
      return {
        ...state,
        posts: action.data,
      };
    default:
      return state;
  }
}
