import { configureStore } from "@reduxjs/toolkit";
import playingReducer from "./playingSlice";
export const store = configureStore({
  reducer: {
    playingControls: playingReducer,
  },
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;
