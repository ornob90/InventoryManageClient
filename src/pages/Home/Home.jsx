import React from "react";
import Banner from "./Banner";
import BusinessStates from "./BusinessStates";
import Testimonial from "./Testimonial";
import FAQ from "./FAQ";
import Subscribe from "./Subscribe";
import Footer from "./Footer";

const Home = () => {
  return (
    <div className="">
      <Banner />
      <BusinessStates />
      <FAQ />
      <Testimonial />
      <Subscribe />
    </div>
  );
};

export default Home;
