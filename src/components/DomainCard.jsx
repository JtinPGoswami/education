import React from "react";
import { MdEngineering, MdManageAccounts } from "react-icons/md";
import { GoLaw } from "react-icons/go";
import { FaUserDoctor } from "react-icons/fa6";

const DomainCard = ({domain}) => {

  return (
    <div className=" w-full p-4 rounded-3xl shadow-2xl border border-transparent hover:border-green-600 transition-all duration-200 ease-linear group">
      <div className="flex justify-start gap-3 items-center ">
        <p className="xl:text-7xl lg:text-5xl text-3xl">
          {domain.dig === "MBA" ? (
            <MdManageAccounts />
          ) : domain.dig === "LAW" ? (
            <GoLaw />
          ) : domain.dig === "Medical" ? (
            <FaUserDoctor />
          ) : (
            <MdEngineering />
          )}
        </p>
        <h3 className="2xl:text-3xl text-xl font-bold">{domain.title}</h3>
      </div>
      <p className="font-light italic mt-5 text-gray-700 group-hover:text-gray-900">{domain.description}</p>
    </div>
  );
};

export default DomainCard;
