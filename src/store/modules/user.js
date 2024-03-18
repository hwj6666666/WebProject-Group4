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
      state.user = action.payload;
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