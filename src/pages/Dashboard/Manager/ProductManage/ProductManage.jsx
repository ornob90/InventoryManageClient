import React from "react";
import ShortContainer from "../../../../components/shared/ShortContainer";
import Button from "../../../../components/html/Button";
import ProductManagerTable from "./ProductManagerTable";
import { Link, useNavigate } from "react-router-dom";

const ProductManage = () => {
  const navigate = useNavigate();
  return (
    <ShortContainer className="mt-10">
      <div className="flex items-center justify-between pb-3 border-b-2">
        <h1 className="text-lg font-semibold md:text-xl ">
          Total Products: <span className="text-2xl font-bold ">5</span>
        </h1>
        <Button
          onClick={() => navigate("/dashboard/add-product")}
          className="px-3 py-2 text-[12px] bg-primary sm:text-sm md:text-base"
        >
          Add Product
        </Button>
      </div>

      <ProductManagerTable />
    </ShortContainer>
  );
};

export default ProductManage;
