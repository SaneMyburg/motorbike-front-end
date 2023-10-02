import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import motorbikesReducer from './motorbikes/motorbikesReducer';
import userReducer from './users/userSlice';
import reservationReducer from './reservations/reservationSlice';
import addMotorbikesReducer from './motorbikes/addMotorbikesReducer';

const rootReducer = combineReducers({
  motorbikes: motorbikesReducer,
  users: userReducer,
  reservations: reservationReducer,
  addMotorbikes: addMotorbikesReducer,
});

const store = createStore(rootReducer, applyMiddleware(thunk));

export default store;
