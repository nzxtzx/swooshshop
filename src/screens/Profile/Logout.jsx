import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { logout } from "../../redux/slices/auth.slice";
import { useNavigate } from "react-router-dom";
import Button from "../../components/ui/Buttons/Button";

const Logout = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const logoutHandler = () => {
    dispatch(logout());
    navigate("/");
  };

  return (
    <div className="profile-logout">
      <h1>Logging out of the account</h1>
      <Button buttonText="Logout" buttonHandler={logoutHandler}/>
    </div>
  );
};

export default Logout;
