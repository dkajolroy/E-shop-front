import { configureStore } from "@reduxjs/toolkit";
import cartSlice from "./CartSlice";

export const store = configureStore({
  reducer: {
    cartState: cartSlice,
  },
});

export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;
