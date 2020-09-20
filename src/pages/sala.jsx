import React from "react";
import image1 from "../assets/portfolio/sala/image1.jpg";
import image2 from "../assets/portfolio/sala/image2.jpg";
import image3 from "../assets/portfolio/sala/image3.jpg";
import image4 from "../assets/portfolio/sala/image4.jpg";
import image5 from "../assets/portfolio/sala/image5.jpg";
import image6 from "../assets/portfolio/sala/image6.jpg";
import icon from "../assets/icons/camera.png";
import Layout from "../components/Layout/Default";
import Gallery from "../components/Gallery/Gallery";
import SEO from "../components/seo"


export default function Sala() {
  
  return (
    <Layout>
      <SEO title="Sala de estar"/>
        <div className="container">
        <div className="col-md text-center mb-5">
          <p className="text-center">
            <img src={icon} alt="" width="50" />
          </p>
          <h2>SALA</h2>
          <p>Design e inovação</p>
        </div>
        <br />
        <div className="row">
          <div className="col-lg">
            <Gallery image={image1} link={image1} />
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
      </div>
    </Layout>
  );
}
