import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "./PromoSlider.css";

const PromoSlider = () => {
  const promos = [
    "https://ipoint.com.ar/img/cms/banners/20220901/Macro-business-slider-desktop%20(1).jpg",
    "https://ipoint.com.ar/img/cms/banners/20220901/IPOINT-12cf-slider-desktop.jpg",
    "https://ipoint.com.ar/img/cms/banners/20220901/IPOINT-Macro-slider-desktop.jpg",
  ];
  return (
    <React.Fragment>
      <div className="promo-slider">
        <Swiper
          spaceBetween={30}
          centeredSlides={true}
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
          pagination={{
            clickable: true,
          }}
          navigation={true}
          modules={[Autoplay, Pagination, Navigation]}
          className="mySwiper"
        >
          {promos.map((promo) => (
            <SwiperSlide key={promo}>
              <img src={promo} alt="promo" />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </React.Fragment>
  );
};
export default PromoSlider;
