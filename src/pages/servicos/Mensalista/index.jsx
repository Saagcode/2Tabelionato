import React from "react";
import "./styles.css";
import contract from "../../../../public/images/contract.gif";
import Marquee from "react-fast-marquee";

function Mensalista() {
  return (
    <>
      <div className="titleText-banner">
        <div>
          <h3 className="subtitle-banner" style={{ fontSize: "3rem" }}>
            GOSTARIA DE SER UM CLIENTE MENSALISTA?
          </h3>
          <h4
            className="subtitle-banner"
            style={{ fontSize: "1.5rem", fontWeight: "400", color: "#1b2838" }}
          >
            SERVIÇOS EXCLUSIVOS E ATENDIMENTO ESPECIALIZADO
          </h4>
        </div>
        <div>
          <button>Entre em contato</button>
        </div>
      </div>
      <section className="section-mensalist-content">
        <div>
          <span className="fa-regular fa-circle-check" />
          <h3>ATENDIMENTO PERSONALIZADO</h3>
          <span className="fa-regular fa-circle-check" />
          <h3>EXTRATO MENSAL DOS SERVIÇOS REALIZADOS;</h3>
          <span className="fa-regular fa-circle-check" />
          <h3>ATÉ 30 DIAS PARA PAGAMENTO.</h3>
        </div>
        <div>
          <img src={contract} alt="deal-business" />
        </div>
      </section>
      <div className="img-container">
        <div className="marquee">
          <h3
            style={{
              color: "rgb(95, 68, 18)",
              margin: "20px 100px",
              width: "25%",
              fontSize: "2rem",
              textAlign: "left",
            }}
          >
            SERVIÇOS DISPONIVEIS PARA O MENSALISTA
          </h3>
          <Marquee autoFill="boolean" pauseOnHover="boolean" speed="70">
            <ul>
              <li>ABERTURA DE FIRMA</li>
            </ul>
            <ul>
              <li>APOSTILAMENTO</li>
            </ul>
            <ul>
              <li>ATA NOTARIAL</li>
            </ul>
            <ul>
              <li>AUTENTICAÇÃO DE CÓPIA</li>
            </ul>
            <ul>
              <li>MATERIALIZAÇÃO DE DOCUMENTOS</li>
            </ul>
            <ul>
              <li>PROCURAÇÃO E SUBSTABELECIMENTO</li>
            </ul>
            <ul>
              <li>RECONHECIMENTO DE FIRMA</li>
            </ul>
            <ul>
              <li>RECONHECIMENTO DE SINAL PÚBLICO</li>
            </ul>
            <ul>
              <li>REVOGAÇÃO DE PROCURAÇÃO</li>
            </ul>
          </Marquee>
        </div>
      </div>
    </>
  );
}

export default Mensalista;
