import React from "react";
import "./LoginForm.css";
import { FaUser, FaLock } from "react-icons/fa";
import { useFormik } from "formik";
import { z } from "zod";

const initialValues = {
  email: "",
  password: "",
};

const LoginForm = () => {
  const { values, handleBlur, handleChange, handleSubmit } = useFormik({
    initialValues,
    onSubmit: (values) => {
      console.log("Form submitted with values:", values);
    },
  });

  return (
    <div className="wrapper">
      <h1>LoginForm</h1>
      <form className="login-form" onSubmit={handleSubmit}>
        <div className="form-group">
          <input
            type="email"
            id="email"
            name="email"
            placeholder="Enter your email"
            value={values.email}
            onBlur={handleBlur}
            onChange={handleChange}
          />
          <FaUser className="icon" />
        </div>
        <div className="form-group">
          <input
            type="password"
            id="password"
            name="password"
            placeholder="Enter your password"
            value={values.password}
            onBlur={handleBlur}
            onChange={handleChange}
          />
          <FaLock className="icon" />
        </div>
        <button type="submit">Login</button>
      </form>
    </div>
  );
};
export default LoginForm;
