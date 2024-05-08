import { request } from "../utils/request";

const getRemarkAPI = (id) => {
    return request({
        url: `/remarks/${id}`,
        method: 'get',
    });
}

const addRemarkAPI = (remark) => {
    return request({
        url: `/remarks`,
        method: 'post',
        data: remark,
        headers: {
            'Content-Type': 'application/json'
        }
    });
}

const changeLikeAPI = (isIncrease) => {
    return request({
        url: `/remarks/like`,
        method: 'post',
    })
}

export {getRemarkAPI, addRemarkAPI}