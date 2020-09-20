import React from "react";
import "../Cards/Cards.scss";
import caoa from "../../assets/icons/caoa.png"
import ballon from "../../assets/icons/redballon.png"
import fph from "../../assets/icons/fph.png"




export default function Cards() {
  return (
    <div className="container mb-5 company">
      <h2 className="text-center">CONHEÇA NOSSO TRABALHO</h2>
      <p className="text-center" style={{ fontSize: "25px", width: "auto" }}>
        A G.A.M atua no mercado de marcenaria no estado de São Paulo há 20 anos,
        projetando e desenvolvendo móveis planejados para todos os seguimentos
        de decoração, projetos supervisionados por arquitetos experientes no
        mercado. Com profissionais dedicados, experientes e auxilio desde o
        planejamento, á execução.
      </p>
      <div className="row">
        <div className="col-md">
          <div className="card-partner text-center">
            <img className="card-img-top img-fluid" src={caoa} alt="" />
            <div className="card-body">
              <h5 className="card-title">HYUNDAI - CAOA</h5>
              <p className="card-text mb-5 ">
                CAOA é a maior distribuidora de grander fabricantes automotivas
                do mundo, como a Ford e Hyundai..
              </p>
              <a href="https://caoa.com.br/" target="_blank" rel="noreferrer" className="btn btn-button ">
                SAIBA MAIS
              </a>
            </div>
          </div>
        </div>
        <div className="col-md">
          <div className="card-partner text-center">
            <img className="card-img-top img-fluid" src={ballon} alt="" />
            <div className="card-body">
              <h5 className="card-title">RED BALLON</h5>
              <p className="card-text mb-5">
                Red Balloon é parte do grupo SOMOS Educação e continua
                oferecendo o melhor inglês para crianças e adolescentes.
              </p>
              <a href="https://redballoon.com.br/" target="_blank" rel="noreferrer"  className="btn btn-button ">
                SAIBA MAIS
              </a>
            </div>
          </div>
        </div>
        <div className="col-md">
          <div className="card-partner text-center">
            <img className="card-img-top img-fluid" src={fph} alt="" />
            <div className="card-body">
              <h5 className="card-title">FEDERAÇÃO PAULISTA DE HIPISMO</h5>
              <p className="card-text mb-5">
                A FPH é responsável pela regulamentação, coordenação e fomento
                de 8 modalidades de Esportes Hípicos praticados no País.
              </p>
              <a href="http://www.fph.com.br" target="_blank" rel="noreferrer"  className="btn btn-button">
                SAIBA MAIS
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
