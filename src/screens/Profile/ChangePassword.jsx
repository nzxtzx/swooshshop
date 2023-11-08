import React, { useState, useEffect } from "react";
import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import { fetchEditPassword } from "../../redux/slices/auth.slice";

import Button from "../../components/ui/Buttons/Button";
import { useNavigate } from "react-router-dom";

const ChangePassword = () => {
  const dispatch = useDispatch();
  const editingData = useSelector((state) => state.auth.data);
  const navigate = useNavigate();
  const [inputClasses, setInputClasses] = useState({ oldPassword: "" });
  const [labelClasses, setLabelClasses] = useState({ oldPassword: "" });
  const [errorMessage, setErrorMessage] = useState("");

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors, isValid },
  } = useForm({
    defaultValues: {
      newPassword: "",
      oldPassword: "",
      repeatNewPassword: "",
    },
    mode: "onSubmit",
  });

  const handleChangePasswordError = () => {
    setInputClasses((prevClasses) => ({
      ...prevClasses,
      oldPassword: "input-error",
    }));
  
    setLabelClasses((prevClasses) => ({
      ...prevClasses,
      oldPassword: "label-error",
    }));
  
    setErrorMessage("Something has gone wrong. Please check the data entered");
  };

  const handleChangePassword = async (formData) => {
    try {
      const editedPassword = await dispatch(fetchEditPassword({ id: editingData._id, params: formData }));
      
      if (!editedPassword.payload) {
        handleChangePasswordError();
        return false;
      }
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className="profile-password">
      <h1>Change password</h1>
      <form className="profile-password__form profile-form" onSubmit={handleSubmit(handleChangePassword)}>
        {errorMessage && <p className="error-message">{errorMessage}</p>}
        <p className="password-form__text form-text">
          Current password<span>*</span>
        </p>
        <label className={`password-form__label form__label ${errors.oldPassword ? "error-label" : ""} ${labelClasses.oldPassword}`}>
          <input type="password" className={`password-form__input form__input ${errors.oldPassword ? "input-error" : ""} ${inputClasses.oldPassword}`}  placeholder={errors.oldPassword ? errors.oldPassword.message : "Enter your current password"} {...register("oldPassword", { required: "Enter your current password".toUpperCase() })} />
        </label>

        <p className="password-form__text form-text">
          New password<span>*</span>
        </p>
        <label className={`password-form__label form__label ${errors.newPassword ? "error-label" : ""}`}>
          <input
            type="password"
            className={`password-form__input form__input 
          ${errors.newPassword ? "input-error" : ""}`}
            placeholder="Enter your new password"
            {...register("newPassword", { required: "Enter your new password".toUpperCase() })}
          />
        </label>

        <p className="password-form__text form-text">
          Repeat new password<span>*</span>
        </p>
        <label className={`password-form__label form__label ${errors.repeatNewPassword ? "error-label" : ""}`}>
          <input
            type="password"
            className={`password-form__input form__input 
          ${errors.repeatNewPassword ? "input-error" : ""}`}
            placeholder="Repeat new password"
            {...register("repeatNewPassword", {
              required: "Repeat new password".toUpperCase(),
              validate: (value) => {
                if (value === "") {
                  return (errors.repeatNewPassword.message = "Repeat your password".toUpperCase());
                } else if (watch("newPassword") != value) {
                  return (errors.repeatNewPassword.message = "Passwords do not match".toUpperCase());
                }
                return true;
              },
            })}
          />
        </label>
        <Button buttonText="Change password" />
      </form>
    </div>
  );
};

export default ChangePassword;
