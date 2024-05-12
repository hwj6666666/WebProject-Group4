
import { createSlice } from "@reduxjs/toolkit";
import { getTopicsByUserIdAPI, getObjectsByUserIdAPI, getRemarksByUserIdAPI, getUserAPI } from "@/apis/user";
const userStore = createSlice({
	name: "user",
	initialState: {
		user: [{
			userid: 6,
			username: 'jack',
			password: '123456'
		},],
		topicsbyuser: [],
		objectsbyuser: [],
		remarksbyuser: []
	},
	reducers: {
		setTopics(state, action) {
			state.topicsbyuser = action.payload
		},
		setObjects(state, action) {
			state.objectsbyuser = action.payload
		},
		setRemarks(state, action) {
			state.remarksbyuser = action.payload
		},
		setUser(state, action) {
			state.user = action.payload
			// state.user = state.user.filter((element) => element.name !== action.payload.name);
			// console.log(state.user)
			// state.user.push({ username: action.payload.user, password: action.payload.pw })
			// console.log(state.user)
		},
		addUser(state, action) {
			state.user.push(action.payload)
		},
	},
});

const fetchUser = (user_id) => {
	return async (dispatch) => {
		const res = await getUserAPI(user_id);
		// console.log(res)
		dispatch(setUser(res));
	}
}

const fetchTopicsByUserId = (user_id) => {
	return async (dispatch) => {
		const res = await getTopicsByUserIdAPI(user_id);
		// console.log(res)
		dispatch(setTopics(res));
	}
}

const fetchObjectsByUserId = (user_id) => {
	return async (dispatch) => {
		const res = await getObjectsByUserIdAPI(user_id);
		// console.log(res)
		dispatch(setObjects(res));
	}
}

const fetchRemarksByUserId = (user_id) => {
	return async (dispatch) => {
		const res = await getRemarksByUserIdAPI(user_id);
		// console.log(res)
		dispatch(setRemarks(res));
	}
}

const { setUser, setTopics, setObjects, setRemarks, addUser } = userStore.actions;

const userReducer = userStore.reducer;

export { fetchUser, fetchTopicsByUserId, fetchRemarksByUserId, fetchObjectsByUserId, setUser, addUser };

export default userReducer;