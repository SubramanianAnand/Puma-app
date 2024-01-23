import React, { useEffect } from "react";
import shoe7 from '../assets/pngwing7.com.png'
import AOS from "aos";
import "aos/dist/aos.css";

const SuperQuality = () => {

  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <section id="about" className="flex justify-between items-center max-lg:flex-col gap-10 w-full max-container">
      <div data-aos="fade-right" className="flex flex-1 flex-col">
        <h2 className=" text-[48px] leading-11 font-bold lg:max-w-lg">
          We Provide You<span className="text-red-500"> Super Quality</span>{" "}
          Shoes
        </h2>
        <p className="text-gray-500 mt-4 lg:max-w-lg">
          Ensuring premium comfort and style, our meticulously crafted footwear
          is designed to elevate your experience, providing you with unmatched
          quality, innovation, and a touch of elegance.
        </p>
        <p className="text-gray-500 mt-6 lg:max-w-lg">Our dedication to detail and excellence ensures your satisfaction</p>
        <div className="mt-11">
            <button className="bg-red-600 px-7 py-4 mt-10 flex justify-center items-center text-white rounded-full w-200 shadow-2xl  font-semibold bg-gradient-to-r from-[#b13c3c] via-[#f03030] to-[#e12339] hover:shadow-xl hover:shadow-green-500 hover:scale-105 duration-300 hover:from-[#047857] hover:to-[#14b8a6]">View details</button>
        </div>
      </div>
      <div data-aos="fade-left" className="flex justify-center items-center">
        <img
        src={shoe7}
        alt="product detail"
        className="w-[570px] h-[522px]"
        />
      </div>
    </section>
  );
};

export default SuperQuality;
