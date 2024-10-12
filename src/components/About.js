import React from "react";
import me from "../images/me.jpeg"
const Intro = () => {
  return (
    <section className="bg-[#0a192f] p-8 text-white h-screen flex flex-col justify-center">
      <div className="flex">
        <div className="flex flex-col w-[60%]">
          <div className="flex items-center gap-6">
            <div className="text-3xl w-[40%] text-slate-300 font-bold">
              <p>
                <span className="text-green-400">01. </span> About Me
              </p>
            </div>
            <div className="h-[1%] w-[60%] bg-slate-600"></div>
          </div>
          <div className="my-8 text-lg text-slate-500">
            <p>
            Hello! My name is Astha, and I enjoy creating things that live on the internet. My interest in web development began back in 2020, during the second year of my college. Since then, I have immersed myself in the world of technology, honing my skills and contributing to several exciting projects.
            </p>
            <br></br>
            <p>
            Fast-forward to today, I’m working at a <span className="text-green-300">Multinational corporation</span>, where I have the opportunity to tackle complex challenges and collaborate with talented professionals.
              
            </p>
          </div>
        </div>
        <div className="relative flex items-center justify-end w-[40%] ">
          <div className="absolute right-[5%] top-[10%] w-[70%] h-[70%] bg-green-600 rounded-md hover:scale-105">
            <img className="w-[100%] h-[100%] object-cover object-top rounded-md" alt='me' src={me}></img>
          </div>
          <div className="w-[70%] h-[70%] border-2 border-green-300 rounded-md"></div>
        </div>
      </div>
    </section>
  );
};

export default Intro;
