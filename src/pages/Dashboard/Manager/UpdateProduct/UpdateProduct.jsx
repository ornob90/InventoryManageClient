import React from "react";
import ShortContainer from "../../../../components/shared/ShortContainer";
import ProductForm from "../../../../components/form/ProductForm";

const UpdateProduct = () => {
  return (
    <ShortContainer>
      <h1 className="mt-6 text-2xl font-bold">Update your product</h1>
      <ProductForm method="put" />
    </ShortContainer>
  );
};

export default UpdateProduct;
