
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

const getOneTopic=(id)=>{
  return request({
  url: `topic/object/${id}`,
  method:'get',
  })
}

const searchTopic=(keyword)=>{
  return request({
  url: `topic/search/${keyword}`,
  method:'get',
  })
}

export {mainTopicAPI,UserTopicAPI,AddTopicAPI,getOneTopic,searchTopic}