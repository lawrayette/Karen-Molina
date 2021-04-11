import React from "react"

export default function Footer() {
  return (
    <section className="flex flex-col bg-gray-400 text-gray-800 text-center p-4">
      <h3 className="text-xl lg:text-3xl">Let's Talk</h3>
      <div className="mx-auto flex w-1/3 justify-around m-3">
        <a href="https://github.com/voidrizoma">
          <img
            src="https://www.flaticon.es/svg/static/icons/svg/2111/2111432.svg"
            width="30px"
            alt="contact"
          />
        </a>
        <a href="https://www.linkedin.com/in/karen-molinac/">
          <img
            src="https://www.flaticon.es/svg/static/icons/svg/1384/1384030.svg"
            width="30px"
            alt="contact"
          />
        </a>
        <a href="mailto:karenemece@gmail.com">
          <img
            src="https://www.flaticon.es/svg/static/icons/svg/646/646094.svg"
            width="30px"
            alt="contact"
          />
        </a>
      </div>
      <hr className="border-3 border-purple-700"/>
      <code className="text-gray-600 text-xs leading-xl">
        Built with <span className="text-red-400 text-2xl" role="img" aria-label="heart">❤️</span> by Karen Molina
      </code>
    </section>
  )
}
