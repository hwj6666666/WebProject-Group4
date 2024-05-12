import { createSlice } from "@reduxjs/toolkit";

const userStore = createSlice({
  name: "user",
  initialState: {
    user: {
      userid: 6,
      username: "jack",
      password: "123456",
    },
    isLoggedIn: false,
    id: 0,
  },
  reducers: {
    setUser(state, action) {
      state.user = state.user.filter(
        (element) => element.name !== action.payload.name
      );
      console.log(state.user);
      state.user.push({
        username: action.payload.user,
        password: action.payload.pw,
      });
      console.log(state.user);
    },
    addUser(state, action) {
      state.user.push(action.payload);
    },
    setLoggedIn(state, action) {
      state.isLoggedIn = action.payload;
    },
    setId(state, action) {
      state.id = action.payload;
    }

  },
});

const { setUser, addUser, setLoggedIn ,setId} = userStore.actions;

const userReducer = userStore.reducer;

export { setUser, addUser, setLoggedIn,setId };

export default userReducer;
