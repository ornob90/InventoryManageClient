import React from "react";
import { AiFillEdit } from "react-icons/ai";
import { MdDelete } from "react-icons/md";
import { Link } from "react-router-dom";

const CheckoutTable = ({ cartProducts }) => {
  console.log(cartProducts);
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
          {cartProducts?.map((product) => (
            <tr key={product?.product?._id}>
              <td>{product?.product?.productName}</td>
              <td>
                <div className="avatar">
                  <div className="w-12 h-12 rounded-lg mask">
                    <img
                      src={product?.product?.image}
                      alt="Avatar Tailwind CSS Component"
                    />
                  </div>
                </div>
              </td>

              <td>{product?.product?.productLocation}</td>
              <td>{product?.product?.sellingPrice}</td>
              <td className="flex items-center h-full gap-2 pt-5 text-3xl">
                <MdDelete className="text-red-600" />
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default CheckoutTable;
