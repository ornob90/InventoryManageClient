import React from "react";

const Input = ({ type = "text", className = "", placeholder, ...props }) => {
  return (
    <input
      type={type}
      placeholder={placeholder}
      className={`border py-2 pl-4  focus:outline-none ${className}`}
      {...props}
    />
  );
};

export default Input;
