import React from "react"
import "../Nav/Nav.scss"
import { Link } from "gatsby"
import {
  Navbar,
  Nav,
  NavDropdown,
 
} from "react-bootstrap"

export default function () {
  return (
    <>
      <Navbar className="navbar fixed-top" expand="lg">
        <Link to="/">
          <Navbar.Brand className="logo">
            <b>G.A.M</b> MARCENARIA
          </Navbar.Brand>
        </Link>
        <Navbar.Toggle aria-controls="basic-navbar-nav" style={{backgroundColor:"gray"}} />
        <Navbar.Collapse
          id="basic-navbar-nav"
          style={{ justifyContent: "flex-end" }}
        >
          <Nav className="">
            <NavDropdown
              className="item-menu"
              title="PORTFÓLIO"
              id="basic-nav-dropdown"
            >
              <NavDropdown.Item >
                <Link className="item" to="/sala">
                  Sala de estar
                </Link>
              </NavDropdown.Item>
              <NavDropdown.Item >
                <Link className="item" to="/banheiro">
                  Banheiro
                </Link>
              </NavDropdown.Item>
              <NavDropdown.Item >
                <Link className="item" to="/cozinha">
                  Cozinha
                </Link>
              </NavDropdown.Item>
              <NavDropdown.Item >
                <Link className="item" to="/decoracao">
                  Decoração
                </Link>
              </NavDropdown.Item>
              <NavDropdown.Item >
                <Link className="item" to="/dormitorio">
                  Dormitório
                </Link>
              </NavDropdown.Item>
              <NavDropdown.Item >
                <Link className="item" to="/escritorio">
                  Escritório
                </Link>
              </NavDropdown.Item>
            </NavDropdown>
            <Nav.Link> 
              <Link className="item-menu" to="/contato">
                Contato
              </Link>
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </>
  )
}
