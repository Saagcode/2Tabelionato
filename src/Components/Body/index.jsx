import "./styles.css";
import "aos/dist/aos.css";
import Aos from "aos";
import { useState, useEffect } from "react";
import visa from "../../../public/images/visa.png";
import mastercard from "../../../public/images/mastercard.png";
import elo from "../../../public/images/elo.png";
import { GoogleMap, Marker, useJsApiLoader } from "@react-google-maps/api";
import ServicesHomePage from "./ServicesHomePage";
import "../../media-queries/Body/media-queries.css";
import Formulariocontato from "../formularioContato";

function Body() {
  function handleScrollWindow() {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }
  useEffect(() => {
    handleScrollWindow();
  }, []);

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

    // Remove o evento de scroll ao desmontar o componente
    return () => {
      window.removeEventListener("scroll", handleGoUpArrow);
    };
  }, []);

  function handleTalkUsScroll() {
    window.scrollTo({
      top: 4910,
      behavior: "smooth",
    });
  }

  function handleServicesScroll() {
    window.scrollTo({
      top: 3480,
      behavior: "smooth",
    });
  }

  const { isLoaded } = useJsApiLoader({
    id: "google-map-script",
    googleMapsApiKey: "AIzaSyDbe3U8LjGCVmad9QaUGQ6WH1ExIETI6l0",
  });

  const position = {
    lat: -26.24872156019826,
    lng: -49.379985427957706,
  };

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
        <section className="body" onScroll={handleGoUpArrow}>
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
            <button className="btn-service" onClick={handleServicesScroll}>
              NOSSOS SERVIÇOS
            </button>
            <button className="btn-talkUs" onClick={handleTalkUsScroll}>
              FALE CONOSCO
            </button>
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
        <div className="container_button_knowmore">
          <button className="btn-service-bottom" onClick={handleOpenMenu}>
            SAIBA MAIS
          </button>
        </div>
        <div className="container_button_bottom">
          {openMenu ? (
            <>
              <button
                className="btn-service-bottom"
                data-aos="zoom-in-down"
                data-aos-easing="linear"
                data-aos-duration="500"
              >
                ESTRUTURA
              </button>
              <button
                className="btn-talkUs-bottom"
                data-aos="zoom-in-down"
                data-aos-easing="linear"
                data-aos-duration="500"
              >
                HISTORIA
              </button>
            </>
          ) : (
            <></>
          )}
        </div>
      </div>
      <div className="sbsimg">
        <div className="body-sbsimg">
          <h2
            style={{
              fontWeight: "900",
              fontSize: "4rem",
              lineHeight: "0.5rem",
            }}
            data-aos="fade-in"
            data-aos-duration="2500"
          >
            LOCALIZADO NO CENTRO
          </h2>
          <div
            className="container-parkingSubtitle"
            data-aos="fade-in"
            data-aos-duration="1500"
          >
            <span className="fa-solid fa-square-parking" />
            <h1 className="parkingSubtitle">
              ESTACIONAMENTO PRIVATIVO E GRATUITO
            </h1>
          </div>
          <h3
            style={{ fontWeight: "900", fontSize: "2rem", lineHeight: "1rem" }}
            data-aos="fade-in"
            data-aos-duration="1500"
          >
            Anexo ao Zipperer Park (valide seu ticket na saida)
          </h3>
        </div>
      </div>
      <ServicesHomePage />
      <div className="backdrop-services">
        <section className="body-services">
          <div className="container-cards">
            <img src={visa} alt="visa" />
            <img src={mastercard} alt="mastercard" />
            <img src={elo} alt="elo" />
          </div>
          <div className="background-mainText">
            <h3>Aceitamos pagamentos em cartão de crédito, débito e pix!</h3>
          </div>
        </section>
      </div>
      {/* Rodape e Fale conosco */}
      <Formulariocontato />
      <div className="container-location">
        <div
          style={{
            display: `flex`,
            justifyContent: `center`,
            alignItems: `center`,
            padding: `0 0 10px 0`,
          }}
        >
          <span className="fa-solid fa-map-location-dot" />
          <h3
            style={{
              width: "100%",
              margin: "0, auto",
              textAlign: "left",
              fontSize: "1rem",
              color: "black",
              paddingLeft: "40px",
              fontSize: "2rem",
            }}
          >
            Rua Barão do Rio Branco, n.º 197 - sala 28, Zipperer Park (Shopping)
            2° piso - Centro.
          </h3>
        </div>
        {isLoaded ? (
          <GoogleMap
            mapContainerStyle={{
              width: "100%",
              height: `50vh`,
              margin: "0 0 80px 0",
              borderRadius: `10px`,
              border: `2px solid #cecece7b`,
              boxShadow: `0px 5px 15px 1px rgba(0, 0, 0, 0.5)`,
            }}
            center={position}
            zoom={15}
          >
            <Marker position={position} />
          </GoogleMap>
        ) : (
          <></>
        )}
      </div>
    </>
  );
}

export default Body;
