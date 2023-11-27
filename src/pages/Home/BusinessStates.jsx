import React from "react";
import Container from "../../components/shared/Container";

const BusinessStates = () => {
  return (
    <div className="h-[200px] bg-primary flex justify-center items-center">
      <Container className="flex flex-col items-center justify-between gap-8 text-white md:flex-row md:gap-0">
        <h1
          data-aos="fade-right"
          className="text-xl font-bold sm:text-2xl md:text-3xl"
        >
          Your Business, By the Numbers
        </h1>
        <div className="flex items-center justify-between w-full md:w-[50%]">
          <div
            data-aos="fade-up"
            className="w-[33%] text-center    shadow-white"
          >
            <p className="text-xl font-semibold sm:text-2xl md:text-3xl lg:text-4xl">
              256
            </p>
            <p className="text-[12px] md:text-sm lg:text-base">Products Sold</p>
          </div>
          <div
            data-aos="fade-up"
            className="w-[33%] text-center    shadow-white"
          >
            <p className="text-xl font-semibold sm:text-2xl md:text-3xl lg:text-4xl">
              $12,345
            </p>
            <p className="text-[12px] md:text-sm lg:text-base">Total Revenue</p>
          </div>
          <div
            data-aos="fade-up"
            className="w-[33%] text-center    shadow-white"
          >
            <p className="text-xl font-semibold sm:text-2xl md:text-3xl lg:text-4xl">
              92%
            </p>
            <p className="text-[12px] md:text-sm lg:text-base">
              Customer Satisfaction
            </p>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default BusinessStates;
