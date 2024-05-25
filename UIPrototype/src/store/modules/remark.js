import { addRemarkAPI, changeLikeAPI } from "@/apis/remark";
import { createSlice } from "@reduxjs/toolkit";
import { getLikeAPI } from "@/apis/remark";
import { message } from "antd";

const remarkStore = createSlice({
	name: "remark",
	initialState: {
		remark: [],
		remarkLen: 0,
		orderByTime: true
	},
	reducers: {
		addMyRemark(state, action) {
			state.remark.unshift(action.payload);
			state.remarkLen++
		},
		changeRemark(state, action) {
			state.remark = action.payload;
			state.remarkLen = action.payload.length;
			for (let item of state.remark) {
				item.liked = false;
			}
		},
		changePos(state, action) {
			state.remark = action.payload;
		},
		setOrderByTime(state, action) {
			state.orderByTime = action.payload;
		},
		changeLike(state, action) {
			let this_remark = state.remark.find(r => r.id === action.payload);
			if (this_remark.liked === true) {
				this_remark.liked = false;
				this_remark.like--;
				changeLikeBack(-1, action.payload);
			}
			else {
				this_remark.liked = true;
				this_remark.like++;
				changeLikeBack(1, action.payload);
			}
		},
		setLike(state, action) {
			let this_remark = state.remark.find(r => r.id === action.payload.id);
			this_remark.liked = action.payload.liked;
		},
	},
});

const addRemark = (remark) => {
	return async (dispatch) => {
		const generatedId = await addRemarkAPI(remark);
		remark.id = generatedId;
		console.log(remark);
		if (generatedId !== -1) {
			dispatch(addMyRemark(remark));
			message.success("提交成功");
		}
		else {
			message.error("重复提交评分");
		}
	}
}

const changeLikeBack = (change, id) => {
	console.log(id + " change likes " + change);
	changeLikeAPI(change, id);
}

const fetchLike = (id) => {
	return async (dispatch) => {
		const res = await getLikeAPI(id);
		const para = { id: id, liked: res };
		console.log(para);
		dispatch(setLike(para));
	}
}

const { addMyRemark, changeRemark, changeLike, changePos, setOrderByTime, setLike } = remarkStore.actions;

const remarkReducer = remarkStore.reducer;

export { addMyRemark, changeRemark, changeLike, changePos, setOrderByTime, setLike, addRemark, changeLikeBack, fetchLike };

export default remarkReducer;