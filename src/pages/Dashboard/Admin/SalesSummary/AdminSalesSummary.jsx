import React from "react";
import SalesCount from "../../Manager/SalesSummary/SalesCount";
import ShortContainer from "../../../../components/shared/ShortContainer";
import UserTale from "./UserTale";
import Pagination from "../../../../components/shared/Pagination";

const AdminSalesSummary = () => {
  return (
    <ShortContainer className="min-h-[500px]">
      <SalesCount />
      <UserTale />
      <Pagination />
    </ShortContainer>
  );
};

export default AdminSalesSummary;
