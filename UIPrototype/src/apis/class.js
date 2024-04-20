
import { request } from "../utils/request";


const  ClassAPI=()=>{
    return request({
  url: `/class`,
  method: 'get',
});
}

const AddClassAPI=(type)=>{
    return request({
      url: '/class',
      method: 'post',
      data:type,
      headers: {
          'Content-Type': 'application/json'              //请求头,表示消息主体的类型为json
      }
    });
  }
  

export {ClassAPI,AddClassAPI}