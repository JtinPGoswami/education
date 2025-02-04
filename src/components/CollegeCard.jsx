import React from "react";
import { FaStar } from "react-icons/fa6";
import { useCollege } from "../context/CollegeContext";
import { useNavigate } from "react-router-dom";
const CollegeCard = ({ college }) => {
  const {selectCollege }=useCollege()
  const navigate=useNavigate()
  const handleButtonClick=()=>{
selectCollege(college)
navigate("/college-detail")
  }
  return (
    <div className="space-y-2 box-border flex sm:flex-row flex-col justify-start gap-4  p-2 rounded-lg border-2 border-transparent shadow-2xl  hover:border-t-[#77d693] group transition-colors ease-linear duration-700 sm:h-36 sm:py-0 py-2">
      <img src={college.imageUrl} alt="" className="sm:w-[40%] w-full h-full" />
      <div className="w-full">
        <h2 className="text-gray-900 flex flex-col justify-between h-16  group-hover:text-[#77d693] text-xl font-medium group-hover:scale-105 transition-transform ease-linear duration-200">
          {college.name}
        </h2>
        <p className="text-lg italic font-light">{college.location}</p>

        <div className="flex justify-between items-center">
          <div className="flex gap-1 items-center ">
            <FaStar className="text-yellow-400" />
            <p className="text-base text-gray-600">{college.rating}</p>
          </div>

          <button onClick={handleButtonClick} className="px-3 sm:group-hover:block sm:hidden transition-all duration-200 ease-linear cursor-pointer bg-green-500 text-white py-1 rounded-lg hover:bg-green-600  lg:text-base text-sm">
            view Detail
          </button>
        </div>
      </div>
    </div>
  );
};

export default CollegeCard;
