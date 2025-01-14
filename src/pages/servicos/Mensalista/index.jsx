import React from "react";
import "./styles.css";
import contract from "../../../../public/images/contract.gif";

function mensalista() {
  return (
    <>
      <div className="titleText-banner">
        <div>
          <h3 className="subtitle-banner" style={{ fontSize: '3rem' }}>
            GOSTARIA DE SER UM CLIENTE MENSALISTA?
          </h3>
          <h4 className="subtitle-banner" style={{ fontSize: '1.5rem', fontWeight: '400', color: '#1b2838' }}>
            SERVIÇOS EXCLUSIVOS E ATENDIMENTO ESPECIALIZADO
          </h4>
        </div>
        <div>
          <button>
            Entre em contato
          </button>
        </div>
      </div>
      <section className="section-mensalist-content">
        <div>
          <span className="fa-regular fa-circle-check" />
          <h3>Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum qui sunt</h3>
          <span className="fa-regular fa-circle-check" />
          <h3>Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum qui sunt</h3>
          <span className="fa-regular fa-circle-check" />
          <h3>Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum qui sunt</h3>
        </div>
        <div>
          <img src={contract} alt="deal-business" />
        </div>
      </section>
    </>
  );
}

export default mensalista;
