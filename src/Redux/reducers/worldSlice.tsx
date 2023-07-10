import { createSlice } from "@reduxjs/toolkit";

interface initInterface {
  active: boolean;
  world: string;
}

const initialState: initInterface = {
  active: false,
  world: "",
};

export const worlSlice = createSlice({
  name: "world",
  initialState,
  reducers: {
    setWorld: (state, action) => {
      state.active = true;
      state.world = action.payload;
    },

    removeWorld: (state) => {
      state.active = false;
    },
  },
});

export const { setWorld, removeWorld } = worlSlice.actions;
export default worlSlice.reducer;
