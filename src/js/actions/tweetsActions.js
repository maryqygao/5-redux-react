import axios from 'axios';
import store from '../store';

const tweetsActions = 1;

const fetchTweets = function() {
  store.dispatch(dispatch => {
    dispatch({
      type: 'FETCH_TWEETS',
      payload: axios.get('http://rest.learncode.academy/api/wstern/tweets')
    }).catch(err => {
      console.error('Fetch tweets failed!', err);
    });
  });
};

const addTweet = function(newTweet) {
  store.dispatch({ type: 'ADD_TWEET', payload: newTweet });
};

const updateTweet = function(id, text) {
  store.dispatch({ type: 'UPDATE_TWEET', payload: { id, text } });
};

const deleteTweet = function(id) {
  store.dispatch({ type: 'DELETE_TWEET', payload: id });
};

export default tweetsActions;
