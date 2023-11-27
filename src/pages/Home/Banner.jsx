import React from "react";
import Container from "../../components/shared/Container";
import Button from "../../components/html/Button";
import { useNavigate } from "react-router-dom";
import useUser from "../../hooks/others/useUser";

const Banner = () => {
  const navigate = useNavigate();
  const { role } = useUser();
  return (
    <div className="bg-fixed bg-banner">
      <Container className="flex justify-between items-center min-h-[500px] h-screen">
        {/* Content */}
        <div className="mx-auto text-center">
          <h1
            data-aos="fade-up"
            className="text-xl font-bold text-white sm:text-2xl md:text-4xl lg:text-6xl"
          >
            Effortless Inventory Management, <br />
            <span className="text-primary">Elevated Business Success</span>
          </h1>
          <Button
            data-aos="fade-up"
            onClick={() => {
              role === "user" && navigate("/create-shop");
            }}
            className="px-5 py-3 mt-8 text-sm text-white rounded-md shadow-sm md:text-base bg-primary"
          >
            Create Your Shop
          </Button>
        </div>
      </Container>
    </div>
  );
};

export default Banner;
