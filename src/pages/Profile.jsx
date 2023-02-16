import { Avatar } from "@mui/material";
import React from "react";
import { useSelector } from "react-redux";

const Profile = () => {
  const user = useSelector((state) => state.user);
  const [usuario] = user;

  return (
    <div className="Profile">
      <div className="Profile__content">
        <Avatar
          alt={usuario.name}
          src={usuario.photo}
          sx={{ width: 120, height: 120 }}
        />
        <h3>{usuario.name}</h3>
        <h4>{usuario.email}</h4>
      </div>
    </div>
  );
};

export default Profile;
