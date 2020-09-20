import React from "react";
import "../Help/Help.scss";
import {Link}  from "gatsby"


export default function Help() {
  return (
    <div className="container-fluid help-content">
      <div className="col-md  text-center text-white">
          <br/>
          <br/>
          <br/>
        <h2 className="help-body">Como podemos ajudar ?</h2>
        <p className="help-descripton">Peça seu orçamento gratís sem compromisso</p>
        <div class="row help">
          <a href="https://api.whatsapp.com/send?phone=551159217548"><button className="btn-help text-center a">WhatsApp</button></a>
          <Link to="/contato"><button className="btn-help text-center b" >Quero um orçamento</button></Link>
          
        </div>
      </div>
    </div>
  );
}
