import React from "react";
import { truckFast } from "../assets/icons";
import { shieldTick } from "../assets/icons";
import { support } from "../assets/icons";

const Shipping = () => {
  return (
    <section className="max-container flex justify-center flex-row flex-wrap gap-9">
      <div className="flex-1  sm:w-[350px] sm:min-w-[350px] w-full rounded-[20px] shadow-2xl px-10 py-16">
        <div className="w-11 h-11 flex justify-center items-center bg-red-500 rounded-full">
          <img src={truckFast} width={24} height={24} />
        </div>
        <h3 className="mt-2 font-semibold leading-normal text-[24px]">
          Free shipping
        </h3>
        <p className="mt-3 break-words text-lg leading-normal text-gray-500">
          Enjoy seamless shopping with our complimentary shipping service.
        </p>
      </div>
      <div className="flex-1 sm:w-[350px] sm:min-w-[350px] w-full rounded-[20px] shadow-2xl px-10 py-16">
        <div className="w-11 h-11 flex justify-center items-center bg-red-500 rounded-full">
          <img src={shieldTick} width={24} height={24} />
        </div>
        <h3 className="mt-2 font-semibold leading-normal text-[24px]">
        Secure Payment
        </h3>
        <p className="mt-3 break-words text-lg leading-normal text-gray-500">
        Experience worry-free transactions with our secure payment options.
        </p>
      </div>
      <div className="flex-1 sm:w-[350px] sm:min-w-[350px] w-full rounded-[20px] shadow-2xl px-10 py-16">
        <div className="w-11 h-11 flex justify-center items-center bg-red-500 rounded-full">
          <img src={support} width={24} height={24} />
        </div>
        <h3 className="mt-2 font-semibold leading-normal text-[24px]">
        Love to help you
        </h3>
        <p className="mt-3 break-words text-lg leading-normal text-gray-500">
        Our dedicated team is here to assist you every step of the way.
        </p>
      </div>
    </section>
  );
};

export default Shipping;
