import React from "react";
import ShortContainer from "../../../../components/shared/ShortContainer";
import Button from "../../../../components/html/Button";
import useShop from "../../../../hooks/data/useShop";
import toast from "react-hot-toast";

const ShareShop = () => {
  const { shopID } = useShop();
  // console.log(shop);
  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(shopID);
      toast.success("Id copied to clipboard");
    } catch (error) {
      toast.error("Error occurred! Cannot copied to clipboard");
    }
  };
  console.log(shopID);
  return (
    <ShortContainer className="flex flex-col justify-center items-center h-[60vh] min-h-[400px] gap-8">
      <h1 className="text-base sm:text-lg md:text-xl font-bold">You Shop ID</h1>
      <p className="text-lg sm:text-2xl md:text-4xl lg:text-6xl">{shopID}</p>

      <Button
        onClick={handleCopy}
        className="py-2 px-10 bg-primary font-medium"
      >
        Copy
      </Button>
    </ShortContainer>
  );
};

export default ShareShop;
