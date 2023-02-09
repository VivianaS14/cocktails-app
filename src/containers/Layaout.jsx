import React from "react";
import { Outlet } from "react-router-dom";

const Layaout = () => {
  return (
    <div>
      <h3>Nav bar</h3>
      <Outlet />
    </div>
  );
};

export default Layaout;
