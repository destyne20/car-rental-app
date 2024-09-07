import React from "react";
import Landing from "../components/Landing";
import Features from "../components/Features";
import Banner from "../components/Banner";
import Choose from "../components/Choose";
import Testimonials from "../components/Testimonials";
import Downloads from "../components/Downloads";

const Home = () => {
  return (
    <>
      <Landing />
      <Features />
      <Banner />
      <Choose />
      <Testimonials />
      <Downloads />
    </>
  );
};

export default Home;
