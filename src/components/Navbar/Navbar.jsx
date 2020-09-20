import React from "react"
import "../Navbar/Navbar.scss"
import { Link } from "gatsby"
import icon from "../../assets/icons/menu.svg"
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
      <nav class="navbar fixed-top">
        <div class="logo">
          <Link to="/">
            <b>G.A.M</b> MARCENARIA
          </Link>
        </div>
        <div class="push-left">
          <button id="menu-toggler" data-class="menu-active" class="hamburger">
            <span class="hamburger-line hamburger-line-top"></span>
            <span class="hamburger-line hamburger-line-middle"></span>
            <span class="hamburger-line hamburger-line-bottom"></span>
          </button>

          <ul id="primary-menu" class="menu nav-menu">
            <li class="menu-item dropdown">
              <a class="nav__link" href="#">
                PORTFÓLIO
              </a>
              <ul class="sub-nav">
                <li>
                  <Link to="/sala" class="sub-nav__link" href="#">
                    Sala de estar
                  </Link>
                </li>
                <li>
                  <Link to="/banheiro" class="sub-nav__link" href="#">
                    Banheiro
                  </Link>
                </li>
                <li>
                  <Link to="/cozinha" class="sub-nav__link" href="#">
                    Cozinha
                  </Link>
                </li>
                <li>
                  <Link to="/decoracao" class="sub-nav__link" href="#">
                    Decoração
                  </Link>
                </li>
                <li>
                  <Link to="/dormitorio" class="sub-nav__link" href="#">
                    Dormitório
                  </Link>
                </li>
                <li>
                  <Link to="/escritorio" class="sub-nav__link" href="#">
                    Escritório
                  </Link>
                </li>
              </ul>
            </li>
            <li class="menu-item current-menu-item">
              <Link to="/contato" class="nav__link" href="#">
                Contato
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    </>
  )
}
