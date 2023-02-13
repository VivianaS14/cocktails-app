import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const API = "https://www.thecocktaildb.com/api/json/v1/1/search.php?s=";

const getApi = createAsyncThunk("menu/getCocktails", async () => {
  return await (
    await axios.get(API)
  ).data;
});
const initialState = [];

export const menuSlice = createSlice({
  name: "menu",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getApi.fulfilled, (state, action) => {
      if (state.length === 0) {
        state.push(...action.payload.drinks);
      }
    });
  },
});

export { getApi };
export const {} = menuSlice.actions;
export default menuSlice.reducer;
