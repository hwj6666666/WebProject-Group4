import { createSlice } from "@reduxjs/toolkit";
const topicStore = createSlice({
  name: "topic",
  initialState: {
    topic:[
        {
          title: "交大哪个餐饮大楼你去得最多？",
          introduction:"我最近对上海交通大学的食堂很感兴趣，想了解一下大家的意见。在上海交通大学的校园里，哪座食堂被认为是最好吃的？我想尝试一些美食，但不知道从哪里开始。如果有人对某个食堂有特别推荐或者经验分享，我会非常感激！谢谢！",
          hotComments: ["第一食堂", "第二食堂", "第三食堂"],
          heat: 100,
          tag:['美食'],
          time:'2024-03-09',
          id: 1,
        },
        {
          title: "你最喜欢哪一座交大建筑？",
          introduction:"",
          hotComments: ["庙门", "包玉刚图书馆", "致远游泳馆"],
          heat: 300,
          tag:['人文'],
          time:'2024-03-08',
          id: 2,
        },
        {
          title: "你最喜欢哪家快餐店？",
          introduction:"",
          hotComments: ["肯德基", "麦当劳", "汉堡王"],
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