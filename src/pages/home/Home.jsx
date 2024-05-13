import React from "react";
import { Footer, Header } from "../../components";
import { Hero, Features, Testimonials } from "./components";

function Home() {
  return (
    <div>
      <Header />
      <Hero />
      <Features />
      <Testimonials />
      <Footer />
    </div>
  );
}

export default Home;
