
//axios封装
import axios from "axios";
import router from "../-router";


 const request =axios.create({
    baseURL:'https://10.119.12.209:8080',
    timeout:5000
})

//请求拦截器
//请求发送前做拦截。插入自定义配置
request.interceptors.request.use((config)=>{
    return config
},(error)=>{
    return Promise.reject(error)
})

//响应拦截器
//响应接受前做拦截。处理返回的数据
request.interceptors.response.use((response)=>{
    console.log(response.data)
    return response.data
},(error)=>{
    console.log(error)
    if(error.response.status===401){
        
        removeToken()
        router.navigate('/login')
        window.location.reload()
    }
    if(error.response.status===400){
        router.navigate('/')
        console.log(error.message)
    }
    return Promise.reject(error)
})

export {request}