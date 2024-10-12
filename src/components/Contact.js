import React from 'react';
import { FiGithub, FiInstagram, FiLinkedin } from "react-icons/fi";

const Contact = () => {
  return (
    <section className="bg-[#0a192f] text-white p-8 h-screen flex flex-col justify-center">
      <div className='text-center mx-auto p-8 md:p-16'>
        <div className='text-green-300 my-4 font-mono text-lg'>04. What's next?</div>
        <div className='text-4xl md:text-6xl font-bold'>Get In Touch</div>
        <p className='text-center mt-8 text-lg md:text-xl'>
          I'm always open to new opportunities, collaborations, or simply a friendly chat! Whether you have a project in mind, want to discuss ideas, or need more information about my work, feel free to reach out.
        </p>
        <br />
        <p>
          <span className='font-mono text-green-300 text-lg'>astharai572@gmail.com</span>
        </p>
        <p className='text-xs font-mono mt-2'>Looking forward to connecting!</p>
        <div className="lg:hidden flex gap-8 justify-center items-center m-4 w-[100%] text-gray-400">
          <a href="https://github.com/astha114">
            <FiGithub className="scale-150" />
          </a>
          <a href="https://www.instagram.com/astha_rai011/profilecard/?igsh=bGIpNnFmMDcyZ3M4">
            <FiInstagram className="scale-150" />
          </a>
          <a href="https://www.linkedin.com/in/astha-rai-16594b1b7">
            <FiLinkedin className="scale-150" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Contact;
