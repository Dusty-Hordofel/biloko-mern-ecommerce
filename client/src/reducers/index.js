import { combineReducers } from 'redux';
import { userReducer } from './userReducer';
import { searchReducer } from './searchReducer';
import { cartReducer } from './cartReducer';
import { drawerReducer } from './drawerReducer';

const rootReducer = combineReducers({
  user: userReducer,
  search: searchReducer,
  cart: cartReducer,
  drawer: drawerReducer,
}); //combineReducers is used to combine multiple reducers into one

export default rootReducer; //export defaut is used when we just have one function to export.
