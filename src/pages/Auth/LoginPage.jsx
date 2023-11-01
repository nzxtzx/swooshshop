import React, { useState, useEffect } from "react";
import { Link, Navigate, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useForm } from "react-hook-form";
import { fetchAuth, selectIsAuth } from "../../redux/slices/auth.slice";
import Checkbox from "../../components/ui/Checkbox";

const LoginPage = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const userData = useSelector((state) => state.auth.data);
  const [rememberMe, setRememberMe] = useState(false);
  const [isChecked, setIsChecked] = useState();
  const [inputClasses, setInputClasses] = useState({ email: "", password: "" });
  const [labelClasses, setLabelClasses] = useState({ email: "", password: "" });
  const [errorMessage, setErrorMessage] = useState("");
  const isAuth = useSelector(selectIsAuth);

  const {
    register,
    handleSubmit,
    formState: { errors, isValid },
  } = useForm({
    defaultValues: {
      email: "",
      password: "",
    },
    mode: "onSubmit",
  });

  const handleRememberMeChange = (event) => {
    setRememberMe(event.target.checked);
  };


  const handleAuthError = () => {
    setInputClasses((prevClasses) => ({
      ...prevClasses,
      email: "form-input__error",
      password: "form-input__error",
    }));
  
    setLabelClasses((prevClasses) => ({
      ...prevClasses,
      email: "form-label__error",
      password: "form-label__error",
    }));
  
    setErrorMessage("Something has gone wrong. Please check the data entered");
  };

  const onSubmit = async (values) => {
    try {
      const data = await dispatch(fetchAuth(values));
  
      if (!data.payload) {
        handleAuthError();
        return false;
      }
  
      if (rememberMe && "token" in data.payload) {
        window.localStorage.setItem("token", data.payload.token);
      }
  
    } catch (err) {
      console.error("An error occurred:", err);
    }
  };

  useEffect(() => {
    if (isAuth) {
      navigate("/");
    }
  }, [isAuth, navigate]);

  return (
    <div className="login">
      <div className="login-container">
        <h1 className="login-title">Authorization</h1>
        <div className="login-content">
          <form className="login-form" onSubmit={handleSubmit(onSubmit)}>
            <div className="login-messages">
              {errors.email && <p className="login-message">{errors.email.message}</p>}
              {errors.password && <p className="login-message">{errors.password.message}</p>}
              {errorMessage && <p className="error-message">{errorMessage}</p>}
            </div>
            <p className="login-form__text form-text">
              Email<span>*</span>
            </p>
            <label className={`login-form__label form-label ${errors.email ? "error-label" : ""} ${labelClasses.email}`}>
              <input id="email" type="email" className={`login-form__input form-input ${errors.email ? "input__error" : ""} ${inputClasses.email}`} placeholder="Enter your email" {...register("email", { required: "ENTER YOUR EMAIL" })} />
            </label>
            <p className="login-form__text form-text">
              Password<span>*</span>
            </p>
            <label className={`login-form__label form-label ${errors.password ? "error-label" : ""} ${labelClasses.password}`}>
              <input type="password" className={`login-form__input form-input ${errors.email ? "input__error" : ""} ${inputClasses.password}`} placeholder="Enter your password" {...register("password", { required: "ENTER YOUR PASSWORD" })} />
            </label>
            <button className="login-form__button restore-button">Restore password</button>
            <button type="submit" className="login-form__button authorization-button">
              Login
            </button>
            <div className="remember">
              <label className="checkbox">
                <input type="checkbox" checked={rememberMe} onChange={handleRememberMeChange} />
                <span className={`checkbox-mark${rememberMe ? " checkbox-mark__checked" : ""}`}>
                  <svg xmlns="http://www.w3.org/2000/svg" width="12" height="9" viewBox="0 0 12 9" fill="none">
                    <path d="M1.5 5L4.5 8L10.5 2" stroke="white" stroke-width="2" stroke-linecap="square" stroke-linejoin="round" />
                  </svg>
                </span>
              </label>
              <p>Remember me</p>
            </div>
          </form>
          <div className="login-text">
            <h1 className="login-text__title">You don't have an account yet?</h1>
            <p className="login-text__text">
              <span>Registering online</span> allows you to access your order status and history. Simply fill out the fields below and you will receive an account.
            </p>
            <p className="login-text__text">We only ask you for the information you need to make the buying process faster and easier.</p>
            <Link to="/register">
              <button className="login-text__button register-button">Register now</button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
