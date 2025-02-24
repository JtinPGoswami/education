import React from "react";
import Ankit from "../assets/Experts/AnkitPanday.jpeg";
import Dhiresh from "../assets/Experts/DhireshSingh.jpeg";
import Garun from "../assets/Experts/GarunBhadoria.png";
import Khushi from "../assets/Experts/KhushiMaheshwari.jpeg";
import Mohit from "../assets/Experts/Mohit.jpeg";
import { FaLinkedin } from "react-icons/fa";
import { Link } from "react-router-dom";

const ExpertsCard = () => {
  const profiles = [
    {
      name: "Adv Khushi Maheshwari",
      email: "khushijhawar2016@gmail.com",
      education: "B.com, LLB",
      experties: "Legal & Compliance, Business Stategy Development",
      img: Khushi,
      Linkedin:"https://www.linkedin.com/in/khushi-jhawar-761583213?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
    },
    {
      name: "Dr Garun Bhadoria",
      email: "garun.bhadoria@gmail.com",
      education: "BBA, LLB, LLM, PhD",
      experties: "Management Consulting",
      img: Garun,
    },
    {
      name: "ADV. Dhiresh Singh Rathore",
      email: "rdhireshsingh@gmail.com",
      education: "B.com, MBA, LLB, LLM",
      experties: "Management Consultant",
      img: Dhiresh,
    },
    {
      name: "Ankit Pandey",
      email: "annkitpandey64@gmail.com",
      education: "B.Sc (CS)",
      experties:
      "Market Research & Analytics, Process Optimization & Efficiency, Project Management, Quality Control & Compliance",
      img: Ankit,
      Linkedin: "https://www.linkedin.com/in/ankit-pandey-740a72327/",
    },
    {
      name: " Mohit Gangrade",
      email: "mohitgangrade3002@gmail.com ",
      education: "PGDM ",
      experties:
      "Cross-Industry experience,Collaborative Leadership ,Strategic Management ,Global Business Acumen",
      img: Mohit,
      Linkedin: "https://www.linkedin.com/in/mohit-gangrade-236191197?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
    },
  ];
  
  return (
    <div className="bg-gray-100 flex items-center pb-6">
      <div className="w-full mx-auto md:px-4 md:py-4 px-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {profiles.map((profile, index) => (
          <div
            key={index}
            className="bg-white rounded-xl p-6 flex flex-col px-10 relative "
            >
            {/* Profile Image */}
            <div className="w-[200px] h-[200px] mx-auto bg-gray-300 rounded-full mb-4 overflow-hidden">
              <img
                className="w-full h-full object-cover"
                src={profile.img || "https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_640.png"}
                alt={`${profile.name}'s profile`}
              />
            </div>

            {/* Profile Details */}
            <h2 className="text-lg font-semibold text-gray-800">{profile.name}</h2>
            <p className="text-sm text-gray-500 font-medium">{profile.email}</p>

            {/* Education */}
            <div className="mt-4">
              <p className="text-sm text-gray-700 font-semibold">Education:</p>
              <ul className="text-sm text-gray-600 list-disc pl-5">
                {profile.education.split(",").map((item, idx) => (
                  <li key={idx}>{item.trim()}</li>
                ))}
              </ul>
            </div>

            {/* Expertise */}
            <div className="mt-4">
              <p className="text-sm text-gray-700 font-semibold">Expertise:</p>
              <ul className="text-sm text-gray-600 list-disc pl-5">
                {profile.experties.split(",").map((item, idx) => (
                  <li key={idx}>{item.trim()}</li>
                ))}
              </ul>
            </div>

            {/* LinkedIn */}
            {profile.Linkedin && (
              <Link
              to={profile.Linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="text-2xl text-blue-500 mt-4 absolute top-3 right-5 cursor-pointer hover:text-3xl transition-all duration-200 ease-linear"
              >
              <FaLinkedin />
              </Link>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default ExpertsCard;
