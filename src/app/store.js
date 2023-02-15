import { configureStore } from "@reduxjs/toolkit";
import userReducer from "../features/user/userSlice";
import tablesReducer from "../features/tables/tablesSlice";
import menuReducer from "../features/menu/menuSlice";
import dailyReducer from "../features/daily/dailySlice";

export const store = configureStore({
  reducer: {
    user: userReducer,
    tables: tablesReducer,
    menu: menuReducer,
    daily: dailyReducer,
  },
});
