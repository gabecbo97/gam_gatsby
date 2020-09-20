import "../../../node_modules/bootstrap/dist/css/bootstrap.min.css"

import React from "react"
import PropTypes from "prop-types"
import Navbar from "../Navbar/Navbar"
import Footer from "../Footer/Footer"
import "../Layout/Default.scss"

export default function Layout({ children }) {
  return (
    <>
     
      <Navbar />
      <main> {children} </main>
      <Footer />
    </>
  )
}
Layout.protoType = {
  children: PropTypes.node.isRequired,
}
