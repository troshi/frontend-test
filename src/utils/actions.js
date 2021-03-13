import axios from 'axios';
import { SET_REDDIT_POSTS } from './actionTypes';

export function fetchRedditPosts() {
  return function(dispatch) {
    return axios.get("https://www.reddit.com/r/memes/top.json")
      .then(({ data }) => {
        dispatch(setRedditPosts(data));
      })
      .catch(error => {
        throw(error);
      });
  };
}

function setRedditPosts(data) {
  return {
    type: SET_REDDIT_POSTS,
    payload: data
  };
}
