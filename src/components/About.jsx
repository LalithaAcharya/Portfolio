import React from 'react'
import {
  FaBriefcase,
  FaGraduationCap,
  FaDownload,
} from "react-icons/fa";

export const About = () => {
     const skills = [
    { name: "HTML", percent: 95 },
    { name: "CSS", percent: 90 },
    { name: "JavaScript", percent: 88 },
    { name: "Angular", percent: 85 },
    { name: "React", percent: 60 },
    { name: "TypeScript", percent: 70 },
    { name: "Node.js", percent: 20 },
  ];

  const experience = [
     {
      year: "2025 - 2026",
      title: "Software Developer",
      company: "Digitide",
      desc: "Developed responsive applications using Angular and React and Workflows using Joget.",
    },
    {
      year: "2024 - 2025",
      title: "Software Developer",
      company: "Conneqt Business Solutions",
      desc: "Developed responsive applications using Angular and React.",
    },
    {
      year: "2022 - 2024",
      title: "Software Developer",
      company: "Heptagon Technologies",
      desc: "Developed responsive applications using Angular.",
    },
  ];

  const education = [
    {
      year: "2017 - 2021",
      title: "Bachelor of Engineering Degree",
      company: "Computer Science",
      desc: "Focused on software engineering, web development and UI architecture.",
    },
    {
      year: "2015 - 2017",
      title: "Bunt's Sangha RNS PU College",
      company: "PCMC",
      desc: "Built strong foundations in mathematics and programming.",
    },
  ];

  return (
   <> <div className="min-h-screen bg-[#293241] text-white px-6 lg:px-20 py-20">
      
      {/* Heading */}
      <div className="text-center mb-24 relative">
        <h1 className="text-[120px] font-extrabold text-white/5 absolute inset-0 flex items-center justify-center opacity-7">
          RESUME
        </h1>

        <h2 className="relative text-5xl font-extrabold">
          ABOUT <span className="text-[#ee6c4d]">ME</span>
        </h2>
      </div>

      {/* Top Section */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 mb-28">
        
        {/* Personal Info */}
        <div>
          <h3 className="text-3xl font-bold mb-10">
            PERSONAL INFOS
          </h3>

          <div className="grid grid-cols-2 gap-y-8 text-lg">
            <p>
              <span className="text-[#98c1d9]">First Name :</span>{" "}
              Lalitha R
            </p>

            <p>
              <span className="text-[#98c1d9]">Address :</span>{" "}
              Bangalore
            </p>

            <p>
              <span className="text-[#98c1d9]">Experience :</span>{" "}
              4 Years
            </p>

            <p>
              <span className="text-[#98c1d9]">Phone :</span>{" "}
              +91 9380131015
            </p>

            <p>
              <span className="text-[#98c1d9]">Nationality :</span>{" "}
              Indian
            </p>

            <p>
              <span className="text-[#98c1d9]">Email :</span>{" "}
              lalitharaviacharya@gmail.com
            </p>

            <p>
              <span className="text-[#98c1d9]">Freelance :</span>{" "}
              Available
            </p>

            <p>
              <span className="text-[#98c1d9]">Languages :</span>{" "}
              English
            </p>
          </div>

          {/* Button */}
          <button className="group mt-12 flex items-center border-2 border-[#ee6c4d] rounded-full overflow-hidden hover:bg-[#ee6c4d] transition-all duration-300">
            
            <span className="px-8 py-4 font-semibold">
              DOWNLOAD CV
            </span>

            <span className="bg-[#ee6c4d] w-16 h-16 flex items-center justify-center text-xl">
              <FaDownload />
            </span>
          </button>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 gap-8">
          
          <div className="border border-white/10 rounded-2xl p-10">
            <h1 className="text-6xl font-bold text-[#ee6c4d]">
              4+
            </h1>

            <p className="mt-4 text-[#98c1d9] text-lg">
              YEARS OF EXPERIENCE
            </p>
          </div>

          <div className="border border-white/10 rounded-2xl p-10">
            <h1 className="text-6xl font-bold text-[#ee6c4d]">
              4+
            </h1>

            <p className="mt-4 text-[#98c1d9] text-lg">
              PROJECTS COMPLETED
            </p>
          </div>

          <div className="border border-white/10 rounded-2xl p-10">
            <h1 className="text-6xl font-bold text-[#ee6c4d]">
              60+
            </h1>

            <p className="mt-4 text-[#98c1d9] text-lg">
              API Integration
            </p>
          </div>

          <div className="border border-white/10 rounded-2xl p-10">
            <h1 className="text-6xl font-bold text-[#ee6c4d]">
              100%
            </h1>

            <p className="mt-4 text-[#98c1d9] text-lg">
              RESPONSIVE UI
            </p>
          </div>
        </div>
      </div>

      {/* Skills */}
      {/* Skills */}
<div className="mb-28">
  <h2 className="text-center text-4xl font-bold mb-16">
    MY SKILLS
  </h2>

  <div className="grid grid-cols-2 md:grid-cols-3 gap-16">
    {skills.map((skill, index) => (
      <div
        key={index}
        className="flex flex-col items-center"
      >
        
        {/* Circular Progress */}
        <div
          className="relative w-40 h-40 rounded-full flex items-center justify-center"
          style={{
            background: `conic-gradient(
              #ee6c4d ${skill.percent * 3.6}deg,
              rgba(255,255,255,0.08) 0deg
            )`,
          }}
        >
          
          {/* Inner Circle */}
          <div className="absolute w-32 h-32 rounded-full bg-[#293241] flex items-center justify-center">
            <span className="text-4xl font-bold text-white">
              {skill.percent}%
            </span>
          </div>
        </div>

        {/* Skill Name */}
        <p className="mt-6 text-xl font-semibold">
          {skill.name}
        </p>
      </div>
    ))}
  </div>
</div>

      {/* Experience & Education */}
      <div>
        <h2 className="text-center text-4xl font-bold mb-20">
          EXPERIENCE & EDUCATION
        </h2>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20">
          
          {/* Experience */}
          <div className="space-y-14">
            {experience.map((item, index) => (
              <div
                key={index}
                className="relative pl-16 border-l border-white/10"
              >
                <div className="absolute left-[-22px] top-0 w-11 h-11 rounded-full bg-[#ee6c4d] flex items-center justify-center">
                  <FaBriefcase />
                </div>

                <span className="bg-white/10 px-4 py-2 rounded-full text-sm">
                  {item.year}
                </span>

                <h3 className="text-3xl font-bold mt-5">
                  {item.title}
                </h3>

                <p className="text-[#98c1d9] text-lg mt-1">
                  {item.company}
                </p>

                <p className="mt-4 text-lg leading-8 text-gray-300">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>

          {/* Education */}
          <div className="space-y-14">
            {education.map((item, index) => (
              <div
                key={index}
                className="relative pl-16 border-l border-white/10"
              >
                <div className="absolute left-[-22px] top-0 w-11 h-11 rounded-full bg-[#ee6c4d] flex items-center justify-center">
                  <FaGraduationCap />
                </div>

                <span className="bg-white/10 px-4 py-2 rounded-full text-sm">
                  {item.year}
                </span>

                <h3 className="text-3xl font-bold mt-5">
                  {item.title}
                </h3>

                <p className="text-[#98c1d9] text-lg mt-1">
                  {item.company}
                </p>

                <p className="mt-4 text-lg leading-8 text-gray-300">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  </>
  )
}
