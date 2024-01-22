import React, { useEffect } from 'react'
import AOS from "aos";
import "aos/dist/aos.css";

const Subscribe = () => {

  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <section id='contact' className='max-container flex justify-between items-center max-lg:flex-col gap-10'>
        <h3 data-aos="fade-right" className='font-bold text-[45px] leading-[68px] lg:max-w-md'>
        Sign Up for <span className='text-red-500'>Updates</span> & Newsletter
        </h3>
        <div data-aos="fade-left" className='lg:max-w-[40%] w-full flex items-center max-sm:flex-col gap-5 p-2.5 sm:border sm:border-gray-500 rounded-full'>
            <input
            type='text'
            placeholder='subscribe@puma.com'
            className='input'
            />
            <div className='flex max-sm:justify-end items-center max-sm:w-full'>
                <button className='bg-red-600 px-7 py-4 gap-2 border text-lg flex justify-center items-center text-white rounded-full w-full'>Sign Up</button>
            </div>
        </div>
    </section>
  )
}

export default Subscribe