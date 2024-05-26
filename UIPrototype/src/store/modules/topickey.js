import { createSlice } from "@reduxjs/toolkit";
const topicKeyStore = createSlice({
    name: "topicKey",
    initialState: {
        topicKey:"0",
    },
    reducers: {
        changeTopicKey(state, action) {
            state.topicKey=action.payload;
        },
    },
});

const { changeTopicKey } = topicKeyStore.actions;

const topicKeyReducer = topicKeyStore.reducer;

export { changeTopicKey };

export default topicKeyReducer;