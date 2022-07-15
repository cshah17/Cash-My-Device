import API from './api'

const BASE_URL = process.env.REACT_APP_URL_PATH;


const getHeaders = () => {
    const token = localStorage.getItem('token');
    return { 'Authorization': 'Token ' + token }
}

export const addAddressData = (obj) => {
    return API.post(BASE_URL + '/UserAddress/', obj, { headers: getHeaders() })
}

export const checkOutData = (obj) => {
    console.log(obj);
    return API.post(BASE_URL + '/UserTradeInfo/', obj, { headers: getHeaders() })
}

export const checkOutDataAsGuest = (obj) => {
    return API.post(BASE_URL + '/GuestUserTradeInfo/', obj)
}

export const checkOutDataAsGuestById = (obj) => {
    return API.get(BASE_URL + '/GuestUserTradeInfo/?id=' + obj)
}

export const userPaymentInfo = (obj) => {
    return API.post(BASE_URL + '/UserPaymentInfo/', obj, { headers: getHeaders() })
}

