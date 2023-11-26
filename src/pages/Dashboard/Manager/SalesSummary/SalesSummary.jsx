import React, { useEffect } from "react";
import ShortContainer from "../../../../components/shared/ShortContainer";
import SalesCount from "./SalesCount";
import SalesHistory from "./SalesHistory";
import Pagination from "../../../../components/shared/Pagination";
import useAuth from "../../../../hooks/auth/useAuth";
import useAxiosSecure from "../../../../hooks/axios/useAxiosSecure";
import { GoGraph } from "react-icons/go";
import { FaMoneyBillTrendUp } from "react-icons/fa6";
import { FaHandHoldingUsd } from "react-icons/fa";

const SalesSummary = () => {
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
    axiosSecure
      .get(`/manager-sales-summary?email=${user?.email}`)
      .then((res) => {
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
      title: "Total Invest",
      state: data?.totalInvest || 0,
      icon: <FaMoneyBillTrendUp />,
    },
    {
      title: "Total Profit",
      state: data?.totalProfit || 0,
      icon: <FaHandHoldingUsd />,
    },
  ];

  return (
    <ShortContainer className="min-h-[300px]">
      <SalesCount salesCount={salesCount} />
      <SalesHistory />
      <Pagination />
    </ShortContainer>
  );
};

export default SalesSummary;
