import React from "react";
import ShortContainer from "../../../../components/shared/ShortContainer";
import SalesCount from "./SalesCount";
import SalesHistory from "./SalesHistory";
import Pagination from "../../../../components/shared/Pagination";
import useAuth from "../../../../hooks/auth/useAuth";

const SalesSummary = () => {
  const { user } = useAuth();
  return (
    <ShortContainer className="min-h-[300px]">
      <SalesCount email={user?.email} />
      <SalesHistory />
      <Pagination />
    </ShortContainer>
  );
};

export default SalesSummary;
