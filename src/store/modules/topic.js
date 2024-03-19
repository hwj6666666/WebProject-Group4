import { createSlice } from "@reduxjs/toolkit";
const topicStore = createSlice({
  name: "topic",
  initialState: {
    topic:[
        {
          title: "交大哪个餐饮大楼你去得最多？",
          hotComments: ["第一食堂", "第二食堂", "第三食堂"],
          heat: 100,
          tag:['美食'],
          time:'2024-03-09',
          id: 1,
        },
        {
          title: "交大建筑",
          hotComments: ["庙门", "包玉刚图书馆", "致远游泳馆"],
          heat: 300,
          tag:['人文'],
          time:'2024-03-08',
          id: 2,
        },
        {
          title: "最喜欢点？",
          hotComments: ["蛋", "鸡", "堡"],
          tag:['美食'],
          heat: 200,
          time:'2024-03-05',
          id: 3,
        },
        // 更多话题...
      ],
      len:3
  },
  reducers: {
    addTopic(state, action) {
      state.topic.push(action.payload);
      state.len++
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