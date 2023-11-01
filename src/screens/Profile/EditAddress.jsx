import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import Button from "../../components/ui/Buttons/Button";
import { fetchAddress, fetchEditAddress } from "../../redux/slices/auth.slice";
import { useNavigate } from "react-router-dom";

const EditAddress = () => {
  const dispatch = useDispatch();
  const userData = useSelector((state) => state.auth.data);
  const navigate = useNavigate();
  const [inputClasses, setInputClasses] = useState({ oldPassword: "" });
  const [labelClasses, setLabelClasses] = useState({ oldPassword: "" });
  const [errorMessage, setErrorMessage] = useState("");

  const isEditing = userData && userData.address && Object.keys(userData.address).length > 0;

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors, isValid },
  } = useForm({
    defaultValues: {
      country: "",
      city: "",
      street: "",
      postalCode: "",
      houseNumber: "",
    },
    mode: "onSubmit",
  });

  console.log(isEditing)

  const handleAddress = async (formData) => {
    try {
      console.log("formData:", formData);
      const cleanedFormData = {
        ...formData,
        country: formData.country?.trim() || "",
        city: formData.city?.trim() || "",
        postalCode: String(formData.postalCode)?.trim() || "",
        street: formData.street?.trim() || "",
        houseNumber: formData.houseNumber?.replace(/,\s*/g, "/") || "",
      }; 

      if (isEditing) {
        const userAddress = await dispatch(fetchEditAddress({ id: userData._id, params: cleanedFormData }));
      } else {
        const userEditAddress = await dispatch(fetchAddress({ id: userData._id, params: cleanedFormData }));
      }
  
      navigate("/profile/address");
    } catch (err) {
      console.log(err);
    }
  }

  console.log(userData);
  return (
    <div className="adress-edit">
      <h1>{isEditing ? "Editing address" : "Adding address"}</h1>
      <form className="profile-password__form address-form profile-form" onSubmit={handleSubmit(handleAddress)}>
        <div className="form-row first-form__row">
          <div className="form-field first-form__field">
            <p className="address-form__text form-text">
              Country<span>*</span>
            </p>
            {errors.country && <p className="edit-message">{errors.country.message}</p>}
            <label className={`address-form__label form__label adress-label ${errors.country ? "error-label" : ""}`}>
              <input
                type="text"
                className={`address-form__input form__input adress-input
          ${errors.country ? "input-error" : ""}`}
                placeholder="Enter your country"
                {...register("country", {
                  required: "Entering your country is required".toUpperCase(),
                })}
              />
            </label>
          </div>

          <div className="form-field second-form__field">
            <p className="address-form__text form-text">
              City<span>*</span>
            </p>
            {errors.city && <p className="edit-message">{errors.city.message}</p>}
            <label className={`address-form__label form__label ${errors.city ? "error-label" : ""}`}>
              <input
                type="text"
                className={`address-form__input form__input 
          ${errors.city ? "input-error" : ""}`}
                placeholder="Enter your city"
                {...register("city", {
                  required: "Entering your city is required".toUpperCase(),
                })}
              />
            </label>
          </div>
        </div>

        <div className="form-row second-form__row">
          <div className="form-field third-form__field">
            <p className="address-form__text form-text">
              Street<span>*</span>
            </p>
            {errors.street && <p className="edit-message">{errors.street.message}</p>}
            <label className={`address-form__label form__label ${errors.street ? "error-label" : ""}`}>
              <input
                type="text"
                className={`address-form__input form__input 
          ${errors.street ? "input-error" : ""}`}
                placeholder="Enter your street"
                {...register("street", {
                  required: "Entering your street is required".toUpperCase(),
                })}
              />
            </label>
          </div>

          <div className="form-field fourth-form__field">
            <p className="address-form__text form-text">
              Index<span>*</span>
            </p>
            {errors.postalCode && <p className="edit-message">{errors.postalCode.message}</p>}
            <label className={`address-form__label form__label ${errors.postalCode ? "error-label" : ""}`}>
              <input
                type="text"
                className={`address-form__input form__input 
          ${errors.postalCode ? "input-error" : ""}`}
                placeholder="Enter your post index"
                {...register("postalCode", {
                  required: "Entering post index is required".toUpperCase(),
                })}
              />
            </label>
          </div>
        </div>

        <p className="address-form__text form-text">
          House number \ Apartment<span>*</span>
        </p>
        {errors.houseNumber && <p className="edit-message">{errors.houseNumber.message}</p>}
        <label className={`address-form__label form__label last-label ${errors.houseNumber ? "error-label" : ""}`}>
          <input
            type="text"
            className={`address-form__input form__input 
          ${errors.houseNumber ? "input-error" : ""}`}
            placeholder="For axample 37/2, apt.34"
            {...register("houseNumber", {
              required: "Entering house number is required".toUpperCase(),
            })}
          />
        </label>

        <Button buttonText={isEditing ? "Edit address" : "Add addresss"} />
      </form>
    </div>
  );
};

export default EditAddress;
