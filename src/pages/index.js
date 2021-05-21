import React from "react"
import Layout from "../components/Layout"
import MiniMe from "../images/foto.png"

export default () => {
  return (
    <Layout>
      <main className="max-w-4xl flex-grow mx-auto flex flex-col justify-around">
        <div className="sm:flex sm:flex-row-reverse sm:items-center dm">
          <div className="sm:px-2">
            <h1 className="px-4 pt-5 text-3xl text-left text-teal-500 font-bold sm:text-4xl">
              Hi, my name is Karen Molina
            </h1>
            <h2 className="sm:text-3xl">
              I'm Frontend Developer
            </h2>
            <p className="sm:mt-8">
              I was born and rised in Mexico since I was a child, I remember
              being into science. I used to want to be a biologist, so I studied
              biology at UNAM. But when I was study biology, I discovered a lot
              of authors that wrote about humanities, pholosophy, and
              anthopology. In consequence, I dropped Biology and started to
              study social anthopology at UAM. One day I woke up with curiosity
              about FS, and I using it since there, so I wrote my research about
              it. Then I discovered many FS communities and realized that many
              of the contributors where engineering students or graduated
              engineers. It was there when I started to leadn about coding. My
              first approach was with Arduino, since there, I'm really into
              digital cultural issues. I'm teacher on many workshops STEAM that
              I develop. I'm a contributor to many foundations, schools, and
              organizations. Since 2018 I'm a web developer. Currently, I'm a
              frontend developer at Fintech Startup.
            </p>
          </div>
          <img
            className="w-full rounded-full max-w-lg mt-16 mx-auto sm:w-1/2 p-10"
            src={MiniMe}
            alt="Gatsby and Tailwind CSS together"
          />
        </div>
      </main>
    </Layout>
  )
}
