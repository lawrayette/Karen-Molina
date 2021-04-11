import React from "react"
import SEO from "./SEO"
import NavBar from "./Navbar/Nav"
import Footer from "./Footer"

const Layout = ({ children }) => {
  return (
    <>
      <SEO />
      <NavBar />
      <div className="flex flex-col min-h-screen bg-gray-200">
        {children}
      </div>
      <Footer />
    </>
  )
}

export default Layout
