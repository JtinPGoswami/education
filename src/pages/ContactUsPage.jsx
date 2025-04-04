import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FaLocationDot } from "react-icons/fa6";
import { IoCallSharp } from "react-icons/io5";
import { MdEmail } from "react-icons/md";
import contactUs from "../assets/contact-us-image.png";
import form from "../assets/form.png";
import { States } from "../data/StatesData";
import toast from "react-hot-toast";

const ContactUsPage = () => {
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    state: "",
    city: "",
    bestTimeToCall: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    const scriptURL =
      "https://script.google.com/macros/s/AKfycbzl-aHAWwoO7oQxkUkE7BwedBrITUdihyVPc1Nxfjms0Z3y3R2iWUAyqf-AN0ZZCOJicQ/exec";

    try {
      const formDataToSend = new FormData();
      for (const key in formData) {
        formDataToSend.append(key, formData[key]);
      }

      const response = await fetch(scriptURL, {
        method: "POST",
        body: formDataToSend,
      });

      const text = await response.text();

      if (response.ok) {
        const result = JSON.parse(text);
        if (result.status === "success") {
          toast.success("Form submitted successfully!");
          setFormData({
            name: "",
            email: "",
            phone: "",
            state: "",
            city: "",
            bestTimeToCall: "",
            message: "",
          });
        } else {
          toast.error("Failed to submit form ");
        }
      } else {
        toast.error("Failed to submit form ");
      }
    } catch (error) {
      toast.error("Failed to submit form ");
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      {/* Contact Us Hero Section */}
      <section className="relative mt-24 bg-green-400 text-white text-center h-56 flex flex-col justify-center items-center">
        <h1 className="text-4xl font-bold">Contact Us</h1>
        <p className="text-lg font-medium mt-4 text-wrap px-3">
          Guiding From Your College to Your Career, Let’s Connect
        </p>
      </section>

      {/* Contact Us Form Section */}
      <section className="px-4">
        <div className="w-full flex flex-col md:flex-row text-gray-700 mt-8 py-4 px-0 items-center">
          {/* Left Section */}
          <div className="md:w-1/2 w-full">
            <p className="text-2xl font-semibold">
              We believe in offering personalized support to every student. If
              you have questions about MBA college selection, entrance exam
              guidance, scholarship information, or need assistance with
              anything else related to your education, don’t hesitate to contact
              us. Our team of experts is ready to help you!
            </p>
          </div>
          {/* Right Section */}
          <div className="md:w-1/2 w-full h-full flex justify-center items-center">
            <div className="w-full h-full">
              <img
                src={contactUs}
                alt="Contact Us"
                className="w-full h-full object-contain"
              />
            </div>
          </div>
        </div>

        <div className="py-6 px-0 max-w-full mx-auto space-y-6 lg:space-y-0 lg:space-x-6">
          {/* Contact Info Cards */}
          <div className="w-full flex flex-col md:flex-row gap-10">
            <div className="bg-green-100 p-6 rounded-2xl shadow-sm flex-1">
              <div className="flex items-center space-x-2">
                <FaLocationDot />
                <h3 className="text-xl font-bold text-gray-700">Address</h3>
              </div>
              <p className="text-gray-600 mt-2">
                101 Western Business Centre, New Palasiya, Indore, MP, India
              </p>
            </div>
            <div className="bg-green-100 p-6 rounded-2xl shadow-sm flex-1">
              <div className="flex items-center space-x-2">
                <IoCallSharp />
                <h3 className="text-xl font-bold text-gray-700">Call Us</h3>
              </div>
              <p className="text-gray-600 mt-2">+91 75828 22000</p>
            </div>
            <div className="bg-green-100 p-6 rounded-2xl shadow-sm flex-1">
              <div className="flex items-center space-x-2">
                <MdEmail />
                <h3 className="text-xl font-bold text-gray-700">Email Us</h3>
              </div>
              <p className="text-gray-600 mt-2">infocampusupdates@gmail.com</p>
            </div>
          </div>

          {/* Form Section */}
          <div className="w-full md:flex block mx-auto mt-10 bg-white lg:px-8 px-0 py-0 rounded-2xl">
            {/* Left Section */}
            <div className="md:w-1/2 w-full">
              <img src={form} alt="Form Image" />
            </div>

            {/* Right Section */}
            <div className="md:w-1/2 w-full p-6">
              <h3 className="text-2xl font-bold text-gray-700 mb-6">
                Get in Touch
                <br />
                If you’d like to speak with one of our experts, simply fill out
                the form below, and we will get in touch with you as soon as
                possible!
              </h3>
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="flex flex-col lg:flex-row space-y-4 lg:space-y-0 lg:space-x-4">
                  <div className="w-full">
                    <label htmlFor="name">Name:</label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="Your Name"
                      className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
                      required
                    />
                  </div>
                  <div className="w-full">
                    <label htmlFor="email">Email:</label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="Your Email"
                      className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
                      required
                    />
                  </div>
                </div>
                <div className="flex flex-col lg:flex-row space-y-4 lg:space-y-0 lg:space-x-4">
                  <div className="w-full">
                    <label htmlFor="number">Number:</label>
                    <input
                      type="text"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      placeholder="Your Phone Number"
                      className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
                      required
                    />
                  </div>
                  <div className="w-full">
                    <label htmlFor="state">State:</label>
                    <select
                      name="state"
                      value={formData.state}
                      onChange={handleChange}
                      className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
                      required
                    >
                      <option value="" disabled={true}>
                        Select State
                      </option>
                      {States.map((state, index) => (
                        <option key={index} value={state}>
                          {state}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>
                <div className="w-full">
                  <label htmlFor="city">City:</label>
                  <input
                    type="text"
                    name="city"
                    value={formData.city}
                    onChange={handleChange}
                    placeholder="Your City"
                    className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
                    required
                  />
                </div>
                <div>
                  <label htmlFor="bestTimeToCall">Best Time to Call:</label>
                  <input
                    type="time"
                    name="bestTimeToCall"
                    value={formData.bestTimeToCall}
                    onChange={handleChange}
                    className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
                    required
                  />
                </div>
                <div className="w-full">
                  <label htmlFor="message">Message:</label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows="4"
                    placeholder="Your Message"
                    className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
                    required
                  ></textarea>
                </div>
                {loading ? (
                  <button
                    disabled={true}
                    className="w-full bg-green-500 text-white py-3 rounded-lg hover:bg-green-600 transition"
                  >
                    Submitting ...
                  </button>
                ) : (
                  <button
                    type="submit"
                    className="w-full bg-green-500 text-white py-3 rounded-lg hover:bg-green-600 transition"
                  >
                    Submit
                  </button>
                )}
              </form>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default ContactUsPage;
