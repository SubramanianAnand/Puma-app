import React from "react";
import poster from "../assets/poster.png.png";
import { arrowRight } from "../assets/icons";

const Specialoffer = () => {
  return (
    <section className="flex justify-between items-center max-xl:flex-col-reverse gap-10 max-container">
      <div className="flex-1">
        <img src={poster} alt="poster" width={773} height={687} />
      </div>
      <div className="flex-1 flex flex-col">
        <h2 className="text-[48px] leading-11 font-bold">
          <span className="text-red-500">Special </span>Offer
        </h2>
        <p className="text-gray-500 mt-4 lg:max-w-lg">
          Embark on a shopping journey that redefines your experience with
          unbeatable deals. From premier selections to incredible savings, we
          offer unparalleled value that sets us apart.
        </p>
        <p className="text-gray-500 mt-4 lg:max-w-lg">
          Navigate a realm of possibilities designed to fulfill your unique
          desires, surpassing the loftiest expectations. Your journey with us is
          nothing short of exceptional.
        </p>
        <div className="mt-11 flex flex-wrap gap-4">
        <button className="bg-red-600 px-7 py-4 mt-10 flex justify-center items-center text-white rounded-full w-200">
            Shop now
            <img
              src={arrowRight}
              className="ml-2 w-5 h-5"
            />
          </button>
          <button className="px-7 py-4 mt-10 flex justify-center items-center text-black border border-stone-950 bg-white rounded-full w-200">
            Learn More
          </button>
        </div>
      </div>
    </section>
  );
};

export default Specialoffer;
