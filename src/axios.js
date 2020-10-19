import axios from "axios"

axios.defaults.baseURL = 'http://open.duyiedu.com';

axios.interceptors.request.use(config => {
    
    config.params = {
        ...config.params,
        appkey: "byfWang_1590670472900"
    };
    return config;  
})

axios.interceptors.response.use(resp => {
    return resp.data;
})

export default axios;