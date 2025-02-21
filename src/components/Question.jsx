import React, { useRef, useState } from "react";
import question from "../assets/question.jpg";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import gsap from "gsap";

gsap.registerPlugin(ScrollTrigger);
const Question = () => {

  const elemRef=useRef()

  useGSAP(() => {
    gsap.from(elemRef.current, {
      y: 150,
      opacity: 0,
      duration: 1,
      scrollTrigger: {
        trigger: elemRef.current,
        start: "top 95%",
      },
    });
  });

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    state: "",
    city: "",
    time: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    setFormData({
      name: "",
      email: "",
      phone: "",
      state: "",
      city: "",
      time: "",
      message: "",
    });
  };

  return (
    <div  ref={elemRef} className="mt-20" id="help">
      {/* Heading Section */}
      <div className="text-center md:w-[60%] w-[95%] mx-auto space-y-5 mb-10">
        <h3 className="text-3xl font-bold">
          Have Questions? We’re Here to Help!
        </h3>
        <p className="italic mt-2">
          Get personalized guidance on choosing the right college for your MBA
          or other post-graduate studies.
        </p>
        <p>
          Not sure which college is the right fit for you? Fill out the form
          below, and our experts will get in touch to assist you.Fill out the form below and one of our experts will contact you at the best time to discuss your options.
        </p>
      </div>

      {/* Form Container with Border Animation */}
      <div className=" md:w-[90%] w-full  mx-auto bg-white ">
        {/* Form */}
        <div className=" w-full flex justify-between items-center md:flex-row flex-col-reverse bg-white p-6  rounded-md ">
          <form className="md:w-1/2 w-full space-y-6" onSubmit={handleSubmit}>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {/* Name */}
              <div>
                <label
                  htmlFor="name"
                  className="text-sm font-medium text-gray-700"
                >
                  Name <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
                  placeholder="Your Name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  aria-label="Name"
                />
              </div>

              {/* Email */}
              <div>
                <label
                  htmlFor="email"
                  className="text-sm font-medium text-gray-700"
                >
                  Email Address <span className="text-red-500">*</span>
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
                  placeholder="Your Email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  aria-label="Email Address"
                />
              </div>

              {/* Phone */}
              <div>
                <label
                  htmlFor="phone"
                  className="text-sm font-medium text-gray-700"
                >
                  Phone Number <span className="text-red-500">*</span>
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
                  placeholder="Your Phone Number"
                  value={formData.phone}
                  onChange={handleChange}
                  required
                  aria-label="Phone Number"
                />
              </div>

              {/* State */}
              <div>
                <label
                  htmlFor="state"
                  className="text-sm font-medium text-gray-700"
                >
                  State <span className="text-red-500">*</span>
                </label>
                <select
                  id="state"
                  name="state"
                  className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
                  value={formData.state}
                  onChange={handleChange}
                  required
                  aria-label="State"
                >
                  <option value="">Select State</option>
                  {/* Add more states dynamically if required */}
                  <option value="Madhya Pradesh">Madhya Pradesh</option>
                  <option value="Maharashtra">Maharashtra</option>
                </select>
              </div>

              {/* City */}
              <div className="sm:col-span-2">
                <label
                  htmlFor="city"
                  className="text-sm font-medium text-gray-700"
                >
                  City <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  id="city"
                  name="city"
                  className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
                  placeholder="Your City"
                  value={formData.city}
                  onChange={handleChange}
                  required
                  aria-label="City"
                />
              </div>

              {/* Time */}
              <div className="sm:col-span-2">
                <label
                  htmlFor="time"
                  className="text-sm font-medium text-gray-700"
                >
                  Best Time to Call <span className="text-red-500">*</span>
                </label>
                <input
                  type="time"
                  id="time"
                  name="time"
                  className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
                  value={formData.time}
                  onChange={handleChange}
                  required
                  aria-label="Best Time to Call"
                />
              </div>
            </div>

            {/* Message */}
            <div>
              <label
                htmlFor="message"
                className="text-sm font-medium text-gray-700"
              >
                Message <span className="text-red-500">*</span>
              </label>
              <textarea
                id="message"
                name="message"
                rows="6"
                className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 resize-none"
                placeholder="Your Message"
                value={formData.message}
                onChange={handleChange}
                required
                aria-label="Message"
              ></textarea>
            </div>

            {/* Submit */}
            <div className="text-center">
              <button
                type="submit"
                className="w-full bg-green-500 text-white py-3 rounded-lg hover:bg-green-600 transition"
              >
                Submit
              </button>
            </div>
          </form>
          <div className="md:w-1/2 w-full h-full flex justify-center items-center ">
            <div className="w-full h-full">
              <img
                src={question}
                alt=""
                className="w-full h-full object-contain"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Question;
