import React from "react"
import "../Footer/Footer.scss"
import facebook from "../../assets/icons/facebook.svg"
import instagram from "../../assets/icons/instagram.svg"

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container ">
        <div className="col-md">
          <a target="_blank" rel="noreferrer"  href="https://www.facebook.com/geraldoartemoveis">
            <img src={facebook} alt="" />
          </a>

          <a target="_blank" rel="noreferrer"  href="https://www.instagram.com/gammarcenaria/">
            <img src={instagram} alt="" />
          </a>
          <br />

          <p>&copy; G.A.M 2023</p>
        </div>
      </div>
    </footer>
  )
}
