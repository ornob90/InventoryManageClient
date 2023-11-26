import React from "react";
import ShortContainer from "../../../../components/shared/ShortContainer";
import ProductForm from "../../../../components/form/ProductForm";
import { useLoaderData } from "react-router-dom";

const UpdateProduct = () => {
  const product = useLoaderData();

  // console.log(product);
  console.log([...Object.keys(product)].map((key) => key));
  return (
    <ShortContainer>
      <h1 className="mt-6 text-2xl font-bold">Update your product</h1>
      <ProductForm method="put" product={product} />
    </ShortContainer>
  );
};

export default UpdateProduct;
