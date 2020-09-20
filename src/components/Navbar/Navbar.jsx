import React from "react"
import "../Navbar/Navbar.scss"
import { Link } from "gatsby"



export default function Nav() {
  
  return (
    <>
      <nav className="navbar fixed-top">
        <div className="logo">
          <Link to="/">
            <b>G.A.M</b> MARCENARIA
          </Link>
        </div>
        <div className="push-left">
          <button id="menu-toggler" data-class="menu-active" className="hamburger">
            <span className="hamburger-line hamburger-line-top"></span>
            <span className="hamburger-line hamburger-line-middle"></span>
            <span className="hamburger-line hamburger-line-bottom"></span>
          </button>

          <ul id="primary-menu" className="menu nav-menu">
          <div className="dropdown">
              <Link to="#" >Portfólio</Link>
              <div className="dropdown-content">
              <li>
                  <Link to="/sala" className="sub-nav__link">
                    Sala de estar
                  </Link>
                </li>
                <li>
                  <Link to="/banheiro" className="sub-nav__link">
                    Banheiro
                  </Link>
                </li>
                <li>
                  <Link to="/cozinha" className="sub-nav__link">
                    Cozinha
                  </Link>
                </li>
                <li>
                  <Link to="/decoracao" className="sub-nav__link">
                    Decoração
                  </Link>
                </li>
                <li>
                  <Link to="/dormitorio" className="sub-nav__link">
                    Dormitório
                  </Link>
                </li>
                <li>
                  <Link to="/escritorio" className="sub-nav__link">
                    Escritório
                  </Link>
                </li>
              </div>
            </div>
            
            <li className="menu-item current-menu-item">
              <Link to="/contato" className="nav__link">
                Contato
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    </>
  )
}
