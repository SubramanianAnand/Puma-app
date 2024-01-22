import {React,  useEffect, useState } from "react";
import shoe1 from "../assets/pngwing.com.png";
import shoe2 from "../assets/pngwing1.com.png";
import shoe3 from "../assets/pngwing2.com.png";
import ShoeCard from "../pages/ShoeCard";
import { arrowRight } from "../assets/icons";
import AOS from "aos";
import "aos/dist/aos.css";

const Hero = () => {

  const [bigShoeImg, setBigShoeImg] = useState(shoe1);

  useEffect(() => {
    AOS.init();
  }, []);

  const shoes = [
    {
        thumbnail: shoe1,
        bigShoe: shoe1,
    },
    {
        thumbnail: shoe2,
        bigShoe: shoe2,
    },
    {
        thumbnail: shoe3,
        bigShoe: shoe3,
    },
];

  return (
    <section id="home" className="px-8 py-8 xl:padding-1 wide:padding-r padding-b">
      <section  className="flex w-100 xl:flex-row flex-col justify-center min-h-screen gap-10 max-container">
        <div data-aos="fade-right" className="relative .xl\:w-2\/5  flex flex-col justify-center items-start w-50 pt-28">
          <p className="text-red-600 text-xl ">Our Sports collections</p>
          <h1 className="text-8xl font-bold mt-10">
            <span className="xl:bg-white xl:whitespace-nowrap">
              The New Arrival
            </span>
            <br /> <span className="text-red-600">Puma</span> Shoes
          </h1>
          <p className="mt-10  text-lg text-gray-500 leading-8">
            Discover stylish Puma arrivals, quality
            <br /> comfort, and innovation for your active life.
          </p>
          <button className="bg-red-600 px-7 py-4 mt-10 flex justify-center items-center text-white rounded-full w-200">
            Shop now
            <img
              src={arrowRight}
              className="ml-2 w-5 h-5"
            />
          </button>

          <section className="flex justify-start items-start  flex-wrap w-full mt-20 gap-16">
            <div>
              <p className="text-4xl font-palanquin font-bold">
                <span>1k+</span>
              </p>
              <p className="leading-7 font-montserrat text-slate-gray gap-16">
                <span>Brands</span>
              </p>
            </div>
            <div>
              <p className="text-4xl font-palanquin font-bold">
                <span> 500+</span>
              </p>
              <p className="leading-7 font-montserrat text-slate-gray gap-16">
                <span> Shops</span>
              </p>
            </div>
            <div>
              <p className="text-4xl font-palanquin font-bold">
                <span> 250k+</span>
              </p>
              <p className="leading-7 font-montserrat text-slate-gray gap-16">
                <span> Customers</span>
              </p>
            </div>
          </section> 
        </div>
        <div data-aos="fade-left" className="relative flex-1 flex justify-center items-center xl:min-h-screen max-xl:py-40 bg-primary bg-hero bg-cover bg-center">
          <img
            src={bigShoeImg}
            alt="shoe colletion"
            width={610}
            height={502}
            className="w-[610px] h-[520px] object-contain relative z-10"
          />
          {/* <div className="flex sm:gap-6 gap-4 absolute -bottom-[5%] sm:left-[10%] max-sm:px-6">
            <div>
              <div className="border-2 rounded-xl border-black-100 bg-gray-200 cursor-pointer max-sm:flex-1">
                <div className="flex justify-center items-center bg-card bg-center bg-cover sm:w-40 sm:h-40 max-sm:p-4">
                  <img
                    src={shoe1}
                    alt="shoe colletion"
                    width={127}
                    height={103}
                    className="object-contain"
                  />
                </div>
              </div>
            </div>

            <div>
              <div className="border-2 rounded-xl border-black-100 bg-gray-200 cursor-pointer max-sm:flex-1">
                <div className="flex justify-center items-center bg-card bg-center bg-cover sm:w-40 sm:h-40 max-sm:p-4">
                  <img
                    src={shoe2}
                    alt="shoe colletion"
                    width={127}
                    height={103}
                    className="object-contain"
                  />
                </div>
              </div>
            </div>

            <div>
              <div className="border-2 rounded-xl border-black-100 bg-gray-200 cursor-pointer max-sm:flex-1">
                <div className="flex justify-center items-center bg-card bg-center bg-cover sm:w-40 sm:h-40 max-sm:p-4">
                  <img
                    src={shoe3}
                    alt="shoe colletion"
                    width={127}
                    height={103}
                    className="object-contain"
                  />
                </div>
              </div>
            </div>
          </div> */}
          <div className='flex sm:gap-6 gap-4 absolute -bottom-[5%] sm:left-[10%] max-sm:px-6'>
          {shoes.map((image, index) => (
            <div key={index}>
              <ShoeCard
                index={index}
                imgURL={image}
                changeBigShoeImage={(shoe) => setBigShoeImg(shoe)}
                bigShoeImg={bigShoeImg}
              />
            </div>
          ))}
        </div> 
        </div>
      </section>
    </section>
  );
};

export default Hero;
