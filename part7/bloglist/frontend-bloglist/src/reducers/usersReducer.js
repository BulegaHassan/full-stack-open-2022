import { createSlice } from "@reduxjs/toolkit";
import usersServices from "../services/usersServices";

const sclice = createSlice({
  name: "users",
  initialState: [],
  reducers: {
    setUsers(state, action) {
      return action.payload;
    },
  },
});

export const initializeUsers = () => {
  return async (dispatch) => {
    const users = await usersServices.getAll();
    dispatch(setUsers(users));
  };
};

export const { setUsers } = sclice.actions;
export default sclice.reducer;
