import React from "react";
import { FaStar } from "react-icons/fa6";
const CollegeInfo = ({ collegeInfo }) => {
  return (
    <div className=" mt-6 p-4 border border-gray-300 rounded-xl">
      {/* heading & desc */}
      <div>
        <h1 className="text-2xl font-bold text-green-500">
          {collegeInfo.name}
        </h1>
        <p className="text-gray-700 font-medium mt-6">{collegeInfo.desc}</p>
      </div>

      {/* table */}
      <div className="mt-8">
        <table className="max-w-full border-collapse border border-gray-300">
          <thead>
            {collegeInfo.highlightsTable.heading.map((item, index) => (
              <tr
                key={index}
                className="bg-gray-100 text-gray-600 text-left border border-gray-300  p-2  text-wrap"
              >
                <th className="border border-gray-300 p-2 sm:w-auto ">
                  {item.label}
                </th>
                <th className="border border-gray-300 p-2 text-wrap">
                  {item.value}
                </th>
              </tr>
            ))}
          </thead>
          <tbody>
            {collegeInfo.highlightsTable.data.map((item, index) => (
              <tr
                key={index}
                className="border border-gray-300 text-gray-700  "
              >
                <td className="border border-gray-300  sm:text-lg text-sm font-semibold sm:p-5 p-1 text-wrap ">
                  {item.label}
                </td>
                <td className="border border-gray-300 sm:p-5 p-1 sm:text-lg text-sm text-wrap">
                  {item.value}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

const Courses = ({ courseInfo }) => {
  return (
    <div>
      <div className=" mt-6 p-4 border border-gray-300 rounded-xl">
        {/* heading & desc */}
        <div>
          <h1 className="text-2xl font-bold text-green-500">
            {courseInfo.name}
          </h1>
          <p className="text-gray-700 font-medium mt-6">{courseInfo.desc}</p>
        </div>

        {/* table */}
        <div className="mt-8">
          <table className="w-full border-collapse border border-gray-300">
            <thead>
              {courseInfo.heading.map((item, index) => (
                <tr
                  key={index}
                  className="bg-gray-100 text-gray-700 text-left border border-gray-300  p-2"
                >
                  <th className="border border-gray-300 p-2">
                    {item.labelOne}
                  </th>
                  <th className="border border-gray-300 p-2">
                    {item.labelTwo}
                  </th>
                  <th className="border border-gray-300 p-2">
                    {item.labelThree}
                  </th>
                </tr>
              ))}
            </thead>
            <tbody>
              {courseInfo.data.map((item, index) => (
                <tr
                  key={index}
                  className="border border-gray-300 text-gray-700 "
                >
                  <td className="border border-gray-300 p-2 font-semibold">
                    {item.labelOne}
                  </td>
                  <td className="border border-gray-300 p-2">
                    {item.labelTwo}
                  </td>
                  <td className="border border-gray-300 p-2">
                    {item.labelThree.map((data, idx) => (
                      <div key={idx}>
                        {data.eligibility && <p>{data.eligibility}</p>}
                        {data.exams && <p>{data.exams}</p>}
                      </div>
                    ))}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

const Fees = ({ feesInfo }) => {
  return (
    <div className=" mt-6 p-4 border border-gray-300 rounded-xl">
      {/* heading & desc */}
      <div>
        <h1 className="text-2xl font-bold text-green-500">{feesInfo.name}</h1>
        {feesInfo.desc && (
          <p className="text-gray-700 font-medium mt-6">{feesInfo.desc}</p>
        )}
      </div>

      {/* table */}
      <div className="mt-8">
        <table className="w-full border-collapse border border-gray-300">
          <thead>
            {feesInfo.highlightsHeading.map((item, index) => (
              <tr
                key={index}
                className="bg-gray-100 text-gray-700 text-left border border-gray-300  p-2"
              >
                <th className="border border-gray-300 p-2">{item.labelOne}</th>
                <th className="border border-gray-300 p-2">{item.labelTwo}</th>
              </tr>
            ))}
          </thead>
          <tbody>
            {feesInfo.highlights.map((item, index) => (
              <tr key={index} className="border border-gray-300 text-gray-700 ">
                <td className="border border-gray-300 p-2 font-semibold">
                  {item.labelOne}
                </td>
                <td className="border border-gray-300 p-2">{item.labelTwo}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <div className="mt-10">
        <h1 className="text-xl font-bold text-gray-700 mb-5">Top Course Fee</h1>
        <h1 className="text-lg font-bold text-gray-600">
          {feesInfo.courseTotalFee.courseName}
        </h1>
        {feesInfo.courseTotalFee.desc && (
          <p className="text-gray-700 font-medium mt-6">
            {feesInfo.courseTotalFee.desc}
          </p>
        )}
      </div>
      <div className="mt-8">
        <table className="w-full border-collapse border border-gray-300">
          <thead>
            <tr className="bg-gray-100 text-gray-700 text-left border border-gray-300  p-2">
              <th className="border border-gray-300 p-2">
                {feesInfo.courseTotalFee.tHeading.labelOne}
              </th>
              <th className="border border-gray-300 p-2">
                {feesInfo.courseTotalFee.tHeading.labelTwo}
              </th>
            </tr>
          </thead>
          <tbody>
            {feesInfo.courseTotalFee.tData.map((item, index) => (
              <tr key={index} className="border border-gray-300 text-gray-700 ">
                <td className="border border-gray-300 p-2 font-semibold">
                  {item.labelOne}
                </td>
                <td className="border border-gray-300 p-2">{item.labelTwo}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

const Admissions = ({ admissionInfo }) => {
  return (
    <div>
      <div className="mt-6 p-4 border border-gray-300 rounded-xl">
        {/* heading & desc */}
        <div>
          <h1 className="text-2xl font-bold text-green-500">
            {admissionInfo.name}
          </h1>
          <p className="text-gray-700 font-medium mt-6">{admissionInfo.desc}</p>
        </div>

        {/* table */}
        <div className="mt-8">
          <table className="w-full border-collapse border border-gray-300">
            <thead>
              {admissionInfo.highlightsHeading.map((item, index) => (
                <tr
                  key={index}
                  className="bg-gray-100 text-gray-700 text-left border border-gray-300  p-4"
                >
                  <th className="border border-gray-300 p-4">
                    {item.labelOne}
                  </th>
                  <th className="border border-gray-300 p-4">
                    {item.labelTwo}
                  </th>
                  <th className="border border-gray-300 p-4">
                    {item.labelThree}
                  </th>
                </tr>
              ))}
            </thead>
            <tbody>
              {admissionInfo.highlights.map((item, index) => (
                <tr
                  key={index}
                  className="border border-gray-300 text-gray-700  "
                >
                  <td className="border border-gray-300 p-4  font-semibold">
                    {item.labelOne}
                  </td>
                  <td className="border border-gray-300 p-4 ">
                    {item.labelTwo}
                  </td>
                  <td className="border border-gray-300 p-4 ">
                    {item.labelThree}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

const Placements = ({ placementInfo }) => {
  return (
    <div>
      <div className=" mt-6 p-4 border border-gray-300 rounded-xl">
        {/* heading & desc */}
        <div>
          <h1 className="text-2xl font-bold text-green-500">
            {placementInfo.name}
          </h1>
          <p className="text-gray-700 font-medium mt-6">{placementInfo.desc}</p>
        </div>
      </div>

      <div className="border border-gray-300 rounded-xl mt-6 p-4">
        <h3 className="text-xl font-bold text-gray-700">Top Recruiters</h3>
        <div className="flex flex-wrap sm:gap-6 gap-3 mt-4">
          {placementInfo.recruiters.map((item, index) => (
            <p
              key={index}
              className="border border-gray-300 px-2 py-1 rounded-lg font-medium text-gray-600 flex-grow text-center"
            >
              {item}
            </p>
          ))}
        </div>
      </div>
    </div>
  );
};

const TextReview = ({ textReview }) => {
  return (
    <div className=" px-3 py-4 rounded-lg border border-gray-700 flex flex-col justify-between">
      <div className="flex justify-start gap-3 ">
        <h3 className="text-3xl font-medium text-black">{textReview.name}</h3>
        <div className="text-base font-thin text-gray-600 flex items-center mt-3">
          <FaStar className="text-yellow-400" />
          <p>{textReview.rating}</p>
        </div>
      </div>
      <p className="mt-10 text-base font-light text-gray-900">
        {textReview.review}
      </p>
    </div>
  );
};
const VideoReview = ({ videoReview }) => {
  console.log(videoReview.video);

  return (
    <div className=" p-2  rounded-lg border border-gray-700">
      <video
        src={`videoReview/${videoReview.video}`}
        alt="not loded"
        className="w-full h-44 rounded-xl"
        loop
        muted
        autoPlay
      ></video>
      <p>{videoReview.review}</p>
    </div>
  );
};
export {
  CollegeInfo,
  Courses,
  Fees,
  Admissions,
  Placements,
  TextReview,
  VideoReview,
};
