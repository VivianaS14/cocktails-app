import React from "react";
import { Outlet, useParams } from "react-router-dom";
import Navbar from "./Navbar";
import {
  TableBar,
  Person,
  AdminPanelSettings,
  RestaurantMenu,
  BarChart,
  Inventory,
} from "@mui/icons-material";

const menuUsers = [
  {
    id: 0,
    name: "Mesas",
    icon: <TableBar />,
    path: "/home",
  },
  {
    id: 1,
    name: "Perfil",
    icon: <Person />,
    path: "/home/profile",
  },
  {
    id: 2,
    name: "Administrador",
    icon: <AdminPanelSettings />,
    path: "/admin/login",
  },
];

const menuAdmin = [
  {
    id: 3,
    name: "Menu del Dia",
    icon: <RestaurantMenu />,
    path: "/admin/home",
  },
  {
    id: 4,
    name: "Reporte de Ventas",
    icon: <BarChart />,
    path: "/admin/home/report",
  },
  {
    id: 5,
    name: "Inventario",
    icon: <Inventory />,
    path: "/admin/home/stock",
  },
];

const Layaout = () => {
  const params = useParams();

  return (
    <div className="Main__body">
      {params.home && <Navbar menu={menuUsers} />}
      {params.admin && <Navbar menu={menuAdmin} />}
      <Outlet />
    </div>
  );
};

export default Layaout;
