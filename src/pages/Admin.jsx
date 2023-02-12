import React, { useState } from "react";
import logo from "../assets/images/img-admin.png";
import { Person, Key } from "@mui/icons-material";
import { grey } from "@mui/material/colors";
import { useForm } from "react-hook-form";
import { app } from "../firebase";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { useNavigate } from "react-router-dom";

const Admin = () => {
  const auth = getAuth(app);
  const [error, setError] = useState("");
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onLogin = (data) => {
    signInWithEmailAndPassword(auth, data.email, data.password)
      .then((userCredential) => {
        const user = userCredential.user;
      })
      .catch((error) => {
        setError(error.message);
      });
    navigate("/admin/home");
  };

  return (
    <div className="Admin">
      <div className="Admin__content">
        <div className="Admin__image">
          <img src={logo} alt="Cocktail Logo" />
        </div>
        <div className="Admin__form">
          <h2>Iniciar Sesión</h2>
          <form>
            <label htmlFor="email">
              <span>
                <Person sx={{ color: grey[800], fontSize: 45 }} />
              </span>
              <input
                type="email"
                name="email"
                placeholder="Correo Electrónico"
                {...register("email", { required: true })}
              />
              {errors.email && <p className="error">Correo es obligatorio.</p>}
              {error && <p className="error">Correo invalido.</p>}
            </label>
            <label htmlFor="password">
              <span>
                <Key sx={{ color: grey[800], fontSize: 45 }} />
              </span>
              <input
                type="password"
                name="password"
                placeholder="Contraseña"
                {...register("password", {
                  required: true,
                  minLength: 6,
                  maxLength: 20,
                })}
              />
              {errors.password && (
                <p className="error">Contraseña es obligatoria.</p>
              )}
              {error && <p className="error">Contraseña invalida.</p>}
            </label>
          </form>
          <div className="Admin__button">
            <button type="button" onClick={handleSubmit(onLogin)}>
              Iniciar Sesión
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Admin;
