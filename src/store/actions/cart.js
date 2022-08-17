import * as actionTypes from './actionTypes';

export const addToCart = (obj) => {
    return {
        type: actionTypes.ADD_TO_CART,
        payload: obj
    }
}

export const updateCartPayment = (obj) => {
    return {
        type: actionTypes.UPDATE_CART_PAYMENT,
        payload: obj
    }
}

export const updateCartAddress = (obj) => {
    return {
        type: actionTypes.UPDATE_CART_ADDRESS,
        payload: obj
    }
}

export const removeToCart = (obj) => {
    return {
        type: actionTypes.REMOVE_TO_CART,
        payload: obj
    }
}

export const clearCartItem = () => {
    return {
        type: actionTypes.CLEAR_CART_ITEM,
    }
}

export const updateTotalPayment = (obj) => {
    return {
        type: actionTypes.UPDATE_TOTAL_PAYMENT,
        payload: obj
    }
}


