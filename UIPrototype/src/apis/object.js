import { request } from "../utils/request";

const getObjectAPI = (id) => {
    return request({
        url: `/object/${id}`,
        method: 'get',
    });
}

const getOneObjectAPI = (id) => {
    return request({
        url: `/object/remark/${id}`,
        method: 'get',
    });
}

const addObjectAPI = (object) => {
    return request({
        url: `/object`,
        method: 'post',
        data: object,
        headers: {
            'Content-Type': 'application/json'
        }
    });
}

const searchObject=(keyword)=>{
  return request({
  url: `object/search/${keyword}`,
  method:'get',
  })
}

const getTop3=(TopicId)=>{
  return request({
  url: `object/top3/${TopicId}`,
  method:'get',
  })
}

const deleteObjectAPI=(id)=>{
    return request({
      url: `/object/${id}`,
      method: 'delete',
    });
  }

export {getObjectAPI,getTop3, addObjectAPI, getOneObjectAPI, searchObject, deleteObjectAPI}