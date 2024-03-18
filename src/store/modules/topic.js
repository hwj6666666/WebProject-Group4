import { createSlice } from "@reduxjs/toolkit";
const topicStore = createSlice({
  name: "topic",
  initialState: {
    topic:[
        {
          title: "交大哪个餐饮大楼你去得最多？",
          hotComments: ["第一食堂", "第二食堂", "第三食堂"],
          heat: 100,
          id: 1,
        },
        {
          title: "交大建筑",
          hotComments: ["庙门", "包玉刚图书馆", "致远游泳馆"],
          heat: 200,
          id: 2,
        },
        {
          title: "最喜欢点？",
          hotComments: ["蛋", "鸡", "堡"],
          heat: 200,
          id: 3,
        },
        // 更多话题...
      ]
  },
  reducers: {
    addTopic(state, action) {
      state.topic.push(action.payload);
    },
    changeTopic(state, action) {
        state.topic=action.payload;
      },
  },
});

const { addTopic, changeTopic } = topicStore.actions;

const topicReducer = topicStore.reducer;





export {addTopic, changeTopic };

export default topicReducer;