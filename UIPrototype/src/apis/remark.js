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
	const uid = localStorage.getItem('id');
	return request({
		url: `/remarks/changeLike/${id}/${change}/${uid}`,
		method: 'get',
	});
}

const getLikeAPI = (id) => {
	const uid = localStorage.getItem('id');
	return request({
		url: `/remarks/getLike/${id}/${uid}`,
		method: 'get',
	});
}

const getUsersAPI = () => {
	return request({
		url: '/getAllUser',
		method: 'get'
	});
}

const deleteRemarkAPI = (id) => {
	return request({
		url: `/remarks/delete/${id}`,
		method: 'get',
	});
}

export { getRemarkAPI, addRemarkAPI, changeLikeAPI, getUsersAPI, getLikeAPI, deleteRemarkAPI }