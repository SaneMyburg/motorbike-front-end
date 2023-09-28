import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import motorbikesReducer from './motorbikes/motorbikesReducer';
import userReducer from './users/userSlice';

const rootReducer = combineReducers({
  motorbikes: motorbikesReducer,
  users: userReducer,
  // Add more reducers if you have them
});

const store = createStore(rootReducer, applyMiddleware(thunk));

export default store;
