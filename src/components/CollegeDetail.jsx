import React, { useState } from "react";

import { BsStarFill } from "react-icons/bs";
import { FaLocationDot } from "react-icons/fa6";
const CollegeDetail = ({ college }) => {
   console.log(college.brochure);
   
  return (
    <section className="mt-8 border border-gray-300 rounded-xl overflow-hidden  w-full  ">
      
      <div className="w-full h-[200px] overflow-hidden">
        <img
          className="w-full h-full object-cover"
          src={college.imageUrl}
          alt={college.name}
        />
      </div>

      
      <div className="px-3 py-3   pb-10">
        <h1 className="sm:text-2xl text-xl font-bold text-green-500">{college.name}</h1>
        <div className="mt-2 flex sm:flex-row flex-col justify-between items-center gap-1 text-gray-700">
          <div className="flex gap-2 items-center font-medium">
            <FaLocationDot className="text-gray-700" />
            <p className="sm:text-base text-sm">{college.location}</p> |
            <BsStarFill className="text-yellow-500" />
            <p className="sm:text-base text-sm">{college.rating}</p>
          </div>
          <div className="sm:flex grid grid-cols-2 gap-2 items-center flex-wrap">
            {college.brochure&&<a
              href={college.brochure}
             download={college.brochure}
              className="bg-green-500 text-white px-2 py-1 rounded"
            >
            Download Brochure
            </a>}
            {college.highlights?.map((item, index) => (
              <span
                key={index}
                className="bg-green-200 rounded px-1 font-medium"
              >
                {item.value}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default CollegeDetail;
