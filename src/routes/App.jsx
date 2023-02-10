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
import Menu from "../pages/Menu";
import Stock from "../pages/Stock";

const App = () => {
  return (
    <div className="Main">
      <Routes>
        <Route path="/" element={<Register />} />
        <Route path="/login" element={<Login />} />
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
    </div>
  );
};

export default App;
