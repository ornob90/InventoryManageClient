import React, { useEffect, useState } from "react";
import ShortContainer from "../../../../components/shared/ShortContainer";
import Button from "../../../../components/html/Button";
import Input from "../../../../components/html/Input";
import SalesProductTable from "./SalesProductTable";
import { FaArrowRightFromBracket } from "react-icons/fa6";
import { useNavigate } from "react-router-dom";
import useAuth from "../../../../hooks/auth/useAuth";
import useGetSecure from "../../../../hooks/apiSecure/useGetSecure";

const SalesCollection = () => {
  const navigate = useNavigate();
  const [products, setProducts] = useState([]);

  const { user } = useAuth();
  const { data: initialProducts, isLoading } = useGetSecure(
    ["products", user?.email],
    `/products/${user?.email}`
  );

  useEffect(() => {
    setProducts(initialProducts);
  }, [initialProducts]);

  const handleSearch = (e) => {
    if (!e.target) {
      setProducts(initialProducts);
      return;
    }
    setProducts(
      initialProducts.filter(({ _id }) => _id.includes(e.target.value))
    );
  };

  return (
    <ShortContainer>
      <div className="">
        <form className="grid md:w-[70%] mx-auto grid-cols-6 mt-5 ">
          <Input
            onChange={handleSearch}
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

      <SalesProductTable products={products} />
    </ShortContainer>
  );
};

export default SalesCollection;
