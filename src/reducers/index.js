import { productReducer } from './clickReducer';
import { combineReducers } from 'redux';
export const Reducers = combineReducers({
  productState: productReducer
});