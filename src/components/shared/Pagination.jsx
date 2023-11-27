import React, { useState } from "react";

const Pagination = ({ setPage, setSize, page, pageCount }) => {
  return (
    <div className="w-full  flex justify-center items-center gap-4 mt-4 flex-wrap">
      {[...Array(pageCount).keys()].map((value) => (
        <div
          key={value}
          onClick={() => setPage(value)}
          className={`w-[30px] h-[30px] rounded-full border-black border flex justify-center items-center cursor-pointer ${
            page === value ? "bg-primary border-black text-white" : ""
          }`}
        >
          {value + 1}
        </div>
      ))}
      <select
        onChange={(e) => setSize(parseInt(e.target.value))}
        className="border border-primary py-1 focus:border-primary"
      >
        <option value="1">1</option>
        <option value="10">10</option>
        <option value="30">30</option>
      </select>
    </div>
  );
};

export default Pagination;
