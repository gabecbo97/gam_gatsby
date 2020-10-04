import React from "react";
import Layout from "../../components/Layout/Default";
import SEO from "../../components/seo"
import "../contato/contato.scss";

export default function Contato() {
  return (
    <Layout>
      <SEO title="Contato"/>
      <div className="col-md text-center mb-5">
        <p className="text-center">
          <img src="" alt="" width="50" />
        </p>
        <h2>SOLICITE UM ORÇAMENTO</h2>
        <p>Sem compromisso e gratuito</p>
      </div>
      <div className="container content mb-5">
      <form name="Orcamento de Marcenaria" method="POST" data-netlify="true">
          <div className="form-group">
            <div className="row">
              <div className="col">
                <input
                  type="name"
                  placeholder="Nome"
                  className="form-control"
                  id="Nome"
                />
              </div>
              <div className="col">
                <input
                  type="email"
                  placeholder="E-mail"
                  className="form-control"
                  name="email"
                  id="E-mail"
                />
              </div>
            </div>
          </div>
          <div className="form-group">
            <input
              type="fone"
              placeholder="Telefone (xx)x xxxx-xxxx"
              className="form-control"
              id="fone"
              name="fone"
            />
          </div>
          <div className="form-group">
            <textarea
              name="message"
              className="form-control"
              id="exampleFormControlTextarea1"
              rows="10"
              placeholder="Qual o seu Projeto?"
            ></textarea>
            
          </div>
          <p className="text-center">
            <button type="submit" class="btn btn-form">
              Solicitar
            </button>
          </p>
        </form>
      </div>
    </Layout>
  );
}
