import React from "react";
import Layout from "../components/Layout";
import './../styles/about.css'

export default function about() {
  return (
    <Layout>
      <div className="about">
        <article class="set-width">
          <section>
            <h2>King Tide</h2>
          </section>
          <section>
            <h2>Flux QR</h2>
          </section>
          <section><h2>minu</h2></section>
          <section><h2>Freelance</h2></section>


        </article>
      </div>
    </Layout>
  );
}
