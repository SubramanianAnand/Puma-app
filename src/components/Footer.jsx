import React, { useEffect } from "react";
import logo from "../assets/puma-ag.svg";
import { facebook } from "../assets/icons";
import { twitter } from "../assets/icons";
import { instagram } from "../assets/icons";
import { copyrightSign } from "../assets/icons";
import AOS from "aos";
import "aos/dist/aos.css";
import { motion } from "framer-motion";

const Footer = () => {
  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <section data-aos="fade-up" className="max-container">
      <footer className="max-container">
        <div className="flex justify-between items-start gap-20 flex-wrap max-lg:flex-col">
          <div className="flex items-start flex-col">
            <a href="/">
              <img
                src={logo}
                alt="logo"
                width={150}
                height={46}
                className="w-[150px] h-[60px] m-0"
              />
            </a>
            <p className="mt-6 text-base text-[20px] text-white leading-7 sm:max-w-sm">
              Get shoes ready for the new term at your nearest Nike store. Find
              Your perfect Size In Store. Get Rewards
            </p>
            <div className="flex items-center gap-5 mt-8">
              <div className="flex justify-center items-center bg-white w-12 h-12 rounded-full">
                <img src={facebook} alt="facebook" />
              </div>
              <div className="flex justify-center items-center bg-white w-12 h-12 rounded-full">
                <img src={twitter} alt="twitter" />
              </div>
              <div className="flex justify-center items-center bg-white w-12 h-12 rounded-full">
                <img src={instagram} alt="instagram" />
              </div>
            </div>
          </div>
          <div className="flex flex-1 justify-between lg:gap-10 gap-20 flex-wrap">
            <div>
              <h4 className="text-white text-[26px] font-medium mb-6 leading-normal">
                Products
              </h4>
              <ul>
                <li className="mt-3 text-base leadig-normal text-white hover:text-gray-500">
                  <motion.button
                    whileHover={{ scale: 1.5 }}
                    whileTap={{ scale: 0.9 }}
                  >
                    <a href="/">Puma Shoe 1</a>
                  </motion.button>
                </li>
                <li className="mt-3 text-base leadig-normal text-white hover:text-gray-500">
                  <motion.button
                    whileHover={{ scale: 1.5 }}
                    whileTap={{ scale: 0.9 }}
                  >
                    <a href="/">Puma Shoe 2</a>
                  </motion.button>
                </li>
                <li className="mt-3 text-base leadig-normal text-white hover:text-gray-500">
                  <motion.button
                    whileHover={{ scale: 1.5 }}
                    whileTap={{ scale: 0.9 }}
                  >
                    <a href="/">Puma Shoe 3</a>
                  </motion.button>
                </li>
                <li className="mt-3 text-base leadig-normal text-white hover:text-gray-500">
                  <motion.button
                    whileHover={{ scale: 1.5 }}
                    whileTap={{ scale: 0.9 }}
                  >
                    <a href="/">Puma Shoe 4</a>
                  </motion.button>
                </li>
                <li className="mt-3 text-base leadig-normal text-white hover:text-gray-500">
                  <motion.button
                    whileHover={{ scale: 1.5 }}
                    whileTap={{ scale: 0.9 }}
                  >
                    <a href="/">Puma Shoe 5</a>
                  </motion.button>
                </li>
                <li className="mt-3 text-base leadig-normal text-white hover:text-gray-500">
                  <motion.button
                    whileHover={{ scale: 1.5 }}
                    whileTap={{ scale: 0.9 }}
                  >
                    <a href="/">Puma Shoe 6</a>
                  </motion.button>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="text-white text-[26px] font-medium mb-6 leading-normal">
                Help
              </h4>
              <ul>
                <li className="mt-3 text-base leadig-normal text-white hover:text-gray-500">
                  <motion.button
                    whileHover={{ scale: 1.5 }}
                    whileTap={{ scale: 0.9 }}
                  >
                    <a href="/">About Us</a>
                  </motion.button>
                </li>
                <li className="mt-3 text-base leadig-normal text-white hover:text-gray-500">
                  <motion.button
                    whileHover={{ scale: 1.5 }}
                    whileTap={{ scale: 0.9 }}
                  >
                    <a href="/">FAQs</a>
                  </motion.button>
                </li>
                <li className="mt-3 text-base leadig-normal text-white hover:text-gray-500">
                  <motion.button
                    whileHover={{ scale: 1.5 }}
                    whileTap={{ scale: 0.9 }}
                  >
                    <a href="/">How it works</a>
                  </motion.button>
                </li>
                <li className="mt-3 text-base leadig-normal text-white hover:text-gray-500">
                  <motion.button
                    whileHover={{ scale: 1.5 }}
                    whileTap={{ scale: 0.9 }}
                  >
                    <a href="/">Privacy Policy</a>
                  </motion.button>
                </li>
                <li className="mt-3 text-base leadig-normal text-white hover:text-gray-500">
                  <motion.button
                    whileHover={{ scale: 1.5 }}
                    whileTap={{ scale: 0.9 }}
                  >
                    <a href="/">Payment Policy</a>
                  </motion.button>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="text-white text-[26px] font-medium mb-6 leading-normal">
                Get in touch
              </h4>
              <ul>
                <li className="mt-3 text-base leadig-normal text-white hover:text-gray-500">
                <motion.button
                    whileHover={{ scale: 1.5 }}
                    whileTap={{ scale: 0.9 }}
                  >
                    <a href="/">customer@puma.com</a>
                  </motion.button>
                </li>
                <li className="mt-3 text-base leadig-normal text-white hover:text-gray-500">
                <motion.button
                    whileHover={{ scale: 1.5 }}
                    whileTap={{ scale: 0.9 }}
                  >
                    <a href="/">+92554862354</a>
                  </motion.button>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="flex justify-between text-white mt-24 max-sm:flex-col max-sm:items-center">
          <div className="flex flex-1 justify-start items-center gap-2">
            <img
              src={copyrightSign}
              alt="copyrights"
              className="rounded-full m-0"
            />
            <p>Copyright. All rights reserved.</p>
          </div>
          <p>Terms & Conditions</p>
        </div>
      </footer>
    </section>
  );
};

export default Footer;
