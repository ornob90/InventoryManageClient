import React from "react";
import TestimonialCard from "./TestimonialCard";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import {
  Navigation,
  Pagination,
  Scrollbar,
  EffectCube,
  Autoplay,
} from "swiper/modules";

const Testimonial = () => {
  const testimonialData = [
    {
      rating: 4.7,
      review:
        "We implemented this Inventory Management System for our business, and it has significantly streamlined our operations. Managing products, tracking sales, and generating reports have become so much more efficient. Highly impressed!",
      authorName: "Sarah Johnson",
      authorPosition: "Operations Manager",
      authorCompany: "TechMart Solutions",
      imageUrl:
        "https://images.unsplash.com/photo-1547425260-76bcadfb4f2c?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      rating: 4.0,
      review:
        "The Inventory Management System has been a game-changer for our warehouse. The user-friendly interface and robust features have made inventory tracking a breeze. A valuable tool for any business!",
      authorName: "Michael Chang",
      authorPosition: "Warehouse Supervisor",
      authorCompany: "LogiTech Warehousing",
      imageUrl:
        "https://images.unsplash.com/flagged/photo-1570612861542-284f4c12e75f?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      rating: 4.5,
      review:
        "As a small business owner, managing inventory used to be a headache. Since adopting this system, I've saved time, reduced errors, and gained better control over my stock. It's a must-have for any business owner!",
      authorName: "Emily Martinez",
      authorPosition: "Small Business Owner",
      authorCompany: "Crafty Creations",
      imageUrl:
        "https://images.unsplash.com/photo-1552058544-f2b08422138a?q=80&w=1398&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
  ];
  return (
    <div className="pb-10 bg-gray-200">
      <p className="pt-16 text-xl font-bold text-center font-clashBold md:text-2xl lg:text-3xl">
        Word's Of Satisfaction
      </p>
      <Swiper
        // pagination={true}
        modules={[Autoplay, Navigation, Pagination, Scrollbar, EffectCube]}
        className="mySwiper"
        autoplay={{ delay: 2500, disableOnInteraction: false }}
        loop={true}
        speed={2000}
      >
        {testimonialData.map((testimonial) => (
          <SwiperSlide key={testimonial.imageUrl}>
            <TestimonialCard testimonial={testimonial} />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Testimonial;
