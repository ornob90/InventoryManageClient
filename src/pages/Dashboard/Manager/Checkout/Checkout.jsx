import React from "react";

import { Link, useNavigate } from "react-router-dom";
import ShortContainer from "../../../../components/shared/ShortContainer";
import Button from "../../../../components/html/Button";
import { MdOutlinePaid } from "react-icons/md";
import CheckoutTable from "./CheckoutTable";
import useGetSecure from "../../../../hooks/apiSecure/useGetSecure";
import usePostSecure from "../../../../hooks/apiSecure/usePostSecure";

const Checkout = () => {
  const navigate = useNavigate();
  const { data: cartProducts, isLoading } = useGetSecure(["Cart"], "/cart");

  const { mutateAsync: addToSales } = usePostSecure([["Cart"]], `/sales`);

  const handleGetPaid = async () => {
    const response = await addToSales(cartProducts || []);

    console.log(response);
  };

  return (
    <ShortContainer className="mt-10">
      <div className="flex items-center justify-between pb-3 border-b-2">
        <h1 className="text-xl font-semibold">
          Products: <span className="text-2xl font-bold text-primary">5</span>
        </h1>
        <Button
          onClick={handleGetPaid}
          className="flex items-center gap-2 px-4 py-2 bg-primary"
        >
          Get Paid <MdOutlinePaid className="text-xl" />
        </Button>
      </div>

      <CheckoutTable cartProducts={cartProducts} />
    </ShortContainer>
  );
};

export default Checkout;
