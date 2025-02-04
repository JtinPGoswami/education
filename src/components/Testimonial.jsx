import React, { useState, useEffect, useRef } from "react";
import leftArrow from "../assets/leftArrow.svg";

const Testimonial = () => {
  const slides = [
    {
      name: "Ravi Kumar",
      review:
        "Campus Updates helped me find the best MBA college based on my profile and budget. The mentorship I received was invaluable in preparing for the CAT exam and selecting the right college. Thank you, Campus Updates, for making my journey smoother!",
    },
    {
      name: "Priya Sharma",
      review:
        "As a law aspirant, I was unsure about which college would offer the best exposure and placements. With the guidance of Advocate Dhiresh Singh Rathore, I was able to choose the right law school. I'm now studying at one of India's top law universities!",
    },
    {
      name: "Arvind Singh",
      review:
        "I had 2 years of work experience and was unsure if I should pursue an MBA. The expert advice from Sushant Mishra helped me decide, and now I am pursuing my MBA at a top-tier B-school. The platform’s reviews were also very helpful.",
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const timeoutRef = useRef(null);

  // Reset the interval to automate the carousel
  const resetTimeout = () => {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }
  };

  const goToNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % slides.length);
  };

  const goToPrev = () => {
    setCurrentIndex(
      (prevIndex) => (prevIndex - 1 + slides.length) % slides.length
    );
  };

  useEffect(() => {
    resetTimeout();
    timeoutRef.current = setTimeout(() => {
      goToNext();
    }, 3000); // Change slide every 3 seconds
    return () => resetTimeout();
  }, [currentIndex]);

  return (
    <div className="relative mt-20">
      <div className="w-full max-w-6xl mx-auto overflow-hidden">
        {/* Carousel Container */}
        <div
          className="flex transition-transform duration-500 py-4"
          style={{
            transform: `translateX(-${
              currentIndex * (100 / (window.innerWidth >= 768 ? 2 : 1))
            }%)`,
          }}
        >
          {slides.concat(slides).map((slide, index) => (
            <div
              key={index}
              className={`${
                window.innerWidth >= 768 ? "w-1/2" : "w-full"
              } flex items-center justify-center px-4`}
            >
              {/* Card Design */}
              <section className=" bg-green-200 rounded-lg p-5 w-[545px] h-[245px]">
                <div className="flex justify-start items-center gap-10 mb-5">
                  <div>
                    <p className="font-bold text-2xl text-black">
                      {slide.name}
                    </p>
                  </div>
                </div>
                <div>
                  <p className="font-normal md:text-lg text-sm text-black">
                    <sup className="text-primary md:text-3xl text-xl top-1">
                      "
                    </sup>{" "}
                    {slide.review} "
                  </p>
                </div>
              </section>
            </div>
          ))}
        </div>

        {/* Previous Button */}
        <img
          onClick={goToPrev}
          src={leftArrow}
          className="absolute sm:w-auto md:h-auto w-6 h-6 md:left-4 -left-4 top-1/2 transform -translate-y-1/2 cursor-pointer"
        />

        {/* Next Button */}
        <img
          onClick={goToNext}
          src={leftArrow}
          className="absolute md:right-4 -right-4 md:w-auto md:h-auto w-6 h-6 top-1/2 transform -translate-y-1/2 cursor-pointer scale-x-[-1]"
        />
      </div>
    </div>
  );
};

export default Testimonial;
