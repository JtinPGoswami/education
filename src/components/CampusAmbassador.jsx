import React, { useState } from "react";
import campus from "../assets/campus.jpeg";

const CampusAmbassador = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    college: "",
    state: "",
    city: "",
    time: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form Data Submitted:", formData);
  };

  return (
    <section className="w-[90%] mx-auto  mt-42 space-y-16">
      <div>
        <h1 className="md:text-3xl text-2xl font-bold">
          Become a Campus Ambassador <br />
          <span className="text-[#5FCF80]">with Campus Updates!</span>
        </h1>

        <p className="mt-3 text-base font-normal">
          Help fellow students make informed decisions while earning exciting
          rewards.
        </p>

        <p className="mt-3 md:text-lg sm:text-base text-sm font-medium">
          At Campus Updates, we believe in the power of student communities to
          shape the future. <br />
          As a Campus Ambassador, you’ll play a pivotal role in spreading
          awareness about our platform, <br />
          helping peers find the right colleges, and providing guidance to
          prospective MBA and post-graduate students.
        </p>
      </div>

      <div className="mt-4 grid md:grid-cols-2 grid-cols-1 gap-5 ">
        <div className="w-full ">
          <h3 className="md:text-2xl text-lg font-bold mt-4">
            What You'll Do:
          </h3>
          <ul className="list-disc mt-3 px-3 gap-y-3 md:text-lg sm:text-base text-sm font-medium">
            <li>
              Share your knowledge about the platform with your college
              community.
            </li>
            <li>
              Help students navigate through college reviews, mentorship, and
              entrance exam guidance.
            </li>
            <li>
              Organize campus events and webinars in collaboration with Campus
              Updates.
            </li>
            <li>
              Build a network of students looking for guidance and support in
              their educational journey.
            </li>
          </ul>
        </div>

        <div className="w-full ">
          <h3 className="md:text-2xl text-lg font-bold mt-4">
            Perks of Being a Campus Ambassador:
          </h3>
          <ul className="list-disc mt-3 px-3 gap-y-3 md:text-lg sm:text-base text-sm font-medium">
            <li>Gain valuable leadership and communication experience.</li>
            <li>Earn rewards and certificates for your efforts.</li>
            <li>
              Receive exclusive access to resources, workshops, and mentorship.
            </li>
            <li>Be part of a nationwide community of future leaders.</li>
          </ul>
        </div>
      </div>
      <div className="flex justify-start items-center gap-3.5 mb-8  w-full">
        <h3 className=" text-2xl font-bold ">How to Apply:</h3>
        <p className="text-wrap text-lg pt-1">
          Fill out the form below to apply for the position of Campus Ambassador
          at your college.
        </p>
      </div>
      <div className="flex justify-center items-center lg:flex-row flex-col-reverse  gap-5 ">
        <div className="flex">
          <form
            onSubmit={handleSubmit}
            className="space-y-6 bg-white p-6 "
          >
            <div className="flex justify-between gap-4 items-center flex-wrap">
              {/* Name */}
              <div className="lg:w-[48%] w-full">
                <label
                  htmlFor="name"
                  className="block text-sm font-medium text-gray-700"
                >
                  Name <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                 className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
                  placeholder="Your Name"
                  required
                />
              </div>

              {/* Email */}
              <div className="lg:w-[48%] w-full ">
                <label
                  htmlFor="email"
                  className="block text-sm font-medium text-gray-700"
                >
                  Email Address <span className="text-red-500">*</span>
                </label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
                  placeholder="Your Email"
                  required
                />
              </div>

              {/* Phone */}
              <div className="lg:w-[48%] w-full">
                <label
                  htmlFor="phone"
                  className="block text-sm font-medium text-gray-700"
                >
                  Phone Number <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                 className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
                  placeholder="Your Phone Number"
                  required
                />
              </div>

              {/* College */}
              <div className="lg:w-[48%] w-full">
                <label
                  htmlFor="college"
                  className="block text-sm font-medium text-gray-700"
                >
                  College <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  name="college"
                  value={formData.college}
                  onChange={handleChange}
                className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
                  placeholder="College Name"
                  required
                />
              </div>

              {/* State */}
              <div className="w-full">
                <label
                  htmlFor="state"
                  className="block text-sm font-medium text-gray-700"
                >
                  State <span className="text-red-500">*</span>
                </label>
                <select
                  name="state"
                  value={formData.state}
                  onChange={handleChange}
                 className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
                  required
                >
                  <option value="">Select State</option>
                  <option value="Andhra Pradesh">Andhra Pradesh</option>
                  <option value="Madhya Pradesh">Madhya Pradesh</option>
                </select>
              </div>

              {/* City */}
              <div className="w-full">
                <label
                  htmlFor="city"
                  className="block text-sm font-medium text-gray-700"
                >
                  City <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  name="city"
                  value={formData.city}
                  onChange={handleChange}
                  className="block w-full mt-1 py-2 px-3 border  rounded-md shadow-sm focus:outline-[#77d693]"
                  placeholder="Your City"
                  required
                />
              </div>

              {/* Best Time */}
              <div className="w-full">
                <label
                  htmlFor="time"
                  className="block text-sm font-medium text-gray-700"
                >
                  Best Time to Call <span className="text-red-500">*</span>
                </label>
                <input
                  name="time"
                  type="time"
                  value={formData.time}
                  onChange={handleChange}
                  className="block w-full mt-1 py-2 px-3 border  rounded-md shadow-sm focus:outline-[#77d693]"
                  required
                />
              </div>
            </div>

            {/* Message */}
            <div className="w-full">
              <label
                htmlFor="message"
                className="block text-sm font-medium text-gray-700"
              >
                Message <span className="text-red-500">*</span>
              </label>
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                rows="6"
                className="block w-full mt-1 py-2 px-3 border  rounded-md shadow-sm focus:outline-[#77d693] resize-none"
                placeholder="Your Message"
                required
              ></textarea>
            </div>

            {/* Submit Button */}
            <div className="text-center">
              <button
                type="submit"
                className="w-full bg-green-500 text-white py-3 rounded-lg hover:bg-green-600 transition"
              >
                Submit
              </button>
            </div>
          </form>
        </div>
        <div className="my-auto">
          <img src={campus} alt="" />
        </div>
      </div>
    </section>
  );
};

export default CampusAmbassador;
