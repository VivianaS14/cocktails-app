import React from "react";
import { Route, Routes } from "react-router-dom";
import Login from "../pages/Login";
import Register from "../pages/Register";
import Home from "../pages/Home";
import Layaout from "../containers/Layaout";
import Table from "../pages/Table";
import Admin from "../pages/Admin";
import Order from "../pages/Order";
import Invoice from "../pages/Invoice";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="/register" element={<Register />} />
      <Route path="/home" element={<Layaout />}>
        <Route path="/home" element={<Home />} />
        <Route path="/home/table/:id" element={<Table />} />
        <Route path="/home/table/order/:id" element={<Order />} />
        <Route path="/home/table/invoice/:id" element={<Invoice />} />
      </Route>
      <Route path="/admin" element={<Admin />} />
      <Route path="/admin/home" element={<Layaout />}>
        <Route path="/admin/home/menu" element={<Menu />} />
        <Route path="/admin/home/stock" element={<Stock />} />
      </Route>
    </Routes>
  );
};

export default App;
