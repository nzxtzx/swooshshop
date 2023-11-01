import React from "react";

const Button = ({buttonText, buttonHandler}) => {
  return <button className="button"  onClick={buttonHandler}><span>{buttonText}</span></button>;
};

export default Button;
