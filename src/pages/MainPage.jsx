import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import logo from "../assets/images/img-logo.png";

const MainPage = () => {
  const navigate = useNavigate();

  const goUser = () => {
    navigate("/register");
  };

  const goAdmin = () => {
    navigate("/admin/login");
  };

  return (
    <div className="MainPage">
      <div className="MainPage__image">
        <img src={logo} alt="Cocktail Logo" width="200px" />
      </div>
      <div className="MainPage__buttons">
        <button onClick={goUser}>User</button>
        <button onClick={goAdmin} className="btn-admin">
          Admin
        </button>
      </div>
    </div>
  );
};

export default MainPage;
