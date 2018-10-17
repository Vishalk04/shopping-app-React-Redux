import {combineReducers} from 'redux';
//import OrderReducers from './reducer-order';
import ReducerOrder from './OrderReducer'

const allReducers = combineReducers({
   // orders: OrderReducers,
    orders :  ReducerOrder
});


export default allReducers;