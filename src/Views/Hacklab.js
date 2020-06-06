import React from "react";
import Layout from "../Components/Layout";
import Hero from "../Components/HacklabComponents/Carrousel.js"
import ApaseoCopy from "../Components/HacklabComponents/ApaseoCopy"
import ApaseoCommets from "../Components/HacklabComponents/ApaseoComments"
import ColmenaCopy from "../Components/HacklabComponents/ColmenaCopy"
import ColmenaCommets from "../Components/HacklabComponents/ColmenaComments"

export default function Hacklab() {
  return (
    <Layout>
      <Hero />
      <ApaseoCopy/>
      <ApaseoCommets/>
      <ColmenaCopy/>
      <ColmenaCommets/>
    </Layout>
  );
}
