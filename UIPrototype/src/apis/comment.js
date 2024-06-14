import { request } from "../utils/request";

const getCommentAPI = (remarkIds) => {
    return request({
        url: `/comments/get`,
        method: 'post',
        data: remarkIds,
        headers: {
            'Content-Type': 'application/json'
        }
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

const deleteCommentAPI = (commentId) => {
    return request({
        url: `/comments/delete/${commentId}`,
        method: 'get'
    });
}

export { getCommentAPI, addCommentAPI, deleteCommentAPI }