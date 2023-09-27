import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import motorbikesReducer from './motorbikes/motorbikesReducer';

const rootReducer = combineReducers({
  motorbikes: motorbikesReducer,
  // Add more reducers if you have them
});

const store = createStore(rootReducer, applyMiddleware(thunk));

export default store;
