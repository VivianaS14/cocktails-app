import { createSlice } from "@reduxjs/toolkit";

const initialState = [];

export const dailySlice = createSlice({
  name: "daily",
  initialState,
  reducers: {
    addDaily: (state, action) => {
      state.push(action.payload);
    },
  },
});

export const { addDaily } = dailySlice.actions;
export default dailySlice.reducer;
