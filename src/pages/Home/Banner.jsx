import React from "react";
import Container from "../../components/shared/Container";
import Button from "../../components/html/Button";

const Banner = () => {
  return (
    <div className="bg-fixed bg-banner">
      <Container className="flex justify-between items-center min-h-[500px] h-screen">
        {/* Content */}
        <div className="mx-auto text-center">
          <h1 className="text-xl font-bold text-white sm:text-2xl md:text-4xl lg:text-6xl">
            Effortless Inventory Management, <br />
            <span className="text-primary">Elevated Business Success</span>
          </h1>
          <Button className="px-5 py-3 mt-8 text-sm text-white rounded-md shadow-sm md:text-base bg-primary">
            Create Your Shop
          </Button>
        </div>
      </Container>
    </div>
  );
};

export default Banner;
