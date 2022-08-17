import reducer from './auth';
import cart from './cart';
import { combineReducers } from 'redux';


const allReducer = combineReducers({
    auth: reducer,
    cart: cart,
})

export default allReducer;