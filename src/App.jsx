import React from "react";
import Nav from "./components/Nav";
import Hero from "./components/Hero";
import PopularProducts from "./components/PopularProducts";
import SuperQuality from "./components/SuperQuality";
import Shipping from "./components/Shipping";
import Specialoffer from "./components/Specialoffer";
import Review from "./components/Review";
import Subscribe from "./components/Subscribe";
import Footer from "./components/Footer";

const App = () => {
  return (
    <main className="relative">
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
        <Shipping/>
      </section>
      <section className="padding">
        <Specialoffer/>
      </section>
      <section className="bg-gray-100 padding">
        <Review/>
      </section>
      <section className="padding-x py-16 sm:py-32 w-full">
        <Subscribe/>
      </section>
      <section className=" bg-black padding-x padding-t pb-8">
        <Footer/>
      </section>
    </main>
  );
};

export default App;
