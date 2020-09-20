import React from "react";
import Layout from "../components/Layout/Default";
import Gallery from "../components/Gallery/Gallery";
import image1 from "../assets/portfolio/dormitorio/image1.jpg";
import image2 from "../assets/portfolio/dormitorio/image2.jpg";
import image3 from "../assets/portfolio/dormitorio/image3.jpg";
import image4 from "../assets/portfolio/dormitorio/image4.jpg";
import icon from "../assets/icons/camera.png";
import SEO from "../components/seo"

export default function Dormitorio() {
  return (
    <Layout>
    <SEO title="Dormitório" />
      <div className="container">
        <div className="col-md text-center mb-5">
          <p className="text-center">
            <img src={icon} alt="" width="50" />
          </p>
          <h2>DORMITÓRIO</h2>
          <p>
            Para casal, solteiro e crianças, tudo com inovação e design
          </p>
        </div>

        <div class="row">
          <div class="col-lg">
            <Gallery image={image1} link={image1} />
          </div>
          <div class="col-lg">
            <Gallery image={image2} link={image2} />
          </div>
          <div class="col-lg">
            <Gallery image={image3} link={image3} />
          </div>
        </div>
        <div class="row">
          <div class="col-lg">
            <Gallery image={image4} link={image4} />
          </div>
          <div class="col-lg"></div>
          <div class="col-lg"></div>
        </div>
      </div>
    </Layout>
  );
}
