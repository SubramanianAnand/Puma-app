import React, { useEffect, useState } from "react";
import Nav from "./components/Nav";
import Hero from "./components/Hero";
import PopularProducts from "./components/PopularProducts";
import SuperQuality from "./components/SuperQuality";
import Shipping from "./components/Shipping";
import Specialoffer from "./components/Specialoffer";
import Review from "./components/Review";
import Subscribe from "./components/Subscribe";
import Footer from "./components/Footer";
import { gsap } from "gsap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowUp } from "@fortawesome/free-solid-svg-icons";

const App = () => {
  const [showTopbtn, setShowTopbtn] = useState(false);

  useEffect(() => {
    gsap.set(".ball", { xPercent: -50, yPercent: -50 });
    let targets = gsap.utils.toArray(".ball");
    window.addEventListener("mousemove", (e) => {
      gsap.to(targets, {
        duration: 0.6,
        x: e.clientX,
        y: e.clientY,
        ease: "power1.out",
        overwrite: "auto",
        stagger: 0.02,
      });
    });
  }, []);

  const scrollTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  const hideTopButton = () => {
    if (window.scrollY >= 300) {
      setShowTopbtn(true);
    } else {
      setShowTopbtn(false);
    }
  };

  useEffect(() => {
    return window.addEventListener("scroll", hideTopButton);
  }, []);

  return (
    <main className="relative">
      <div className="ball z-10 pointer-events-none  bg-transparent border border-black w-10 h-10 fixed top-0 left-0 rounded-full hover:border-red-500 max-sm:hidden"></div>
      <div className="ball z-10 pointer-events-none bg-red-500 w-4 h-4 fixed top-0 left-0 rounded-full max-sm:hidden"></div>

      {showTopbtn && (
        <div className="scrollToTop h-[50px] w-[50px] bg-transparent flex justify-center items-center rounded-full text-white cursor-pointer fixed bottom-10 right-0 ">
          <div
            onClick={scrollTop}
            className="h-[80%] w-[80%] bg-red-500 flex justify-center items-center rounded-full hover:bg-red-600"
          >
            <FontAwesomeIcon icon={faArrowUp} />
          </div>
        </div>
      )}
      <Nav />
      <section className="xl:padding-l wide:padding-r padding-b">
        <Hero />
      </section>
      <section className="padding">
        <PopularProducts />
      </section>
      <section className="padding">
        <SuperQuality />
      </section>
      <section className="padding-x py-10">
        <Shipping />
      </section>
      <section className="padding">
        <Specialoffer />
      </section>
      <section className="bg-gray-100 padding">
        <Review />
      </section>
      <section className="padding-x py-16 sm:py-32 w-full">
        <Subscribe />
      </section>
      <section className=" bg-black padding-x padding-t pb-8">
        <Footer />
      </section>
    </main>
  );
};

export default App;
