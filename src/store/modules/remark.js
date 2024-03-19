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
          time: "2024-03-15  04:25",
          likes: 50,
          id: 0
      },
      {
          username: "用户666",
          photo: "",
          comment: "一餐很好啊，选择也挺多的",
          score: "5.0",
          time: "2024-03-11  17:25",
          likes: 13,
          id: 1
      },
      {
          username: "用户1919810",
          photo: "",
          comment: "感觉不如二餐，就算排队也要去二餐",
          score: "2.0",
          time: "2024-03-08  09:25",
          likes: 7,
          id: 2
      }
      //更多评价
  ],
    remarkLen:3
  },
  reducers: {
    addRemark(state, action) {
      state.remark.unshift(action.payload);
      state.len++
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

// export default remarkReducer;name: "remark",
//   initialState: {
//     remark:[
//       {
//           username: "用户114514",
//           photo: "",
//           comment: "还可以吧，虽然不算最好吃的",
//           score: "4.0",
//           time: "2024-03-15  04:25",
//           likes: 50,
//           id: 0
//       },
//       {
//           username: "用户666",
//           photo: "",
//           comment: "一餐很好啊，选择也挺多的",
//           score: "5.0",
//           time: "2024-03-11  17:25",
//           likes: 13,
//           id: 1
//       },
//       {
//           username: "用户1919810",
//           photo: "",
//           comment: "感觉不如二餐，就算排队也要去二餐",
//           score: "2.0",
//           time: "2024-03-08  09:25",
//           likes: 7,
//           id: 2
//       }
//       //更多评价
//   ],
//     remarkLen:3
//   },