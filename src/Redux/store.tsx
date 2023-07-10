import { configureStore } from "@reduxjs/toolkit";
import worldSlice from "./reducers/worldSlice";

export const store = configureStore({
  reducer: {
    world: worldSlice,
  },
});

export type RootState = ReturnType<typeof store.getState>;
