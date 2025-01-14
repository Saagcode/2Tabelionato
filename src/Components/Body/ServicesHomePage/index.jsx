import "./styles.css";
import { useState } from "react";
import "aos/dist/aos.css";
import Aos from "aos";
import mainDoor from "../../../../public/images/faixada-interna.png";
import { Link } from "react-router-dom";

function ServicesHomePage() {
  const [openMenu, setOpenMenu] = useState({
    menuCertidoes: false,
    menuEscritura: false,
    menuDigital: false,
  });
  function handleOpenMenu(index) {
    setOpenMenu((prevState) => ({
      ...prevState,
      [index]: !prevState[index],
    }));
  }
  Aos.init();
  return (
    <>
      <section className="container_ServicesHP">
        <div>
          <fieldset>
            <legend>
              <h3>Setor Administrativo</h3>
            </legend>
            <h4>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Architecto quidem adipisci ipsam quos impedit amet voluptatibus
              libero. Voluptate praesentium inventore aliquam itaque rerum.
              Fugit, veniam eveniet! Hic dicta molestias laudantium.
            </h4>
          </fieldset>
        </div>
        <div>
          <fieldset onClick={() => handleButton("escritura")}>
            <legend>
              <h3>Setor Escrituras</h3>
            </legend>
            <h4>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Architecto quidem adipisci ipsam quos impedit amet voluptatibus
              libero. Voluptate praesentium inventore aliquam itaque rerum.
              Fugit, veniam eveniet! Hic dicta molestias laudantium.
            </h4>
          </fieldset>
        </div>
        <div>
          <fieldset onClick={() => handleButton("executivo")}>
            <legend>
              <h3>Setor Executivo</h3>
            </legend>
            <h4>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Architecto quidem adipisci ipsam quos impedit amet voluptatibus
              libero. Voluptate praesentium inventore aliquam itaque rerum.
              Fugit, veniam eveniet! Hic dicta molestias laudantium.
            </h4>
          </fieldset>
        </div>
      </section>
      <h2 style={{ color: "#1b2838e8" }}>Nossos Serviços</h2>
      <div className="border-ServicesList"></div>
      <section className="container_ServicesList">
        <div className="background-side">
          <ul>
            <li
              className={openMenu.menuCertidoes ? "menu-changed" : "menu"}
              onClick={() => handleOpenMenu("menuCertidoes")}
            >
              <span className="fa-solid fa-certificate" /> Certidões
            </li>
            {openMenu.menuCertidoes ? (
              <>
                <Link
                  to={{
                    pathname: "/servicos",
                    search: "?section=certidaoEscritura",
                  }}
                  style={{ display: "flex", justifyContent: "right" }}
                >
                  <li
                    className="menu-options"
                    data-aos="fade-down"
                    data-aos-offset="-1000"
                  >
                    <span className="fa-solid fa-certificate" /> Certidão de
                    escritura
                  </li>
                </Link>
                <Link
                  to={{
                    pathname: "/servicos",
                    search: "?section=certidaoProcuracao",
                  }}
                  style={{ display: "flex", justifyContent: "right" }}
                >
                  <li
                    className="menu-options"
                    data-aos="fade-down"
                    data-aos-offset="-1000"
                  >
                    <span className="fa-solid fa-certificate" /> Certidão de
                    procuração
                  </li>
                </Link>
                <Link
                  to={{
                    pathname: "/servicos",
                    search: "?section=certidaoSubstabelecimento",
                  }}
                  style={{ display: "flex", justifyContent: "right" }}
                >
                  <li
                    className="menu-options"
                    data-aos="fade-down"
                    data-aos-offset="-1000"
                  >
                    <span className="fa-solid fa-certificate" /> Certidão de
                    substabelecimento
                  </li>
                </Link>
                <Link
                  to={{
                    pathname: "/servicos",
                    search: "?section=confirmacaoProcuracao",
                  }}
                  style={{ display: "flex", justifyContent: "right" }}
                >
                  <li
                    className="menu-options"
                    data-aos="fade-down"
                    data-aos-offset="-1000"
                  >
                    <span className="fa-solid fa-certificate" /> Confirmação de
                    procuração
                  </li>
                </Link>
              </>
            ) : (
              <></>
            )}
            <li
              className={openMenu.menuEscritura ? "menu-changed" : "menu"}
              onClick={() => handleOpenMenu("menuEscritura")}
            >
              <span className="fa-solid fa-file-contract" />
              Escrituras
            </li>
            {openMenu.menuEscritura ? (
              <>
                <Link
                  to={{
                    pathname: "/servicos",
                    search: "?section=escrituraCompraVenda",
                  }}
                  style={{ display: "flex", justifyContent: "right" }}
                >
                  <li
                    className="menu-options"
                    data-aos="fade-down"
                    data-aos-offset="-1000"
                  >
                    <span className="fa-solid fa-file-contract" /> Compra e
                    venda
                  </li>
                </Link>
                <li
                  className="menu-options"
                  data-aos="fade-down"
                  data-aos-offset="-1000"
                >
                  <span className="fa-solid fa-file-contract" /> Permuta
                </li>
                <li
                  className="menu-options"
                  data-aos="fade-down"
                  data-aos-offset="-1000"
                >
                  <span className="fa-solid fa-file-contract" /> União Estável |
                  Dissolução
                </li>
                <li
                  className="menu-options"
                  data-aos="fade-down"
                  data-aos-offset="-1000"
                >
                  <span className="fa-solid fa-file-contract" /> Estremação
                </li>
                <li
                  className="menu-options"
                  data-aos="fade-down"
                  data-aos-offset="-1000"
                >
                  <span className="fa-solid fa-file-contract" /> Extinção de
                  Condomínio
                </li>
                <li
                  className="menu-options"
                  data-aos="fade-down"
                  data-aos-offset="-1000"
                >
                  <span className="fa-solid fa-file-contract" /> Servidão de
                  passagem
                </li>
                <li
                  className="menu-options"
                  data-aos="fade-down"
                  data-aos-offset="-1000"
                >
                  <span className="fa-solid fa-file-contract" /> Divisão
                  amigável
                </li>
              </>
            ) : (
              <></>
            )}
            <Link
              to={{
                pathname: "/servicos",
                search: "?section=inventarioPartilha",
              }}
              style={{ display: "flex", justifyContent: "right" }}
            >
              <li className="menu_without_options">
                <span className="fa-solid fa-right-left" />
                Inventario e Partilha
              </li>
            </Link>
            <Link
              to={{
                pathname: "/servicos",
                search: "?section=ataNotarial",
              }}
              style={{ display: "flex", justifyContent: "right" }}
            >
              <li className="menu_without_options">
                <span className="fa-solid fa-copy" />
                Ata Notarial
              </li>
            </Link>
            <Link
              to={{
                pathname: "/servicos",
                search: "?section=divorcioExtrajudicial",
              }}
              style={{ display: "flex", justifyContent: "right" }}
            >
              <li className="menu_without_options">
                <span className="fa-solid fa-pen-clip" />
                Divorcio Extrajudicial
              </li>
            </Link>
            <Link
              to={{ pathname: "/servicos", search: "?section=apostilamento" }}
              style={{ display: "flex", justifyContent: "right" }}
            >
              <li className="menu_without_options">
                <span className="fa-solid fa-shield" />
                Apostilamento
              </li>
            </Link>
            <Link
              to={{ pathname: "/servicos", search: "?section=testamento" }}
              style={{ display: "flex", justifyContent: "right" }}
            >
              <li className="menu_without_options">
                <span className="fa-solid fa-book" />
                Testamento
              </li>
            </Link>
            <li
              className={openMenu.menuDigital ? "menu-changed" : "menu"}
              onClick={() => handleOpenMenu("menuDigital")}
            >
              <span className="fa-solid fa-lock" />
              Atos Digitais
            </li>
            {openMenu.menuDigital ? (
              <>
                <Link
                  onClick={() =>
                    window.open("https://cadastro.e-notariado.org.br/")
                  }
                  to={{
                    pathname: "/servicos",
                    search: "?section=atosDigitais",
                  }}
                  style={{ display: "flex", justifyContent: "right" }}
                >
                  <li
                    className="menu-options"
                    data-aos="fade-down"
                    data-aos-offset="-1000"
                  >
                    <span className="fa-solid fa-lock" /> Certificado digital
                  </li>
                </Link>
                <Link
                  onClick={() =>
                    window.open(
                      "https://www.e-notariado.org.br/notary/assinatura"
                    )
                  }
                  style={{ display: "flex", justifyContent: "right" }}
                  to={{
                    pathname: "/servicos",
                    search: "?section=atosDigitais",
                  }}
                >
                  <li
                    className="menu-options"
                    data-aos="fade-down"
                    data-aos-offset="-1000"
                  >
                    <span className="fa-solid fa-lock" /> Assinatura digital
                  </li>
                </Link>
                <Link
                  onClick={() =>
                    window.open("https://www.e-notariado.org.br/notary")
                  }
                  style={{ display: "flex", justifyContent: "right" }}
                  to={{
                    pathname: "/servicos",
                    search: "?section=atosDigitais",
                  }}
                >
                  <li
                    className="menu-options"
                    data-aos="fade-down"
                    data-aos-offset="-1000"
                  >
                    <span className="fa-solid fa-lock" /> Atos Eletrônicos
                  </li>
                </Link>
              </>
            ) : (
              <></>
            )}
            <Link
              to={{ pathname: "/servicos", search: "?section=procuracao" }}
              style={{ display: "flex", justifyContent: "right" }}
            >
              <li className="menu_without_options">
                <span className="fa-solid fa-file-signature" />
                Procuração
              </li>
            </Link>
            <Link
              to={{ pathname: "/servicos", search: "?section=aberturadefirma" }}
              style={{ display: "flex", justifyContent: "right" }}
            >
              <li className="menu_without_options">
                <span className="fa-solid fa-signature" />
                Reconhecimento de firma
              </li>
            </Link>
            <Link
              to={{
                pathname: "/servicos",
                search: "?section=autenticacao",
              }}
              style={{ display: "flex", justifyContent: "right" }}
            >
              <li className="menu_without_options">
                <span className="fa-solid fa-check-to-slot" />
                Autenticação de documentos
              </li>
            </Link>
          </ul>
          <img src={mainDoor} alt="faixada do cartorio" className="mainDoor" />
        </div>
      </section>
    </>
  );
}

export default ServicesHomePage;
