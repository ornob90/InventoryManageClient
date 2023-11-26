import React from "react";
import { AiFillEdit } from "react-icons/ai";
import { MdShoppingCartCheckout } from "react-icons/md";
import { Link } from "react-router-dom";
import useAuth from "../../../../hooks/auth/useAuth";
import useGetSecure from "../../../../hooks/apiSecure/useGetSecure";

const SalesProductTable = ({ products }) => {
  return (
    <div className="mt-5 overflow-x-auto min-h-[300px]">
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
          {products?.map((product) => (
            <tr key={product?._id}>
              <td>{product?._id}</td>
              <td>{product?.productName}</td>
              <td>
                <div className="avatar">
                  <div className="w-12 h-12 rounded-lg mask">
                    <img
                      src={product?.image}
                      alt="Avatar Tailwind CSS Component"
                    />
                  </div>
                </div>
              </td>

              <td>{product?.productQuantity}</td>
              <td>{product?.discount}%</td>
              <td>{product?.saleCount}</td>
              <td className="flex items-center h-full gap-2 pt-5 text-2xl">
                <MdShoppingCartCheckout className="text-primary" />
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default SalesProductTable;
