import { request } from "../utils/request";

const getObjectAPI = (id) => {
    return request({
        url: `/object/${id}`,
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

export {getObjectAPI, addObjectAPI}