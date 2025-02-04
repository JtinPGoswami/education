import React, { useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { AiOutlineLeft, AiOutlineRight } from "react-icons/ai"; // Importing React Icons
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Pagination, Autoplay } from "swiper/modules";

const ImgCarousel = ({ images }) => {
  const swiperRef = useRef(null);

  // If there are 2 or fewer images, display them statically
  if (images.length <= 2) {
    return (
      <div className="flex justify-center gap-4 my-10">
        {images.map((imgUrl, idx) => (
          <img
            key={idx}
            src={imgUrl}
            alt={`Slide ${idx}`}
            className="w-[300px] h-[200px] object-cover rounded-lg"
          />
        ))}
      </div>
    );
  }

  return (
    <div className="relative w-4/5 mx-auto my-20">
      {/* Custom Navigation Buttons */}
      <button
        className="absolute top-1/2 left-0 z-10 -translate-y-1/2 bg-gray-800 text-white p-3 rounded-full shadow-lg hover:bg-gray-600"
        onClick={() => swiperRef.current?.slidePrev()}
      >
        <AiOutlineLeft size={24} />
      </button>

      <button
        className="absolute top-1/2 right-0 z-10 -translate-y-1/2 bg-gray-800 text-white p-3 rounded-full shadow-lg hover:bg-gray-600"
        onClick={() => swiperRef.current?.slideNext()}
      >
        <AiOutlineRight size={24} />
      </button>

      <Swiper
        onSwiper={(swiper) => (swiperRef.current = swiper)}
        slidesPerView={1}
        breakpoints={{
          640: { slidesPerView: 2, spaceBetween: 20 },
          1024: { slidesPerView: 3, spaceBetween: 30 },
        }}
        spaceBetween={20}
        pagination={{ clickable: true }}
        loop={true}
        autoplay={{
          delay: 2000,
          disableOnInteraction: false,
        }}
        modules={[Pagination, Autoplay]}
        className="mySwiper"
      >
        {images.map((imgUrl, idx) => (
          <SwiperSlide key={idx}>
            <img
              src={imgUrl}
              alt={`Slide ${idx}`}
              className="w-[500px] h-[300px] object-cover rounded-lg"
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default ImgCarousel;
