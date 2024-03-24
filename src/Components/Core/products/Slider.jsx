// import React from 'react'
import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import "./sliderStyle.css";
import { download } from "../../../assets/Logo/download.jpg";

// import required modules
import { Pagination, Navigation } from "swiper/modules";

const Slider = () => {
  return (
    <>
      <Swiper
        pagination={{
          type: "progressbar",
        }}
        navigation={true}
        modules={[Pagination, Navigation]}
        className="relative h-66 w-[100%] rounded-[15px]"
      >
        <SwiperSlide className="h-5">
          <img
            src="https://images.news18.com/ibnlive/uploads/2023/04/world-health-day-2023-wishes-greetings-1-16807701184x3.jpg"
            alt="image 1"
            className="h-full w-full object-cover"
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            src="https://media.istockphoto.com/id/1363588189/photo/healthy-lifestyle-on-ketogenic-diet-eating-clean-keto-food-good-health-dietary-in-heart-dish.jpg?s=612x612&w=0&k=20&c=RVW_a2Bq3eYeUWqkUbTUHkiQbGJaAMa9Q2fyljGymgY="
            alt="image 2"
            className="h-full w-full object-cover"
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            src="https://images.unsplash.com/photo-1518623489648-a173ef7824f3?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2762&q=80"
            alt="image 3"
            className="h-full w-full object-cover"
          />
        </SwiperSlide>
      </Swiper>
    </>
  );
};

export default Slider;
