import { request } from "../utils/request";

export const allUserAPI = () => {
	return request({
		url: '/user',
		method: 'get',
	});
}

export const getUserAPI = (user_id) => {
	return request({
		url: `/user/${user_id}`,
		method: 'get',
	});
}

export const getTopicsByUserIdAPI = (user_id) => {
	return request({
		url: `/user/${user_id}/topics`,
		method: 'get',
	});
}

export const getObjectsByUserIdAPI = (user_id) => {
	return request({
		url: `/user/${user_id}/objects`,
		method: 'get',
	});
}

export const getRemarksByUserIdAPI = (user_id) => {
	return request({
		url: `/user/${user_id}/remarks`,
		method: 'get',
	});
}

export const getFllowsAPI = (user_id) => {
	return request({
		url: `/user/${user_id}/follows`,
		method: 'get',
	});
}

export const updateUserAPI = (user) => {
	return request({
		url: `/user/${user.id}`,
		method: 'put',
		data: user,
	});
}

export const updatePasswordAPI = (UidandPsd) => {
	return request({
		url: `/psd/${UidandPsd.id}`,
		method: 'put',
		data: UidandPsd,
	});
}
export const getOandTTitleAPI = (objectId) => {
	return request({
		url: `/user/object/${objectId}/nameAndTopic`,
		method: 'get',
	});
}
export const searchUser = (keyword) => {
	return request({
		url: `/user/search/${keyword}`,
		method: 'get',
	});
}
