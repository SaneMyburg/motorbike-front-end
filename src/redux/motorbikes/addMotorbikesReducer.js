import {
  ADD_MOTORBIKE_REQUEST,
  ADD_MOTORBIKE_SUCCESS,
  ADD_MOTORBIKE_FAILURE,
} from './addMotorbikes';

const initialState = {
  adding: false,
  addedMotorbike: null,
  error: null,
};

const addMotorbikesReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_MOTORBIKE_REQUEST:
      return {
        ...state,
        adding: true,
        error: null,
      };
    case ADD_MOTORBIKE_SUCCESS:
      return {
        ...state,
        adding: false,
        addedMotorbike: action.payload,
        error: null,
      };
    case ADD_MOTORBIKE_FAILURE:
      return {
        ...state,
        adding: false,
        addedMotorbike: null,
        error: action.payload,
      };
    default:
      return state;
  }
};

export default addMotorbikesReducer;
