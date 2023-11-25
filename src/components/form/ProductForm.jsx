import React from "react";
import Input from "../html/Input";
import TextArea from "../html/TextArea";
import Upload from "../html/Upload";
import Button from "../html/Button";

const ProductForm = ({ method }) => {
  return (
    <form className="grid grid-cols-1 gap-3 mt-10 md:grid-cols-6 gap-y-5">
      <Input placeholder="Name" className="md:col-span-3" />
      <Input placeholder="Quantity" type="number" className="md:col-span-3" />
      <Input placeholder="Location" className="md:col-span-6" />
      <Input
        placeholder="Cost"
        min="0"
        type="number"
        className="md:col-span-2"
      />
      <Input
        placeholder="Profit Margin (%)"
        type="number"
        className="md:col-span-2"
        min="0"
        max="100"
      />
      <Input
        placeholder="Discount (%)"
        type="number"
        className="md:col-span-2"
        min="0"
        max="100"
      />
      <TextArea placeholder="Description" rows={3} className="md:col-span-6" />
      <Upload placeHolder="Upload Image" />
      <Button className="py-2 font-bold md:col-span-6 md:text-lg">
        {method === "post" ? "Add" : "Update"}
      </Button>
    </form>
  );
};

export default ProductForm;
