import API from './api';

const BASE_re_path = process.env.REACT_APP_re_path_PATH;

// const getHeaders = () => {
//     const token = localStorage.getItem('token');
//     return { 'Authorization': 'Token ' + token }
// }

export const addInquerer = (obj) => {
    return API.post(BASE_re_path + '/api/inquerer/', obj, )
}

export const generalInquiry = (obj) => {
    return API.post(BASE_re_path + '/api/generalinquery/', obj )
}
