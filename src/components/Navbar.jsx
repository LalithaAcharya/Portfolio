import {
  FaHome,
  FaUser,
  FaBriefcase,
  FaEnvelope,
  FaProjectDiagram,
} from "react-icons/fa";

import { NavLink } from "react-router-dom";

export const Navbar = () => {
  return (
    <div className="fixed right-8 top-1/2 -translate-y-1/2 flex flex-col gap-5 z-[999]">
      
      <NavLink
        to="/"
        className={({ isActive }) =>
          `w-16 h-16 rounded-full flex items-center justify-center text-2xl transition-all duration-300
          ${
            isActive
              ? "bg-[#ee6c4d]"
              : "bg-[#1e293b] hover:bg-[#ee6c4d]"
          }`
        }
      >
        <FaHome />
      </NavLink>

      <NavLink
        to="/about"
        className={({ isActive }) =>
          `w-16 h-16 rounded-full flex items-center justify-center text-2xl transition-all duration-300
          ${
            isActive
              ? "bg-[#ee6c4d]"
              : "bg-[#1e293b] hover:bg-[#ee6c4d]"
          }`
        }
      >
        <FaUser />
      </NavLink>

      <NavLink
        to="/portfolio"
        className={({ isActive }) =>
          `w-16 h-16 rounded-full flex items-center justify-center text-2xl transition-all duration-300
          ${
            isActive
              ? "bg-[#ee6c4d]"
              : "bg-[#1e293b] hover:bg-[#ee6c4d]"
          }`
        }
      >
        <FaProjectDiagram />
      </NavLink>

      <NavLink
        to="/contact"
        className={({ isActive }) =>
          `w-16 h-16 rounded-full flex items-center justify-center text-2xl transition-all duration-300
          ${
            isActive
              ? "bg-[#ee6c4d]"
              : "bg-[#1e293b] hover:bg-[#ee6c4d]"
          }`
        }
      >
        <FaEnvelope />
      </NavLink>
    </div>
  );
}