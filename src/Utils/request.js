import axios from "axios";

const request = axios.create({
    baseURL: 'http://172.20.10.2:8080/projet',
})

request.interceptors.request.use(config => {
    config.headers['Content-Type'] = 'application/json;charset=utf-8';
    return config
}, error => {
    console.log('request error:' + error)
    return Promise.reject(error)
})
request.interceptors.response.use(response =>{
    let res = response.data
    return res
},error => {
    console.log('request error:' + error)
    return Promise.reject(error)
})

export default request
