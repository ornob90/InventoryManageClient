import React from "react";

const ShortContainer = ({ children, className }) => {
  return (
    <div className={`max-w-[1440px] mx-auto w-[90%] md:w-[70%] ${className}`}>
      {children}
    </div>
  );
};

export default ShortContainer;
