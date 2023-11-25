import React from "react";

const TextArea = ({ className, ...props }) => {
  return (
    <textarea
      className={`px-2 pt-2 focus:outline-none ${className}`}
      {...props}
    ></textarea>
  );
};

export default TextArea;
