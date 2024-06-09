
import { request } from "../utils/request";


const  ClassAPI=()=>{
    return request({
  url: `/class`,
  method: 'get',
});
}

const AddClassAPI=(data)=>{
    return request({
      url: '/class',
      method: 'post',
      params:data,
      headers: {
          'Content-Type': 'application/json'              //请求头,表示消息主体的类型为json
      }
    });
  }

  const AddFavorClassAPI=(data)=>{
    return request({
      url: '/class/addFavor',
      method: 'post',
      params:data,
      headers: {
          'Content-Type': 'application/json'              //请求头,表示消息主体的类型为json
      }
    });
  }

  const DeleteFavorClassAPI=(data)=>{
    return request({
      url: '/class/deleteFavor',
      method: 'post',
      data:data,
      headers: {
          'Content-Type': 'application/json'              //请求头,表示消息主体的类型为json
      }
    });
  }

  const GetFavorClassAPI=(userId)=>{
    return request({
      url: `/class/favor`,
      method: 'get',
      params:{
        userId:userId
      
      },
      headers: {
          'Content-Type': 'application/json'              //请求头,表示消息主体的类型为json
      }
    });
  }
  

export {ClassAPI,AddClassAPI,AddFavorClassAPI,DeleteFavorClassAPI,GetFavorClassAPI}