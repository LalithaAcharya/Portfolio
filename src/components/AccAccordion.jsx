import { useState } from "react";
import { FaChevronDown } from "react-icons/fa";

function Accordion({ title, children }) {
  const [open, setOpen] = useState(false);

  return (
    <div className="border-b border-white/10 py-5">
      
      {/* Header */}
      <button
        onClick={() => setOpen(!open)}
        className="w-full flex items-center justify-between text-left"
      >
        <h3 className="text-2xl font-bold">
          {title}
        </h3>

        <FaChevronDown
          className={`transition-all duration-300 ${
            open ? "rotate-180" : ""
          }`}
        />
      </button>

      {/* Content */}
      <div
        className={`overflow-hidden transition-all duration-500 ${
          open ? "max-h-[500px] mt-5" : "max-h-0"
        }`}
      >
        <div className="text-[#98c1d9] leading-8">
          {children}
        </div>
      </div>
    </div>
  );
}

export default Accordion;