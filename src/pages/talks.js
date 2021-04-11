import React from "react"
import Layout from "../components/Layout"

export default () => {
  const data = {
    names: ["DevHr", "Eventloop", "Edusol"],
    pages: [
      "DevHr is the International forum of videogames and games studies. In 2018 I was participated as speaker. I talked about my research about video games as a prosthesis, how the video games has become in extensions of body and brain. How we change the mode that we play and feel the game.",
      "In 2019 I was participated as speaker in EventLoop, the meetup of Javascripters and developers. I talked about e cuerpo. how the technology and scientific advances has been influenced by sci fi. And how many of gadgets are now an extension of our bodys. Thats why the technology and the prosthesis has many relationship between the developed and the User experience.",
      "EDUSOL is an meeting between experts, teachers, reseachers and people interesting in FS and education. In 2019 i talked about my experience as teacher and mentor in workshops at formal and informal education spaces.In 2019, I developed a digital security workshop for women with a gender perspective. The workshop was realized in Centro de Cultura Digital.",
    ],
  }

  const showBoxes = () =>
    data.names.map((box, i) => (
      <div className="sm:flex sm:flex-row-reverse p-4 sm:items-center">
        <div className="sm:px-2 mx-auto">
          <h1 className="px-4 pt-5 text-2xl text-center text-teal-500 font-bold sm:text-3xl">
            {data.names[i]}
          </h1>
        </div>
        <p className="px-4 mt-8 text-lg text-gray-700 sm:mt-8 md:w-3/5">
          {data.pages[i]}
        </p>
      </div>
    ))

  return (
    <Layout>
      <main className="max-w-4xl flex-grow mx-auto flex flex-col py-8">
        <h1 className="text-2xl text-center text-teal-500 font-bold sm:text-3xl">
          Talks
        </h1>
        <p className="p-8 mx-8">

        </p>
        <div className="text-center">{showBoxes()}</div>
      </main>
    </Layout>
  )
}
