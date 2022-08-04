import { combineReducers } from 'redux';
import { searchReducer } from './searchReducer';
import { userReducer } from './userReducer';

const rootReducer = combineReducers({
  user: userReducer,
  search: searchReducer,
}); //combineReducers is used to combine multiple reducers into one

export default rootReducer; //export defaut is used when we just have one function to export.
