import React from "react";
import Layout from "../components/Layout/Default";
import Gallery from "../components/Gallery/Gallery";
import image0 from "../assets/portfolio/decoracao/gamming.jpg";
import image1 from "../assets/portfolio/decoracao/image1.jpg";
import image2 from "../assets/portfolio/decoracao/image2.jpg";
import image3 from "../assets/portfolio/decoracao/image3.jpg";
import image4 from "../assets/portfolio/decoracao/image4.jpg";
import image5 from "../assets/portfolio/decoracao/image5.jpg";
import image6 from "../assets/portfolio/decoracao/image6.jpg";
import image7 from "../assets/portfolio/decoracao/image7.jpg";
import image8 from "../assets/portfolio/decoracao/image8.jpg";
import image9 from "../assets/portfolio/decoracao/image9.jpg";
import icon from "../assets/icons/camera.png";
import SEO from "../components/seo"

export default function Banheiro() {
  return (
    <Layout>
      <SEO title="Banheiro"/>
      <div className="container">
        <div className="col-md text-center mb-5">
          <p className="text-center">
            <img src={icon} alt="" width="50" />
          </p>
          <h2>DECORAÇÃO</h2>
          <p>A sua casa com móveis únicos e com qualidade garantida</p>
        </div>

        <br />
        <div className="row">
          <div className="col-lg">
            <Gallery image={image0} link={image0} />
          </div>
          <div className="col-lg">
            <Gallery image={image2} link={image2} />
          </div>
          <div className="col-lg">
            <Gallery image={image3} link={image3} />
          </div>
        </div>
        <div className="row">
          <div className="col-lg">
            <Gallery image={image4} link={image4} />
          </div>
          <div className="col-lg">
            <Gallery image={image5} link={image5} />
          </div>
          <div className="col-lg">
            <Gallery image={image6} link={image6} />
          </div>
        </div>
        <div className="row">
          <div className="col-lg">
            <Gallery image={image7} link={image7} />
          </div>
          <div className="col-lg">
            <Gallery image={image8} link={image8} />
          </div>
          <div className="col-lg">
            <Gallery image={image9} link={image9} />
          </div>
        </div>
        <div className="row">
          <div className="col-lg">
            <Gallery image={image1} link={image1} />
          </div>
          <div className="col-lg"></div>
          <div className="col-lg"></div>
        </div>
      </div>
    </Layout>
  );
}
