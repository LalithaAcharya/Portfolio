import React from 'react'
import ProfilePic from '../assets/ProfilePic.jpeg'

export const Home = () => {
  return (
    <>
  <div className="min-h-screen bg-[#0f172a] text-white flex items-center justify-center px-10 relative overflow-hidden">
      
      {/* Left Background Shape */}
      <div className="absolute left-[-200px] top-0 w-[500px] h-full bg-[#ee6c4d] rotate-12"></div>

      {/* Main Content */}
      <div className="relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-0 items-center w-full max-w-7xl">

        {/* Left Image */}
        <div className="flex justify-center lg:justify-start">
          <div className="w-[420px] h-[600px] rounded-3xl overflow-hidden shadow-2xl border border-white/10">
            <img
              src={ProfilePic}
              alt="profile"
              className="w-full h-full object-cover"
            />
          </div>
        </div>

        {/* Right Content */}
        <div>
          <h2 className="text-[#ee6c4d] text-2xl font-semibold mb-5 flex items-center gap-4">
            <span className="w-16 h-[3px] bg-[#ee6c4d]"></span>
            HELLO
          </h2>

          <h1 className="text-6xl font-extrabold leading-tight mb-6">
            I'M <span className="text-[#ee6c4d]">LALITHA.R</span>
            <br />
            FRONTEND DEVELOPER <br/><span className='text-xl font-bold'>Angular | React | Javascript | TypeScript | Exploring Node.js </span>
          </h1>

          <p className="text-[#98c1d9] text-lg leading-9 max-w-2xl mb-10">
            Frontend developer with 4+ years of experirnce building scalable web applicaions using Angular and React. Skilled in creating responsive,high-performance UI and modern dashboards. currently expanding into backend developement with Node.js to become a full-stack engineer.
          </p>

          {/* Button */}
          <button className="group flex items-center border-2 border-[#ee6c4d] rounded-full overflow-hidden hover:bg-[#ee6c4d] transition-all duration-300">
            
            <span className="px-8 py-4 text-sm font-semibold tracking-wide">
              Explore Portfolio
            </span>

            <span className="bg-[#ee6c4d] w-16 h-16 flex items-center justify-center text-2xl group-hover:bg-[#293241] transition-all duration-300">
              →
            </span>
          </button>
        </div>
      </div>

      
    </div>
  </>
  )
}
