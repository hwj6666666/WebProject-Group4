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

const changeLikeAPI = (change, id) => {
	return request({
		url: `/remarks/changeLike/${id}/${change}`,
		method: 'get',
	});
}

const getUsersAPI = () => {
    return request({
        url: '/getAllUser',
        method: 'get'
    });
}

export { getRemarkAPI, addRemarkAPI, changeLikeAPI, getUsersAPI }