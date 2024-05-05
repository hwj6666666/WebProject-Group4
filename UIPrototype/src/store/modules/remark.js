import { addRemarkAPI, getRemarkAPI } from "@/apis/remark";
import { createSlice } from "@reduxjs/toolkit";
const remarkStore = createSlice({
	name: "remark",
	initialState: {
		remark: [
			{
				username: "用户114514",
				photo: "",
				comment: "还可以吧，虽然不算最好吃的",
				score: 8,
				time: "2024-03-15  04:25",
				likes: 1,
				liked: false,
				id: 0
			},
			{
				username: "用户666",
				photo: "",
				comment: "一餐很好啊，选择也挺多的",
				score: 10,
				time: "2024-03-11  17:25",
				likes: 13,
				liked: false,
				id: 1
			},
			{
				username: "用户1919810",
				photo: "",
				comment: "感觉不如二餐，就算排队也要去二餐",
				score: 4,
				time: "2024-03-08  09:25",
				likes: 7,
				liked: false,
				id: 2
			}
			//更多评价
		],
		remarkLen: 3
	},
	reducers: {
		addMyRemark(state, action) {
			state.remark.unshift(action.payload);
			state.len++
		},
		changeRemark(state, action) {
			state.remark = action.payload;
			state.remarkLen = action.payload.length;
		},
		changeLike(state, action) {
			let this_remark = state.remark.find(r => r.id === action.payload);
			if (this_remark.liked === true) {
				this_remark.liked = false;
				this_remark.likes--;
			}
			else {
				this_remark.liked = true;
				this_remark.likes++;
			}
		},
	},
});

const fetchRemark = (id) => {
	return async (dispatch) => {
		const res = await getRemarkAPI(id);
		console.log(res);
		dispatch(changeRemark(res));
	}
}

const addRemark = (remark) => {
	console.log(remark);
	return async (dispatch) => {
		await addRemarkAPI(remark);
		dispatch(addMyRemark(remark));
	}
}

const changeLikeBack = (isIncrease) => {
	
}

const { addMyRemark, changeRemark, changeLike } = remarkStore.actions;

const remarkReducer = remarkStore.reducer;

export { addMyRemark, changeRemark, changeLike, fetchRemark, addRemark };

export default remarkReducer;