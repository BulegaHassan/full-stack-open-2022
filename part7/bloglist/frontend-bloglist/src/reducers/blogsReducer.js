import { createSlice } from "@reduxjs/toolkit";
import blogService from "../services/blogService";

const sclice = createSlice({
  name: "blogs",
  initialState: [],
  reducers: {
    addBlog(state, action) {
      return state.concat(action.payload);
    },
    setBlogs(state, action) {
      return action.payload;
    },
  },
});

export const initializeBlogs = () => {
  return async (dispatch) => {
    const blogs = await blogService.getAll();
    dispatch(setBlogs(blogs));
  };
};

export const createBlog = (object) => {
  return async (dispatch) => {
    const newBlog = await blogService.create(object);
    dispatch(addBlog(newBlog));
  };
};

export const { addBlog, setBlogs } = sclice.actions;
export default sclice.reducer;
