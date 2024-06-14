import { createSlice } from "@reduxjs/toolkit";
import { message } from "antd";
import  {addObjectAPI, getObjectAPI, getOneObjectAPI, deleteObjectAPI}  from "../../apis/object"

const objectStore = createSlice({
    name: "object",
    initialState: {
        object: [],
        len: 0
    },
    reducers: {
        addMyObject(state, action) {
            state.object.unshift(action.payload);
            state.len++
        },
        changeObject(state, action) {
            state.object=action.payload;
            state.len=action.payload.length;
          },
        deleteMyObject: (state, action) => {
            state.object = state.object.filter((item) => item.id !== action.payload);
            state.len--;
          },
    },
});

const fetchObject =(id)=>{ //异步方法获取topic
    return async(dispatch)=>{
      const res=await getObjectAPI(id);
      dispatch(changeObject(res));
    }
}
const fetchOneObject =(id)=>{ //异步方法获取topic
    return async(dispatch)=>{
      const res=await getOneObjectAPI(id);
      dispatch(changeObject(res));
      console.log(res);
    }
}

const addObject=(object)=>{
    return async(dispatch)=>{
      const generatedId = await addObjectAPI(object);
      object.id = generatedId;
      if(object.id != -1)dispatch(addMyObject(object));
    }
}

const deleteObject=(id)=>{
  return async (dispatch)=>{
    const res=await deleteObjectAPI(id);
    if(res.ok){
    dispatch(deleteMyObject(id));
    message.success(res.msg);
    }
  }
}

const { addMyObject, changeObject,deleteMyObject } = objectStore.actions;

const ObjectReducer = objectStore.reducer;

export { addMyObject, changeObject, fetchObject, addObject, fetchOneObject, deleteObject};

export default ObjectReducer;