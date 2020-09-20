import React from "react"
import "../Nav/Nav.scss"
import { Link } from "gatsby"

export default function Nav() {
  return (
    <div>
      <nav className="navbar navbar-expand-md fixed-top">
        <Link className="navbar-brand" to="/">
          <p>
            <strong>G.A.M </strong> MARCENARIA
          </p>
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span>
            <img src="" alt="" width="35px" />
          </span>
        </button>

        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav">
            <li className="nav-item dropdown">
              <div class="dropdown">
                <span className="nav-link">Protfólio</span>
                <div class="dropdown-content">
                  <Link to="/sala" className="dropdown-item" href="#">
                    Sala de estar
                  </Link>
                  <Link to="/banheiro" className="dropdown-item" href="#">
                    Banheiro
                  </Link>
                  <Link to="/cozinha" className="dropdown-item" href="#">
                    Cozinha
                  </Link>
                  <Link to="/decoracao" className="dropdown-item" href="#">
                    Decoração
                  </Link>
                  <Link to="/dormitorio" className="dropdown-item" href="#">
                    Dormitório
                  </Link>
                  <Link to="/escritorio" className="dropdown-item" href="#">
                    Escritório
                  </Link>
                </div>
              </div>

              <div
                className="dropdown-menu"
                aria-labelledby="navbarDropdown"
              ></div>
            </li>
            <li className="nav-item active">
              <Link className="nav-link" to="/contato">
                Contato <span className="sr-only"></span>
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  )
}
