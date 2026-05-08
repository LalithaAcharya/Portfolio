import { useState } from "react";
import { FaTimes, FaExternalLinkAlt } from "react-icons/fa";
import Accordion from "./AccAccordion";
import { Swiper, SwiperSlide } from "swiper/react";
import johndeere from "../assets/johndeere.webp";
import pms from "../assets/PMS.webp";

import "swiper/css";
import "swiper/css/navigation";

import { Pagination, Navigation } from "swiper/modules";

export const Portfolio = () => {
  const [selectedProject, setSelectedProject] = useState(null);

  const projects = [
    {
      title: "John Deere - Claim Management System",
      category: "Angular - Frontend",
      image: johndeere,
      description:
        "Developed and maintained a scalable Claim Management System for John Deere using Angular, focused on streamlining warranty and service claim processing. Built responsive UI components, dynamic forms, dashboards, and API integrations to enhance user experience and operational efficiency. Collaborated within Agile teams to deliver secure, high-performance enterprise solutions with reusable and maintainable front-end architecture.",
      tech: ["Angular", "Bootstrap", "TypeScript", "Charts", "RxJS", "Agile", "Git", "Jira", "REST APIs", "Unit Testing", "HTML5", "CSS3"],
      live: "#",
    },
    {
       title: "John Deere - AdZone",
      category: "Angular - Frontend",
      image: johndeere,
      description:
        "Worked as an Angular Front-End Developer in the John Deere Adzone project, developing responsive and interactive web interfaces for managing digital advertising campaigns and marketing content. Implemented reusable Angular components, integrated REST APIs, optimized application performance, and enhanced user experience through modern UI design and scalable front-end architecture.",
      tech: ["Angular", "Bootstrap", "TypeScript", "Charts", "RxJS", "Agile", "Git", "Jira", "REST APIs", "Unit Testing", "HTML5", "CSS3"],
      live: "#",
    },
    {
      title: "PMS - Performance Management System",
      category: "React - Frontend",
      image: pms,
      description:
        "Developed and maintained an internal Performance Management System (PMS) using React to streamline employee performance tracking, goal management, and appraisal workflows. Built responsive dashboards, reusable components, dynamic forms, and role-based modules while integrating REST APIs for efficient data handling. Worked closely with cross-functional teams in an Agile environment to deliver scalable, high-performance, and user-friendly enterprise applications.",
      tech: ["React", "TypeScript", "Material-UI", "Charts", "Redux", "Agile", "Git", "Jira", "REST APIs", "Unit Testing", "HTML5", "CSS3"],
      live: "#",
    },
  ];

  return (
    <div className="min-h-screen bg-[#293241] text-white px-6 lg:px-20 py-20">

      {/* Heading */}
      <div className="text-center mb-24 relative">
        <h1 className="text-[120px] font-extrabold text-white/5 absolute inset-0 flex items-center justify-center opacity-7">
          WORKS
        </h1>

        <h2 className="relative text-5xl font-extrabold">
          MY <span className="text-[#ee6c4d]">PORTFOLIO</span>
        </h2>
      </div>

      {/* Portfolio Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-10">
        {projects.map((project, index) => (
          <div
  key={index}
  onClick={() => setSelectedProject(project)}
  className="group relative overflow-hidden rounded-3xl cursor-pointer"
>

  {/* Image */}
  <img
    src={project.image}
    alt={project.title}
    className="
      w-full h-[320px] object-cover
      scale-110
      transition-all duration-700
      group-hover:scale-100
      group-hover:rotate-2
      group-hover:brightness-50
    "
  />

  {/* Default Gradient Overlay */}
  <div
    className="
      absolute inset-0
      bg-gradient-to-t
      from-black/100
      via-black/80
      to-transparent
    "
  ></div>

  {/* Hover Orange Overlay */}
  <div
    className="
      absolute inset-0
      bg-[#98c1d9ff]/80
      opacity-0
      group-hover:opacity-100
      transition-all duration-500
    "
  ></div>

  {/* Content */}
  <div
    className="
      absolute inset-0
      flex flex-col items-center justify-end
      text-center px-6 pb-10
      transition-all duration-500
      group-hover:justify-center
      group-hover:pb-0
      z-10
    "
  >
    
    {/* Category */}
    <p
      className="
        text-[#98c1d9]
        uppercase tracking-[3px]
        mb-3
        transition-all duration-500
        group-hover:text-white
        group-hover:-translate-y-2
      "
    >
      {project.category}
    </p>

    {/* Title */}
    <h3
      className="
        text-3xl font-bold
        transition-all duration-500
        group-hover:scale-110
        group-hover:-translate-y-2
      "
    >
      {project.title}
    </h3>

    {/* Hover Button */}
    <button
      className="
        mt-6 px-6 py-3 rounded-full
        border border-white
        opacity-0 translate-y-10
        group-hover:opacity-100
        group-hover:translate-y-0
        transition-all duration-500
        hover:bg-white hover:text-[#293241]
      "
    >
      View Details
    </button>
  </div>

  {/* Glow Effect */}
  <div
    className="
      absolute inset-0 rounded-3xl
      opacity-0
      group-hover:opacity-100
      shadow-[0_0_50px_rgba(238,108,77,0.8)]
      transition-all duration-500
    "
  ></div>
</div>
        ))}
      </div>

      {/* Popup Modal */}
      {selectedProject && (
        <div className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center px-6">
          
          {/* Modal Box */}
          <div className="bg-[#1e293b] rounded-3xl overflow-hidden max-w-5xl w-full relative animate-[fadeIn_.3s_ease]">

            {/* Close Button */}
            <button
              onClick={() => setSelectedProject(null)}
              className="absolute top-5 right-5 w-12 h-12 rounded-full bg-[#ee6c4d] flex items-center justify-center text-white text-xl hover:rotate-90 transition-all duration-300 z-20"
            >
              <FaTimes />
            </button>

            <div className="grid grid-cols-1 lg:grid-cols-2 h-[85vh]">

  {/* Left Fixed Image */}
  <div className="h-full">
    <img
      src={selectedProject.image}
      alt={selectedProject.title}
      className="w-full h-full object-cover"
    />
  </div>

  {/* Right Side Carousel */}
  <div className="bg-[#1e293b] h-full">

    <Swiper
      modules={[Pagination, Navigation]}
      pagination={{ clickable: true }}
      navigation={true}
  loop={true}
  className="h-full"
    >

      {/* Slide 1 */}
      <SwiperSlide>
        <div className="h-full flex flex-col justify-center p-12">
          
          <p className="text-[#ee6c4d] uppercase tracking-[3px] mb-4">
            Overview
          </p>

          <h2 className="text-2xl font-bold mb-8">
            {selectedProject.title}
          </h2>

          <p className="text-[#98c1d9] leading-9 text-md">
            {selectedProject.description}
          </p>
        </div>
      </SwiperSlide>

      {/* Slide 2 */}
      <SwiperSlide>
        <div className="h-full flex flex-col justify-center p-12">
          
          <h2 className="text-4xl font-bold mb-10">
            Features
          </h2>

          <ul className="space-y-6 text-[#98c1d9] text-lg">
            <li>✔ Authentication & Authorization</li>
            <li>✔ Responsive Dashboard Layout</li>
            <li>✔ Dynamic Charts & Reports</li>
            <li>✔ API Integration</li>
            <li>✔ Reusable Components</li>
          </ul>
        </div>
      </SwiperSlide>

      {/* Slide 3 */}
      <SwiperSlide>
        <div className="h-full flex flex-col justify-center p-12">
          
          <h2 className="text-4xl font-bold mb-10">
            Technologies
          </h2>

          <div className="flex flex-wrap gap-5">
            {selectedProject.tech.map((item, i) => (
              <span
                key={i}
                className="
                  px-6 py-3 rounded-full
                  bg-[#ee6c4d]/20
                  border border-[#ee6c4d]/30
                  text-[#ee6c4d]
                  text-lg
                "
              >
                {item}
              </span>
            ))}
          </div>
        </div>
      </SwiperSlide>

      {/* Slide 4 */}
      <SwiperSlide>
        <div className="h-full flex flex-col justify-center p-12">
          
          <h2 className="text-4xl font-bold mb-8">
            Live Preview
          </h2>

          <p className="text-[#98c1d9] leading-8 mb-10">
            Explore the live project and interact with the UI.
          </p>

          <a
            href={selectedProject.live}
            target="_blank"
            rel="noreferrer"
            className="
              w-fit px-8 py-4 rounded-full
              bg-[#ee6c4d]
              hover:bg-white hover:text-[#293241]
              transition-all duration-300
              font-semibold
            "
          >
            Open Project
          </a>
        </div>
      </SwiperSlide>

    </Swiper>
  </div>
</div>
          </div>
        </div>
      )}
    </div>
  );
}