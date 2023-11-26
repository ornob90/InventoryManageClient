import React from "react";
import { AiFillEdit } from "react-icons/ai";
import { MdDelete } from "react-icons/md";
import { Link } from "react-router-dom";
import useGetSecure from "../../../../hooks/apiSecure/useGetSecure";
import useAuth from "../../../../hooks/auth/useAuth";

const ProductManagerTable = ({ products }) => {
  // const { user } = useAuth();
  // const { data: products, isLoading } = useGetSecure(
  //   ["products", user?.email],
  //   `/products/${user?.email}`
  // );
  // console.log(products);
  return (
    <div className="mt-10 overflow-x-auto min-h-[400px]">
      <table className="table text-[12px] md:text-sm">
        {/* head */}
        <thead className="font-bold text-black">
          <tr>
            <th className="">Name</th>
            <th>Image</th>
            <th>Quantity</th>
            <th>Sale Count</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {/* row 1 */}

          {products?.map((product) => (
            <tr key={product?._id}>
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
              <td>{product?.saleCount}</td>
              <td className="flex items-center h-full gap-2 pt-5 text-2xl">
                <Link to={`/dashboard/update-product/${product?._id}`}>
                  <AiFillEdit className="text-primary" />
                </Link>
                <MdDelete className="text-red-600" />
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ProductManagerTable;
