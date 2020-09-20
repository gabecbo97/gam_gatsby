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
    <div className="container-fluid section mb-5" style={{ width: "80%" }}>
      <div className="row">
        <Link className="links-default" to="/sala">
          <div className="col-md">
            <div className="card_section text-center">
              <img src={sala} class="card-img img-fluid" alt="..." />
              <div className="card-body">
                <h5 class="card-title">SALA DE ESTAR</h5>
              </div>
            </div>
          </div>
        </Link>

        <Link className="links-default" to="/cozinha">
          <div className="col-md">
            <div className="card_section text-center">
              <img src={cozinha} class="card-img" alt="..." />
              <div className="card-body">
                <h5 class="card-title">COZINHA</h5>
              </div>
            </div>
          </div>
        </Link>
      </div>
      <div className="row">
        <Link className="links-default" to="/dormitorio">
          <div className="col-md">
            <div className="card_section text-center">
              <img src={dormitorio} class="card-img" alt="..." />
              <div className="card-body">
                <h5 class="card-title">DORMITÓRIO</h5>
              </div>
            </div>
          </div>
        </Link>
        <Link className="links-default" to="/escritorio">
          <div className="col-md">
            <div className="card_section text-center">
              <img src={escritorio} class="card-img" alt="..." />
              <div className="card-body">
                <h5 class="card-title">ESCRITÓRIO</h5>
              </div>
            </div>
          </div>
        </Link>
      </div>
      <div className="row">
        <Link className="links-default" to="/decoracao">
          <div className="col-md">
            <div className="card_section text-center">
              <img src={decoracao} class="card-img" alt="..." />
              <div className="card-body">
                <h5 class="card-title">DECORAÇÃO</h5>
              </div>
            </div>
          </div>
        </Link>
        <Link className="links-default" to="/banheiro">
          <div className="col-md">
            <div className="card_section text-center">
              <img src={banheiro} class="card-img" alt="..." />
              <div className="card-body">
                <h5 class="card-title">BANHEIRO</h5>
              </div>
            </div>
          </div>
        </Link>
      </div>
    </div>
  )
}
