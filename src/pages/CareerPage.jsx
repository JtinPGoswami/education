import React, { useState } from "react";
import career from "../assets/career.jpg";
import form from "../assets/careerForm.jpg";
import { States } from "../data/StatesData";
import Loader from "../components/Loader";
import toast from "react-hot-toast";

const CareerPage = () => {
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    state: "", // Used for job profile
    city: "",
    time: "",
    message: "", // Unused in UI but kept as per original state
    resume: null, // For file handling
  });

  const handleChange = (e) => {
    const { name, value, files } = e.target;
    if (name === "resume") {
      setFormData({ ...formData, resume: files[0] });
    } else {
      setFormData({ ...formData, [name]: value });
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Basic validation
    if (!formData.name || !formData.email || !formData.resume) {
      toast.error("Please fill in name, email, and upload a resume.");
      return;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email)) {
      toast.error("Please enter a valid email.");
      return;
    }

    if (formData.resume.size > 5 * 1024 * 1024) {
      toast.error("Resume size must not exceed 5MB.");
      return;
    }

    setLoading(true); // Show loader

    try {
      // Convert FileReader to a Promise for proper async handling
      const base64Resume = await new Promise((resolve, reject) => {
        const reader = new FileReader();
        reader.readAsDataURL(formData.resume);
        reader.onload = () => resolve(reader.result.split(",")[1]);
        reader.onerror = () =>
          reject(new Error("Error reading the resume file."));
      });

      const resumeName = formData.resume.name;

      // Prepare form data for submission
      const formDataToSend = new FormData();
      formDataToSend.append("name", formData.name);
      formDataToSend.append("email", formData.email);
      formDataToSend.append("phone", formData.phone);
      formDataToSend.append("city", formData.city);
      formDataToSend.append("jobProfile", formData.state);
      formDataToSend.append("time", formData.time);
      formDataToSend.append("resumeBase64", base64Resume);
      formDataToSend.append("resumeName", resumeName);

      const scriptURL =
        "https://script.google.com/macros/s/AKfycbwsq8vQLjw3QV3sT7LCSiqfIS80ZwW4kIFPE4eHYkcGqqZ_cyFLNlGf4R-8LpRXjV9xSg/exec";

      const response = await fetch(scriptURL, {
        method: "POST",
        body: formDataToSend,
      });

      const text = await response.text();

      try {
        const result = JSON.parse(text);
        if (result.status === "success") {
          toast.success("Form submitted successfully.");
          setFormData({
            name: "",
            email: "",
            phone: "",
            state: "",
            city: "",
            time: "",
            message: "",
            resume: null,
          });
          document.querySelector('input[type="file"]').value = ""; // Reset file input
        } else {
          toast.error("Failed to submit form ");
        }
      } catch (jsonError) {
        toast.error("Failed to submit form ");
      }
    } catch (error) {
      toast.error("Failed to submit form ");
    } finally {
      setLoading(false); // Hide loader
    }
  };

  return (
    <>
      {/* Career Hero Section */}
      <section className="relative mt-24 bg-green-400 text-white text-center h-56 flex flex-col justify-center items-center">
        <h1 className="text-4xl font-bold">Career</h1>
        <p className="text-lg font-medium mt-4 px-3">
          Explore Opportunities and Build Your Future with Us.
        </p>
      </section>
      {/* Career Form Section */}
      <section className="px-4">
        <div className="w-full flex flex-col md:flex-row text-gray-700 mt-8 py-4 px-0 items-center">
          {/* Left Section */}
          <div className="md:w-1/2 w-full">
            <p className="text-2xl font-semibold">
              Join our team and be a part of something great! Whether you're a
              fresh graduate starting your journey or an experienced
              professional seeking new challenges, we offer exciting career
              opportunities to help you grow. Our institution fosters
              innovation, collaboration, and continuous learning, ensuring you
              thrive in your role. With opportunities in academics and
              administration, you'll be part of a community that values
              dedication and excellence. Take the next step in your career with
              us and make a real impact!
            </p>
          </div>
          {/* Right Section */}
          <div className="md:w-1/2 w-full h-full flex justify-center items-center">
            <img
              src={career}
              alt="Career"
              className="w-full h-full object-contain"
            />
          </div>
        </div>

        <div className="py-6 px-0 max-w-full mx-auto space-y-6 lg:space-y-0 lg:space-x-6">
          {/* Job Roles Section */}
          <div className="w-full flex flex-col md:flex-row gap-10">
            {/* Program Advisor */}
            <div className="bg-green-100 p-6 rounded-2xl shadow-sm flex-1">
              <h3 className="text-xl font-bold text-gray-900">
                Program Advisor
              </h3>
              <p className="text-gray-800 mt-2">
                Help students make informed academic and career choices by
                guiding them through program options, course selection, and
                career paths. Work closely with faculty and administration to
                ensure students receive the best guidance for their goals.
              </p>
              <ul className="list-disc list-inside mt-4 text-gray-700">
                <li>Assist in choosing suitable programs.</li>
                <li>Provide career-related insights.</li>
                <li>Explain program benefits and structure.</li>
                <li>Work with faculty on course offerings.</li>
              </ul>
            </div>

            {/* Academic Counsellor */}
            <div className="bg-green-100 p-6 rounded-2xl shadow-sm flex-1">
              <h3 className="text-xl font-bold text-gray-900">
                Academic Counsellor
              </h3>
              <p className="text-gray-800 mt-2">
                Support students in overcoming academic challenges and personal
                obstacles by providing counseling, study strategies, and stress
                management techniques. Collaborate with faculty and staff to
                create a supportive learning environment.
              </p>
              <ul className="list-disc list-inside mt-4 text-gray-700">
                <li>Offer one-on-one counseling.</li>
                <li>Help with study strategies.</li>
                <li>Guide in stress management.</li>
                <li>Collaborate with faculty for support.</li>
              </ul>
            </div>

            {/* Business Developer */}
            <div className="bg-green-100 p-6 rounded-2xl shadow-sm flex-1">
              <h3 className="text-xl font-bold text-gray-900">
                Business Developer
              </h3>
              <p className="text-gray-800 mt-2">
                Drive institutional growth by developing strategic partnerships,
                increasing student enrollment, and identifying new opportunities
                for expansion. Work with marketing and admissions teams to
                enhance visibility and outreach.
              </p>
              <ul className="list-disc list-inside mt-4 text-gray-700">
                <li>Develop partnerships with organizations.</li>
                <li>Create strategies for enrollment growth.</li>
                <li>Analyze market trends for improvement.</li>
                <li>Enhance brand visibility and outreach.</li>
              </ul>
            </div>
          </div>

          {/* Contact Form Section */}
          <div className="w-full md:flex items-center block mx-auto mt-10 bg-white lg:px-8 px-0 py-0 rounded-2xl">
            {/* Left Section */}
            <div className="md:w-1/2 w-full">
              <img src={form} alt="FORM IMG" />
            </div>

            {/* Right Section */}
            <div className="md:w-1/2 w-full p-6">
              {loading && (
                <div className="absolute inset-0 flex justify-center items-center bg-gray-200 bg-opacity-50">
                  <Loader />
                </div>
              )}
              <h3 className="text-xl font-bold text-center text-gray-700 mb-6">
                Get in Touch
                <br />
                Looking to join our team? Fill out the form below, and our
                hiring team will reach out to discuss exciting career
                opportunities with you!
              </h3>
              <form className="space-y-4 relative" onSubmit={handleSubmit}>
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
                      disabled={loading} // Disable input while loading
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
                      disabled={loading}
                    />
                  </div>
                </div>

                <div className="flex flex-col lg:flex-row space-y-4 lg:space-y-0 lg:space-x-4">
                  <div className="w-full">
                    <label htmlFor="phone">Number:</label>
                    <input
                      type="text"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      placeholder="Your Phone Number"
                      className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
                      disabled={loading}
                    />
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
                      disabled={loading}
                    />
                  </div>
                </div>
                <div className="flex flex-col lg:flex-row space-y-4 lg:space-y-0 lg:space-x-4">
                  <div className="w-full">
                    <label htmlFor="state">Job Profile:</label>
                    <select
                      name="state"
                      value={formData.state}
                      onChange={handleChange}
                      className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
                      required
                      disabled={loading}
                    >
                      <option value="" disabled>
                        Select Job Profile
                      </option>
                      <option value="Academic Counsellor">
                        Academic Counsellor
                      </option>
                      <option value="Business Developer">
                        Business Developer
                      </option>
                      <option value="Placement Counsellor">
                        Placement Counsellor
                      </option>
                    </select>
                  </div>
                  <div className="w-full">
                    <label htmlFor="resume">Upload Resume:</label>
                    <input
                      type="file"
                      name="resume"
                      onChange={handleChange}
                      accept=".pdf,.doc,.docx"
                      className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
                      required
                      disabled={loading}
                    />
                  </div>
                </div>

                <div className="w-full">
                  <label htmlFor="time">
                    Best Time for Telephonic Interview:
                  </label>
                  <input
                    type="time"
                    name="time"
                    value={formData.time}
                    onChange={handleChange}
                    className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
                    disabled={loading}
                  />
                </div>

                {loading ? (
                  <button
                    disabled={true}
                    className="w-full bg-green-500 text-white py-3 rounded-lg hover:bg-green-600 transition"
                    // Disable button while loading
                  >
                    Submitting ...
                  </button>
                ) : (
                  <button
                    type="submit"
                    className="w-full bg-green-500 text-white py-3 rounded-lg hover:bg-green-600 transition"
                    // Disable button while loading
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

export default CareerPage;
