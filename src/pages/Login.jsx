import React, { useState } from "react";
import logo from "../assets/images/img-logo.png";
import { Person, Key } from "@mui/icons-material";
import { grey } from "@mui/material/colors";
import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { app } from "../firebase";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";

const Login = () => {
  const auth = getAuth(app);
  const [error, setError] = useState("");
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onRegister = () => navigate("/");

  const onLogin = (data) => {
    signInWithEmailAndPassword(auth, data.email, data.password)
      .then((userCredential) => {
        const user = userCredential.user;
      })
      .catch((error) => {
        setError(error.message);
      });
    navigate("/home");
  };

  return (
    <div className="Login">
      <div className="Login__image">
        <img src={logo} alt="Cocktail Logo" width="200px" />
      </div>
      <div className="Login__form">
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
        <div className="Login__button">
          <button type="button" onClick={handleSubmit(onLogin)}>
            Iniciar Sesión
          </button>
        </div>
      </div>
      <div className="Login__footer">
        <p>
          ¿Aun no tienes una cuenta?{" "}
          <span onClick={onRegister}>¡Registrate!</span>
        </p>
      </div>
    </div>
  );
};

export default Login;
