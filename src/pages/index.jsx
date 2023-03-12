import React from "react"
import "bootstrap/dist/css/bootstrap.min.css"
import "./home/index.scss"
import Layout from "../components/Layout/Default"
import Banner from "../components/Banner/Banner"
import Cards from "../components/Cards/Cards"
import Section from "../components/Section/Section"
import Help from "../components/Help/Help"


import SEO from "../components/seo"

const IndexPage = () => (
  <>
    <Layout>
      <SEO  title=""/>
      <Banner />
      <Cards />
      <Section />
      <Help />
    </Layout>
  
  </>
)

export default IndexPage
