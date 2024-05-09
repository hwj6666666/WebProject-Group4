import { createSlice } from "@reduxjs/toolkit";
import  {AddClassAPI, ClassAPI}  from "../../apis/class"
const classStore = createSlice({
  name: "class",
  initialState: {
    class: [],
      len:0,
  },
  
  reducers: {
    addMyClass(state, action) {
      state.class.push(action.payload);
      state.len++
    },
    changeClass(state, action) {
        state.class=action.payload;
        state.len=action.payload.length;
      },
  },
});
const fetchClass =()=>{ //异步方法获取class
  return async(dispatch)=>{
    const res=await ClassAPI();
    dispatch(changeClass(res));
  }
}
const addClass=(type)=>{
  console.log(type);
  return async(dispatch)=>{
    await AddClassAPI(type);
    dispatch(addMyClass(type));
  }
}

const { addMyClass, changeClass } = classStore.actions;


const classReducer = classStore.reducer;



export { addClass,addMyClass, changeClass,fetchClass };

export default classReducer;
