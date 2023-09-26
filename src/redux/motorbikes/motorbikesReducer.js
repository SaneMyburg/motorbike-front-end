import {
  FETCH_MOTORBIKES_REQUEST,
  FETCH_MOTORBIKES_SUCCESS,
  FETCH_MOTORBIKES_FAILURE,
} from './motorbikes';

const initialState = {
  motors: [],
  loading: false,
  error: null,
};

const motorbikesReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_MOTORBIKES_REQUEST:
      return {
        ...state,
        loading: true,
        error: null,
      };
    case FETCH_MOTORBIKES_SUCCESS:
      return {
        ...state,
        motors: action.payload,
        loading: false,
        error: null,
      };
    case FETCH_MOTORBIKES_FAILURE:
      return {
        ...state,
        motors: [],
        loading: false,
        error: action.payload,
      };
    default:
      return state;
  }
};

export default motorbikesReducer;
