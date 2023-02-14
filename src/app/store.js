import { configureStore } from "@reduxjs/toolkit";
import tablesReducer from "../features/tables/tablesSlice";
import menuReducer from "../features/menu/menuSlice";
import dailyReducer from "../features/dailySlice/dailySlice";

export const store = configureStore({
  reducer: {
    tables: tablesReducer,
    menu: menuReducer,
    daily: dailyReducer,
  },
});
