import React from "react";
import { AiFillEdit } from "react-icons/ai";
import { MdDelete } from "react-icons/md";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";
// import useDeleteSecure from "../../../../hooks/apiSecure/useDeleteSecure";
// import useAxiosSecure from "../../../../hooks/axios/useAxiosSecure";
import BASE_URL from "../../../../utils/api";

const CheckoutTable = ({ cartProducts }) => {
  console.log(cartProducts);

  // const { mutateAsync: deleteProduct } = useDeleteSecure([["Cart"]]);
  // const axiosSecure = useAxiosSecure();
  const handleDelete = (id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        // deleteProduct(`/cart/${id}`).then((res) => console.log(res));

        axios.delete(BASE_URL + `/cart/${id}`).then((res) => console.log(res));
        // console.log(id, product?._id, product);
      }
    });
  };

  return (
    <div className="mt-10 overflow-x-auto  min-h-[400px]">
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
                <MdDelete
                  onClick={() => handleDelete(product?._id)}
                  className="text-red-600"
                />
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default CheckoutTable;
