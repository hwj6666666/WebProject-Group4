import { createSlice } from "@reduxjs/toolkit";
import { AddTopicAPI, getOneTopic, mainTopicAPI } from "../../apis/topic";
import _ from "lodash";

const topicStore = createSlice({
  name: "topic",
  initialState: {
    topic: [],
    len: 0,
  },

  reducers: {
    addMyTopic(state, action) {
      state.topic.unshift(action.payload);
      state.len++;
    },
    changeTopic(state, action) {
      state.topic = action.payload;
      state.len = action.payload.length;
    },
    deleteMyTopic: (state, action) => {
      state.topic = state.topic.filter((item) => item.id !== action.payload);
      state.len--;
    },
  },
});

const fetchTopic = (id) => {
  //异步方法获取topic
  return async (dispatch) => {
    const res = await mainTopicAPI(id);
    dispatch(changeTopic(_.orderBy(res, "publicTime", "desc")));
  };
};
const addTopic = (topic) => {
  return async (dispatch) => {
    const res= await AddTopicAPI(topic);
    dispatch(addMyTopic(res));
  };
};
const fetchOneTopic = (id) => {
  //异步方法获取topic
  return async () => {
    const res = await getOneTopic(id);
    addMyTopic(res);
  };
};

const { addMyTopic, changeTopic } = topicStore.actions;

const topicReducer = topicStore.reducer;

export { addTopic, addMyTopic, changeTopic, fetchTopic, fetchOneTopic };

export default topicReducer;
