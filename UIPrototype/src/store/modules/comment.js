import { addCommentAPI, getCommentAPI } from "@/apis/comment";
import { createSlice } from "@reduxjs/toolkit";

const commentStore = createSlice({
    name: "comment",
    initialState: {
        comment: [],
        commentLen: 0
    },
    reducers: {
        addMyComment(state, action) {
            state.comment.unshift(action.payload);
            state.commentLen++;
        },
        changeComment(state, action) {
            state.comment = action.payload;
            state.commentLen = action.payload.length;
        },
    }
});

const addComment = (comment) => {
    return async (dispatch) => {
        dispatch(addMyComment(comment));
        addCommentAPI(comment);
    }
}

const fetchComment = (remarkIds) => {
    return async (dispatch) => {
        const res = await getCommentAPI(remarkIds);
        console.log(res)
        dispatch(changeComment(res));
    }
}

const { addMyComment, changeComment } = commentStore.actions;

const commentReducer = commentStore.reducer;

export { addMyComment, changeComment, addComment, fetchComment }

export default commentReducer