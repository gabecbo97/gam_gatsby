import React from "react"
import "../Section/Section.scss"
import banheiro from "../../assets/tumb/banheiro.png"
import cozinha from "../../assets/tumb/cozinha.png"
import decoracao from "../../assets/tumb/decoracao.jpg"
import escritorio from "../../assets/tumb/escritorio.png"
import sala from "../../assets/tumb/sala.png"
import dormitorio from "../../assets/tumb/dormitorio.jpg"

import { Link } from "gatsby"

export default function Section() {
  return (
    <div className="container-fluid section mb-5" style={{ width: "81vw" }}>
      <div className="row tetxt-center justify-content-center">
        <Link className="links-default" to="/sala">
          <div className="col-md">
            <div className="card_section text-center">
              <img src={sala} className="card-img img-fluid" alt="..." />
              <div className="card-body">
                <h5 className="card-title">SALA DE ESTAR</h5>
              </div>
            </div>
          </div>
        </Link>

        <Link className="links-default" to="/cozinha">
          <div className="col-md">
            <div className="card_section text-center">
              <img src={cozinha} className="card-img" alt="..." />
              <div className="card-body">
                <h5 className="card-title">COZINHA</h5>
              </div>
            </div>
          </div>
        </Link>
      </div>
      <div className="row justify-content-center">
        <Link className="links-default" to="/dormitorio">
          <div className="col-md">
            <div className="card_section text-center">
              <img src={dormitorio} className="card-img" alt="..." />
              <div className="card-body">
                <h5 className="card-title">DORMITÓRIO</h5>
              </div>
            </div>
          </div>
        </Link>
        <Link className="links-default" to="/escritorio">
          <div className="col-md">
            <div className="card_section text-center">
              <img src={escritorio} className="card-img" alt="..." />
              <div className="card-body">
                <h5 className="card-title">ESCRITÓRIO</h5>
              </div>
            </div>
          </div>
        </Link>
      </div>
      <div className="row justify-content-center">
        <Link className="links-default" to="/decoracao">
          <div className="col-md">
            <div className="card_section text-center">
              <img src={decoracao} className="card-img" alt="..." />
              <div className="card-body">
                <h5 className="card-title">DECORAÇÃO</h5>
              </div>
            </div>
          </div>
        </Link>
        <Link className="links-default" to="/banheiro">
          <div className="col-md">
            <div className="card_section text-center">
              <img src={banheiro} className="card-img" alt="..." />
              <div className="card-body">
                <h5 className="card-title">BANHEIRO</h5>
              </div>
            </div>
          </div>
        </Link>
      </div>
    </div>
  )
}
