import React, { useState } from "react";
import ShortContainer from "../../../../components/shared/ShortContainer";
import Button from "../../../../components/html/Button";

const Subscription = () => {
  const [selectedPlan, setSelectedPlan] = useState("Standard");

  const plans = [
    {
      title: "Basic",
      price: "$10.00",
      billing: "per month",
      features: [
        "200 shops",
        "Increase product limit to 200",
        "Essential features for small businesses",
      ],
    },
    {
      title: "Standard",
      price: "$20.00",
      billing: "per month",
      features: [
        "450 shops",
        "Increase product limit to 450",
        "Additional features for growing enterprises",
      ],
    },
    {
      title: "Premium",
      price: "$50.00",
      billing: "per month",
      features: [
        "1500 shops",
        "Increase product limit to 1500",
        "Premium features for large-scale operations",
      ],
    },
  ];

  return (
    <ShortContainer>
      <div className="mt-10 text-center">
        <h1 className="text-primary font-bold text-3xl">Pricing</h1>
        <p className="text-center md:w-[60%] mx-auto mt-2 text-gray-500 text-sm md:text-base ">
          Discover affordable plans tailored to your needs. Choose a
          subscription that fits your requirements today.
        </p>
      </div>
      <div className="mt-10 grid  grid-cols-1 md:grid-cols-3 mb-10 gap-2">
        {plans.map((plan) => (
          <div
            key={plan.title}
            onClick={() => setSelectedPlan(plan.title)}
            className={`text-center border h-[450px] p-4 flex flex-col justify-evenly cursor-pointer ${
              selectedPlan === plan.title ? "border-primary" : ""
            }`}
          >
            <p className="text-lg font-bold">{plan.title}</p>
            <h3 className="text-4xl py-2 text-primary font-medium">
              {plan.price}
            </h3>
            <p className="text-gray-500">per month</p>
            <div className="mt-2 flex flex-col gap-4 ">
              <p>{plan.features[0]}</p>
              <p>{plan.features[1]}</p>
              <p>{plan.features[2]}</p>
            </div>
            <Button className="bg-primary py-2 w-full">Purchase</Button>
          </div>
        ))}
      </div>
    </ShortContainer>
  );
};

export default Subscription;
