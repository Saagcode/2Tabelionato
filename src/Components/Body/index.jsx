import "./styles.css";
import "aos/dist/aos.css";
import Aos from "aos";
import { useState } from "react";
import visa from "../../../public/images/visa.png";
import mastercard from "../../../public/images/mastercard.png";
import elo from "../../../public/images/elo.png";

function Body() {
  const [turnSide, setTurnSide] = useState({
    missao: false,
    visao: false,
    valores: false,
  });
  function handleTurnSide(item) {
    setTurnSide((prevState) => ({
      ...prevState,
      [item]: !prevState[item],
    }));
  }
  const [openMenu, setOpenMenu] = useState();
  function handleOpenMenu() {
    setOpenMenu(!openMenu);
  }
  Aos.init();
  return (
    <>
      <div className="backdrop">
        <section className="body">
          <h3 data-aos="fade-up" data-aos-duration="2000">
            SEJA BEM VINDO AO
          </h3>
          <h2
            data-aos="fade-zoom-in"
            data-aos-duration="1500"
            data-aos-easing="ease-in-back"
          >
            2° TABELIONATO DE NOTAS
          </h2>
          <h1 data-aos="fade-up" data-aos-duration="2000">
            DE SÃO BENTO DO SUL
          </h1>
          <div className="container_button">
            <button className="btn-service">NOSSOS SERVIÇOS</button>
            <button className="btn-talkUs">FALE CONOSCO</button>
          </div>
          <div className="timeInfo">
            <span
              className="fa-regular fa-clock"
              style={{ fontSize: "2.5rem", padding: " 0 10px" }}
            />
            <h4 style={{ fontSize: "1.2rem" }}>Horários de funcionamento</h4>
            <div
              className="border_1"
              style={{ width: "25%", backgroundColor: "white" }}
            />
            <h3>SEG - SEX</h3>
            <h3>09:00h - 18:00h</h3>
          </div>
        </section>
      </div>
      <div className="bodyAboutUs">
        <div className="title-container">
          <h2>O 2° TABELIONATO DE NOTAS</h2>
        </div>
        <div className="border"></div>
        <h3>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil, minus
          vitae nam velit sed nesciunt qui cupiditate culpa eum sunt soluta
          delectus doloremque beatae in recusandae? Ex sunt vitae quia.
        </h3>
        <section className="subtitle-container">
          <div
            onMouseEnter={() => handleTurnSide("missao")}
            onMouseLeave={() => handleTurnSide("missao")}
          >
            {turnSide.missao ? (
              <>
                <div className="subtitle-container-content">
                  <span className="fa-solid fa-rocket" />
                  <div className="text-block">
                    <h3
                      style={{
                        width: "60%",
                        fontSize: "0.7rem",
                        padding: "0px",
                        margin: "23px auto",
                      }}
                    >
                      Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                      Fugiat rem voluptatem error aut animi laboriosam
                      blanditiis unde corporis! Ullam natus vero rerum ad
                      reiciendis aliquid, accusamus iure id voluptate quibusdam!
                    </h3>
                  </div>
                </div>
              </>
            ) : (
              <>
                <div className="subtitle-container-content">
                  <span className="fa-solid fa-rocket" />
                  <h3>MISSÃO</h3>
                </div>
              </>
            )}
          </div>
          <div
            onMouseEnter={() => handleTurnSide("visao")}
            onMouseLeave={() => handleTurnSide("visao")}
          >
            {turnSide.visao ? (
              <>
                <div className="subtitle-container-content">
                  <span className="fa-solid fa-lightbulb" />
                  <div className="text-block">
                    <h3
                      style={{
                        width: "60%",
                        fontSize: "0.7rem",
                        padding: "0px",
                        margin: "23px auto",
                      }}
                    >
                      Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                      Fugiat rem voluptatem error aut animi laboriosam
                      blanditiis unde corporis! Ullam natus vero rerum ad
                      reiciendis aliquid, accusamus iure id voluptate quibusdam!
                    </h3>
                  </div>
                </div>
              </>
            ) : (
              <>
                <div className="subtitle-container-content">
                  <span className="fa-solid fa-lightbulb" />
                  <h3>VISÃO</h3>
                </div>
              </>
            )}
          </div>
          <div
            onMouseEnter={() => handleTurnSide("valores")}
            onMouseLeave={() => handleTurnSide("valores")}
          >
            {turnSide.valores ? (
              <>
                <div className="subtitle-container-content">
                  <span className="fa-solid fa-star" />
                  <div className="text-block">
                    <h3
                      style={{
                        width: "60%",
                        fontSize: "0.7rem",
                        padding: "0px",
                        margin: "23px auto",
                      }}
                    >
                      Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                      Fugiat rem voluptatem error aut animi laboriosam
                      blanditiis unde corporis! Ullam natus vero rerum ad
                      reiciendis aliquid, accusamus iure id voluptate quibusdam!
                    </h3>
                  </div>
                </div>
              </>
            ) : (
              <>
                <div className="subtitle-container-content">
                  <span className="fa-solid fa-star" />
                  <h3>VALORES</h3>
                </div>
              </>
            )}
          </div>
        </section>
        <div className="container_button_bottom">
          <button className="btn-service-bottom" onClick={handleOpenMenu}>
            SAIBA MAIS
          </button>
          {openMenu ? (
            <>
              <button className="btn-service-bottom">ESTRUTURA</button>
              <button className="btn-talkUs-bottom">HISTORIA</button>
            </>
          ) : (
            <button style={{ opacity: "0%" }} onClick={handleOpenMenu}>
              SAIBA MAIS
            </button>
          )}
        </div>
      </div>
      <div className="backdrop-services">
        <section className="body-services">
          <div className="container-cards">
            <img src={visa} alt="visa" />
            <img src={mastercard} alt="mastercard" />
            <img src={elo} alt="elo" />
          </div>
          <h3>Aceitamos pagamentos em cartão de crédito, débito e pix!</h3>
          <span className="fa-brands fa-whatsapp" />
        </section>
      </div>
      <section className="body-service">
        <div></div>
      </section>
      <section className="body-talkus">
        <div className="title-container">
          <h2>FALE CONOSCO</h2>
          <div className="border" style={{ width: "9%" }} />
        </div>
        <div className="container-form-info">
          <div className="container-form">
            <form action="">
              <input type="text" placeholder="Nome" />
              <input type="text" placeholder="Email" />
              <input type="text" placeholder="Telefone" />
              <input type="text" placeholder="Assunto" />
              <textarea name="" id="" placeholder="Mensagem" rows="13" />
              <br />
            </form>
            <button>ENVIAR MENSAGEM</button>
          </div>
          <div className="container-location">
            <div>
              <span className="fa-solid fa-map-location-dot" />
            </div>
            <div>
              <h3
                style={{
                  width: "50%",
                  float: "left",
                  fontSize: "1rem",
                  color: "black",
                  paddingLeft: "40px",
                }}
              >
                Rua Barão do Rio Branco, n.º 197 - sala 2, Zipperer Park
                (Shopping) 2° piso - Centro. CEP 89280-355 / São Bento do Sul -
                Santa Catarina
              </h3>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Body;
