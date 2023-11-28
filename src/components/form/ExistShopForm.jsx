import React from "react";
import Input from "../html/Input";
import Button from "../html/Button";
import toast from "react-hot-toast";
import useAuth from "../../hooks/auth/useAuth";
import usePutSecure from "../../hooks/apiSecure/usePutSecure";

const ExistShopForm = () => {
  const { user } = useAuth();

  const { mutateAsync: makeShopAdmin } = usePutSecure(
    null,
    `/make-shop-admin?email=${user?.email}`
  );

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const shopId = e.target.shopId.value;
      if (!shopId) {
        toast.error("Shop ID missing! Have to provide shopID");
        return;
      }

      const response = await makeShopAdmin({ shopId });

      if (response.updateOne) {
        toast.success("You have successfully become admin of this shop!!");
      } else {
        toast.error("Unexpected error occurred! couldn't make you shopAdmin");
      }
    } catch (error) {
      console.error(error);
      toast.error(error.message);
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="mt-10 md:w-[60%] mx-auto flex flex-col gap-2"
    >
      <p className="mb-4 text-xl font-bold text-center">
        So you wanna be a manager?
      </p>
      <Input name="shopId" placeholder="Want to be a manager?" />
      <Button className="py-2 text-white md:col-span-6 bg-primary">
        Add me to manager
      </Button>
    </form>
  );
};

export default ExistShopForm;
