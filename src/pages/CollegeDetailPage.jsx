import React, { useState } from "react";
import CollegeDetail from "../components/CollegeDetail";
import {
  Admissions,
  CollegeInfo,
  Courses,
  Fees,
  Placements,
  TextReview,
  VideoReview,
} from "../components/CollegeInformations";
import { useCollege } from "../context/CollegeContext";
import FaqSection from "../components/Faqsection";
import ImgCarousel from "../components/ImgCarousel";

const CollegeDetailPage = () => {
  const [activeTab, setActiveTab] = useState("College Info");

  const { selectedCollege } = useCollege();
  if (!selectedCollege) {
    return (
      <div className="text-center py-4 text-gray-600">
        Loading college details...
      </div>
    );
  }

  const {
    placementInfo,
    admissionInfo,
    feesInfo,
    detailsHighlight,
    courseInfo,
    FAQ,
    Img,
    textReview,
    videoReview,
  } = selectedCollege;
  const collegeDetail = detailsHighlight[0];
  return (
    <div className="w-full">
      <div className="px-4 w-full">
        <CollegeDetail college={selectedCollege} />
      </div>

      {/* tabs */}
      <section className="px-4">
        <div className="flex md:gap-8 flex-wrap gap-3 py-4 mt-6 px-4 border border-gray-300 rounded-xl">
          {[
            "College Info",
            "Courses",
            "Fees",
            "Admissions",
            "Placements",
            "Reviews",
          ].map((tab) => (
            <button
              key={tab}
              className={`text-gray-600 hover:text-green-500 cursor-pointer font-medium ${
                activeTab === tab ? "text-green-500" : ""
              }`}
              onClick={() => setActiveTab(tab)}
            >
              {tab}
            </button>
          ))}
        </div>
      </section>

      {activeTab === "College Info" && (
        <div className="px-4 ">
          <CollegeInfo collegeInfo={collegeDetail} />
        </div>
      )}

      {/* courses tab */}
      {activeTab === "Courses" && (
        <div className="px-4">
          {courseInfo.map((info, index) => (
            <Courses key={index} courseInfo={info} />
          ))}
        </div>
      )}

      {/* fees tab */}
      {activeTab === "Fees" && (
        <div className="px-4">
          <Fees feesInfo={feesInfo} />
        </div>
      )}

      {/* admissions tab */}
      {activeTab === "Admissions" && (
        <div className="px-4">
          {admissionInfo.map((info, index) => (
            <Admissions key={index} admissionInfo={info} />
          ))}
        </div>
      )}

      {activeTab === "Placements" && (
        <div className="px-4">
          {placementInfo.map((info, index) => (
            <Placements key={index} placementInfo={info} />
          ))}
        </div>
      )}
      {activeTab === "Reviews" && (
        <div className="px-4 grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 grid-cols-1  gap-5 mt-10">
          {textReview.map((review, index) => (
            <TextReview key={index} textReview={review} />
          ))}

          {videoReview.map((review, index) => (
            <VideoReview key={index} videoReview={review} />
          ))}
        </div>
      )}

      <FaqSection faqs={FAQ} />
      <ImgCarousel images={Img} />
    </div>
  );
};

export default CollegeDetailPage;
