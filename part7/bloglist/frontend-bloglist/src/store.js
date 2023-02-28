import { configureStore } from "@reduxjs/toolkit";

import notificationReducer from "./reducers/notificationReducer";
import blogsReducer from "./reducers/blogsReducer";
import usersReducer from "./reducers/usersReducer";
export default configureStore({
  reducer: {
    blogs: blogsReducer,
    users: usersReducer,
    notification: notificationReducer,
  },
});
