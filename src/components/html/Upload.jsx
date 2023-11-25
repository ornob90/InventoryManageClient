import React from "react";
import { FaUpload } from "react-icons/fa";
const Upload = ({ placeHolder }) => {
  return (
    <>
      <label
        htmlFor="fileInput"
        className="flex items-center gap-2 px-4 py-2 text-[12px] md:text-sm font-semibold text-black bg-white border border-gray-300 rounded-full w-max"
      >
        <FaUpload /> {placeHolder}
      </label>
      <input
        id="fileInput"
        type="file"
        className="hidden"
        // onChange={handleFileChange}
      />
    </>
  );
};

export default Upload;
