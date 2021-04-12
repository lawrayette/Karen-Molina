import React from "react"
import Layout from "../components/Layout"
import Freely from "../images/freely.png"
import MS from "../images/ms.png"
import SpecChain from "../images/specChain.png"

export default () => {
  const data = {
    names: ["Freely", "MS Connect", "SpecChain"],
    pages: [
      "https://talkfreely.io/",
      "https://beta.msconnect.io/",
      "https://specchain.io/",
    ],
    img: [Freely, MS, SpecChain],
  }

  const showBoxes = () =>
    data.names.map((box, i) => (
      <div className="sm:flex sm:flex-row-reverse p-4 sm:items-center">
        <div className="sm:px-2 mx-auto">
          <a
            href={data.pages[i]}
            className="px-4 mt-8 text-lg text-teal-700 sm:mt-8 hover:text-gray-500"
          >
            {data.names[i]}
          </a>
        </div>
        <img
          className="w-full max-w-lg mb-16 mt-4 mx-auto sm:w-1/2 sm:mt-10"
          src={data.img[i]}
          alt="Gatsby and Tailwind CSS together"
        />
      </div>
    ))

  return (
    <Layout>
      <main className="max-w-4xl flex-grow mx-auto flex flex-col py-8">
        <h3 className="sm:text-3xl">
          Projects
        </h3>
        <p className="p-8 mx-8">
          My first job as developer was in King Tide. KT is a digital agency
          based in L.A. and Mexico City. When I worked in KT, I was involved in
          approximately 20 projects. Some of those projects I had the
          responsibility of deciding the development stack. Some projects that I
          has envolved:
        </p>
        <div className="text-center">
        {showBoxes()}
        </div>

      </main>
    </Layout>
  )
}
