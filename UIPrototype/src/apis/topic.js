
import { request } from "../utils/request";


const  mainTopicAPI=(id)=>{
    return request({
  url: `/topic/${id}`,
  method: 'get',
});
}

const AddTopicAPI=(topic)=>{
  console.log(topic)
  return request({
    url: '/topic',
    method: 'post',
    data:topic,
    headers: {
        'Content-Type': 'application/json'              //请求头,表示消息主体的类型为json
    }
  });
}

const UserTopicAPI=(user_id)=>{
    return request({
    url: `user/topic/${user_id}`,
    method:'post',
    data:{
        user_id:user_id
    },
    })
}

export {mainTopicAPI,UserTopicAPI,AddTopicAPI}