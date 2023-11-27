import React, { useEffect, useState } from "react";
import { MdDelete } from "react-icons/md";
import useGetSecure from "../../../../hooks/apiSecure/useGetSecure";
import useAuth from "../../../../hooks/auth/useAuth";
import getDate from "../../../../utils/getDate";
import useAxiosSecure from "../../../../hooks/axios/useAxiosSecure";

const SalesHistory = ({ page, size, setPageCount }) => {
  const { user } = useAuth() || {};
  // const { data: salesProduct } = useGetSecure(
  //   ["SalesHistoryManager"],
  //   `/manager-sales-history?email=${user?.email}`
  // );
  // console.log(typeof salesProduct[0].sellingDate);

  const [salesProduct, setSalesProduct] = useState([]);

  const axiosSecure = useAxiosSecure();

  const { data } = useGetSecure(
    ["SaleHistoryCount"],
    `/manager-sales-history-count?email=${user?.email}`
  );

  useEffect(() => {
    // console.log(data?.totalCount);
    setPageCount(Math.ceil(data?.totalCount / size));
  }, [data, size]);

  // setPageCount(2);

  useEffect(() => {
    axiosSecure
      .get(
        `/manager-sales-history?email=${user?.email}&page=${page}&size=${size}`
      )
      .then((res) => {
        setSalesProduct(res?.data);
      });
  }, [user, user?.email, page, size]);

  return (
    <div className="mt-10 overflow-x-auto min-h-[300px]">
      <table className="table text-[12px] md:text-base">
        {/* head */}
        <thead className="font-bold text-black text-[12px] md:text-base">
          <tr>
            <th className="">Name</th>
            <th>Selling Date</th>
            <th>Profit</th>
          </tr>
        </thead>
        <tbody>
          {/* row 1 */}
          {salesProduct?.map(({ _id, productName, profit, sellingDate }) => (
            <tr key={_id}>
              <td>{productName}</td>
              <td>{getDate(sellingDate)}</td>

              <td>{profit}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default SalesHistory;
