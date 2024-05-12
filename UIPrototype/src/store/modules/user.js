import { createSlice } from "@reduxjs/toolkit";
import { getTopicsByUserIdAPI, getObjectsByUserIdAPI, getRemarksByUserIdAPI, getUserAPI, getFllowsAPI } from "@/apis/user";
const userStore = createSlice({
	name: "user",
	initialState: {
		user: {
			userid: 6,
			username: 'jack',
			password: '123456'
		},
		topicsbyuser: [],
		objectsbyuser: [],
		remarksbyuser: [],
		fllows: [],
		isLoggedIn: false,
		id: 0,
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
		setFllows(state, action) {
			state.fllows = action.payload
		},
		setUser(state, action) {
			state.user = action.payload
		},
		addUser(state, action) {
			state.user.push(action.payload)
		},
		setLoggedIn(state, action) {
			state.isLoggedIn = action.payload;
		},
		setId(state, action) {
			state.id = action.payload;
		}
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

const fetchFllows = (user_id) => {
	return async (dispatch) => {
		const res = await getFllowsAPI(user_id);
		// console.log(res)
		dispatch(setFllows(res));
	}
}

const { setUser, setTopics, setObjects, setRemarks, setFllows, addUser } = userStore.actions;

const userReducer = userStore.reducer;

export { fetchUser, fetchTopicsByUserId, fetchRemarksByUserId, fetchObjectsByUserId, fetchFllows, setUser, addUser };

export default userReducer;
