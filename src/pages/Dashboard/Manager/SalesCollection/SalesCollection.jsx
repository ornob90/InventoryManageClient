import React from "react";
import ShortContainer from "../../../../components/shared/ShortContainer";
import Button from "../../../../components/html/Button";
import Input from "../../../../components/html/Input";
import SalesProductTable from "./SalesProductTable";
import { FaArrowRightFromBracket } from "react-icons/fa6";
import { useNavigate } from "react-router-dom";

const SalesCollection = () => {
  const navigate = useNavigate();

  return (
    <ShortContainer>
      <div className="">
        <form className="grid md:w-[70%] mx-auto grid-cols-6 mt-5 ">
          <Input
            type="text"
            className="col-span-4 md:col-span-5"
            placeholder="Search"
          />
          <div className="col-span-2 md:col-span-1">
            <Button className="h-full px-5">Search</Button>
          </div>
        </form>
      </div>
      <div className="flex items-center justify-between pb-3 mt-10 border-b-2">
        <h1 className="text-lg sm:text-xl md:text-2xl font-bold">
          Sales Collection
        </h1>
        <Button
          onClick={() => navigate("/dashboard/checkout")}
          className="flex items-center gap-2 px-4 py-2 bg-primary text-[12px] sm:text-sm md:text-base"
        >
          Checkout <FaArrowRightFromBracket />
        </Button>
      </div>

      <SalesProductTable />
    </ShortContainer>
  );
};

export default SalesCollection;
