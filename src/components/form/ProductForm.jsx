import React, { useState } from "react";
import Input from "../html/Input";
import TextArea from "../html/TextArea";
import Upload from "../html/Upload";
import Button from "../html/Button";
import useAuth from "../../hooks/auth/useAuth";
import usePostSecure from "../../hooks/apiSecure/usePostSecure";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import useShop from "../../hooks/data/useShop";

const ProductForm = ({ method }) => {
  const [productImage, setProductImage] = useState("");
  const [uploading, setUploading] = useState(false);

  const { shopId, loading } = useShop();
  const { user } = useAuth();
  const navigate = useNavigate();

  const { mutateAsync: addProduct } = usePostSecure(
    [["products", user?.email]],
    "/product"
  );

  const [productInfo, setProductInfo] = useState({
    productName: "",
    productQuantity: "",
    productLocation: "",
    productionCost: "",
    profitMargin: "",
    discount: "",
    productDescription: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;

    setProductInfo((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    // console.log(productInfo, productImage);

    const cost = parseFloat(productInfo.productionCost);
    const tax = (cost * 7.5) / 100;
    const profitPercentage =
      (cost * parseFloat(productInfo.profitMargin)) / 100;

    const product = {
      ...productInfo,
      image: productImage || "",
      shopId,
      userEmail: user?.email,
      sellingPrice: cost + tax + profitPercentage,
    };

    try {
      const res = await addProduct(product);
      console.log(res);
      if (res.insertOne) {
        toast.success("Inserted successfully!!");
        navigate("/dashboard");
      } else {
        toast.error("Product Limit 0!!");
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="grid grid-cols-1 gap-3 mt-10 md:grid-cols-6 gap-y-5"
    >
      <Input
        onChange={handleChange}
        placeholder="Name"
        name="productName"
        className="md:col-span-3"
      />
      <Input
        onChange={handleChange}
        placeholder="Quantity"
        name="productQuantity"
        type="number"
        className="md:col-span-3"
      />
      <Input
        onChange={handleChange}
        placeholder="Location"
        name="productLocation"
        className="md:col-span-6"
      />
      <Input
        onChange={handleChange}
        name="productionCost"
        placeholder="Cost"
        min="0"
        type="number"
        className="md:col-span-2"
      />
      <Input
        onChange={handleChange}
        name="profitMargin"
        placeholder="Profit Margin (%)"
        type="number"
        className="md:col-span-2"
        min="0"
        max="100"
      />
      <Input
        onChange={handleChange}
        name="discount"
        placeholder="Discount (%)"
        type="number"
        className="md:col-span-2"
        min="0"
        max="100"
      />
      <TextArea
        onChange={handleChange}
        name="productDescription"
        placeholder="Description"
        rows={3}
        className="md:col-span-6"
      />
      <Upload
        placeHolder="Upload Image"
        setImage={setProductImage}
        setUploading={setUploading}
        productImage={productImage}
      />

      <Button
        disabled={uploading}
        className="py-2 font-bold md:col-span-6 md:text-lg"
      >
        {uploading ? "Uploading.." : method === "post" ? "Add" : "Update"}
      </Button>
    </form>
  );
};

export default ProductForm;
