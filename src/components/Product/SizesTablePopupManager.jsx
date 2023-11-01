import React, { useState, useEffect } from "react";
import ReactDOM from "react-dom";

const SizesTablePopupManager = ({ children, isOpen }) => {
  useEffect(() => {
    if (isOpen) {
      const scrollbarWidth = window.innerWidth - document.documentElement.clientWidth;
      document.body.style.overflow = "hidden";
      document.body.style.marginRight = `${scrollbarWidth}px`;
    } else {
      document.body.style.overflow = "visible";
      document.body.style.marginRight = "0";
    }
    
    return () => {
      document.body.style.overflow = "visible";
      document.body.style.marginRight = "0";
    };
  }, [isOpen]);

  return ReactDOM.createPortal(children, document.body);
};

export default SizesTablePopupManager;