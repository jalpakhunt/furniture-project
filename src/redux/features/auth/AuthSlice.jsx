import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  user: JSON.parse(localStorage.getItem("user")) || {},
  token: JSON.parse(localStorage.getItem("token")) || "",
  err: "",
};


const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    login: (state, { payload }) => {
        localStorage.setItem("token",JSON.stringify(payload?.token))
        localStorage.setItem("user",JSON.stringify(payload?.data))
      state.token = payload?.token;
      state.user = payload?.data;
    },
    logout: (state) => {
      state.user = {};
      state.token = "";
      localStorage.clear();
    },
  },
});
export default authSlice.reducer;
export const { login, logout } = authSlice.actions;
