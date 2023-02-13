import { configureStore } from "@reduxjs/toolkit";
import tablesReducer from "../features/tables/tablesSlice";
import menuReducer from "../features/menu/menuSlice";

export const store = configureStore({
  reducer: {
    tables: tablesReducer,
    menu: menuReducer,
  },
});
