import React, { useEffect, useState } from "react";
import headerlogo from "../assets/puma-ag.svg";
import { hamburger } from "../assets/icons/index";
import Headroom from "react-headroom";
import "../components/Nav.css";
import AOS from "aos";
import "aos/dist/aos.css";
import { motion } from "framer-motion";
import Hamburger from "../pages/Hamburger";

const Nav = () => {
  const [menuOpen, setMenuOpen] = useState(true);
  console.log(menuOpen);

  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <Headroom>
      <header className="padding-x py-8 relative focus:scroll-auto bg-stone-100 z-10 w-full">
        <nav className="flex justify-between items-center max-container">
          <a href="/">
            <img
              alt="logo"
              src={headerlogo}
              width={129}
              height={29}
              className="w-[150px] h-[50px] m-0"
            />
          </a>
          <ul className="flex-1 flex justify-center items-center gap-16 font-montserrat text-lg text-gray-500 max-lg:hidden">
            <li className=" hover:text-red-500">
              <a href="#home">Home</a>
            </li>
            <li className=" hover:text-red-500">
              <a href="#about">About Us</a>
            </li>
            <li className=" hover:text-red-500">
              <a href="#product">Products</a>
            </li>
            <li className=" hover:text-red-500">
              <a href="#contact">Contact Us</a>
            </li>
          </ul>

          <div className="flex text-lg leading-normal gap-2 font-medium max-lg:hidden wide:mr-24">
            <a href="/"> Sign in</a> /<a href="/"> Explore now</a>
          </div>
          {/* <div
            className="hidden absolute bg-white top-12 right-8 flex-col justify-between w-[36px] h-[32px] max-lg:flex "
            onClick={() => setMenuOpen(!menuOpen)}
          >
            <span className="h-[6px] w-full bg-black"></span>
            <span className="h-[6px] w-full  bg-black"></span>
            <span className="h-[6px] w-full  bg-black"></span>
          </div>
          <div className={menuOpen ? "open" : ""}>
            <div className="fixed truncate top-0 right-0 min-h-full max-w-full scale-1 bg-white max-lg:flex">
              <div className="flex border-box border-2 flex-col justify-between w-full p-[20px] max-lg:block">
                <button
                  onClick={() => setMenuOpen(!menuOpen)}
                  className="absolute  right-[16px] top-[16px] bg-red-500"
                >
                  <svg
                    stroke="currentColor"
                    fill="currentColor"
                    strokeWidth={0}
                    viewBox="0 0 352 512"
                    color="white"
                    height={25}
                    width={25}
                    xmlns="http://www.w3.org/2000/svg"
                    style={{ color: "white" }}
                  >
                    <path d="M242.72 256l100.07-100.07c12.28-12.28 12.28-32.19 0-44.48l-22.24-22.24c-12.28-12.28-32.19-12.28-44.48 0L176 189.28 75.93 89.21c-12.28-12.28-32.19-12.28-44.48 0L9.21 111.45c-12.28 12.28-12.28 32.19 0 44.48L109.28 256 9.21 356.07c-12.28 12.28-12.28 32.19 0 44.48l22.24 22.24c12.28 12.28 32.2 12.28 44.48 0L176 322.72l100.07 100.07c12.28 12.28 32.2 12.28 44.48 0l22.24-22.24c12.28-12.28 12.28-32.19 0-44.48L242.72 256z" />
                    <path d="M242.72 256l100.07-100.07c12.28-12.28 12.28-32.19 0-44.48l-22.24-22.24c-12.28-12.28-32.19-12.28-44.48 0L176 189.28 75.93 89.21c-12.28-12.28-32.19-12.28-44.48 0L9.21 111.45c-12.28 12.28-12.28 32.19 0 44.48L109.28 256 9.21 356.07c-12.28 12.28-12.28 32.19 0 44.48l22.24 22.24c12.28 12.28 32.2 12.28 44.48 0L176 322.72l100.07 100.07c12.28 12.28 32.2 12.28 44.48 0l22.24-22.24c12.28-12.28 12.28-32.19 0-44.48L242.72 256z" />
                  </svg>
                </button>
                <ul className="flex-col mt-10 hidden max-lg:flex">
                  <li className=" hover:text-red-500 ">
                    <a
                      href="#home"
                      className="block mt-2 mb-2 text-[24px] leading-8"
                    >
                      Home
                    </a>
                  </li>
                  <li className=" hover:text-red-500">
                    <a
                      href="#about"
                      className="block mt-2 mb-2 text-[24px] leading-8"
                    >
                      About Us
                    </a>
                  </li>
                  <li className=" hover:text-red-500">
                    <a
                      href="#product"
                      className="block mt-2 mb-2 text-[24px] leading-8"
                    >
                      Products
                    </a>
                  </li>
                  <li className=" hover:text-red-500">
                    <a
                      href="#contact"
                      className="block mt-2 mb-2 text-[24px] leading-8"
                    >
                      Contact Us
                    </a>
                  </li>
                </ul>
              </div>
            </div>
  </div>*/}
  <div className="hidden fixed items-end top-12 right-15 w-[36px] h-[32px] max-lg:flex">
    
  
    <Hamburger/>
  </div>
 
  
        </nav>
      </header>
    </Headroom>
  );
};

export default Nav;
 