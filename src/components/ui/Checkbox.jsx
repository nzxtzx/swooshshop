import React, { useState } from "react";

const Checkbox = ({ isChecked, onToggle }) => {
    const checkboxStyle = {
      backgroundColor: isChecked ? "black" : "white",
      border: isChecked ? "1px solid black" : "1px solid #D6D6D6",
      width: "1.375rem",
      height: "1.375rem",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      cursor: "pointer",
      transition: "0.3s",
    };
  
    const checkmarkStyle = {
      color: isChecked ? "white" : "transparent",
    };
  
    const toggleCheckbox = () => {
      onToggle(!isChecked);
    };
  
    return (
      <div style={checkboxStyle} onClick={toggleCheckbox}>
        <span style={checkmarkStyle}>
          <svg xmlns="http://www.w3.org/2000/svg" width="12" height="9" viewBox="0 0 12 9" fill="none">
            <path d="M1.5 5L4.5 8L10.5 2" stroke="white" stroke-width="2" stroke-linecap="square" stroke-linejoin="round" />
          </svg>
        </span>
      </div>
    );
  };
  
  export default Checkbox;