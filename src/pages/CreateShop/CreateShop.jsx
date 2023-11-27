import React, { useEffect, useState } from "react";
import Container from "../../components/shared/Container";
import ShopForm from "../../components/form/ShopForm";
import ExistShopForm from "../../components/form/ExistShopForm";
import useUser from "../../hooks/others/useUser";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";

const CreateShop = () => {
  const [isCreate, setIsCreate] = useState(true);

  const { role } = useUser();
  const navigate = useNavigate();
  const handleIsCreate = () => {
    setIsCreate(!isCreate);
  };

  useEffect(() => {
    if (role !== "user") {
      toast.error("You already have a shop!!");
      navigate("/");
    }
  }, [role]);

  return (
    <div className="min-h-[500px]">
      <Container className="mt-28">
        <div className="max-h-[100px] flex justify-center items-center  font-bold text-medium sm:text-lg md:text-xl ">
          <p
            onClick={handleIsCreate}
            className={`w-[50%] text-center  py-2 ${
              isCreate ? "bg-primary text-white" : "bg-white text-black border"
            }`}
          >
            Create
          </p>
          <p
            onClick={handleIsCreate}
            className={`w-[50%] text-center  py-2 ${
              !isCreate ? "bg-primary text-white" : "bg-white text-black border"
            }`}
          >
            Existing
          </p>
        </div>
        {isCreate ? <ShopForm method="POST" /> : <ExistShopForm />}
      </Container>
    </div>
  );
};

export default CreateShop;
