import React from "react";
import Layout from "../Components/Layout";
import Internet from "../Components/MiYoDigital/internetSecure";
import Letter from "../Components/MiYoDigital/Letter";
import Myrules from "../Components/MiYoDigital/MyInternet";


export default function Hacklab() {
  return (
    <Layout>
      <Myrules />
      <Letter />
      <Internet />
    </Layout>
  );
}
