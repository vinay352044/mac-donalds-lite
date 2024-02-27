// import  { connect } from 'react-redux'   // for class components
import { applyMiddleware, createStore } from 'redux'
// import {logger} from 'redux-logger'
import { composeWithDevTools } from 'redux-devtools-extension';
// import logger from 'redux-logger'


const initialState = {
    orders: localStorage.getItem('orders') ?  localStorage.getItem('orders') : []    // array of object
}
const orderReducer = (state = initialState ,action) => {
const {type , payload} = action; // destructured the action object
if(type == 'placeorder'){
    return {
        ...state,
        orders: payload
    }
}
if(type=='removeorder'){
    return {
        ...state,
        orders:payload
    }
}

if(type=='updateorder'){
    console.log("c n n cn");
    return {
        orders: payload
    }
}

// we can also use switch case instead of multiple if statments here.
return state;
}          
const store = createStore(orderReducer, composeWithDevTools()) // store takes pointer to the reducer function as a parameter !!
export default store
