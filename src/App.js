import React, { useRef, useState, useEffect } from "react";
import Intro from "./components/Intro";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import Contact from "./components/Contact";
import About from "./components/About";
import { FiGithub, FiInstagram, FiLinkedin } from "react-icons/fi";
import icon from "./images/icon.png";
import { FiMenu, FiX } from "react-icons/fi"; // Importing icons for menu

function App() {
  // Create refs for each section
  const aboutRef = useRef(null);
  const skillsRef = useRef(null);
  const projectsRef = useRef(null);
  const contactRef = useRef(null);

  // State to track whether the navbar should be visible or hidden
  const [isNavbarVisible, setIsNavbarVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [menuOpen, setMenuOpen] = useState(false); // State to control mobile menu

  // Function to scroll to a specific section
  const scrollToSection = (ref) => {
    ref.current.scrollIntoView({ behavior: "smooth" });
    setMenuOpen(false); // Close menu after selection
  };

  // Effect to handle hiding/showing the navbar on scroll
  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      // Hide navbar if scrolling down and show if scrolling up
      if (currentScrollY > lastScrollY && currentScrollY > window.innerHeight) {
        setIsNavbarVisible(false);
      } else {
        setIsNavbarVisible(true);
      }

      // Set the last scroll position to the current scroll position
      setLastScrollY(currentScrollY);
    };

    window.addEventListener("scroll", handleScroll);

    // Cleanup the event listener on component unmount
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [lastScrollY]);

  return (
    <div className="flex flex-col lg:flex-row justify-center">
      {/* Navbar */}
      <div
        className={`fixed top-0 z-40 h-[20%] shadow-lg shadow-[#0a192f] w-full bg-[#0a192f] transition-transform duration-300 ${
          isNavbarVisible ? "transform translate-y-0" : "transform -translate-y-full"
        }`}
      >
        <div className="flex justify-between items-center m-4 p-6">
          <div className="w-[30%] sm:w-[50%] ml-4">
            <img src={icon} alt="logo" />
          </div>
        
          <div className={`hidden lg:flex justify-between text-slate-300 font-mono font-medium text-sm w-[60%] sm:w-[38%]`}>
            {/* Add onClick handlers to trigger scroll to specific sections */}
            <p className="hover:text-green-400 cursor-pointer" onClick={() => scrollToSection(aboutRef)}>
              <span className="text-green-400">01. </span>About
            </p>
            <p className="hover:text-green-400 cursor-pointer" onClick={() => scrollToSection(skillsRef)}>
              <span className="text-green-400">02. </span>Skills
            </p>
            <p className="hover:text-green-400 cursor-pointer" onClick={() => scrollToSection(projectsRef)}>
              <span className="text-green-400">03. </span>Projects
            </p>
            <p className="hover:text-green-400 cursor-pointer" onClick={() => scrollToSection(contactRef)}>
              <span className="text-green-400">04. </span>Contact
            </p>
          </div>
          <div className="border text-green-400 text-sm border-green-400 p-2 px-4 rounded-md">
            <a href="https://drive.google.com/file/d/1jjslctgOeko-N7h4TLIHeD3QrA6gNxPn/view?usp=drive_link">
              Resume
            </a>
          </div>
        </div>
      </div>

   

      {/* Left bar */}
      <div className="hidden lg:flex fixed flex-col justify-center items-center gap-16 left-0 w-[10%] lg:w-[14%] bg-[#0a192f] text-slate-500 h-screen overflow-hidden">
        <div className="flex flex-col gap-8 justify-end items-center w-[100%] h-screen text-gray-400">
          <a href="https://github.com/astha114">
            <FiGithub className="scale-150" />
          </a>
          <a href="https://www.instagram.com/astha_rai011/profilecard/?igsh=bGIpNnFmMDcyZ3M4">
            <FiInstagram className="scale-150" />
          </a>
          <a href="https://www.linkedin.com/in/astha-rai-16594b1b7">
            <FiLinkedin className="scale-150" />
          </a>
          <div className="bg-gray-400 w-[1%] mr-1 h-52"></div>
        </div>
      </div>

      {/* Main content */}
      <div className="w-full lg:w-[75%] bg-[#0a192f]">
        <Intro />
        <section ref={aboutRef}>
          <About />
        </section>
        <section ref={skillsRef}>
          <Skills />
        </section>
        <section ref={projectsRef}>
          <Projects />
        </section>
        <section ref={contactRef}>
          <Contact />
        </section>
      </div>

      {/* Right bar */}
      <div className="hidden lg:flex fixed right-0 w-[10%] lg:w-[14%] bg-[#0a192f] h-screen overflow-hidden">
        <div className="flex flex-col gap-28 justify-end items-center w-[100%] h-screen text-gray-400">
          <p className="rotate-90 font-mono">astharai572@gmail.com</p>
          <div className="bg-gray-400 w-[1%] mr-1 h-16"></div>
        </div>
      </div>
    </div>
  );
}

export default App;
