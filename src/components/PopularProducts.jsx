import React from "react";
import {star} from '../assets/icons/index'
import shoe3 from '../assets/pngwing3.com.png'
import shoe4 from '../assets/pngwing4.com.png'
import shoe5 from '../assets/pngwing5.com.png'
import shoe6 from '../assets/pngwing6.com.png'

const PopularProducts = () => {
  return (
    <section id="product" className="max-container max-sm:mt-12">
      <div className="flex justify-start flex-col gap-5">
        <h2 className="text-[48px] leading-10 font-bold">
          Our <span className="text-red-500">Popular</span> Products
        </h2>
        <p className="text-gray-500 lg:max-w-lg mt-2">
          Experience top-notch quality and style with our sought-after
          selections. Discover a world of comfort, design, and value
        </p>
      </div>
      <div className="grid mt-16 lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 grid-cols-1 sm:gap-6 gap-14">
        <div className=" flex flex-col flex-1 w-full max-sm:w-full">
            <img
            src={shoe3}
            alt="Puma Shoe-01"
            className="w-[282px] h-[282px] border-2 rounded-xl border-black-100 bg-gray-200"
            />
            <div className="flex justify-start gap-2.5 mt-8">
                <img
                src={star}
                alt="rating icon"
                className="w-[24px] h-[24px]"
                />
                <p className="text-xl leading-normal text-gray-500">(4.5)</p>
            </div>
            <p className="mt-2 font-semibold leading-normal text-[24px]">Puma Shoe-01</p>
            <p className="mt-2 font-semibold leading-normal text-[24px] text-red-500">$200.00</p>
        </div>
        <div className="flex flex-col flex-1 w-full max-sm:w-full">
            <img
            src={shoe4}
            alt="Puma Shoe-01"
            className="w-[282px] h-[282px] border-2 rounded-xl border-black-100 bg-gray-200"
            />
            <div className="flex justify-start gap-2.5 mt-8">
                <img
                src={star}
                alt="rating icon"
                className="w-[24px] h-[24px]"
                />
                <p className="text-xl leading-normal text-gray-500">(4.2)</p>
            </div>
            <p className="mt-2 font-semibold leading-normal text-[24px]">Puma Shoe-02</p>
            <p className="mt-2 font-semibold leading-normal text-[24px] text-red-500">$220.00</p>
        </div>
        <div className="flex flex-col flex-1 w-full max-sm:w-full">
            <img
            src={shoe5}
            alt="Puma Shoe-01"
            className="w-[282px] h-[282px] border-2 rounded-xl border-black-100 bg-gray-200"
            />
            <div className="flex justify-start gap-2.5 mt-8">
                <img
                src={star}
                alt="rating icon"
                className="w-[24px] h-[24px]"
                />
                <p className="text-xl leading-normal text-gray-500">(4.5)</p>
            </div>
            <p className="mt-2 font-semibold leading-normal text-[24px]">Puma Shoe-03</p>
            <p className="mt-2 font-semibold leading-normal text-[24px] text-red-500">$280.00</p>
        </div>
        <div className="flex flex-col flex-1 w-full max-sm:w-full">
            <img
            src={shoe6}
            alt="Puma Shoe-01"
            className="w-[282px] h-[282px] border-2 rounded-xl border-black-100 bg-gray-200"
            />
            <div className="flex justify-start gap-2.5 mt-8">
                <img
                src={star}
                alt="rating icon"
                className="w-[24px] h-[24px]"
                />
                <p className="text-xl leading-normal text-gray-500">(4.3)</p>
            </div>
            <p className="mt-2 font-semibold leading-normal text-[24px]">Puma Shoe-04</p>
            <p className="mt-2 font-semibold leading-normal text-[24px] text-red-500">$270.00</p>
        </div>
      </div>
    </section>
  );
};

export default PopularProducts;
