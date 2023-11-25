import React from "react";
import Container from "../../components/shared/Container";
import Button from "../../components/html/Button";

const Subscribe = () => {
  return (
    <div
      className="bg-primary min-h-[400px] lg:min-h-[400px] h-[60vh]  text-white font-poppins flex items-center bg-subscribe pt-10"
      //   style={{ backgroundColor: "red" }}
    >
      <Container className="flex flex-col items-center justify-center gap-2 md:block">
        <h1 className="mb-4 text-xl sm:text-2xl lg:text-3xl w-[80%] md:w-[40%] font-bold text-center md:text-left">
          Subscribe to Our Newsletter
        </h1>
        <p className="text-[12px] text-center md:text-left text-gray-300">
          Stay updated with the latest news, product releases, and exclusive
          offers. Subscribe now!
        </p>
        <div className="flex items-center justify-center w-full gap-1 md:justify-start">
          <input
            type="text"
            className="focus:outline-none  py-2 pl-3 w-[60%] sm:w-[80%] md:w-[40%] my-2  text-black text-sm"
            placeholder="Your Email Address "
          />
          <Button className="px-3 py-2 text-sm text-white bg-black">
            Join NOW
          </Button>
        </div>
        <p className="text-[12px] text-center md:text-left text-gray-300">
          By joining, you agree to our terms and conditions
        </p>
      </Container>
    </div>
  );
};

export default Subscribe;
