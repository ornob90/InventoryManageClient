import React from "react";
import Input from "../html/Input";
import TextArea from "../html/TextArea";
import Upload from "../html/Upload";
import Button from "../html/Button";

const ShopForm = ({ method }) => {
  return (
    <form className="grid grid-cols-1 mt-8 md:grid-cols-6 md:w-[70%] mx-auto gap-2 gap-y-4">
      <Input className="md:col-span-3" placeholder="Shop Name" />
      <Input className="md:col-span-3" placeholder="Shop Location" />
      <TextArea
        placeHolder="Description"
        className="border md:col-span-6"
        rows={4}
      />
      <Input className="md:col-span-4" placeholder="Email" />
      <Input className="md:col-span-2" placeholder="User Name" />
      <Upload placeHolder="Upload Logo" />
      <Button className="py-2 text-white md:col-span-6 bg-primary">
        Create Shop
      </Button>
    </form>
  );
};

export default ShopForm;
