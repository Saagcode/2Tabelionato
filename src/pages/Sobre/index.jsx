import Footer from "../../Components/Footer";
import Head from "../../Components/Head";
import "./styles.css";
import salaReconhecimento from "../../../public/images/salaReconhecimento.jpg";
import salaEscrituras from "../../../public/images/salaEscrituras.jpg";
import faixadaAboutusInterna from "../../../public/images/faixadaAboutusInterna.jpg";
import salaReuniao from "../../../public/images/salaReuniao.jpg";
import faixadaAboutUs from "../../../public/images/faixadaAboutUs.jpg";
import equipe from "../../../public/images/equipe.jpg";
import Karine from "../../../public/images/Karine.jpg";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import { useState, useEffect } from "react";

function Sobre() {
  const [arrow, setArrow] = useState(false);
  function handleGoUpArrow() {
    const scrollY = window.scrollY;
    if (scrollY > 100) {
      setArrow(true);
    } else {
      setArrow(false);
    }
  }
  useEffect(() => {
    window.addEventListener("scroll", handleGoUpArrow);

    return () => {
      window.removeEventListener("scroll", handleGoUpArrow);
    };
  }, []);
  function handleScrollWindow() {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }
  useEffect(() => {
    handleScrollWindow();
  }, []);
  return (
    <>
      <Head />
      {arrow && (
        <span
          className="fa-regular fa-square-caret-up"
          onClick={() =>
            window.scrollTo({
              top: 0,
              behavior: "smooth",
            })
          }
        />
      )}
      <div className="container-top-img-about">
        <div className="body-servicos">
          <div>
            <h3>SOBRE NÓS</h3>
          </div>
        </div>
      </div>
      <section className="container-Timeline">
        <h3 style={{ color: "#000", width: "50%" }}>
          Com 335 anos de história, o 1º Tabelionato de Notas possui uma equipe
          de profissionais altamente qualificada para a realização de atos
          notariais, uma estrutura inovadora e localização privilegiada no
          Centro político-administrativo de Curitiba. Faça-nos uma visita e
          conheça um novo conceito de Cartório!
        </h3>
        <h3 style={{ color: "#000", width: "50%" }}>
          Notas tem como titular Fernanda Granja Cavalcante da Costa, Tabeliã
          que entrou em exercício em decorrência de aprovação no Concurso
          Público para Outorga de Delegações de Nota e de Registro do Estado do
          Paraná (Edital n.01/2014).
        </h3>
        <h3 style={{ color: "#000", width: "50%" }}>
          Fernanda Granja Cavalcante da Costa é Atualmente, o 1º Tabelionato de
          graduada em direito pela Universidade Federal do Amazonas,
          pós-graduada em Direito Constitucional e em Ciências Criminais. Antes
          de assumir essa função, a Tabeliã já atuou como agente administrativa
          no Ministério Público do Estado Amazonas, Delegada de Polícia do
          Estado do Amazonas e Professora Universitária em vários cursos de
          graduação da Universidade Federal do Amazonas. Atualmente, a Tabeliã é
          aluna do programa de Mestrado em Direito na Universidade de Marília –
          UNIMAR.
        </h3>
        <h1>O 2º TABELIONATO DE NOTAS DE SÃO BENTO DO SUL</h1>
        <VerticalTimeline lineColor={"#cecece7b"}>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            contentStyle={{
              background: "#1b2838",
              color: "#fff",
              padding: "25px",
              borderRadius: "8px",
              boxShadow: "0 0 5px 3px rgba(0, 0, 0, 0.4)",
            }}
            contentArrowStyle={{ borderRight: "7px solid  #1b2838" }}
            date="1983 - 2025"
            iconStyle={{ background: "#1b2838", color: "#fff" }}
            dateClassName="text-date"
          >
            <h3 className="vertical-timeline-element-title">A Tabeliã</h3>
            <div className="container-txt">
              <h4 className="vertical-timeline-element-subtitle">
                Karine Stier Vieira, natural de Joinville/SC
              </h4>
              <h4 className="vertical-timeline-element-subtitle">
                Experiencia profissional aqui
              </h4>
              <h4 className="vertical-timeline-element-subtitle">
                Experiencia profissional aqui
              </h4>
              <img className="img-styles" src={Karine} alt="Tabelia" />
            </div>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            date="Agosto 2024"
            contentStyle={{
              background: "#1b2838",
              color: "#fff",
              padding: "25px",
              borderRadius: "8px",
              boxShadow: "0 0 5px 3px rgba(0, 0, 0, 0.4)",
            }}
            contentArrowStyle={{ borderRight: "7px solid  #1b2838" }}
            iconStyle={{ background: "#1b2838", color: "#fff" }}
            dateClassName="text-date"
          >
            <h3 className="vertical-timeline-element-title">História</h3>
            <div className="container-txt">
              <h4 className="vertical-timeline-element-subtitle">
                O 2° Tabelionato de São Bento do Sul foi instaurado pela Tabeliã
                Karine Stier Vieira no ano de 2024
              </h4>
              <img
                className="img-styles"
                src={faixadaAboutusInterna}
                alt="Entrada Cartorio"
              />
            </div>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            date="2024 - Atualmente"
            contentStyle={{
              background: "#1b2838",
              color: "#fff",
              padding: "25px",
              borderRadius: "8px",
              boxShadow: "0 0 5px 3px rgba(0, 0, 0, 0.4)",
            }}
            contentArrowStyle={{ borderRight: "7px solid  #1b2838" }}
            iconStyle={{ background: "#1b2838", color: "#fff" }}
            dateClassName="text-date"
          >
            <h3 className="vertical-timeline-element-title">Local</h3>
            <div className="container-txt">
              <h4 className="vertical-timeline-element-subtitle">
                Estamos no ZippererPark, 2° piso, sala 28
              </h4>
              <h4 className="vertical-timeline-element-subtitle">
                Centro de São Bento do Sul
              </h4>
              <img
                className="img-styles"
                src={faixadaAboutUs}
                alt="Faixada externa"
              />
            </div>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            date="Setembro 2024"
            dateClassName="text-date"
            contentStyle={{
              background: "#1b2838",
              color: "#fff",
              padding: "25px",
              borderRadius: "8px",
              boxShadow: "0 0 5px 3px rgba(0, 0, 0, 0.4)",
            }}
            contentArrowStyle={{ borderRight: "7px solid  #1b2838" }}
            iconStyle={{ background: "#1b2838", color: "#fff" }}
          >
            <h3 className="vertical-timeline-element-title">Nosso ambiente</h3>
            <div className="container-txt">
              <h4 className="vertical-timeline-element-subtitle">Setor</h4>
              <h4 className="vertical-timeline-element-subtitle">
                Reconhecimento | Autenticacao
              </h4>
              <img
                className="img-styles"
                src={salaReconhecimento}
                alt="setor Reconhecimento"
              />
            </div>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            className="vertical-timeline-element--education"
            date="Outubro 2024"
            dateClassName="text-date"
            contentStyle={{
              background: "rgb(112, 76, 10)",
              color: "#fff",
              padding: "25px",
              borderRadius: "8px",
              boxShadow: "0 0 5px 3px rgba(0, 0, 0, 0.4)",
            }}
            contentArrowStyle={{ borderRight: "7px solid  rgb(112, 76, 10)" }}
            iconStyle={{ background: "rgb(112, 76, 10)", color: "#fff" }}
          >
            <h3 className="vertical-timeline-element-title">Nosso ambiente</h3>
            <div className="container-txt">
              <h4 className="vertical-timeline-element-subtitle">Setor</h4>
              <h4 className="vertical-timeline-element-subtitle">
                Escrituras | Ata Notarial
              </h4>
              <img
                className="img-styles"
                src={salaEscrituras}
                alt="setor Escrituras"
              />
            </div>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            className="vertical-timeline-element--education"
            date="Dezembro 2024"
            dateClassName="text-date"
            contentStyle={{
              background: "rgb(112, 76, 10)",
              color: "#fff",
              padding: "25px",
              borderRadius: "8px",
              boxShadow: "0 0 5px 3px rgba(0, 0, 0, 0.4)",
            }}
            contentArrowStyle={{ borderRight: "7px solid  rgb(112, 76, 10)" }}
            iconStyle={{ background: "rgb(112, 76, 10)", color: "#fff" }}
          >
            <h3 className="vertical-timeline-element-title">Nossa Estrutura</h3>
            <div className="container-txt">
              <h4 className="vertical-timeline-element-subtitle">
                Estacionamento privativo
              </h4>
              <h4 className="vertical-timeline-element-subtitle">
                Localizado na região central da cidade
              </h4>
              <h4 className="vertical-timeline-element-subtitle">
                Ambientes climatizados e salas de reuniao
              </h4>
              <img
                className="img-styles"
                src={salaReuniao}
                alt="Salas Reuniao"
              />
            </div>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            className="vertical-timeline-element--education"
            date="Janeiro 2025"
            dateClassName="text-date"
            contentStyle={{
              background: "rgb(112, 76, 10)",
              color: "#fff",
              padding: "25px",
              borderRadius: "8px",
              boxShadow: "0 0 5px 3px rgba(0, 0, 0, 0.4)",
            }}
            contentArrowStyle={{ borderRight: "7px solid  rgb(112, 76, 10)" }}
            iconStyle={{ background: "rgb(112, 76, 10)", color: "#fff" }}
          >
            <h3 className="vertical-timeline-element-title">Nossa Equipe</h3>
            <div className="container-txt">
              <h4 className="vertical-timeline-element-subtitle">
                Profissionais capacitados
              </h4>
              <h4 className="vertical-timeline-element-subtitle">
                Carisma e Excelência para suprir da melhor forma qualquer
                demanda
              </h4>
              <img className="img-styles" src={equipe} alt="colaboradores" />
            </div>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            iconStyle={{ background: "rgb(112, 76, 10)", color: "#fff" }}
          />
        </VerticalTimeline>
      </section>
      <Footer />
    </>
  );
}

export default Sobre;
