import axios from 'axios';

export const ADD_MOTORBIKE_REQUEST = 'ADD_MOTORBIKE_REQUEST';
export const ADD_MOTORBIKE_SUCCESS = 'ADD_MOTORBIKE_SUCCESS';
export const ADD_MOTORBIKE_FAILURE = 'ADD_MOTORBIKE_FAILURE';

export const addMotorbikeRequest = () => ({
  type: ADD_MOTORBIKE_REQUEST,
});

export const addMotorbikeSuccess = (motorbike) => ({
  type: ADD_MOTORBIKE_SUCCESS,
  payload: motorbike,
});

export const addMotorbikeFailure = (error) => ({
  type: ADD_MOTORBIKE_FAILURE,
  payload: error,
});

export const addMotorbike = (motorbikeData, userId) => (dispatch) => {
  dispatch(addMotorbikeRequest());
  // Make a POST request to your backend API to add the motobike
  const updatedMotorbikeData = { ...motorbikeData, user_id: userId };

  axios
    .post(`http://127.0.0.1:4000/api/v1/users/${userId}/motorbikes`, updatedMotorbikeData)
    .then((response) => {
      const newMotorbike = response.data;
      dispatch(addMotorbikeSuccess(newMotorbike));
    })
    .catch((error) => {
      dispatch(addMotorbikeFailure(error.message));
    });
};
