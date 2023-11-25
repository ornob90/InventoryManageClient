import React from "react";
import { GoGraph } from "react-icons/go";
import { FaMoneyBillTrendUp } from "react-icons/fa6";
import { FaHandHoldingUsd } from "react-icons/fa";

const SalesCount = () => {
  const salesCount = [
    {
      title: "Total Sales",
      state: "31K",
      icon: <GoGraph />,
    },
    {
      title: "Total Invest",
      state: "31K",
      icon: <FaMoneyBillTrendUp />,
    },
    {
      title: "Total Profit",
      state: "31K",
      icon: <FaHandHoldingUsd />,
    },
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-2">
      {salesCount.map(({ title, state, icon }) => (
        <div
          key={title}
          className="stats shadow-sm rounded-none mt-10 flex-col md:flex-row  justify-center items-center border "
        >
          <div className="stat place-items-center  w-max">
            <div className="stat-title pb-2 flex items-center gap-2">
              {title} {icon}
            </div>
            <div className="stat-value">{state}</div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default SalesCount;
