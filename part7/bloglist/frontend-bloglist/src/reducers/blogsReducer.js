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
    replaceBlog(state, action) {
      const replaced = action.payload;
      return state.map((s) => (s.id === replaced.id ? replaced : s));
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
export const likeBlog = (object) => {
  const toLike = { ...object, likes: object.likes + 1 };
  return async (dispatch) => {
    const blog = await blogService.update(toLike);
    dispatch(replaceBlog(blog));
  };
};

export const { addBlog, setBlogs, replaceBlog } = sclice.actions;
export default sclice.reducer;
