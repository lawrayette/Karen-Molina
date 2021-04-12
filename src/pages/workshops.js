import React from "react"
import Layout from "../components/Layout"

export default () => {
  const data = {
    names: ["LCD", "Hacklab para niños", "CCD"],
    pages: [
      "LCD is the Laboratorio de Ciudadanía Digital an iniciative from Telefónica Foundation, CCEMx, La Caixa and El Ateneo Español en México. I has 6 years as a colaborator and teacher in several workshops, since electronic, ambiental education, genre, feminism, coding, digital security.",
      "Hacklab para niños was a workshop about multimedia and experimental art using free software. The workshop was realized at instances from UNAM. The target was kids from elementary schools. We experimented with scratch, arduino, GIMP, Audacity, Inkscape and papercircuits.",
      "In 2019, I developed a digital security workshop for women with a gender perspective. The workshop was realized in Centro de Cultura Digital.",
    ],
  }

  const showBoxes = () =>
    data.names.map((box, i) => (
      <div className="sm:flex sm:flex-row-reverse p-4 sm:items-center">
        <div className="sm:px-2 mx-auto">
        <h3>
            {data.names[i]}
          </h3>
        </div>
        <p className="px-4 mt-8 text-lg text-gray-700 sm:mt-8 md:w-3/5">
          {data.pages[i]}
        </p>
      </div>
    ))

  return (
    <Layout>
      <main className="max-w-4xl flex-grow mx-auto flex flex-col py-8">
        <h3 className="sm:text-3xl">
          Workshops
        </h3>
        <p className="p-8 mx-8">
        </p>
        <div className="text-center">{showBoxes()}</div>
      </main>
    </Layout>
  )
}
