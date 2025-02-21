import React, { useEffect } from "react";
import hero_video from "../assets/Video/hero_video.mp4";
import Question from "../components/Question";
import CampusAmbassador from "../components/CampusAmbassador";
import CollegeCard from "../components/CollegeCard";
import ExpertsCard from "../components/ExpertsCard";
import aboutUs from "../assets/aboutUs.jpg";
import college from "../assets/college.jpg";
import EventCard from "../components/EventCard";
import DomainCard from "../components/DomainCard";
import Testimonial from "../components/Testimonial";
import { Link, useLocation } from "react-router-dom";
import { collegeDetailedData } from "../data/college";

const HomePage = () => {
  const { hash } = useLocation(); //

  useEffect(() => {
    if (hash) {
      const element = document.getElementById(hash.substring(1));
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    }
  }, [hash]);

  const collegeData = [
    {
      name: "Indian School of Business (ISB), Hyderabad",

      location: "Hyderabad, Telangana",
      description:
        "Finance, Marketing, Operations, Strategy, Entrepreneurship Ranked among top 30 global MBA programs",
    },
    {
      name: "SP Jain Institute of Management and Research (SPJIMR), Mumbai",

      location: "Mumbai, Maharashtra",
      description:
        "Marketing, Operations, Finance, Business Analytics Consistently ranked in top 10 MBA schools in India",
    },
  ];
  const eventData = [
    {
      name: "How to Ace Your MBA Application Essays",
      time: "Sunday, September 26th at 7:00 pm",
      description:
        "Learn strategies for crafting MBA application essays that stand out to admissions committees.",
    },
    {
      name: "Mastering Your MBA Interview",
      time: "Sunday, November 15th at 7:00 pm",
      description:
        "Tips for answering interview questions and impressing MBA admissions officers.",
    },
  ];

  const Domains = [
    {
      title: "MBA",
      dig: "MBA",
      description:
        "Gain insights into the latest trends in management education, top programs, and specialization options. Learn how to leverage your MBA for a successful career in leadership, marketing, finance, and more.",
    },
    {
      title: "LAW",
      dig: "LAW",
      description:
        "Learn about law schools, career opportunities in the legal field, and entrance exams like CLAT and LSAT. Understand the various specializations within law, including corporate law, criminal law, intellectual property law, and more.",
    },
    {
      title: "Engineering",
      dig: "Engineering",
      description:
        "Discover the best engineering colleges, top specializations, and career paths in fields like computer science, civil, mechanical, electrical, and aerospace engineering. Understand the importance of innovation, technology, and research in engineering education.",
    },
    {
      title: "Medical",
      dig: "Medical",
      description:
        "Explore medical colleges and career options in the healthcare industry. From MBBS to medical specializations like surgery, pediatrics, and psychiatry, get expert insights into preparing for medical school entrance exams like NEET.",
    },
  ];

 

  return (
    <>
      <section
  className="relative w-full md:h-screen h-auto bg-black md:py-0 py-10"
  id="home"
>
  <video
    autoPlay
    loop
    muted
    playsInline
    className="absolute top-0 left-0 w-full h-full object-cover"
  >
    <source src={hero_video} type="video/mp4" />
    Your browser does not support the video tag.
  </video>
        {/* Overlay using ::before */}
        <div className="absolute inset-0 bg-black opacity-30 z-0"></div>

        {/* Inner Content */}
        <div className="relative z-10 flex flex-col justify-center md:items-start items-center w-[90%] mx-auto  h-full text-white">
          <h1 className="lg:text-5xl md:text-4xl text-2xl font-bold mb-4 text-wrap md:w-1/2 w-full md:leading-16 ">
          Your Gateway to Informed MBA College Decisions
          </h1>
          <p className="md:text-2xl md:w-[60%] w-full text-xl  md:mb-20 mb-5 text-[#ffffffbe] ">
          Explore genuine reviews, personalized mentorship, and expert guidance to make the best decision for your MBA journey and beyond.{" "}
          </p>
          <Link to={"/college"}>
          <button className="border text-lg  rounded-full hover:bg-[#77d693] hover:border-[#77d693] px-6  transition-all duration-300 ease-linear py-1">
            Start Your College Search Today
          </button>
          </Link>
        </div>
      </section>
      <section>
        <div className="w-[95%] mx-auto sm:p-20 p-4 text-2xl font-thin text-white rounded-md  bg-[#77d693e1] hover:bg-[#77d693] mt-10">
          <p>
            Welcome to Campus Updates – the trusted platform that helps aspiring
            MBA students, law, engineering, and medical aspirants make informed
            decisions about their post-graduation education. Whether you're a
            final-year graduate, someone with work experience, or considering
            further studies in other fields, we’ve got you covered. From
            authentic college reviews to expert mentorship, scholarship updates,
            entrance exam guidance, and more, Campus Updates is here to help you
            choose the right path based on your profile, preferences, and goals.
          </p>
        </div>
      </section>
      <Question />
      <hr className="my-10 border-2 text-[#3f3b3b6b] "></hr>
      <CampusAmbassador />
      <hr className="my-10 border-2  text-[#3f3b3b6b] "></hr>
      <div className="w-full px-[5%] mx-auto  my-10 space-y-7   text-center ">
        <div className="flex justify-between items-center md:flex-row flex-col-reverse">
          <div className="md:w-1/2 w-full">
            <h1 className="text-black mb-5 text-4xl font-bold ">
              {" "}About
              <span className="text-[#5FCF80]"> Campus Updates</span>
              
            </h1>
            <p className="text-2xl font-normal text-start mt-5">
              At Campus Updates, we empower students to make confident, informed
              decisions about their education. Whether you're seeking an MBA,
              law, engineering, or medical degree, we provide comprehensive
              reviews, mentorship, and guidance to navigate the ever-evolving
              landscape of higher education. Our platform offers transparent,
              authentic student reviews, scholarship opportunities, entrance
              exam tips, and much more – all personalized to your academic
              background, career goals, and location preferences.
            </p>
          </div>
          <div className="md:w-1/2 w-full h-full flex justify-center items-center ">
            <div className="w-full h-full">
              <img
                src={aboutUs}
                alt=""
                className="w-full h-full object-contain"
              />
            </div>
          </div>
        </div>
      </div>
      <hr className="my-10 border-2 text-[#3f3b3b6b] "></hr>
      {/* college section */}
      <div className="w-full px-[5%] mt-10 mb-20" id="collages">
        <div className="w-full  flex justify-between items-center md:flex-row flex-col-reverse ">
          <div className=" md:w-1/2 w-full ">
            <h1 className="font-bold text-slate-900 text-3xl mb-4 ">
              Discover the{" "}
              <span className="text-[#5FCF80]">  Best Colleges </span>
              for Your Future
            </h1>
            <p className="font-medium italic text-gray-600 text-xl">
              Explore a wide range of colleges across MBA, Law, Engineering, and
              Medical fields.
            </p>
            <p className="text-base font-medium text-gray-500 mt-5">
              Selecting the right college is a crucial decision in shaping your
              future. At Campus Updates, we provide in-depth reviews and ratings
              of top colleges in India across various domains, including MBA,
              law, engineering, and medical studies. Our college profiles
              include:
            </p>
            <ul className="list-disc space-y-6 mt-5">
              <li>
                <strong>College Overview:</strong> Information about the
                college, infrastructure, faculty, and reputation.
              </li>
              <li>
                {" "}
                <strong>Specializations:</strong> Insights into available
                programs, specializations, and certifications.
              </li>
              <li>
                <strong>Placement Records:</strong> Employment opportunities and
                placement statistics.
              </li>
              <li>
                <strong>Campus Life:</strong> Real student feedback on campus
                culture, facilities, extracurriculars, and more.
              </li>
              <li>
                <strong>Entrance Requirements:</strong> Details on entrance
                exams, eligibility, and application procedures.
              </li>
            </ul>
            <div className="md:text-left text-center mt-10">
              <Link to={"/college"}>
              <button className="md:w-auto w-4/5 px-8  bg-green-500 text-white py-3 rounded-lg hover:bg-green-600 transition text-lg">
                Browse College Profiles
              </button>
              </Link>
            </div>
          </div>
          <div></div>
          <div className="md:w-1/2 w-full h-full flex justify-center items-center ">
            <div className="w-full h-full">
              <img
                src={college}
                alt=""
                className="w-full h-full object-contain"
              />
            </div>
          </div>
        </div>
        <div className="grid md:grid-cols-2 grid-cols-1 gap-20 sm:px-10 px-0 mt-10">
          {collegeDetailedData.slice(0,4).map((college, idx) => (
            <CollegeCard key={idx} college={college} />
          ))}
        </div>
      </div>
      <hr className="my-10 border-2 text-[#3f3b3b6b] "></hr>
      {/* events section */}
      <div className="w-full px-[5%] my-20" id="event">
        <div className="w-full flex justify-between items-center md:flex-row flex-col-reverse">
          <div className=" w-full">
            <h1 className="font-bold text-slate-900 text-3xl mb-4">
              Stay Updated with Key{" "}
              <span className="text-[#5FCF80]"> Annual Events </span>
            </h1>
            <p className="font-medium italic text-gray-600 text-xl">
              Participate, learn, and network through major educational events
              across the country.
            </p>
            <p className="text-base font-medium mt-10 text-gray-500">
              Staying updated on key annual events in the education sector can
              help you make the most of your college journey. At Campus Updates,
              we provide information about significant conferences, workshops,
              webinars, and events related to MBA, law, engineering, and medical
              fields. These events provide opportunities for:
            </p>
            <ul className="list-disc space-y-6 mt-5">
              <li>
                <strong>Networking with industry leaders:</strong> Build
                valuable connections with professionals and peers.
              </li>
              <li>
                <strong>
                  Gaining insights into the latest trends and research:
                </strong>{" "}
                Stay informed about innovations and advancements in your field.
              </li>
              <li>
                <strong>Preparing for entrance exams and interviews:</strong>{" "}
                Get guidance and tips for success.
              </li>
              <li>
                <strong>Learning about scholarship opportunities:</strong>{" "}
                Discover funding options for your education.
              </li>
            </ul>
            <p className="text-base font-thin text-gray-500 mt-4">
              We also cover major college events, career fairs, and competitions
              to help you stay ahead in your academic and professional pursuits.
            </p>

            <div className="md:text-left text-center mt-10">
              <button className=" px-4   bg-green-500 text-white py-3 rounded-lg hover:bg-green-600 transition">
                Check Out Upcoming Events
              </button>
            </div>
          </div>
        </div>
        <div className="grid md:grid-cols-2 grid-cols-1 gap-20 sm:px-10 px-0 mt-10">
          {eventData.map((event, idx) => (
            <EventCard key={idx} event={event} />
          ))}
        </div>
      </div>
      <hr className="my-10 border-2 text-[#3f3b3b6b] "></hr>
      {/* domain section */}
      <section className="my-20 w-full px-[5%]  " id="courses">
        <h1 className="font-bold text-gray-900 text-3xl mb-5">
          Explore <span className="text-[#5FCF80]"> Key Domains </span>
          of Study
        </h1>
        <h4 className="text-gray-500 font-semibold italic text-xl">
          Get in-depth knowledge and guidance across management, law,
          engineering, and medical fields.
        </h4>
        <p className="text-lg font-medium text-gray-900 mt-10">
          Our platform also offers valuable resources to help you make informed
          choices in your chosen field of study. From understanding core
          subjects to career pathways and the skills needed for success, we
          provide content to guide you in :
        </p>
        <div className="grid lg:grid-cols-4 sm:grid-cols-2 grid-cols-1 gap-8 mt-10 ">
          {Domains.map((domain, idx) => (
            <DomainCard key={idx} domain={domain} />
          ))}
        </div>
        <div className="md:text-left text-center mt-10">
          <button className="px-6   bg-green-500 text-white py-3 rounded-lg hover:bg-green-600 transition">
            Explore Courses and Specializations
          </button>
        </div>
      </section>
      <hr className="my-10 border-2 text-[#3f3b3b6b] "></hr>
      {/*Scholarships & Entrance Exam Guidance Section */}
      <section className="w-full px-[5%] my-20 space-y-5">
        <h2 className="text-black text-3xl font-bold">
          Maximize Your Opportunities with{" "}
          <span className="text-[#5FCF80]"> Scholarships & Exam Guidance </span>
        </h2>
        <h4 className="text-2xl font-semibold text-gray-800">
          Find the right scholarships and prepare for entrance exams like CAT,
          CLAT, NEET, JEE, and more.
        </h4>
        <p className="text-gray-600 font-medium ">
          At Campus Updates, we understand that financing your education and
          excelling in entrance exams is a top priority. That’s why we offer:
        </p>
        <p className="text-gray-500 italic font-normal">
          <span className="font-bold">Scholarship Information:</span>
          Find opportunities for financial aid to make your education
          affordable.
        </p>
        <p className="text-gray-500 italic font-normal">
          <span className="font-bold">Entrance Exam Preparation:</span>
          Get tips and resources for exams like CAT, CLAT, NEET, and others. Our
          expert mentors provide personalized guidance for exam strategies, time
          management, and study plans.
        </p>
        <div className="md:text-left text-center mt-10">
          <button className="md:w-72 w-4/5   bg-green-500 text-white py-3 rounded-lg hover:bg-green-600 transition">
            Start Your Scholarship Search
          </button>
        </div>
      </section>
      <hr className="my-10 border-2 text-[#3f3b3b6b] "></hr>
      {/* testimonial */}

      <section className="w-full px-[5%] my-20 space-y-5">
        <h3 className="text-3xl font-bold">
          See What <span className="text-[#5FCF80]">Our Students</span> Have to
          Say
        </h3>
        <h5 className="text-2xl ">
          Real stories from students who have made their educational journey
          successful with Campus Updates
        </h5>
        <p className="xl:pr-96 mt-10">
          We are proud to have helped thousands of students make informed
          decisions about their post-graduation studies. Hear from some of our
          successful students who have benefited from our platform’s mentorship,
          reviews, and resources.
        </p>
        <Testimonial />
      </section>
      {/*experts section*/}
      <hr className="my-10 border-2 text-[#3f3b3b6b] "></hr>
      <section className=" mt-20" id="expert">
        <div className="px-[5%]">
          <h1 className="mb-6 text-3xl font-bold">
            Meet Our <span className="text-[#5FCF80]"> Experts </span>
          </h1>
          <h4 className="mb-6 text-xl font-semibold">
            Guiding you through your educational journey with years of
            experience and expertise in their respective fields.
          </h4>

          <p className="mb-6 text-base">
            At Campus Updates, we believe that having the right guidance can
            make all the difference. Our team of experts comes from a variety of
            fields, including law, management, and education, and is here to
            offer personalized mentorship, industry insights, and support as you
            navigate your higher education journey.
          </p>
        </div>

        <div>
          <ExpertsCard />
        </div>
      </section>
    </>
  );
};

export default HomePage;
