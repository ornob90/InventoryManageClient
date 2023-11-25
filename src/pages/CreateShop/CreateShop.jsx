import React, { useState } from "react";
import Container from "../../components/shared/Container";
import ShopForm from "../../components/form/ShopForm";
import ExistShopForm from "../../components/form/ExistShopForm";

const CreateShop = () => {
  const [isCreate, setIsCreate] = useState(true);

  const handleIsCreate = () => {
    setIsCreate(!isCreate);
  };

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
