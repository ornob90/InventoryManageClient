import React from "react";
import Input from "../html/Input";
import Button from "../html/Button";

const ExistShopForm = () => {
  return (
    <form className="mt-10 md:w-[60%] mx-auto flex flex-col gap-2">
      <p className="mb-4 text-xl font-bold text-center">
        So you wanna be a manager?
      </p>
      <Input placeholder="Want to be a manager?" />
      <Button className="py-2 text-white md:col-span-6 bg-primary">
        Add me to manager
      </Button>
    </form>
  );
};

export default ExistShopForm;
