import React from "react";
import Layout from "../Components/Layout";
import Hero from "../Components/CCD/Hero";
import Middle from "../Components/CCD/Middle";
import Feedback from "../Components/CCD/Feedback"

export default function Hacklab() {
  return (
    <Layout>
      <Hero />
      <Middle />
      <Feedback/>
    </Layout>
  );
}
