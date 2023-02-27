import { configureStore } from "@reduxjs/toolkit";

import notificationReducer from "./reducers/notificationReducer";
import blogsReducer from "./reducers/blogsReducer";
export default configureStore({
  reducer: {
    blogs: blogsReducer,
    notification: notificationReducer,
  },
});
