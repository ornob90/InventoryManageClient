import React from "react";
import { useNavigate } from "react-router-dom";
import Button from "../../components/html/Button";
const Forbidden = () => {
  const navigate = useNavigate();
  return (
    <div className="w-full h-screen flex justify-center items-center">
      <div className="mx-auto flex flex-col justify-center items-center gap-6">
        <h1 className="font-extrabold text-primary text-6xl lg:text-8xl">
          Unauthorized
        </h1>
        <h3 className="text-md lg:text-xl text-black font-bold">
          Invalid Access
        </h3>
        <p className="text-sm lg:text-base w-[60%] text-center">
          You are not authorized to view this page! Hope you'll have a good
          experience in other accessible routes!
        </p>
        <button
          onClick={() => navigate("/")}
          className="active:scale-95 duration-[.4s] bg-white text-black  py-2 px-4   duration-[.3s] text-sm lg:text-base border border-black  "
        >
          GO TO HOMEPAGE
        </button>
      </div>
    </div>
  );
};

export default Forbidden;
