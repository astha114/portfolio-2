import React from 'react';

const Intro = () => {
  return (
    <section className="bg-[#0a192f] px-4 sm:px-8 text-white h-screen flex flex-col justify-center">
      <div className="container mt-12 mx-auto flex flex-col items-start">
        <h2 className="text-green-400 text-lg font-mono">Hi, my name is</h2>
        <h1 className="text-5xl sm:text-7xl text-slate-300 font-bold mt-2">Astha Rai.</h1>
        <p className="text-5xl sm:text-7xl text-slate-500 font-bold mt-2">I build things for the web.</p>
        <p className="mt-8 text-slate-500 text-base sm:text-lg max-w-lg">
          I'm a Software Developer specializing in building efficient, scalable solutions that bring ideas to life through clean code and innovative technology.
        </p>
        <a 
          href="https://drive.google.com/file/d/1jjslctgOeko-N7h4TLIHeD3QrA6gNxPn/view?usp=drive_link" 
          className="mt-12 inline-block border border-green-400 text-green-400 px-8 py-4 rounded-lg transition duration-300 hover:bg-black"
        >
          Check out my resume!
        </a>
      </div>
    </section>
  );
};

export default Intro;

