
import { request } from "../utils/request";


const mainTopicAPI = (id) => {
	return request({
		url: `/topic/${id}`,
		method: 'get',
	});
}

const deleteTopicAPI = (id) => {

	return request({
		url: `/topic/${id}`,
		method: 'delete',
	});
}

const AddTopicAPI = (topic) => {
	return request({
		url: '/topic',
		method: 'post',
		data: topic,
		headers: {
			'Content-Type': 'application/json'              //请求头,表示消息主体的类型为json
		}
	});
}

const UserTopicAPI = (user_id) => {
	return request({
		url: `user/topic/${user_id}`,
		method: 'post',
		data: {
			user_id: user_id
		},
	})
}

const getOneTopic = (id) => {
	return request({
		url: `topic/object/${id}`,
		method: 'get',
	})
}

const searchTopic = (keyword) => {
	return request({
		url: `topic/search/${keyword}`,
		method: 'get',
	})
}

const setFollow = (topic_id, user_id) => {
	return request({
		url: `topic/follow`,
		method: 'post',
		params: {
			topicId: topic_id,
			userId: user_id
		},
	})
}

const findFollow = (topic_id, user_id) => {
	return request({
		url: `topic/follow`,
		method: 'get',
		params: {
			topicId: topic_id,
			userId: user_id
		},
	})
}


export { mainTopicAPI, UserTopicAPI, AddTopicAPI, getOneTopic, searchTopic, setFollow, findFollow, deleteTopicAPI }



