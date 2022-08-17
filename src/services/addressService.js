import API from './api'

const BASE_re_path = process.env.REACT_APP_re_path_PATH;


const getHeaders = () => {
    const token = localStorage.getItem('token');
    return { 'Authorization': 'Token ' + token }
}

export const addAddressData = (obj) => {
    return API.post(BASE_re_path + '/UserAddress/', obj, { headers: getHeaders() })
}

export const checkOutData = (obj) => {
    console.log(obj);
    return API.post(BASE_re_path + '/UserTradeInfo/', obj, { headers: getHeaders() })
}

export const checkOutDataAsGuest = (obj) => {
    return API.post(BASE_re_path + '/GuestUserTradeInfo/', obj)
}

export const checkOutDataAsGuestById = (obj) => {
    return API.get(BASE_re_path + '/GuestUserTradeInfo/?id=' + obj)
}

export const userPaymentInfo = (obj) => {
    return API.post(BASE_re_path + '/UserPaymentInfo/', obj, { headers: getHeaders() })
}

