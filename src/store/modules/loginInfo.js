import { createSlice } from "@reduxjs/toolkit";
const loginStore = createSlice({
  name: "login",
  initialState: {
    login:false
  },
  reducers: {
    setLogin(state, action) {
      state.login = action.payload;
    },
    clearLogin(state) {
      state.login = false;
    },
  },
});

const { setLogin, clearLogin } = loginStore.actions;

const loginReducer = loginStore.reducer;





export {setLogin, clearLogin };

export default loginReducer;