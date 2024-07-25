import React from "react";
import Navbar from "../Components/Navbar";
import Hero from "../Components/Hero";
import Info from "../Components/Info";
import About from "../Components/About";
import Reviews from "../Components/Reviews";
import Footer from "../Components/Footer";
import ImagePredection from "../Components/ImagePredection";

function Home() {
  return (
    <div className="home-section">
      <Navbar />
      <Hero />
      <Info />
      <ImagePredection />
      <About />
      <Reviews />
      <Footer />
    </div>
  );
}

export default Home;
