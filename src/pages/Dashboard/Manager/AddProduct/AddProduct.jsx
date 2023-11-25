import React from "react";
import ShortContainer from "../../../../components/shared/ShortContainer";
import ProductForm from "../../../../components/form/ProductForm";

const AddProduct = () => {
  return (
    <ShortContainer>
      <h1 className="mt-6 text-2xl font-bold">Add your product</h1>
      <ProductForm method="post" />
    </ShortContainer>
  );
};

export default AddProduct;
