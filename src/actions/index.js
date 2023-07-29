import axios from 'axios';
import { SAVE_COMMENT, FETCH_COMMENTS, CHANGE_AUTH } from 'actions/types';

// saveComment action creator
export function saveComment(comment) {
  return {
    type: SAVE_COMMENT,
    payload: comment,
  };
}

// fetchComments action creator
export function fetchComments() {
  const response = axios.get('https://jsonplaceholder.typicode.com/comments');

  return {
    type: FETCH_COMMENTS,
    payload: response,
  };
}

// changeAuth action creator
export function changeAuth(isLoggedIn) {
  return {
    type: CHANGE_AUTH,
    payload: isLoggedIn,
  };
}
