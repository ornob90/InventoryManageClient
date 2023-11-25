import React from "react";
import ShortContainer from "../../../../components/shared/ShortContainer";
import SalesCount from "./SalesCount";
import SalesHistory from "./SalesHistory";
import Pagination from "../../../../components/shared/Pagination";

const SalesSummary = () => {
  return (
    <ShortContainer className="min-h-[300px]">
      <SalesCount />
      <SalesHistory />
      <Pagination />
    </ShortContainer>
  );
};

export default SalesSummary;
