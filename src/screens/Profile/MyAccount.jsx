import React from "react";
import { useSelector } from "react-redux";
import { selectIsAuth } from "../../redux/slices/auth.slice";

const MyAccount = () => {
  const isAuthenticated = useSelector(selectIsAuth);
  const userData = useSelector((state) => state.auth.data);

  function getFirstName(fullName) {
    if (fullName) {
      const words = fullName.split(" ");

      return words.length > 0 ? words[1] : "";
    }
    return "";
  }

  console.log(userData);

  return (
    <div className="account">
     {userData ? (
        <h1>
          Welcome, {getFirstName(userData.fullName)}!
        </h1>
      ) : (
        <h1>You are not authorized</h1>
      )}
    </div>
  );
};

export default MyAccount;
