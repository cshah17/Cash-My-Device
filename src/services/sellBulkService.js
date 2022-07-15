import API from './api';

const BASE_URL = process.env.REACT_APP_URL_PATH;

// const getHeaders = () => {
//     const token = localStorage.getItem('token');
//     return { 'Authorization': 'Token ' + token }
// }

export const addInquerer = (obj) => {
    return API.post(BASE_URL + '/api/inquerer/', obj, )
}

export const generalInquiry = (obj) => {
    return API.post(BASE_URL + '/api/generalinquery/', obj )
}
