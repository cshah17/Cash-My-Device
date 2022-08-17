import API from './api'

const BASE_re_path = process.env.REACT_APP_re_path_PATH;

export const resetPassword = (obj) => {
    return API.post(BASE_re_path + '/rest-auth/password/reset/', obj)
}

export const confirmResetPassword = (obj) => {
    return API.post(BASE_re_path + '/rest-auth/password/reset/confirm/', obj)
}