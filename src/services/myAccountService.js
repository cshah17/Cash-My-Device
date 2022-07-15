import API from './api'

const BASE_URL = process.env.REACT_APP_URL_PATH;

const getHeaders = () => {
    const token = localStorage.getItem('token');
    return { 'Authorization': 'Token ' + token }
}

export const getProfileDetails = () => {
    return API.get(BASE_URL + '/rest-auth/user/', { headers: getHeaders() })
}

export const getProfileAddressDetails = (id) => {
    return API.get(BASE_URL + '/UserAddress/?user=' + id, { headers: getHeaders() })
}

export const getProfileSecondaryEmailDetails = (id) => {
    return API.get(BASE_URL + '/UserInfo/?user=' + id, { headers: getHeaders() })
}


export const updateChangePassword = (obj) => {
    return API.post(BASE_URL + '/rest-auth/password/change/', obj, { headers: getHeaders() })
}

export const updateProfileDetails = (obj) => {
    return API.put(BASE_URL + '/rest-auth/user/', obj, { headers: getHeaders() })
}

export const updateProfileAddressDetails = (id, obj) => {
    return API.put(BASE_URL + '/UserInfo/' + id + '/', obj, { headers: getHeaders() })
}

export const addProfileAddressDetails = (id, obj) => {
    return API.post(BASE_URL + '/UserInfo/' + id + '/', obj, { headers: getHeaders() })
}

export const UserTradeInfo = (id) => {
    return API.get(BASE_URL + '/UserTradeInfo/?user=' + id, { headers: getHeaders() })
}

export const UserTradeInfoById = (id) => {
    return API.get(BASE_URL + '/UserTradeInfo/?id=' + id, { headers: getHeaders() })
}

export const insertProfileAddressInfo = (obj) => {
    return API.post(BASE_URL + '/UserAddress/', obj, { headers: getHeaders() })
}

export const updateProfileAddressInfo = (obj) => {
    return API.put(BASE_URL + '/UserAddress/' + obj.id + '/', obj, { headers: getHeaders() })
}

export const insertContactInfo = (obj) => {
    return API.post(BASE_URL + '/UserInfo/', obj, { headers: getHeaders() })
}

export const deleteContactDetail = (id) => {
    return API.delete(BASE_URL + '/UserInfo/' + id + '/', { headers: getHeaders() })
}

export const updateContactInfo = (obj, id) => {
    return API.put(BASE_URL + '/UserInfo/' + id + '/', obj, { headers: getHeaders() })
}

export const deleteAddressData = (id) => {
    return API.delete(BASE_URL + '/UserAddress/' + id + '/', { headers: getHeaders() })
}

export const userRewards = (obj) => {
    return API.get(BASE_URL + `/UserRewards/?id=${obj.id}&promocode=${obj.promocode}`)
}

export const rewards = (obj) => {
    return API.get(BASE_URL + '/Rewards/?code=' + obj.promocode)
}
