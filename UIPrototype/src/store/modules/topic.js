import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { AddTopicAPI, getOneTopic, mainTopicAPI } from "../../apis/topic"; import { add } from "lodash";


const topicStore = createSlice({
	name: "topic",
	initialState: {
		topic: [],
		len: 0,
	},

	reducers: {
		addMyTopic(state, action) {
			state.topic.push(action.payload);
			state.len++;
		},
		changeTopic(state, action) {
			state.topic = action.payload;
			state.len = action.payload.length;
		},
		deleteMyTopic: (state, action) => {
			state.topic = state.topic.filter((item) => item.id !== action.payload);
			state.len--;
		}
	},
});

const fetchTopic = (id) => { //异步方法获取topic
	return async (dispatch) => {
		const res = await mainTopicAPI(id);
		dispatch(changeTopic(res));
	}
}
const addTopic = (topic) => {
	console.log(topic);
	return async (dispatch) => {
		await AddTopicAPI(topic);
		dispatch(addMyTopic(topic));
	}
}
const fetchOneTopic = (id) => { //异步方法获取topic
	return async () => {
		const res = await getOneTopic(id);
		addMyTopic(res);
	}
}


const { addMyTopic, changeTopic } = topicStore.actions;

const topicReducer = topicStore.reducer;



export { addTopic, addMyTopic, changeTopic, fetchTopic, fetchOneTopic };

export default topicReducer;