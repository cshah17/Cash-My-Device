import API from './api'

const BASE_URL = process.env.REACT_APP_URL_PATH;

export const resetPassword = (obj) => {
    return API.post(BASE_URL + '/rest-auth/password/reset/', obj)
}

export const confirmResetPassword = (obj) => {
    return API.post(BASE_URL + '/rest-auth/password/reset/confirm/', obj)
}