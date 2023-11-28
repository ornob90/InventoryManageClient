import React, { useEffect, useState } from "react";
import ShortContainer from "../../../../components/shared/ShortContainer";
import SalesCount from "./SalesCount";
import SalesHistory from "./SalesHistory";
import Pagination from "../../../../components/shared/Pagination";
import useAuth from "../../../../hooks/auth/useAuth";
import useAxiosSecure from "../../../../hooks/axios/useAxiosSecure";
import { GoGraph } from "react-icons/go";
import { FaMoneyBillTrendUp } from "react-icons/fa6";
import { FaHandHoldingUsd } from "react-icons/fa";
import CustomBarChart from "../../../../components/shared/CustomBarChart";

const SalesSummary = () => {
  const { user, loading } = useAuth();
  const [page, setPage] = useState(0);
  const [size, setSize] = useState(1);
  const [pageCount, setPageCount] = useState(1);
  // console.log("page ", page);
  // console.log("size ", size);

  // const { data } = useGetSecure(
  //   ["ManagerStates"],
  //   `/manager-sales-summary?email=${user?.email}`
  // );
  // console.log(page, size, pageCount);
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
      <SalesHistory
        page={page}
        size={size}
        // pageCount={pageCount}
        setPageCount={setPageCount}
      />
      <Pagination
        setPage={setPage}
        pageCount={pageCount}
        page={page}
        setSize={setSize}
      />
      <CustomBarChart salesCount={salesCount}/>
    </ShortContainer>
  );
};

export default SalesSummary;
