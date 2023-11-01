import React from "react";
import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import { fetchEditMe } from "../../redux/slices/auth.slice";
import { useNavigate } from "react-router-dom";

import Button from "../../components/ui/Buttons/Button";
import { useState } from "react";

const EditProfile = () => {
  const dispatch = useDispatch();
  const editingData = useSelector((state) => state.auth.data);
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    formState: { errors, isValid },
  } = useForm({
    defaultValues: {
      email: "",
      fullName: "",
      phoneNumber: "",
    },
    mode: "onSubmit",
  });

  const handleSaveChanges = async (formData) => {
    try {
      const editedData = await dispatch(fetchEditMe({ id: editingData._id, params: formData }));
      navigate("/profile/account")
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className="profile-edit">
      <h1>Editing profile</h1>
      <form className="profile-edit__form profile-form" onSubmit={handleSubmit(handleSaveChanges)}>
        <p className="edit-form__text form-text">
          Email<span>*</span>
        </p>
        {errors.email && <p className="edit-message">{errors.email.message}</p>}
        <label className={`edit-form__label form__label ${errors.email ? "error-label" : ""}`}>
          <input
            type="email"
            className={`edit-form__input form__input 
          ${errors.email ? "input-error" : ""}`}
            placeholder="Enter your new email"
            {...register("email", { required: "Enter your new email".toUpperCase() })}
          />
        </label>
        <p className="edit-form__text form-text">
          Full name<span>*</span>
        </p>
        {errors.fullName && <p className="edit-message">{errors.fullName.message}</p>}
        <label className={`edit-form__label form__label ${errors.fullName ? "error-label" : ""}`}>
          <input
            type="text"
            className={`edit-form__input form__input 
          ${errors.fullName ? "input-error" : ""}`}
            placeholder="Enter your new email"
            {...register("fullName", { required: "Enter your new name".toUpperCase() })}
          />
        </label>
        <p className="edit-form__text form-text">
          Phone number<span>*</span>
        </p>
        {errors.phoneNumber && <p className="edit-message">{errors.phoneNumber.message}</p>}
        <label className={`edit-form__label form__label ${errors.phoneNumber ? "error-label" : ""}`}>
          <input
            type="tel"
            className={`edit-form__input form__input 
          ${errors.phoneNumber ? "input-error" : ""}`}
            placeholder="Enter your new phone number"
            {...register("phoneNumber", { required: "Enter your new phone number".toUpperCase() })}
          />
        </label>
        <Button buttonText="Save changes" />
      </form>
    </div>
  );
};

export default EditProfile;
