import { request } from "../utils/request";

const allUserAPI = () => {
	return request({
		url: '/user',
		method: 'get',
	});
}

const getUserAPI = (user_id) => {
	return request({
		url: `/user/${user_id}`,
		method: 'get',
	});
}

const getTopicsByUserIdAPI = (user_id) => {
	return request({
		url: `/user/${user_id}/topics`,
		method: 'get',
	});
}

const getObjectsByUserIdAPI = (user_id) => {
	return request({
		url: `/user/${user_id}/objects`,
		method: 'get',
	});
}

const getRemarksByUserIdAPI = (user_id) => {
	return request({
		url: `/user/${user_id}/remarks`,
		method: 'get',
	});
}

const getFllowsAPI = (user_id) => {
	return request({
		url: `/user/${user_id}/fllows`,
		method: 'get',
	});
}

export { allUserAPI, getUserAPI, getTopicsByUserIdAPI, getObjectsByUserIdAPI, getRemarksByUserIdAPI, getFllowsAPI }