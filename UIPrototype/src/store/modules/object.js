import { createSlice } from "@reduxjs/toolkit";
import  {addObjectAPI, getObjectAPI, getOneObjectAPI}  from "../../apis/object"

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
      dispatch(addMyObject(object));
    }
}

const { addMyObject, changeObject } = objectStore.actions;

const ObjectReducer = objectStore.reducer;

export { addMyObject, changeObject, fetchObject, addObject, fetchOneObject};

export default ObjectReducer;