import axios from 'axios';

// Action types
export const FETCH_MOTORBIKES_REQUEST = 'FETCH_MOTORBIKES_REQUEST';
export const FETCH_MOTORBIKES_SUCCESS = 'FETCH_MOTORBIKES_SUCCESS';
export const FETCH_MOTORBIKES_FAILURE = 'FETCH_MOTORBIKES_FAILURE';

// Action creators
export const fetchMotorbikesRequest = () => ({
  type: FETCH_MOTORBIKES_REQUEST,
});

export const fetchMotorbikesSuccess = (motorbikes) => ({
  type: FETCH_MOTORBIKES_SUCCESS,
  payload: motorbikes,
});

export const fetchMotorbikesFailure = (error) => ({
  type: FETCH_MOTORBIKES_FAILURE,
  payload: error,
});

// Async action to fetch motorbikes
export const fetchMotorbikes = () => (dispatch) => {
  dispatch(fetchMotorbikesRequest());
  axios
    .get('http://127.0.0.1:4000/api/v1/motorbikes')
    .then((response) => {
      const motorbikes = response.data;
      dispatch(fetchMotorbikesSuccess(motorbikes));
    })
    .catch((error) => {
      dispatch(fetchMotorbikesFailure(error.message));
    });
};
