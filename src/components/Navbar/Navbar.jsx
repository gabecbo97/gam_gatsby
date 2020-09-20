import React from "react"
import "../Navbar/Navbar.scss"
import { Link } from "gatsby"

import $ from "jquery"

export default function Nav() {
  
  $(document).ready(function () {
    // Toggle menu on click
    $("#menu-toggler").click(function () {
      toggleBodyClass("menu-active")
    })

    function toggleBodyClass(className) {
      document.body.classList.toggle(className)
    }
  })
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
            <li className="menu-item dropdown">
              <Link to="/" className="nav__link">
                PORTFÓLIO
              </Link>
              <ul className="sub-nav">
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
              </ul>
            </li>
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
