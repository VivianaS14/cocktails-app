import { createSlice } from "@reduxjs/toolkit";

const initialState = [];

export const dailySlice = createSlice({
  name: "daily",
  initialState,
  reducers: {
    addDaily: (state, action) => {
      state.push(action.payload);
    },
    deleteDaily: (state, action) => {
      const menuFound = state.find((menu) => menu.id === action.payload);
      if (menuFound) {
        state.splice(state.indexOf(menuFound), 1);
      }
    },
  },
});

export const { addDaily, deleteDaily } = dailySlice.actions;
export default dailySlice.reducer;
