
//axios封装
import axios from "axios";
import router from "@/router";


 const request =axios.create({
    baseURL:'http://localhost:8080',
    timeout:5000
})

//请求拦截器
//请求发送前做拦截。插入自定义配置
request.interceptors.request.use((config)=>{
    console.log(config.data)
    return config
},(error)=>{
    return Promise.reject(error)
})

//响应拦截器
//响应接受前做拦截。处理返回的数据
request.interceptors.response.use((response)=>{
    console.log(response)
    return response.data
},(error)=>{
    console.log(error)
    if(error.response.status===400){
        router.navigate('/')
        console.log(error.message)
    }
    return Promise.reject(error)
})

export {request}