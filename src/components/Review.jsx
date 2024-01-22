import React from "react";
import { customer1 } from "../assets/images";
import { customer2 } from "../assets/images";
import { star } from "../assets/icons/index";

const Review = () => {
  return (
    <section className="max-container">
      <h3 className="text-center text-[48px] leading-11 font-bold">
        What Our <span className="text-red-500">Customers</span> Say?
      </h3>
      <p className="m-auto mt-4 max-w-lg text-center text-gray-500 text-lg leading-7">
        Hear genuine stories from our satisfied customers about their
        exceptional experiences with us.
      </p>
      <div className="flex flex-1 mt-24 justify-evenly items-center max-lg:flex-col gap-14 ">
        <div className="flex justify-center items-center flex-col">
          <img
            src={customer1}
            alt="customer"
            className="w-[120px] h-[120px] rounded-full object-cover"
          />
          <p className="mt-6 max-w-sm text-center text-gray-500 text-lg leading-7">
            The attention to detail and the quality of the product exceeded my
            expectations. Highly recommended!
          </p>
          <div className="flex justify-start gap-2.5 mt-8">
            <img src={star} alt="rating icon" className="w-[24px] h-[24px]" />
            <p className="text-xl leading-normal text-gray-500">(4.5)</p>
          </div>
          <div>
            <h3 className="mt-1 text-[28px] leading-11 text-center font-bold">
              Morich Brown
            </h3>
          </div>
        </div>
        <div className="flex justify-center items-center flex-col">
          <img
            src={customer2}
            alt="customer"
            className="w-[120px] h-[120px] rounded-full object-cover"
          />
          <p className="mt-6 max-w-sm text-center text-gray-500 text-lg leading-7">
          The product not only met but exceeded my expectations. I'll definitely be a returning customer!
          </p>
          <div className="flex justify-start gap-2.5 mt-8">
            <img src={star} alt="rating icon" className="w-[24px] h-[24px]" />
            <p className="text-xl leading-normal text-gray-500">(4.5)</p>
          </div>
          <div>
            <h3 className="mt-1 text-[28px] leading-11 text-center font-bold">
            Lota Mongeskar
            </h3>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Review;
