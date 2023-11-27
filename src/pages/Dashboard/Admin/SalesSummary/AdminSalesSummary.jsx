import React, { useEffect, useState } from "react";
import SalesCount from "../../Manager/SalesSummary/SalesCount";
import ShortContainer from "../../../../components/shared/ShortContainer";
import UserTale from "./UserTale";
import Pagination from "../../../../components/shared/Pagination";
import useGetSecure from "../../../../hooks/apiSecure/useGetSecure";
import useAuth from "../../../../hooks/auth/useAuth";
import useAxiosSecure from "../../../../hooks/axios/useAxiosSecure";
import { GoGraph } from "react-icons/go";
import { FaMoneyBillTrendUp } from "react-icons/fa6";
import { FaHandHoldingUsd } from "react-icons/fa";

const AdminSalesSummary = () => {
  const { user, loading } = useAuth();

  // const { data } = useGetSecure(
  //   ["ManagerStates"],
  //   `/manager-sales-summary?email=${user?.email}`
  // );
  const axiosSecure = useAxiosSecure();
  // const { data } = useQuery({
  //   queryKey: ["ManageStates"],
  //   queryFn: async () => {
  //     const res = await axiosSecure.get(
  //       `/manager-sales-summary?email=${user?.email}`
  //     );
  //     return res?.data;
  //   },
  // });

  const [data, setData] = useState([]);

  useEffect(() => {
    axiosSecure.get(`/admin-sales-summary`).then((res) => {
      setData(res?.data);
    });
  }, [user, user?.email]);

  // console.log(data);
  const salesCount = [
    {
      title: "Total Sales",
      state: data?.totalSales || 0,
      icon: <GoGraph />,
    },
    {
      title: "Total Income",
      state: data?.totalIncome || 0,
      icon: <FaMoneyBillTrendUp />,
    },
    {
      title: "Total Product",
      state: data?.totalProduct || 0,
      icon: <FaHandHoldingUsd />,
    },
  ];

  return (
    <ShortContainer className="min-h-[500px]">
      <SalesCount salesCount={salesCount} />
      <UserTale />
    </ShortContainer>
  );
};

export default AdminSalesSummary;
