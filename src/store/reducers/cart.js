import * as actionTypes from '../actions/actionTypes';

const initialState = {
    items: [],
    address: {},
    payment: {},
    totalPayment: ''
}

const cart = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.ADD_TO_CART:
            return {
                ...state,
                items: [...state.items, action.payload],
            };

        case actionTypes.UPDATE_CART_PAYMENT:
            return {
                ...state,
                payment: action.payload
            };

        case actionTypes.UPDATE_CART_ADDRESS:
            return {
                ...state,
                address: action.payload
            };

        case actionTypes.REMOVE_TO_CART:
            return {
                ...state,
                items: state.items.filter(item => item.id !== action.payload)
            };

        case actionTypes.UPDATE_TOTAL_PAYMENT:
            return {
                ...state,
                totalPayment: action.payload
            };

        case actionTypes.CLEAR_CART_ITEM:
            return {
                items: '',
                address: '',
                payment: ''
            };
        default:
            return state;
    }
}

export default cart;