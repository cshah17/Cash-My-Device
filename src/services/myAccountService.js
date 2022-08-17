import API from './api'

const BASE_re_path = process.env.REACT_APP_re_path_PATH;

const getHeaders = () => {
    const token = localStorage.getItem('token');
    return { 'Authorization': 'Token ' + token }
}

export const getProfileDetails = () => {
    return API.get(BASE_re_path + '/rest-auth/user/', { headers: getHeaders() })
}

export const getProfileAddressDetails = (id) => {
    return API.get(BASE_re_path + '/UserAddress/?user=' + id, { headers: getHeaders() })
}

export const getProfileSecondaryEmailDetails = (id) => {
    return API.get(BASE_re_path + '/UserInfo/?user=' + id, { headers: getHeaders() })
}


export const updateChangePassword = (obj) => {
    return API.post(BASE_re_path + '/rest-auth/password/change/', obj, { headers: getHeaders() })
}

export const updateProfileDetails = (obj) => {
    return API.put(BASE_re_path + '/rest-auth/user/', obj, { headers: getHeaders() })
}

export const updateProfileAddressDetails = (id, obj) => {
    return API.put(BASE_re_path + '/UserInfo/' + id + '/', obj, { headers: getHeaders() })
}

export const addProfileAddressDetails = (id, obj) => {
    return API.post(BASE_re_path + '/UserInfo/' + id + '/', obj, { headers: getHeaders() })
}

export const UserTradeInfo = (id) => {
    return API.get(BASE_re_path + '/UserTradeInfo/?user=' + id, { headers: getHeaders() })
}

export const UserTradeInfoById = (id) => {
    return API.get(BASE_re_path + '/UserTradeInfo/?id=' + id, { headers: getHeaders() })
}

export const insertProfileAddressInfo = (obj) => {
    return API.post(BASE_re_path + '/UserAddress/', obj, { headers: getHeaders() })
}

export const updateProfileAddressInfo = (obj) => {
    return API.put(BASE_re_path + '/UserAddress/' + obj.id + '/', obj, { headers: getHeaders() })
}

export const insertContactInfo = (obj) => {
    return API.post(BASE_re_path + '/UserInfo/', obj, { headers: getHeaders() })
}

export const deleteContactDetail = (id) => {
    return API.delete(BASE_re_path + '/UserInfo/' + id + '/', { headers: getHeaders() })
}

export const updateContactInfo = (obj, id) => {
    return API.put(BASE_re_path + '/UserInfo/' + id + '/', obj, { headers: getHeaders() })
}

export const deleteAddressData = (id) => {
    return API.delete(BASE_re_path + '/UserAddress/' + id + '/', { headers: getHeaders() })
}

export const userRewards = (obj) => {
    return API.get(BASE_re_path + `/UserRewards/?id=${obj.id}&promocode=${obj.promocode}`)
}

export const rewards = (obj) => {
    return API.get(BASE_re_path + '/Rewards/?code=' + obj.promocode)
}
