import React from "react";
import Home from "./Home";
import Gallery from "./Gallery";
import Contact from "./Contact";

const Section = () => {
  return (
    <section>
      <section id="home" className=" min-h-screen bg-white pt-10">
        <Home />
      </section>
      <section id="gallery" className=" min-h-screen bg-blue-200 pt-10">
        <Gallery />
      </section>
      <section id="contact" className=" min-h-screen bg-white pt-10">
        <Contact />
      </section>
    </section>
  );
};

export default Section;
