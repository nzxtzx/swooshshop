import React, { useState } from "react";
import { Link, Navigate, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useForm } from "react-hook-form";
import { fetchRegister } from "../../redux/slices/auth.slice";

const RegisterPage = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors, isValid },
  } = useForm({
    defaultValues: {
      email: "",
      fullName: "",
      phoneNumber: "",
      password: "",
      confirmPassword: "",
    },
    mode: "onSubmit",
  });

  const onSubmit = (values) => {
    dispatch(fetchRegister(values));
    navigate("/")
  };

  return (
    <div className="login">
      <div className="login-container">
        <h1 className="login-title">Registration</h1>
        <div className="login-content">
          <form className="login-form" onSubmit={handleSubmit(onSubmit)}>
            <div className="login-messages">
              {errors.email && (
                <p className="login-message">{errors.email.message}</p>
              )}
              {errors.fullName && (
                <p className="login-message">{errors.fullName.message}</p>
              )}
              {errors.phoneNumber && (
                <p className="login-message">{errors.phoneNumber.message}</p>
              )}
              {errors.password && (
                <p className="login-message">{errors.password.message}</p>
              )}
              {errors.confirmPassword && (
                <p className="login-message">
                  {errors.confirmPassword.message}
                </p>
              )}
              {errors.checkbox && (
                <p className="login-message">
                  {errors.checkbox.message}
                </p>
              )}
            </div>
            <p className="login-form__text form-text">
              Email<span>*</span>
            </p>
            <label
              htmlFor=""
              className={`login-form__label form-label ${
                errors.email ? "error-label" : ""
              }`}
            >
              <input
                type="email"
                className={`login-form__input form-input ${
                  errors.email ? "form-input__error" : ""
                }`}
                placeholder="Enter your email"
                {...register("email", {
                  required: "Email is required".toUpperCase(),
                })}
              />
            </label>
            <p className="login-form__text form-text">
              Full Name<span>*</span>
            </p>
            <label
              className={`login-form__label form-label ${
                errors.fullName ? "error-label" : ""
              }`}
            >
              <input
                type="text"
                className={`login-form__input form-input ${
                  errors.fullName ? "form-input__error" : ""
                }`}
                placeholder="Enter your full name"
                {...register("fullName", {
                  required: "Full name is required".toUpperCase(),
                })}
              />
            </label>
            <p className="login-form__text form-text">
              Phone number<span>*</span>
            </p>
            <label
              className={`login-form__label form-label ${
                errors.phoneNumber ? "error-label" : ""
              }`}
            >
              <input
                type="tel"
                className={`login-form__input form-input ${
                  errors.phoneNumber ? "form-input__error" : ""
                }`}
                placeholder="Enter your phone number"
                {...register("phoneNumber", {
                  required: "Phone number is required".toUpperCase(),
                })}
              />
            </label>
            <p className="login-form__text form-text">
              Password<span>*</span>
            </p>
            <label
              className={`login-form__label form-label ${
                errors.password ? "error-label" : ""
              }`}
            >
              <input
                type="password"
                className={`login-form__input form-input ${
                  errors.password ? "form-input__error" : ""
                }`}
                placeholder="Enter your password"
                {...register("password", {
                  required: "Password is required".toUpperCase(),
                })}
              />
            </label>
            <p className="login-form__text form-text">
              Repeat password<span>*</span>
            </p>
            <label
              className={`login-form__label form-label ${
                errors.confirmPassword ? "error-label" : ""
              }`}
            >
              <input
                type="password"
                className={`login-form__input form-input ${
                  errors.confirmPassword ? "form-input__error" : ""
                }`}
                placeholder="Repeat your password"
                {...register("confirmPassword", {
                  required: "Repeating your password is required".toUpperCase(),
                  validate: (value) => {
                    if (value === "") {
                      return (errors.confirmPassword.message =
                        "Repeat your password".toUpperCase());
                    } else if (watch("password") != value) {
                      return (errors.confirmPassword.message =
                        "Passwords do not match".toUpperCase());
                    }
                    return true;
                  },
                })}
              />
            </label>
            <button
              type="submit"
              className="login-form__button authorization-button"
            >
              create an account
            </button>
          </form>
          <div className="login-text">
            <h1 className="login-text__title">You already have an account?</h1>
            <p className="login-text__text">
              Proceed to <span>authorization</span> if you already have a
              registered account.
            </p>
            <Link to="/login">
              <button className="login-text__button register-button">
                Login now
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RegisterPage;
