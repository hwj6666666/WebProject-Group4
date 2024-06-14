import { createSlice } from "@reduxjs/toolkit";
import { getTopicsByUserIdAPI, getObjectsByUserIdAPI, getRemarksByUserIdAPI, getUserAPI, getFllowsAPI, updateUserAPI, updatePasswordAPI, getOandTTitleAPI } from "@/apis/user";
const userStore = createSlice({
	name: "user",
	initialState: {
		headerAvatar: '',
		user: {},
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
		deleteTopicInUser(state, action) {
			state.topicsbyuser = state.topicsbyuser.filter((topic) => topic.id !== action.payload)
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
		setHeaderAvatar(state, action) {
			state.headerAvatar = action.payload.avatar
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

export const fetchUser = (user_id) => {
	return async (dispatch) => {
		const res = await getUserAPI(user_id);
		dispatch(setUser(res));
	}
}

export const fetchHeaderAvatar = (user_id) => {
	return async (dispatch) => {
		const res = await getUserAPI(user_id);
		dispatch(setHeaderAvatar(res));
	}
}

export const fetchTopicsByUserId = (user_id) => {
	return async (dispatch) => {
		const res = await getTopicsByUserIdAPI(user_id);
		// console.log('fetchTopicsByUserId')
		// console.log(res)
		dispatch(setTopics(res));
	}
}

export const fetchObjectsByUserId = (user_id) => {
	return async (dispatch) => {
		const res = await getObjectsByUserIdAPI(user_id);
		// console.log('fetchObjectsByUserId')
		// console.log(res)
		dispatch(setObjects(res));
	}
}

export const fetchRemarksByUserId = (user_id) => {
	return async (dispatch) => {
		const res = await getRemarksByUserIdAPI(user_id);
		// console.log(res)
		dispatch(setRemarks(res));
	}
}

export const fetchFllows = (user_id) => {
	return async (dispatch) => {
		const res = await getFllowsAPI(user_id);
		// console.log(res)
		dispatch(setFllows(res));
	}
}

export const updateUser = (newProfile) => {
	// console.log(newProfile)
	return async (dispatch) => {
		const res = await updateUserAPI(newProfile);
		// console.log(res)
		dispatch(setUser(res));
	}
}
export const updatePassword = (UidandPsd) => {
	// console.log(UidandPsd)
	return async (dispatch) => {
		const res = await updatePasswordAPI(UidandPsd);
		// console.log(res)
		dispatch(setUser(res));
	}
}
export const getOandTTitle = (objectId) => {
	return async (dispatch) => {
		const res = await getOandTTitleAPI(objectId);
		console.log(res)
		dispatch(setUser(res));
	}
}
const { setUser, setTopics, deleteTopicInUser, setObjects, setRemarks, setFllows, setHeaderAvatar, setLoggedIn, setId, addUser } = userStore.actions;

const userReducer = userStore.reducer;

export { setUser, addUser, deleteTopicInUser, setLoggedIn, setId };

export default userReducer;
