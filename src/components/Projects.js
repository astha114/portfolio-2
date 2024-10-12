import React from "react";
import p1 from "../images/p1.jpg";
import p2 from "../images/p2.png";
import { FiExternalLink } from "react-icons/fi";
import { FiGithub } from "react-icons/fi";
const Projects = () => {
  return (
    <section className="bg-[#0a192f] p-8 text-white  flex flex-col justify-center">
      <div className="flex">
        <div className="flex flex-col w-[100%]">
          <div className="flex justify-start items-center gap-6">
            <div className="text-3xl w-[45%] text-slate-300 font-bold">
              <p>
                <span className="text-green-400">03. </span> Some Things I’ve
                Built
              </p>
            </div>
            <div className="h-[1%] w-[40%] bg-slate-600"></div>
          </div>
          <div className="my-8 text-lg text-slate-500">
            {/* Project 1 */}
            <div className="flex relative my-8">
              <div className="w-[60%] h-[100%] bg-red-400">
                <img alt="foodapp" src={p1} />
              </div>
              <div className="absolute w-[60%] h-[100%] bg-[#0a192f] opacity-70 hover:opacity-20"></div>
              <div className="flex-col w-[40%]">
                <p className="flex justify-end text-2xl font-bold text-slate-300">
                  Food App
                </p>
                <div className="absolute left-[40%]  text-slate-400 mt-4 w-[60%] ">
                  <div className="bg-[#112240] p-4  rounded-md">
                    A minimal, light themed, food odering app with features like
                    serach, filter, add to cart, place order etc.
                  </div>
                  <div className="flex justify-end text-sm text-green-300 font-mono gap-6 mt-6">
                    <p>React.js</p>
                    <p>MongoDB</p>
                    <p>Express</p>
                  </div>
                  <div className="flex justify-end mt-4 gap-4">
                    <a href="https://github.com/astha114/foodapp.git">
                      <FiGithub />
                    </a>
                    <a href="https://foodapp-1-en99.onrender.com/login" >
                      <FiExternalLink />
                    </a>
                  </div>
                </div>
              </div>
            </div>

            {/* Project 2  */}
            <div className="flex relative my-24">
              
              
              <div className="flex-col w-[40%]">
                <p className="flex justify-start text-2xl font-bold text-slate-300">
                  Urbanic Clone
                </p>
                <div className="absolute right-[40%] z-10 text-slate-400 mt-4 w-[60%] ">
                  <div className="bg-[#112240] p-4 rounded-md">
                  The project features a user-friendly interface for browsing fashion collections, along with robust back-end functionalities like product management, user authentication, and dynamic content updates. This clone replicates key features of the original Urbanic site, such as a shopping cart, product filtering, and secure checkout.
                  </div>
                  <div className="flex justify-start text-sm text-green-300 font-mono gap-6 mt-6">
                    <p>React.js</p>
                    <p>MongoDB</p>
                    <p>Express</p>
                  </div>
                  <div className="flex justify-start mt-4 gap-4">
                    <a href="https://github.com/astha114/urbanic.git">
                      <FiGithub />
                    </a>
                    <a href="https://astha114.github.io/urbanic/">
                      <FiExternalLink />
                    </a>
                  </div>
                </div>
              </div>

              <div className="w-[60%] h-[100%] bg-red-400">
                <img alt="foodapp" src={p2} />
              </div>
              <div className="absolute right-0 w-[60%] h-[100%] bg-[#0a192f] opacity-70 hover:opacity-20"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
