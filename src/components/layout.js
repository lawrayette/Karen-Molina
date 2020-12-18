/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.com/docs/use-static-query/
 */

import React from "react"
import PropTypes from "prop-types"

import Header from "../components/NavBar/NAvBar"
import Footer from "../components/footer"
import "./layout.css"

const Layout = ({ children }) => {
  return (
    <div>
      <Header />
      <div
        style={{
          margin: `0 auto`,
          maxWidth: 1100,
          padding: `2%`,
          
        }}
      >
        <main
          style={{
            minHeight: "100vh",
            display: "flex"

          }}
        >
          {children}
        </main>

      </div>
      <Footer/>
    </div>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
