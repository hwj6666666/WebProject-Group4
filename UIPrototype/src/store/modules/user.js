
import { createSlice } from "@reduxjs/toolkit";
const userStore = createSlice({
  name: "user",
  initialState: {
    user:[{
        username:'jack',
        password:'123456'
    }],
  },
  reducers: {
    setUser(state, action) {
      state.user=state.user.filter((element) => element.name !== action.payload.name);
      console.log(state.user)
      state.user.push({username:action.payload.user,password:action.payload.pw})
        console.log(state.user)
    },
    addUser(state, action) {
      state.user.push(action.payload)
    },
  },
});




const { setUser, addUser } = userStore.actions;

const userReducer = userStore.reducer;





export {setUser, addUser };

export default userReducer;