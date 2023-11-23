// rootReducer.js
import {combineReducers} from '@reduxjs/toolkit';
import counterReducer from './counterReducer';

const rootReducer = combineReducers({
  counter: counterReducer,
  // Add other slices as needed
});

export default rootReducer;
