import React from "react";
import { AiFillEdit } from "react-icons/ai";
import { MdDelete } from "react-icons/md";
import { Link } from "react-router-dom";

const CheckoutTable = () => {
  return (
    <div className="mt-10 overflow-x-auto">
      <table className="table text-[12px] md:text-sm">
        {/* head */}
        <thead className="font-bold text-black">
          <tr>
            <th className="">Name</th>
            <th>Image</th>
            <th>Location</th>
            <th>Selling Price</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {/* row 1 */}
          <tr>
            <td>Zemlak, Daniel and Leannon</td>
            <td>
              <div className="avatar">
                <div className="w-12 h-12 rounded-lg mask">
                  <img
                    src="https://t3.ftcdn.net/jpg/02/41/43/18/360_F_241431868_8DFQpCcmpEPVG0UvopdztOAd4a6Rqsoo.jpg"
                    alt="Avatar Tailwind CSS Component"
                  />
                </div>
              </div>
            </td>

            <td>Dhaka</td>
            <td>3</td>
            <td className="flex items-center h-full gap-2 pt-5 text-3xl">
              <MdDelete className="text-red-600" />
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default CheckoutTable;
