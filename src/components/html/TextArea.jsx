import React from "react";

const TextArea = ({ className, ...props }) => {
  return (
    <textarea
      className={`px-2 pt-2 border focus:outline-none ${className}`}
      {...props}
    ></textarea>
  );
};

export default TextArea;
