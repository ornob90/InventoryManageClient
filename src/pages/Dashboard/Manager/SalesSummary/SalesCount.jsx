import React from "react";
import { GoGraph } from "react-icons/go";
import { FaMoneyBillTrendUp } from "react-icons/fa6";
import { FaHandHoldingUsd } from "react-icons/fa";

const SalesCount = () => {
  return (
    <div className="stats shadow w-full rounded-none mt-10">
      <div className="stat place-items-center">
        <div className="stat-title pb-2 flex items-center gap-2">
          Total Sales <GoGraph className="text-black " />
        </div>
        <div className="stat-value">31K</div>
      </div>

      <div className="stat place-items-center ">
        <div className="stat-title pb-2 flex items-center gap-2">
          Total Invest <FaMoneyBillTrendUp className="text-primary" />
        </div>
        <div className="stat-value text-primary">4,200 </div>
      </div>

      <div className="stat place-items-center">
        <div className="stat-title pb-2 flex items-center gap-2">
          Total Profit <FaHandHoldingUsd className="text-black " />
        </div>
        <div className="stat-value">1,200</div>
      </div>
    </div>
  );
};

export default SalesCount;
