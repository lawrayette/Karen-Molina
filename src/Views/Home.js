import React, { Component } from "react";
import Layout from "../Components/Layout";
import Hero from "../Components/Hero";
import Projects from "../Components/Projects/Projects";
import Workshops from "../Components/Workshops/Workshops";
import Talks from "../Components/Talks/Talks";

class App extends Component {
  render() {
    return (
      <Layout>
        <Hero />
        <Projects />
        <Workshops />
        <Talks />
      </Layout>
    );
  }
}

export default App;
