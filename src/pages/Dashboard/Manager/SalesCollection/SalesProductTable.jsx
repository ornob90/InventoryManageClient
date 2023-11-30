import React from "react";
import { AiFillEdit } from "react-icons/ai";
import { MdShoppingCartCheckout } from "react-icons/md";
import { Link } from "react-router-dom";
import useAuth from "../../../../hooks/auth/useAuth";
import useGetSecure from "../../../../hooks/apiSecure/useGetSecure";
import Swal from "sweetalert2";
import usePostSecure from "../../../../hooks/apiSecure/usePostSecure";
import toast from "react-hot-toast";

const SalesProductTable = ({ products }) => {
  const { mutateAsync: addToCart } = usePostSecure(null, "/cart");
  const { user } = useAuth();
  const handleCart = (id) => {
    const cartProduct = {
      product: id,
      userEmail: user?.email,
    };

    Swal.fire({
      title: "Add to cart?",
      text: "You can always delete this from checkout page",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Add",
    }).then((result) => {
      if (result.isConfirmed) {
        addToCart(cartProduct)
          .then((res) => {
            if (res.insertOne) {
              toast.success("Product added to cart!");
            }
          })
          .catch((err) =>
            toast.error(`Unable to add the product to cart  ${err.message}`)
          );
      }
    });
  };

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
                <MdShoppingCartCheckout
                  onClick={() => handleCart(product?._id)}
                  className="text-primary text-3xl"
                />
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default SalesProductTable;
