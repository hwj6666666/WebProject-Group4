import { addCommentAPI, deleteCommentAPI, getCommentAPI } from "@/apis/comment";
import { createSlice } from "@reduxjs/toolkit";

const commentStore = createSlice({
    name: "comment",
    initialState: {
        comment: [],
        commentLen: 0
    },
    reducers: {
        addMyComment(state, action) {
            state.comment.push(action.payload);
            state.commentLen++;
        },
        changeComment(state, action) {
            state.comment = action.payload;
            state.commentLen = action.payload.length;
        },
        deleteMyComment(state, action) {
            state.comment = state.comment.filter(c => c.id !== action.payload);
            state.commentLen--;
        }
    }
});

const addComment = (comment) => {
    return async (dispatch) => {
        const generatedId = await addCommentAPI(comment);
        comment.id = generatedId;
        dispatch(addMyComment(comment));
    }
}

const fetchComment = (remarkIds) => {
    return async (dispatch) => {
        const res = await getCommentAPI(remarkIds);
        console.log(res)
        dispatch(changeComment(res));
    }
}

const deleteComment = (commentId) => {
    return async (dispatch) => {
        deleteCommentAPI(commentId);
        dispatch(deleteMyComment(commentId));
    }
}

const { addMyComment, changeComment, deleteMyComment } = commentStore.actions;

const commentReducer = commentStore.reducer;

export { addMyComment, changeComment, deleteMyComment, addComment, fetchComment, deleteComment }

export default commentReducer