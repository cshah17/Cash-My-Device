import axios from 'axios';
import { toast } from 'react-toastify';

const instance = axios.create({
});

instance.interceptors.response.use(
    response => response,
    error => {
        if (error.response) {
            const { status, data } = error.response;
            if (status) {
                console.log('error with status code : ', status);
                if (status === 401) {
                   // window.location.href = '/401';
                }
                if (status === 404) {
                    //window.location.href = '/404';
                }
                if (status === 501) {
                    window.location.href = '/501';
                }
            }
            if (data && data.message) {
                toast.error(data.message);
            }
        }
        return Promise.reject(error);
    }
);

export default instance;

