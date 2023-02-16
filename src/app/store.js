import { configureStore } from "@reduxjs/toolkit";
import userReducer from "../features/user/userSlice";
import menuReducer from "../features/menu/menuSlice";
import dailyReducer from "../features/daily/dailySlice";
import orderReducer from "../features/order/orderSlice";

export const store = configureStore({
  reducer: {
    user: userReducer,
    menu: menuReducer,
    daily: dailyReducer,
    order: orderReducer,
  },
});
