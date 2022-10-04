import React from "react";
import "./testimonials.css";
import Avt1 from "../../assets/rafael-celestino.png";
import Avt2 from "../../assets/weslley-araujo.jpg";

// import Swiper core and required modules
import { Pagination } from "swiper";

import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

const data = [
  {
    avatar: Avt1,
    name: "Rafael Celestino",
    review:
    "Sarah foi rápida e objetiva, entendeu o projeto e se dispôs a entregar uma amostra antes de fecharmos o job. Realizou todas substituições solicitadas, certamente voltaria a contrata-la.",
  },
  {
    avatar: Avt2,
    name: "Weslley Araújo",
    review:
      "Realizou todas as etapas como combinado. Foi realmente atenciosa. Parabéns pelo trabalho!",
  },
];

const Testimonials = () => {
  return (
    <section id="testimonials">
      <h2>Depoimentos</h2>
      <Swiper
        className="container testimonials__container"
        modules={[Pagination]}
        spaceBetween={40}
        slidesPerView={1}
        pagination={{ clickable: true }}
      >
        {data.map(({ avatar, name, review }, index) => {
          return (
            <SwiperSlide key={index} className="testimonial">
              <div className="client__avatar">
                <img src={avatar} alt={name} />
              </div>
              <h5 className="client__name">{name}</h5>
              <small className="client__review">{review}</small>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </section>
  );
};

export default Testimonials;
