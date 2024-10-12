import React from "react";
import me from "../images/me.jpeg";

const Intro = () => {
  return (
    <section className="bg-[#0a192f] px-4 sm:px-10 text-white lg:h-screen flex flex-col justify-center">
      <div className="flex flex-col lg:flex-row">
        {/* Text Section */}
        <div className="flex flex-col w-full lg:w-[60%] mb-8 lg:mb-0">
          <div className="flex items-center gap-4 mb-4">
            <div className="text-2xl sm:text-3xl w-[40%] text-slate-300 font-bold">
              <p>
                <span className="text-green-400">01. </span> About Me
              </p>
            </div>
            <div className="h-[1px] flex-grow bg-slate-600"></div>
          </div>
          <div className="text-lg text-slate-500">
            <p className="mb-4">
              Hello! My name is Astha, and I enjoy creating things that live on the internet. My interest in web development began back in 2020, during the second year of my college. Since then, I have immersed myself in the world of technology, honing my skills and contributing to several exciting projects.
            </p>
            <p>
              Fast-forward to today, I’m working at a <span className="text-green-300">Multinational corporation</span>, where I have the opportunity to tackle complex challenges and collaborate with talented professionals.
            </p>
          </div>
        </div>

        {/* Image Section */}
        <div className="relative flex items-center justify-center h-64 lg:w-[40%]">
          <div className="absolute left-[10%] top-[10%] w-[70%] h-[70%] bg-green-600 rounded-md hover:scale-105 transition-transform duration-300">
            <img className="w-full h-full object-cover object-top rounded-md" alt='me' src={me} />
          </div>
          <div className="w-[70%] h-[70%] border-2 border-green-300 rounded-md"></div>
        </div>
      </div>
    </section>
  );
};

export default Intro;
