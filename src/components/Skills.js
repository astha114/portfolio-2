import React from "react";

const Skills = () => {
  return (
    <section className="bg-[#0a192f] lg:px-4 py-8 px-4 text-white h-screen flex flex-col justify-center">
      <div className="flex flex-col w-full max-w-4xl mx-auto">
        <div className="flex items-center gap-6 mb-8">
          <div className="text-2xl sm:text-3xl w-[40%] text-slate-300 font-bold">
            <p>
              <span className="text-green-400">02. </span> Skills I Have
            </p>
          </div>
          <div className="h-[1px] flex-grow bg-slate-600"></div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          <div className="bg-gray-800 p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
            <h3 className="text-lg font-bold text-green-400">React.js</h3>
            <p className="text-slate-500">
              Building dynamic and responsive user interfaces.
            </p>
          </div>

          <div className="bg-gray-800 p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
            <h3 className="text-lg font-bold text-green-400">Node.js</h3>
            <p className="text-slate-500">
              Developing scalable server-side applications.
            </p>
          </div>

          <div className="bg-gray-800 p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
            <h3 className="text-lg font-bold text-green-400">Express.js</h3>
            <p className="text-slate-500">
              Creating robust RESTful APIs for seamless communication between front-end and back-end services.
            </p>
          </div>

          <div className="bg-gray-800 p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
            <h3 className="text-lg font-bold text-green-400">MongoDB</h3>
            <p className="text-slate-500">
              Managing and querying databases with flexibility and efficiency.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
