import { configureStore } from "@reduxjs/toolkit";
import tablesReducer from "../features/tables/tablesSlice";

export const store = configureStore({
  reducer: {
    tables: tablesReducer,
  },
});
