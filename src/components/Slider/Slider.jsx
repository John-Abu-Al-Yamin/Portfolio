import React from "react";
import avtr1 from "../assets/avatar1.jpg";
import avtr2 from "../assets/avatar2.jpg";
import avtr3 from "../assets/avatar3.jpg";
import avtr4 from "../assets/avatar4.jpg";
import "./Slider.css";






// import Swiper core and required modules
import {  Pagination } from 'swiper/modules';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';









const Slider = () => {
  return (
    <section id="testimonials">
      <h5>Review From Clients</h5>
      <h2>Testimonials</h2>
      <Swiper className="container testimonials-container"
           modules={[ Pagination ]}
           spaceBetween={40}
           slidesPerView={1}
           
           pagination={{ clickable: true }}
      >
        
        <SwiperSlide className="testimonial">
          <div className="client-avatar">
            <img src={avtr1} alt="" />
          </div>
          <h5 className="client-name">Ernest Achiever</h5>
          <small className="client-review">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Iste,
            totam?
          </small>
        </SwiperSlide>

        <SwiperSlide className="testimonial">
          <div className="client-avatar">
            <img src={avtr2} alt="" />
          </div>
          <h5 className="client-name">Ernest Achiever</h5>
          <small className="client-review">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Iste,
            totam?
          </small>
        </SwiperSlide>

        <SwiperSlide className="testimonial">
          <div className="client-avatar">
            <img src={avtr3} alt="" />
          </div>
          <h5 className="client-name">Ernest Achiever</h5>
          <small className="client-review">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Iste,
            totam?
          </small>
        </SwiperSlide>

        <SwiperSlide className="testimonial">
          <div className="client-avatar">
            <img src={avtr4} alt="" />
          </div>
          <h5 className="client-name">Ernest Achiever</h5>
          <small className="client-review">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Iste,
            totam?
          </small>
        </SwiperSlide>
      </Swiper>
    </section>
  );
};

export default Slider;




// <article className="testimonial">
// <div className="client-avatar">
//   <img src={avtr4} alt="" />
// </div>
// <h5 className="client-name">Ernest Achiever</h5>
// <small className="client-review">
//   Lorem ipsum, dolor sit amet consectetur adipisicing elit. Iste,
//   totam?
// </small>
// </article>