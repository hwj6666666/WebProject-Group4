import { createSlice } from "@reduxjs/toolkit";
const remarkStore = createSlice({
  name: "remark",
  initialState: {
    remark:[
      {
          username: "用户114514",
          photo: "",
          comment: "还可以吧，虽然不算最好吃的",
          score: "4.0",
          time: "2024-3-9",
          likes: 50,
          id: 0
      },
      {
          username: "用户666",
          photo: "",
          comment: "一餐很好啊，选择也挺多的",
          score: "5.0",
          time: "2024-3-11",
          likes: 13,
          id: 1
      },
      {
          username: "用户1919810",
          photo: "",
          comment: "感觉不如二餐，就算排队也要去二餐",
          score: "2.0",
          time: "2024-3-15",
          likes: 7,
          id: 2
      }
      //更多评价
  ]
  },
  reducers: {
    addRemark(state, action) {
      state.remark.push(action.payload);
    },
    changeRemark(state, action) {
        state.remark=action.payload;
      },
  },
});

const { addRemark, changeRemark } = remarkStore.actions;

const remarkReducer = remarkStore.reducer;





export {addRemark, changeRemark };

export default remarkReducer;