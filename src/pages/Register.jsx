import React, { useEffect, useState } from "react";
import logo from "../assets/images/img-logo.png";
import { grey } from "@mui/material/colors";
import { Person, Key } from "@mui/icons-material";
import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { app } from "../firebase";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import Swal from "sweetalert2";

const Register = () => {
  const auth = getAuth(app);
  const [error, setError] = useState("");
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onLogin = () => navigate("/login");

  const onRegister = (data) => {
    createUserWithEmailAndPassword(auth, data.email, data.password)
      .then((userCredential) => {
        const user = userCredential.user;
        Swal.fire(
          "Correo Registrado!",
          "Ya te encuentras registrado, te redirigimos para que inicies sesión!",
          "success"
        );
        navigate("/login");
      })
      .catch((error) => setError(error.message));
  };

  return (
    <div className="Register">
      <div className="Register__image">
        <img src={logo} alt="Cocktail Logo" width="200px" />
      </div>
      <div className="Register__form">
        <h2>¡Registrate!</h2>
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
            {error && <p className="error">Correo invalido o ya registrado.</p>}
          </label>
          <label htmlFor="name">
            <span>
              <Person sx={{ color: grey[800], fontSize: 45 }} />
            </span>
            <input
              type="text"
              name="name"
              placeholder="Nombre Completo"
              {...register("name", { required: true })}
            />
            {errors.name && <p className="error">Nombre es obligatorio.</p>}
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
              <p className="error">
                Contraseña debe ser de al menos 6 caracteres.
              </p>
            )}
          </label>
        </form>
        <div className="Register__button">
          <button type="button" onClick={handleSubmit(onRegister)}>
            Registrarse
          </button>
        </div>
      </div>
      <div className="Register__footer">
        <p>
          ¿Ya tienes cuenta? <span onClick={onLogin}>¡Inicia Sesión!</span>
        </p>
      </div>
    </div>
  );
};

export default Register;
