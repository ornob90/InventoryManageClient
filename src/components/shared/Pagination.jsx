import React, { useState } from "react";

const Pagination = () => {
  const [page, setPage] = useState(0);

  return (
    <div className="flex justify-center items-center gap-4 mt-4 flex-wrap">
      {[0, 1, 2, 3, 4, 5, 6, 7, 8].map((value) => (
        <div
          key={value}
          onClick={() => setPage(value)}
          className={`w-[30px] h-[30px] rounded-full border-black border flex justify-center items-center cursor-pointer ${
            page === value ? "bg-primary border-black" : ""
          }`}
        >
          {value + 1}
        </div>
      ))}
    </div>
  );
};

export default Pagination;
