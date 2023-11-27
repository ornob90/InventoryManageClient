import React, { useState } from "react";
import ShortContainer from "../../../../components/shared/ShortContainer";
import Button from "../../../../components/html/Button";

import { Elements } from "@stripe/react-stripe-js";
import PaymentForm from "./PaymentForm";
import { loadStripe } from "@stripe/stripe-js";

const stripePromise = loadStripe(import.meta.env.VITE_PUBLISHABLE_KEY);

const Subscription = () => {
  const [selectedPlan, setSelectedPlan] = useState(20.0);
  const [modalOpen, setModalOpen] = useState(false);

  const plans = [
    {
      title: "Basic",
      price: 10,
      billing: "per month",
      features: [
        "200 shops",
        "Increase product limit to 200",
        "Essential features for small businesses",
      ],
    },
    {
      title: "Standard",
      price: 20,
      billing: "per month",
      features: [
        "450 shops",
        "Increase product limit to 450",
        "Additional features for growing enterprises",
      ],
    },
    {
      title: "Premium",
      price: 50,
      billing: "per month",
      features: [
        "1500 shops",
        "Increase product limit to 1500",
        "Premium features for large-scale operations",
      ],
    },
  ];

  return (
    <ShortContainer className="min-h-screen ">
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
            onClick={() => setSelectedPlan(plan.price)}
            className={`text-center border h-[450px] p-4 flex flex-col justify-evenly cursor-pointer ${
              selectedPlan === plan.price ? "border-primary" : ""
            }`}
          >
            <p className="text-lg font-bold">{plan.title}</p>
            <h3 className="text-4xl py-2 text-primary font-medium">
              ${plan.price}
            </h3>
            <p className="text-gray-500">per month</p>
            <div className="mt-2 flex flex-col gap-4 ">
              <p>{plan.features[0]}</p>
              <p>{plan.features[1]}</p>
              <p>{plan.features[2]}</p>
            </div>
            <Button
              className="bg-primary py-2 w-full"
              onClick={() => setModalOpen(!modalOpen)}
            >
              Purchase
            </Button>

            <div
              className={`absolute top-0 left-0 w-screen h-screen flex justify-center items-center   min-h-[500px] ${
                modalOpen ? "w-screen h-screen" : "scale-0"
              }`}
            >
              <div
                className={`w-[80%] h-[50%] md:h-[60%] lg:w-[400px] lg:h-[300px] bg-gray-300 text-white ${
                  modalOpen ? "scale-100" : "scale-0"
                } duration-300 `}
              >
                <Elements stripe={stripePromise}>
                  <PaymentForm
                    selectedPlan={selectedPlan}
                    setModalOpen={setModalOpen}
                  />
                </Elements>
                <Button
                  onClick={() => setModalOpen(false)}
                  className="w-[90%] mx-auto py-2 mb-4   text-white"
                >
                  Close
                </Button>
              </div>
            </div>
            {/* <dialog id="my_modal_1" className="modal">
              
            </dialog> */}
          </div>
        ))}
      </div>
    </ShortContainer>
  );
};

export default Subscription;
