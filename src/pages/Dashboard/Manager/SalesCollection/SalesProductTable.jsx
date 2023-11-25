import React from "react";
import { AiFillEdit } from "react-icons/ai";
import { MdShoppingCartCheckout } from "react-icons/md";
import { Link } from "react-router-dom";

const SalesProductTable = () => {
  return (
    <div className="mt-5 overflow-x-auto">
      <table className="table text-[12px] ">
        <thead className="font-bold text-black">
          <tr>
            <th>ID</th>
            <th className="">Name</th>
            <th>Image</th>
            <th>Quantity</th>
            <th>Discount</th>
            <th>Sale Count</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>23poh2093hifo2fhf2</td>
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

            <td>10</td>
            <td>40</td>
            <td>3</td>
            <td className="flex items-center h-full gap-2 pt-5 text-2xl">
              <MdShoppingCartCheckout className="text-primary" />
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default SalesProductTable;
