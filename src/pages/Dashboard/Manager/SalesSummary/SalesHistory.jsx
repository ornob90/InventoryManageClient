import React from "react";
import { MdDelete } from "react-icons/md";

const SalesHistory = () => {
  return (
    <div className="mt-10 overflow-x-auto min-h-[300px]">
      <table className="table text-[12px] md:text-base">
        {/* head */}
        <thead className="font-bold text-black text-[12px] md:text-base">
          <tr>
            <th className="">Name</th>
            <th>Selling Date</th>
            <th>Profit</th>
          </tr>
        </thead>
        <tbody>
          {/* row 1 */}

          <tr>
            <td>Zemlak, Daniel and Leannon</td>
            <td>23/02/20919</td>

            <td>Dhaka</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default SalesHistory;
