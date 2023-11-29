import React, { useState } from "react";
import Input from "../html/Input";
import TextArea from "../html/TextArea";
import Upload from "../html/Upload";
import Button from "../html/Button";
import useAuth from "../../hooks/auth/useAuth";
import usePostSecure from "../../hooks/apiSecure/usePostSecure";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";

const ShopForm = ({ method }) => {
  const { user } = useAuth();

  const [shopInfo, setShopInfo] = useState({});
  const [shopLogo, setShopLogo] = useState("");
  const [uploading, setUploading] = useState(false);
  const navigate = useNavigate();

  const { mutateAsync: addShop } = usePostSecure(null, `/shop`);

  const handleSubmit = async (e) => {
    e.preventDefault();

    const shop = {
      ...shopInfo,
      shopOwnerEmail: user?.email || "NA",
      shopOwnerName: user?.displayName || "NA",
      shopLogo,
    };

    try {
      const response = await addShop(shop);

      if (response.insertOne) {
        toast.success("Shop created successfully!!");
        setShopInfo({});
      }
      if (response.updateUser) {
        navigate("/dashboard");
        toast.success("You have become shop manager!!");
      }
    } catch (error) {
      console.log(error.message);
      toast.error(error.message);
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;

    setShopInfo((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="grid grid-cols-1 mt-8 md:grid-cols-6 md:w-[70%] mx-auto gap-2 gap-y-4"
    >
      <Input
        name="shopName"
        onChange={handleChange}
        className="md:col-span-3"
        placeholder="Shop Name"
      />
      <Input
        name="shopLocation"
        onChange={handleChange}
        className="md:col-span-3"
        placeholder="Shop Location"
      />
      <TextArea
        name="shopDescription"
        onChange={handleChange}
        placeHolder="Description"
        className="border md:col-span-6"
        rows={4}
      />
      <Input
        className="md:col-span-4"
        value={user?.email}
        placeholder="Email"
        disabled
      />
      <Input
        className="md:col-span-2"
        value={user?.displayName}
        placeholder="User Name"
        disabled
      />

      <Upload
        placeHolder="Upload Logo"
        setImage={setShopLogo}
        setUploading={setUploading}
        productImage={shopLogo}
      />
      <Button
        disabled={uploading}
        className="py-2 text-white md:col-span-6 bg-primary"
      >
        {uploading ? "Uploading..." : "Create Shop"}
      </Button>
    </form>
  );
};

export default ShopForm;
