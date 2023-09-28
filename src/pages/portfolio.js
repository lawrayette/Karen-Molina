import React from "react";
import Layout from "../components/Layout";
import "./../styles/portfolio.css";
import RegalinkDesktop from "/src/images/Desktop - 1 (1).png"
import RegalinkMob from "/src/images/iPhone SE - 1.png"
import RegalinkAdmin from "/src/images/Desktop - 4.png"

export default function portfolio() {
  return (
    <Layout>
      <div className="about">
        <article class="set-width">
          <section>
            <h2>Flux QR</h2>
            <p>
              I worked on FLUX as a frontend developer and also handled some
              backend and mobile tasks. Additionally, I had the opportunity to
              do some UI design for some of the startup's services and products.
            </p>
            <div>
              <img src={RegalinkDesktop} width={400}/>
              <img src={RegalinkMob} height={300}/>
              <img src={RegalinkAdmin} width={400}/>
            </div>
          </section>
          <section>
            <h2>minu</h2>
            <p>
              I collaborated on the refactoring and design adjustments of the
              <a href="https://www.minu.mx/" target="blank"> minu website</a>, as well as the <a href="https://m.minu.mx/" target="blank">landing page for the app </a>. I worked on
              some implementations in the minu app and UX writing on the mailing services.
            </p>
          </section>
          <section>
            <h2>Freelance</h2>
            <p>
              As a freelancer, I worked hand in hand with an NGO on the redesign
              of their website.<a href="https://www.figma.com/file/uk5vtZiiwwpBYnbRmx7NoL/Untitled?type=design&node-id=0%3A1&mode=design&t=yPWQI0OrAMoxVhT8-1" target="blank"> I shared the Figma link </a>, but the final result
              ended up being completely different.
            </p>
          </section>
        </article>
      </div>
    </Layout>
  );
}
