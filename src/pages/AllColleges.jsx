import React from "react";
import { Link } from "react-router-dom";
import { collegeDetailedData } from "../data/college";
import CollegeCard from "../components/CollegeCard";

const AllColleges = () => {
  return (
    <>
      <section className="relative bg-green-400 text-white text-center py-14 flex flex-col justify-center items-center md:px-10 px-2 ">
        <h1 className="sm:text-4xl text-xl font-bold">Top Colleges</h1>

        <p className="sm:text-lg text-sm font-medium sm:mt-10 mt-2 lg:px-20 px-5">
          Choosing the right MBA program is one of the most important decisions
          in your academic and professional journey. We’ve curated a list of top
          MBA colleges around the world, known for their exceptional education,
          resources, and alumni networks. Explore these top-tier programs to
          find the best fit for your career goals.
        </p>
      </section>

      <section className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1  gap-10 my-20 sm:px-10 ">
        {collegeDetailedData.map((college, idx) => (
          <CollegeCard key={idx} college={college} />
        ))}
      </section>
    </>
  );
};

export default AllColleges;
