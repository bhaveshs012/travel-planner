import React from "react";
import { Footer, Header } from "../../components";
import { Hero, Features, Testimonials } from "./components";

function Home() {
  return (
    <div
      className="overflow-y-auto"
      style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
    >
      <Header />
      <Hero />
      <Features />
      <Testimonials />
      <Footer />
    </div>
  );
}

export default Home;
