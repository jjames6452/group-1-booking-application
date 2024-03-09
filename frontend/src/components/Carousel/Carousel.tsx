// Carousel.tsx
import React, { useEffect } from "react";
import Swiper from "swiper/bundle";
import "swiper/css/bundle";
import "./Carousel.css";

interface CarouselProps {
  images: {
    place: string;
    image: string;
    description: string;
    properties: string;
  }[];
}

const Carousel: React.FC<CarouselProps> = ({ images }) => {
  useEffect(() => {
    const mySwiper = new Swiper(".swiper-container", {
      //   loop: true,
      spaceBetween: 16,
      slidesPerView: 2.3,
      //   centeredSlides: true,
      navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
      },
    });

    return () => {
      mySwiper.destroy();
    };
  }, []);

  return (
    <div className="w-full overflow-hidden">
      <div className="swiper-container relative">
        <div className="swiper-wrapper">
          {images.map((item, index) => (
            <div key={index} className="swiper-slide">
              <img
                src={item.image}
                alt={`Slide ${index + 1}`}
                className="w-full h-full object-cover rounded-lg"
              />
              <div>{item.description}</div>
              <div>{item.properties}</div>
            </div>
          ))}
        </div>
        <div className="swiper-button-prev left-nav hidden xl:block">
          <span className="material-symbols-outlined">chevron_left</span>
        </div>
        <div className="swiper-button-next right-nav hidden xl:block">
          <span className="material-symbols-outlined">chevron_right</span>
        </div>
      </div>
    </div>
  );
};

export default Carousel;
