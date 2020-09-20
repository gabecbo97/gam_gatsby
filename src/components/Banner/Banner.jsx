import React from "react";
import "../Banner/Banner.scss";
import logo from "../../assets/img/logo.png";

import { Link } from "gatsby";

export default function Banner() {
  return (
    <div className="container-fluid banner">
       <div className="container containers">
      <div className="cards">
        <img className="card-img-top" src={logo} alt="Card image cap" />
        <div className="card-body">
          <h5 className="card-title">
            MOVEIS PLANEJADOS COM INOVAÇÃO & DESIGN
          </h5>
          <Link to="/contato" className="btn btn-contact">
            ORÇAMENTO GRÁTIS
          </Link>
        </div>
      </div>
    </div>

    </div>
   
  );
}
