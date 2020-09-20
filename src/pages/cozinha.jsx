import React from "react";
import Layout from "../components/Layout/Default";
import Gallery from "../components/Gallery/Gallery";
import image1 from "../assets/portfolio/cozinha/image1.jpg";
import image2 from "../assets/portfolio/cozinha/image2.jpg";
import image3 from "../assets/portfolio/cozinha/image3.jpg";
import image4 from "../assets/portfolio/cozinha/image4.jpg";
import image5 from "../assets/portfolio/cozinha/image5.jpg";
import image6 from "../assets/portfolio/cozinha/image6.jpg";
import image7 from "../assets/portfolio/cozinha/image7.jpg";
import image8 from "../assets/portfolio/cozinha/image8.jpg";
import icon from "../assets/icons/camera.png";
import SEO from "../components/seo"
export default function Cozinha() {
  return (
    <Layout>
      <SEO title="Cozinha" />
      <div className="container">
        <div className="col-md text-center mb-5">
          <p className="text-center">
            <img src={icon} alt="" width="50" />
          </p>
          <h2>COZINHA</h2>
          <p>
            Melhor aproveitamento do espaço com variedade de cores e texturas,
            projetos sob medida de acordo com o tamanho da cozinha
          </p>
        </div>
        <br />
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
          <div class="col-lg">
            <Gallery image={image5} link={image5} />
          </div>
          <div class="col-lg">
            <Gallery image={image6} link={image6} />
          </div>
        </div>
        <div class="row">
          <div class="col-lg">
            <Gallery image={image7} link={image7} />
          </div>
          <div class="col-lg">
            <Gallery image={image8} link={image8} />
          </div>
          <div class="col-lg"></div>
        </div>
      </div>
    </Layout>
  );
}
