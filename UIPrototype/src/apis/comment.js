import { request } from "../utils/request";

const getCommentAPI = (id) => {
    return request({
        url: `/comments/${id}`,
        method: 'get',
    });
}

const addCommentAPI = (comment) => {
    return request({
        url: `/comments`,
        method: 'post',
        data: comment,
        headers: {
            'Content-Type': 'application/json'
        }
    });
}

export {getCommentAPI, addCommentAPI}