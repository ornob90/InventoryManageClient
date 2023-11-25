import React, { useState } from "react";
import Container from "../../components/shared/Container";
import ShopForm from "../../components/form/ShopForm";

const CreateShop = () => {
  const [isCreate, setIsCreate] = useState(true);

  const handleIsCreate = () => {
    setIsCreate(!isCreate);
  };

  return (
    <div>
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
        <ShopForm method="GET" />
      </Container>
    </div>
  );
};

export default CreateShop;