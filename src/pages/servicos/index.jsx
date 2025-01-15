import { useState, useEffect } from "react";
import Footer from "../../Components/Footer";
import Head from "../../Components/Head";
import "./styles.css";
import "../../Components/Body/ServicesHomePage/styles.css";
import { Link, useLocation } from "react-router-dom";
import { textosDeAberturaFirma } from "./aberturaDeFirma/index";
import { textoApresentacao } from "./apresentacao";
import { textosDeApostilamento } from "./apostilamento";
import { textosDeCertidaoEscritura } from "./certidoes/certidaoDeEscritura/index";
import { textosDeCertidaoProcuracao } from "./certidoes/certidaoDeProcuracao";
import { textosDeCertidaoSubstabelecimento } from "./certidoes/certidaoDeSubstabelecimento";
import { textosDeConfirmacaoProcuracao } from "./certidoes/confirmacaoDeProcuracao";
import { textosDeDivorcio } from "./divorcio";
import { textosDeInventarioPartilha } from "./inventarioPartilha";
import { textosDeAtaNotarial } from "./ataNotarial";
import { textosDeTestamento } from "./testamento";
import { textosDeProcuracao } from "./procuracao";
import { textosDeAutenticacao } from "./autenticacaoDeDocumentos";
import { textoAtosDigitais } from "./atosDigitais";
import { textosDeEscrituraCompraVenda } from "./escrituras/compraVenda";
import Mensalista from "./mensalista";

function servicos() {
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

  const location = useLocation();
  function handleTypeActionFromUrl() {
    const queryParams = new URLSearchParams(location.search);
    const section = queryParams.get("section");

    // Atualiza o estado de acordo com o parâmetro 'aba' da URL
    if (section === "aberturadefirma") {
      setAction({ abertura: true });
    } else if (section === "apostilamento") {
      setAction({ apostilamento: true });
    } else if (section === "certidaoEscritura") {
      setAction({ certidaoEscritura: true });
    } else if (section === "certidaoProcuracao") {
      setAction({ certidaoProcuracao: true });
    } else if (section === "certidaoSubstabelecimento") {
      setAction({ certidaoSubstabelecimento: true });
    } else if (section === "confirmacaoProcuracao") {
      setAction({ confirmacaoProcuracao: true });
    } else if (section === "divorcioExtrajudicial") {
      setAction({ divorcioExtrajudicial: true });
    } else if (section === "inventarioPartilha") {
      setAction({ inventarioPartilha: true });
    } else if (section === "ataNotarial") {
      setAction({ ataNotarial: true });
    } else if (section === "testamento") {
      setAction({ testamento: true });
    } else if (section === "procuracao") {
      setAction({ procuracao: true });
    } else if (section === "autenticacao") {
      setAction({ autenticacao: true });
    } else if (section === "atosDigitais") {
      setAction({ atosDigitais: true });
    } else if (section === "escrituraCompraVenda") {
      setAction({ escrituraCompraVenda: true });
    } else {
      setAction({
        abertura: false,
        apostilamento: false,
        certidaoEscritura: false,
        certidaoSubstabelecimento: false,
        confirmacaoProcuracao: false,
        divorcioExtrajudicial: false,
        inventarioPartilha: false,
        ataNotarial: false,
        testamento: false,
        procuracao: false,
        autenticacao: false,
        atosDigitais: false,
        escrituraCompraVenda: false,
      });
    }
  }

  // Chama a função quando o componente é montado ou a URL muda
  useEffect(() => {
    handleTypeActionFromUrl();
  }, [location]);

  function handleScrollWindow() {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }
  useEffect(() => {
    handleScrollWindow();
  }, []);
  const [text, setText] = useState({
    howItWorks: false,
    whatIsItFor: false,
    whenNecessary: false,
  });
  const [showMenu, setShowMenu] = useState();
  const [showServices, setShowServices] = useState(true);
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
  function handleShowMenu() {
    setShowMenu(!showMenu);
    setShowServices(false);
    setText(false);
  }
  function handleShowServices() {
    setShowServices(!showServices);
    setShowMenu(false);
  }
  function handleChangeText(iteration) {
    setText({
      howItWorks: iteration === "howItWorks",
      whatIsItFor: iteration === "whatIsItFor",
      whenNecessary: iteration === "whenNecessary",
    });
  }

  //   funcoes

  const [action, setAction] = useState({
    abertura: false,
    apostilamento: false,
    certidaoEscritura: false,
    certidaoProcuracao: false,
    certidaoSubstabelecimento: false,
    confirmacaoProcuracao: false,
    divorcioExtrajudicial: false,
    inventarioPartilha: false,
    ataNotarial: false,
    testamento: false,
    procuracao: false,
    autenticacao: false,
    atosDigitais: false,
    escrituraCompraVenda: false,
  });
  function handleTypeAction(item) {
    setAction({
      abertura: item === "abertura",
      apostilamento: item === "apostilamento",
      certidaoEscritura: item === "certidaoEscritura",
      certidaoProcuracao: item === "certidaoProcuracao",
      certidaoSubstabelecimento: item === "certidaoSubstabelecimento",
      confirmacaoProcuracao: item === "confirmacaoProcuracao",
      divorcioExtrajudicial: item === "divorcioExtrajudicial",
      inventarioPartilha: item === "inventarioPartilha",
      ataNotarial: item === "ataNotarial",
      testamento: item === "testamento",
      procuracao: item === "procuracao",
      autenticacao: item === "autenticacao",
      atosDigitais: item === "atosDigitais",
      escrituraCompraVenda: item === "escrituraCompraVenda",
    });
  }
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
      <div className="container-top-img">
        <div className="body-servicos">
          {action.abertura ? (
            <>
              {textosDeAberturaFirma
                .filter((topico) => topico.id === "title")
                .map((topico, index) => (
                  <div key={index}>
                    <h3>{topico.titulo}</h3>
                  </div>
                ))}
            </>
          ) : action.apostilamento ? (
            <>
              {textosDeApostilamento
                .filter((topico) => topico.id === "title")
                .map((topico, index) => (
                  <div key={index}>
                    <h3>{topico.titulo}</h3>
                  </div>
                ))}
            </>
          ) : action.certidaoEscritura ? (
            <>
              {textosDeCertidaoEscritura
                .filter((topico) => topico.id === "title")
                .map((topico, index) => (
                  <div key={index}>
                    <h3>{topico.titulo}</h3>
                  </div>
                ))}
            </>
          ) : action.certidaoProcuracao ? (
            <>
              {textosDeCertidaoProcuracao
                .filter((topico) => topico.id === "title")
                .map((topico, index) => (
                  <div key={index}>
                    <h3>{topico.titulo}</h3>
                  </div>
                ))}
            </>
          ) : action.certidaoSubstabelecimento ? (
            <>
              {textosDeCertidaoSubstabelecimento
                .filter((topico) => topico.id === "title")
                .map((topico, index) => (
                  <div key={index}>
                    <h3>{topico.titulo}</h3>
                  </div>
                ))}
            </>
          ) : action.confirmacaoProcuracao ? (
            <>
              {textosDeConfirmacaoProcuracao
                .filter((topico) => topico.id === "title")
                .map((topico, index) => (
                  <div key={index}>
                    <h3>{topico.titulo}</h3>
                  </div>
                ))}
            </>
          ) : action.divorcioExtrajudicial ? (
            <>
              {textosDeDivorcio
                .filter((topico) => topico.id === "title")
                .map((topico, index) => (
                  <div key={index}>
                    <h3>{topico.titulo}</h3>
                  </div>
                ))}
            </>
          ) : action.inventarioPartilha ? (
            <>
              {textosDeInventarioPartilha
                .filter((topico) => topico.id === "title")
                .map((topico, index) => (
                  <div key={index}>
                    <h3>{topico.titulo}</h3>
                  </div>
                ))}
            </>
          ) : action.ataNotarial ? (
            <>
              {textosDeAtaNotarial
                .filter((topico) => topico.id === "title")
                .map((topico, index) => (
                  <div key={index}>
                    <h3>{topico.titulo}</h3>
                  </div>
                ))}
            </>
          ) : action.testamento ? (
            <>
              {textosDeTestamento
                .filter((topico) => topico.id === "title")
                .map((topico, index) => (
                  <div key={index}>
                    <h3>{topico.titulo}</h3>
                  </div>
                ))}
            </>
          ) : action.procuracao ? (
            <>
              {textosDeProcuracao
                .filter((topico) => topico.id === "title")
                .map((topico, index) => (
                  <div key={index}>
                    <h3>{topico.titulo}</h3>
                  </div>
                ))}
            </>
          ) : action.autenticacao ? (
            <>
              {textosDeAutenticacao
                .filter((topico) => topico.id === "title")
                .map((topico, index) => (
                  <div key={index}>
                    <h3>{topico.titulo}</h3>
                  </div>
                ))}
            </>
          ) : action.atosDigitais ? (
            <>
              {textoAtosDigitais
                .filter((topico) => topico.id === "title")
                .map((topico, index) => (
                  <div key={index}>
                    <h3>{topico.titulo}</h3>
                  </div>
                ))}
            </>
          ) : action.escrituraCompraVenda ? (
            <>
              {textosDeEscrituraCompraVenda
                .filter((topico) => topico.id === "title")
                .map((topico, index) => (
                  <div key={index}>
                    <h3>{topico.titulo}</h3>
                  </div>
                ))}
            </>
          ) : (
            <>
              <h3>NOSSOS SERVIÇOS</h3>
            </>
          )}
        </div>
      </div>
      <div className="container-main-content">
        <div className="menu-topics">
          <ul>
            <div className="container-options-buttons">
              <div
                className={action.atosDigitais ? "unclickable" : ""}
                onClick={handleShowMenu}
              >
                <h3>SAIBA MAIS</h3>
              </div>
              <div onClick={handleShowServices}>
                <h3>SERVIÇOS</h3>
              </div>
            </div>
            {showServices ? (
              <>
                <div className="background-side-pageServices">
                  <ul>
                    <li
                      data-aos="fade-down"
                      data-aos-duration="500"
                      data-aos-offset="0"
                      className={
                        openMenu.menuCertidoes ? "menu-changed" : "menu"
                      }
                      onClick={() => handleOpenMenu("menuCertidoes")}
                    >
                      <span className="fa-solid fa-certificate" /> Certidões
                    </li>
                    {openMenu.menuCertidoes ? (
                      <>
                        <Link to={{ search: "?section=certidaoEscritura" }}>
                          <li
                            className="menu-options"
                            data-aos="fade-down"
                            data-aos-duration="500"
                            data-aos-offset="-1000"
                            onClick={() =>
                              handleTypeAction("certidaoEscritura")
                            }
                          >
                            <span className="fa-solid fa-certificate" />{" "}
                            Certidão de escritura
                          </li>
                        </Link>
                        <Link to={{ search: "?section=certidaoProcuracao" }}>
                          <li
                            className="menu-options"
                            data-aos="fade-down"
                            data-aos-duration="500"
                            data-aos-offset="-1000"
                          >
                            <span className="fa-solid fa-certificate" />{" "}
                            Certidão de procuração
                          </li>
                        </Link>
                        <Link
                          to={{ search: "?section=certidaoSubstabelecimento" }}
                        >
                          <li
                            className="menu-options"
                            data-aos="fade-down"
                            data-aos-duration="500"
                            data-aos-offset="-1000"
                          >
                            <span className="fa-solid fa-certificate" />{" "}
                            Certidão de substabelecimento
                          </li>
                        </Link>
                        <Link to={{ search: "?section=confirmacaoProcuracao" }}>
                          <li
                            className="menu-options"
                            data-aos="fade-down"
                            data-aos-duration="500"
                            data-aos-offset="-1000"
                          >
                            <span className="fa-solid fa-certificate" />{" "}
                            Confirmação de procuração
                          </li>
                        </Link>
                        <div
                          className="border-li"
                          data-aos="fade-in"
                          data-aos-duration="2000"
                          data-aos-offset="-1000"
                        />
                      </>
                    ) : (
                      <></>
                    )}
                    <li
                      data-aos="fade-down"
                      data-aos-duration="500"
                      data-aos-offset="-100"
                      className={
                        openMenu.menuEscritura ? "menu-changed" : "menu"
                      }
                      onClick={() => handleOpenMenu("menuEscritura")}
                    >
                      <span className="fa-solid fa-file-contract" />
                      Escrituras
                    </li>
                    {openMenu.menuEscritura ? (
                      <>
                        <Link
                          to={{ search: "?section=escrituraCompraVenda" }}
                          style={{ display: "flex", justifyContent: "right" }}
                        >
                          <li
                            className="menu-options"
                            data-aos="fade-down"
                            data-aos-duration="500"
                            data-aos-offset="-1000"
                          >
                            <span className="fa-solid fa-file-contract" />{" "}
                            Compra e venda
                          </li>
                        </Link>
                        <li
                          className="menu-options"
                          data-aos="fade-down"
                          data-aos-duration="500"
                          data-aos-offset="-1000"
                        >
                          <span className="fa-solid fa-file-contract" /> Permuta
                        </li>
                        <li
                          className="menu-options"
                          data-aos="fade-down"
                          data-aos-duration="500"
                          data-aos-offset="-1000"
                        >
                          <span className="fa-solid fa-file-contract" /> União
                          Estável | Dissolução
                        </li>
                        <li
                          className="menu-options"
                          data-aos="fade-down"
                          data-aos-duration="500"
                          data-aos-offset="-1000"
                        >
                          <span className="fa-solid fa-file-contract" />{" "}
                          Estremação
                        </li>
                        <li
                          className="menu-options"
                          data-aos="fade-down"
                          data-aos-duration="500"
                          data-aos-offset="-1000"
                        >
                          <span className="fa-solid fa-file-contract" />{" "}
                          Extinção de Condomínio
                        </li>
                        <li
                          className="menu-options"
                          data-aos="fade-down"
                          data-aos-duration="500"
                          data-aos-offset="-1000"
                        >
                          <span className="fa-solid fa-file-contract" />{" "}
                          Servidão de passagem
                        </li>
                        <li
                          className="menu-options"
                          data-aos="fade-down"
                          data-aos-duration="500"
                          data-aos-offset="-1000"
                        >
                          <span className="fa-solid fa-file-contract" /> Divisão
                          amigável
                        </li>
                        <div
                          className="border-li"
                          data-aos="fade-in"
                          data-aos-duration="2000"
                          data-aos-offset="-1000"
                        />
                      </>
                    ) : (
                      <></>
                    )}
                    <Link
                      to={{ search: "?section=inventarioPartilha" }}
                      style={{ display: "flex", justifyContent: "right" }}
                    >
                      <li
                        className="menu_without_options"
                        data-aos="fade-down"
                        data-aos-duration="500"
                        data-aos-offset="-1000"
                      >
                        <span className="fa-solid fa-right-left" />
                        Inventario e Partilha
                      </li>
                    </Link>
                    <Link
                      to={{ search: "?section=ataNotarial" }}
                      style={{ display: "flex", justifyContent: "right" }}
                    >
                      <li
                        className="menu_without_options"
                        data-aos="fade-down"
                        data-aos-duration="500"
                        data-aos-offset="-1000"
                      >
                        <span className="fa-solid fa-copy" />
                        Ata Notarial
                      </li>
                    </Link>
                    <Link
                      to={{ search: "?section=divorcioExtrajudicial" }}
                      style={{ display: "flex", justifyContent: "right" }}
                    >
                      <li
                        className="menu_without_options"
                        data-aos="fade-down"
                        data-aos-duration="500"
                        data-aos-offset="-1000"
                      >
                        <span className="fa-solid fa-pen-clip" />
                        Divorcio Extrajudicial
                      </li>
                    </Link>
                    <Link
                      to={{ search: "?section=apostilamento" }}
                      style={{ display: "flex", justifyContent: "right" }}
                    >
                      <li
                        className="menu_without_options"
                        data-aos="fade-down"
                        data-aos-duration="500"
                        data-aos-offset="-1000"
                        onClick={() => handleTypeAction("apostilamento")}
                      >
                        <span className="fa-solid fa-shield" />
                        Apostilamento
                      </li>
                    </Link>
                    <Link
                      to={{ search: "?section=testamento" }}
                      style={{ display: "flex", justifyContent: "right" }}
                    >
                      <li
                        className="menu_without_options"
                        data-aos="fade-down"
                        data-aos-duration="500"
                        data-aos-offset="-1000"
                      >
                        <span className="fa-solid fa-book" />
                        Testamento
                      </li>
                    </Link>
                    <Link
                      to={{ search: "?section=atosDigitais" }}
                      style={{ display: "flex", justifyContent: "right" }}
                    >
                      <li
                        className={
                          openMenu.menuDigital ? "menu-changed" : "menu"
                        }
                        onClick={() => handleOpenMenu("menuDigital")}
                      >
                        <span className="fa-solid fa-lock" />
                        Atos Digitais
                      </li>
                    </Link>
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
                            data-aos-duration="500"
                            data-aos-offset="-1000"
                          >
                            <span className="fa-solid fa-lock" /> Certificado
                            digital
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
                            data-aos-duration="500"
                            data-aos-offset="-1000"
                          >
                            <span className="fa-solid fa-lock" /> Assinatura
                            digital
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
                            data-aos-duration="500"
                            data-aos-offset="-1000"
                          >
                            <span className="fa-solid fa-lock" /> Atos
                            Eletrônicos
                          </li>
                        </Link>
                        <div
                          className="border-li"
                          data-aos="fade-in"
                          data-aos-duration="2000"
                          data-aos-offset="-1000"
                        />
                      </>
                    ) : (
                      <></>
                    )}
                    <Link
                      to={{ search: "?section=procuracao" }}
                      style={{ display: "flex", justifyContent: "right" }}
                    >
                      <li className="menu_without_options">
                        <span className="fa-solid fa-file-signature" />
                        Procuração
                      </li>
                    </Link>
                    <Link
                      to={{ search: "?section=aberturadefirma" }}
                      style={{ display: "flex", justifyContent: "right" }}
                    >
                      <li
                        className="menu_without_options"
                        onClick={() => handleTypeAction("abertura")}
                      >
                        <span className="fa-solid fa-signature" />
                        Reconhecimento de firma
                      </li>
                    </Link>
                    <Link
                      to={{ search: "?section=autenticacao" }}
                      style={{ display: "flex", justifyContent: "right" }}
                    >
                      <li className="menu_without_options">
                        <span className="fa-solid fa-check-to-slot" />
                        Autenticação de documentos
                      </li>
                    </Link>
                  </ul>
                </div>
              </>
            ) : (
              <></>
            )}
            {showMenu ? (
              <>
                <li
                  data-aos="fade-down"
                  data-aos-duration="1500"
                  data-aos-offset="0"
                  style={{ transition: "0.3s" }}
                  onClick={() => handleChangeText("howItWorks")}
                >
                  Como funciona?
                </li>
                <li
                  data-aos="fade-down"
                  data-aos-duration="1500"
                  data-aos-offset="0"
                  style={{ transition: "0.3s" }}
                  onClick={() => handleChangeText("whatIsItFor")}
                >
                  Para que serve?
                </li>
                <li
                  data-aos="fade-down"
                  data-aos-duration="1500"
                  data-aos-offset="0"
                  style={{ transition: "0.3s" }}
                  onClick={() => handleChangeText("whenNecessary")}
                >
                  Quando é necessário?
                </li>
              </>
            ) : (
              <></>
            )}
          </ul>
        </div>
        <div className="explanation">
          <ul>
            {text.howItWorks ? (
              <>
                {action.abertura ? (
                  <>
                    {/* COMPONENTE VAI AQUI */}
                    {textosDeAberturaFirma
                      .filter((topico) => topico.id === "como-funciona")
                      .map((topico, index) => (
                        <div key={index}>
                          <h3>{topico.titulo}</h3>
                          <li>{topico.conteudo}</li>
                          <li>{topico.conteudo1}</li>
                          <li>{topico.conteudo2}</li>
                        </div>
                      ))}
                  </>
                ) : action.apostilamento ? (
                  <>
                    {textosDeApostilamento
                      .filter((topico) => topico.id === "como-funciona")
                      .map((topico, index) => (
                        <div key={index}>
                          <h3>{topico.titulo}</h3>
                          <li>{topico.conteudo}</li>
                        </div>
                      ))}
                  </>
                ) : action.certidaoEscritura ? (
                  <>
                    {textosDeCertidaoEscritura
                      .filter((topico) => topico.id === "como-funciona")
                      .map((topico, index) => (
                        <div key={index}>
                          <h3>{topico.titulo}</h3>
                          <li>{topico.conteudo}</li>
                          <li>{topico.conteudo1}</li>
                          <li>{topico.conteudo2}</li>
                        </div>
                      ))}
                  </>
                ) : action.certidaoProcuracao ? (
                  <>
                    {textosDeCertidaoProcuracao
                      .filter((topico) => topico.id === "como-funciona")
                      .map((topico, index) => (
                        <div key={index}>
                          <h3>{topico.titulo}</h3>
                          <li>{topico.conteudo}</li>
                          <li>{topico.conteudo1}</li>
                          <li>{topico.conteudo2}</li>
                        </div>
                      ))}
                  </>
                ) : action.certidaoSubstabelecimento ? (
                  <>
                    {textosDeCertidaoSubstabelecimento
                      .filter((topico) => topico.id === "como-funciona")
                      .map((topico, index) => (
                        <div key={index}>
                          <h3>{topico.titulo}</h3>
                          <li>{topico.conteudo}</li>
                          <li>{topico.conteudo1}</li>
                          <li>{topico.conteudo2}</li>
                        </div>
                      ))}
                  </>
                ) : action.confirmacaoProcuracao ? (
                  <>
                    {textosDeConfirmacaoProcuracao
                      .filter((topico) => topico.id === "como-funciona")
                      .map((topico, index) => (
                        <div key={index}>
                          <h3>{topico.titulo}</h3>
                          <li>{topico.conteudo}</li>
                          <li>{topico.conteudo1}</li>
                          <li>{topico.conteudo2}</li>
                        </div>
                      ))}
                  </>
                ) : action.divorcioExtrajudicial ? (
                  <>
                    {textosDeDivorcio
                      .filter((topico) => topico.id === "como-funciona")
                      .map((topico, index) => (
                        <div key={index}>
                          <h3>{topico.titulo}</h3>
                          <li>{topico.conteudo}</li>
                          <li>{topico.conteudo1}</li>
                          <li>{topico.conteudo2}</li>
                        </div>
                      ))}
                  </>
                ) : action.inventarioPartilha ? (
                  <>
                    {textosDeInventarioPartilha
                      .filter((topico) => topico.id === "como-funciona")
                      .map((topico, index) => (
                        <div key={index}>
                          <h3>{topico.titulo}</h3>
                          <li>{topico.conteudo}</li>
                          <li>{topico.conteudo1}</li>
                          <li>{topico.conteudo2}</li>
                          <li>{topico.conteudo3}</li>
                        </div>
                      ))}
                  </>
                ) : action.ataNotarial ? (
                  <>
                    {textosDeAtaNotarial
                      .filter((topico) => topico.id === "como-funciona")
                      .map((topico, index) => (
                        <div key={index}>
                          <h3>{topico.titulo}</h3>
                          <li>{topico.conteudo}</li>
                          <li>{topico.conteudo1}</li>
                          <li>{topico.conteudo2}</li>
                          <li>{topico.conteudo3}</li>
                        </div>
                      ))}
                  </>
                ) : action.testamento ? (
                  <>
                    {textosDeTestamento
                      .filter((topico) => topico.id === "como-funciona")
                      .map((topico, index) => (
                        <div key={index}>
                          <h3>{topico.titulo}</h3>
                          <li>{topico.conteudo}</li>
                          <li>{topico.conteudo1}</li>
                          <li>{topico.conteudo2}</li>
                          <li>{topico.conteudo3}</li>
                          <li>{topico.conteudo4}</li>
                        </div>
                      ))}
                  </>
                ) : action.procuracao ? (
                  <>
                    {textosDeProcuracao
                      .filter((topico) => topico.id === "como-funciona")
                      .map((topico, index) => (
                        <div key={index}>
                          <h3>{topico.titulo}</h3>
                          <li>{topico.conteudo}</li>
                          <li>{topico.conteudo1}</li>
                          <li>{topico.conteudo2}</li>
                          <li>{topico.conteudo3}</li>
                        </div>
                      ))}
                  </>
                ) : action.autenticacao ? (
                  <>
                    {textosDeAutenticacao
                      .filter((topico) => topico.id === "como-funciona")
                      .map((topico, index) => (
                        <div key={index}>
                          <h3>{topico.titulo}</h3>
                          <li>{topico.conteudo}</li>
                          <li>{topico.conteudo1}</li>
                          <li>{topico.conteudo2}</li>
                          <li>{topico.conteudo3}</li>
                        </div>
                      ))}
                  </>
                ) : action.escrituraCompraVenda ? (
                  <>
                    {textosDeEscrituraCompraVenda
                      .filter((topico) => topico.id === "como-funciona")
                      .map((topico, index) => (
                        <div key={index}>
                          <h3>{topico.titulo}</h3>
                          <li>{topico.conteudo}</li>
                          <li>{topico.conteudo1}</li>
                          <li>{topico.conteudo2}</li>
                          <li>{topico.conteudo3}</li>
                        </div>
                      ))}
                  </>
                ) : (
                  <></>
                )}
              </>
            ) : text.whatIsItFor ? (
              <>
                {action.abertura ? (
                  <>
                    {/* COMPONENTE VAI AQUI */}
                    {textosDeAberturaFirma
                      .filter((topico) => topico.id === "para-que-serve")
                      .map((topico, index) => (
                        <div key={index}>
                          <h3>{topico.titulo}</h3>
                          <li>{topico.conteudo}</li>
                        </div>
                      ))}
                  </>
                ) : action.apostilamento ? (
                  <>
                    {textosDeApostilamento
                      .filter((topico) => topico.id === "para-que-serve")
                      .map((topico, index) => (
                        <div key={index}>
                          <h3>{topico.titulo}</h3>
                          <li>{topico.conteudo}</li>
                        </div>
                      ))}
                  </>
                ) : action.certidaoEscritura ? (
                  <>
                    {textosDeCertidaoEscritura
                      .filter((topico) => topico.id === "para-que-serve")
                      .map((topico, index) => (
                        <div key={index}>
                          <h3>{topico.titulo}</h3>
                          <li>{topico.conteudo}</li>
                          <li>{topico.conteudo1}</li>
                          <li>{topico.conteudo2}</li>
                          <li>{topico.conteudo3}</li>
                          <li>{topico.conteudo4}</li>
                        </div>
                      ))}
                  </>
                ) : action.certidaoProcuracao ? (
                  <>
                    {textosDeCertidaoProcuracao
                      .filter((topico) => topico.id === "para-que-serve")
                      .map((topico, index) => (
                        <div key={index}>
                          <h3>{topico.titulo}</h3>
                          <li>{topico.conteudo}</li>
                          <li>{topico.conteudo1}</li>
                          <li>{topico.conteudo2}</li>
                          <li>{topico.conteudo3}</li>
                          <li>{topico.conteudo4}</li>
                        </div>
                      ))}
                  </>
                ) : action.certidaoSubstabelecimento ? (
                  <>
                    {textosDeCertidaoSubstabelecimento
                      .filter((topico) => topico.id === "para-que-serve")
                      .map((topico, index) => (
                        <div key={index}>
                          <h3>{topico.titulo}</h3>
                          <li>{topico.conteudo}</li>
                          <li>{topico.conteudo1}</li>
                          <li>{topico.conteudo2}</li>
                          <li>{topico.conteudo3}</li>
                          <li>{topico.conteudo4}</li>
                        </div>
                      ))}
                  </>
                ) : action.confirmacaoProcuracao ? (
                  <>
                    {textosDeConfirmacaoProcuracao
                      .filter((topico) => topico.id === "para-que-serve")
                      .map((topico, index) => (
                        <div key={index}>
                          <h3>{topico.titulo}</h3>
                          <li>{topico.conteudo}</li>
                          <li>{topico.conteudo1}</li>
                          <li>{topico.conteudo2}</li>
                          <li>{topico.conteudo3}</li>
                          <li>{topico.conteudo4}</li>
                        </div>
                      ))}
                  </>
                ) : action.divorcioExtrajudicial ? (
                  <>
                    {textosDeDivorcio
                      .filter((topico) => topico.id === "para-que-serve")
                      .map((topico, index) => (
                        <div key={index}>
                          <h3>{topico.titulo}</h3>
                          <li>{topico.conteudo}</li>
                          <li>{topico.conteudo1}</li>
                          <li>{topico.conteudo2}</li>
                          <li>{topico.conteudo3}</li>
                          <li>{topico.conteudo4}</li>
                        </div>
                      ))}
                  </>
                ) : action.inventarioPartilha ? (
                  <>
                    {textosDeInventarioPartilha
                      .filter((topico) => topico.id === "para-que-serve")
                      .map((topico, index) => (
                        <div key={index}>
                          <h3>{topico.titulo}</h3>
                          <li>{topico.conteudo}</li>
                          <li>{topico.conteudo1}</li>
                          <li>{topico.conteudo2}</li>
                          <li>{topico.conteudo3}</li>
                          <li>{topico.conteudo4}</li>
                          <li>{topico.conteudo5}</li>
                        </div>
                      ))}
                  </>
                ) : action.ataNotarial ? (
                  <>
                    {textosDeAtaNotarial
                      .filter((topico) => topico.id === "para-que-serve")
                      .map((topico, index) => (
                        <div key={index}>
                          <h3>{topico.titulo}</h3>
                          <li>{topico.conteudo}</li>
                          <li>{topico.conteudo1}</li>
                          <li>{topico.conteudo2}</li>
                          <li>{topico.conteudo3}</li>
                        </div>
                      ))}
                  </>
                ) : action.testamento ? (
                  <>
                    {textosDeTestamento
                      .filter((topico) => topico.id === "para-que-serve")
                      .map((topico, index) => (
                        <div key={index}>
                          <h3>{topico.titulo}</h3>
                          <li>{topico.conteudo}</li>
                          <li>{topico.conteudo1}</li>
                          <li>{topico.conteudo2}</li>
                          <li>{topico.conteudo3}</li>
                        </div>
                      ))}
                  </>
                ) : action.procuracao ? (
                  <>
                    {textosDeProcuracao
                      .filter((topico) => topico.id === "para-que-serve")
                      .map((topico, index) => (
                        <div key={index}>
                          <h3>{topico.titulo}</h3>
                          <li>{topico.conteudo}</li>
                          <li>{topico.conteudo1}</li>
                          <li>{topico.conteudo2}</li>
                          <li>{topico.conteudo3}</li>
                        </div>
                      ))}
                  </>
                ) : action.autenticacao ? (
                  <>
                    {textosDeAutenticacao
                      .filter((topico) => topico.id === "para-que-serve")
                      .map((topico, index) => (
                        <div key={index}>
                          <h3>{topico.titulo}</h3>
                          <li>{topico.conteudo}</li>
                          <li>{topico.conteudo1}</li>
                          <li>{topico.conteudo2}</li>
                          <li>{topico.conteudo3}</li>
                        </div>
                      ))}
                  </>
                ) : action.escrituraCompraVenda ? (
                  <>
                    {textosDeEscrituraCompraVenda
                      .filter((topico) => topico.id === "para-que-serve")
                      .map((topico, index) => (
                        <div key={index}>
                          <h3>{topico.titulo}</h3>
                          <li>{topico.conteudo}</li>
                          <li>{topico.conteudo1}</li>
                          <li>{topico.conteudo2}</li>
                        </div>
                      ))}
                  </>
                ) : (
                  <></>
                )}
              </>
            ) : text.whenNecessary ? (
              <>
                {action.abertura ? (
                  <>
                    {/* COMPONENTE VAI AQUI */}
                    {textosDeAberturaFirma
                      .filter((topico) => topico.id === "quando-e-necessario")
                      .map((topico, index) => (
                        <div key={index}>
                          <h3>{topico.titulo}</h3>
                          <li>{topico.conteudo}</li>
                          <li>{topico.conteudo1}</li>
                        </div>
                      ))}
                  </>
                ) : action.apostilamento ? (
                  <>
                    {textosDeApostilamento
                      .filter((topico) => topico.id === "quando-e-necessario")
                      .map((topico, index) => (
                        <div key={index}>
                          <h3>{topico.titulo}</h3>
                          <li>{topico.conteudo}</li>
                        </div>
                      ))}
                  </>
                ) : action.certidaoEscritura ? (
                  <>
                    {textosDeCertidaoEscritura
                      .filter((topico) => topico.id === "quando-e-necessario")
                      .map((topico, index) => (
                        <div key={index}>
                          <h3>{topico.titulo}</h3>
                          <li>{topico.conteudo}</li>
                          <li>{topico.conteudo1}</li>
                          <li>{topico.conteudo2}</li>
                          <li>{topico.conteudo3}</li>
                          <li>{topico.conteudo4}</li>
                        </div>
                      ))}
                  </>
                ) : action.certidaoProcuracao ? (
                  <>
                    {textosDeCertidaoProcuracao
                      .filter((topico) => topico.id === "quando-e-necessario")
                      .map((topico, index) => (
                        <div key={index}>
                          <h3>{topico.titulo}</h3>
                          <li>{topico.conteudo}</li>
                          <li>{topico.conteudo1}</li>
                          <li>{topico.conteudo2}</li>
                          <li>{topico.conteudo3}</li>
                          <li>{topico.conteudo4}</li>
                        </div>
                      ))}
                  </>
                ) : action.certidaoSubstabelecimento ? (
                  <>
                    {textosDeCertidaoSubstabelecimento
                      .filter((topico) => topico.id === "quando-e-necessario")
                      .map((topico, index) => (
                        <div key={index}>
                          <h3>{topico.titulo}</h3>
                          <li>{topico.conteudo}</li>
                          <li>{topico.conteudo1}</li>
                          <li>{topico.conteudo2}</li>
                          <li>{topico.conteudo3}</li>
                        </div>
                      ))}
                  </>
                ) : action.confirmacaoProcuracao ? (
                  <>
                    {textosDeConfirmacaoProcuracao
                      .filter((topico) => topico.id === "quando-e-necessario")
                      .map((topico, index) => (
                        <div key={index}>
                          <h3>{topico.titulo}</h3>
                          <li>{topico.conteudo}</li>
                          <li>{topico.conteudo1}</li>
                          <li>{topico.conteudo2}</li>
                          <li>{topico.conteudo3}</li>
                        </div>
                      ))}
                  </>
                ) : action.divorcioExtrajudicial ? (
                  <>
                    {textosDeDivorcio
                      .filter((topico) => topico.id === "quando-e-necessario")
                      .map((topico, index) => (
                        <div key={index}>
                          <h3>{topico.titulo}</h3>
                          <li>{topico.conteudo}</li>
                          <li>{topico.conteudo1}</li>
                          <li>{topico.conteudo2}</li>
                          <li>{topico.conteudo3}</li>
                          <li>{topico.conteudo4}</li>
                          <li>{topico.conteudo5}</li>
                        </div>
                      ))}
                  </>
                ) : action.inventarioPartilha ? (
                  <>
                    {textosDeInventarioPartilha
                      .filter((topico) => topico.id === "quando-e-necessario")
                      .map((topico, index) => (
                        <div key={index}>
                          <h3>{topico.titulo}</h3>
                          <li>{topico.conteudo}</li>
                          <li>{topico.conteudo1}</li>
                          <li>{topico.conteudo2}</li>
                          <li>{topico.conteudo3}</li>
                          <li>{topico.conteudo4}</li>
                        </div>
                      ))}
                  </>
                ) : action.ataNotarial ? (
                  <>
                    {textosDeAtaNotarial
                      .filter((topico) => topico.id === "quando-e-necessario")
                      .map((topico, index) => (
                        <div key={index}>
                          <h3>{topico.titulo}</h3>
                          <li>{topico.conteudo}</li>
                          <li>{topico.conteudo1}</li>
                          <li>{topico.conteudo2}</li>
                          <li>{topico.conteudo3}</li>
                        </div>
                      ))}
                  </>
                ) : action.testamento ? (
                  <>
                    {textosDeTestamento
                      .filter((topico) => topico.id === "quando-e-necessario")
                      .map((topico, index) => (
                        <div key={index}>
                          <h3>{topico.titulo}</h3>
                          <li>{topico.conteudo}</li>
                          <li>{topico.conteudo1}</li>
                          <li>{topico.conteudo2}</li>
                          <li>{topico.conteudo3}</li>
                        </div>
                      ))}
                  </>
                ) : action.procuracao ? (
                  <>
                    {textosDeProcuracao
                      .filter((topico) => topico.id === "quando-e-necessario")
                      .map((topico, index) => (
                        <div key={index}>
                          <h3>{topico.titulo}</h3>
                          <li>{topico.conteudo}</li>
                          <li>{topico.conteudo1}</li>
                          <li>{topico.conteudo2}</li>
                          <li>{topico.conteudo3}</li>
                        </div>
                      ))}
                  </>
                ) : action.autenticacao ? (
                  <>
                    {textosDeAutenticacao
                      .filter((topico) => topico.id === "quando-e-necessario")
                      .map((topico, index) => (
                        <div key={index}>
                          <h3>{topico.titulo}</h3>
                          <li>{topico.conteudo}</li>
                          <li>{topico.conteudo1}</li>
                          <li>{topico.conteudo2}</li>
                          <li>{topico.conteudo3}</li>
                        </div>
                      ))}
                  </>
                ) : action.escrituraCompraVenda ? (
                  <>
                    {textosDeEscrituraCompraVenda
                      .filter((topico) => topico.id === "quando-e-necessario")
                      .map((topico, index) => (
                        <div key={index}>
                          <h3>{topico.titulo}</h3>
                          <li>{topico.conteudo}</li>
                          <li>{topico.conteudo1}</li>
                        </div>
                      ))}
                  </>
                ) : (
                  <></>
                )}
              </>
            ) : (
              <>
                {action.abertura ? (
                  <>
                    {/* COMPONENTE VAI AQUI */}
                    {textosDeAberturaFirma
                      .filter((topico) => topico.id === "o-que-e")
                      .map((topico, index) => (
                        <div key={index}>
                          <h3>{topico.titulo}</h3>
                          <li data-aos="fade-right" data-aos-duration="2000">
                            {topico.conteudo}
                          </li>
                          <li data-aos="fade-right" data-aos-duration="2000">
                            {topico.conteudo1}
                          </li>
                        </div>
                      ))}
                  </>
                ) : action.apostilamento ? (
                  <>
                    {textosDeApostilamento
                      .filter((topico) => topico.id === "o-que-e")
                      .map((topico, index) => (
                        <div key={index}>
                          <h3>{topico.titulo}</h3>
                          <li data-aos="fade-right" data-aos-duration="2000">
                            {topico.conteudo}
                          </li>
                          <li data-aos="fade-right" data-aos-duration="2000">
                            {topico.conteudo1}
                          </li>
                        </div>
                      ))}
                  </>
                ) : action.certidaoEscritura ? (
                  <>
                    {textosDeCertidaoEscritura
                      .filter((topico) => topico.id === "o-que-e")
                      .map((topico, index) => (
                        <div key={index}>
                          <h3>{topico.titulo}</h3>
                          <li data-aos="fade-right" data-aos-duration="2000">
                            {topico.conteudo}
                          </li>
                          <li data-aos="fade-right" data-aos-duration="2000">
                            {topico.conteudo1}
                          </li>
                        </div>
                      ))}
                  </>
                ) : action.certidaoProcuracao ? (
                  <>
                    {textosDeCertidaoProcuracao
                      .filter((topico) => topico.id === "o-que-e")
                      .map((topico, index) => (
                        <div key={index}>
                          <h3>{topico.titulo}</h3>
                          <li data-aos="fade-right" data-aos-duration="2000">
                            {topico.conteudo}
                          </li>
                          <li data-aos="fade-right" data-aos-duration="2000">
                            {topico.conteudo1}
                          </li>
                        </div>
                      ))}
                  </>
                ) : action.certidaoSubstabelecimento ? (
                  <>
                    {textosDeCertidaoSubstabelecimento
                      .filter((topico) => topico.id === "o-que-e")
                      .map((topico, index) => (
                        <div key={index}>
                          <h3>{topico.titulo}</h3>
                          <li data-aos="fade-right" data-aos-duration="2000">
                            {topico.conteudo}
                          </li>
                          <li data-aos="fade-right" data-aos-duration="2000">
                            {topico.conteudo1}
                          </li>
                        </div>
                      ))}
                  </>
                ) : action.confirmacaoProcuracao ? (
                  <>
                    {textosDeConfirmacaoProcuracao
                      .filter((topico) => topico.id === "o-que-e")
                      .map((topico, index) => (
                        <div key={index}>
                          <h3>{topico.titulo}</h3>
                          <li data-aos="fade-right" data-aos-duration="2000">
                            {topico.conteudo}
                          </li>
                          <li data-aos="fade-right" data-aos-duration="2000">
                            {topico.conteudo1}
                          </li>
                        </div>
                      ))}
                  </>
                ) : action.divorcioExtrajudicial ? (
                  <>
                    {textosDeDivorcio
                      .filter((topico) => topico.id === "o-que-e")
                      .map((topico, index) => (
                        <div key={index}>
                          <h3>{topico.titulo}</h3>
                          <li data-aos="fade-right" data-aos-duration="2000">
                            {topico.conteudo}
                          </li>
                          <li data-aos="fade-right" data-aos-duration="2000">
                            {topico.conteudo1}
                          </li>
                        </div>
                      ))}
                  </>
                ) : action.inventarioPartilha ? (
                  <>
                    {textosDeInventarioPartilha
                      .filter((topico) => topico.id === "o-que-e")
                      .map((topico, index) => (
                        <div key={index}>
                          <h3>{topico.titulo}</h3>
                          <li data-aos="fade-right" data-aos-duration="2000">
                            {topico.conteudo}
                          </li>
                          <li data-aos="fade-right" data-aos-duration="2000">
                            {topico.conteudo1}
                          </li>
                        </div>
                      ))}
                  </>
                ) : action.ataNotarial ? (
                  <>
                    {textosDeAtaNotarial
                      .filter((topico) => topico.id === "o-que-e")
                      .map((topico, index) => (
                        <div key={index}>
                          <h3>{topico.titulo}</h3>
                          <li data-aos="fade-right" data-aos-duration="2000">
                            {topico.conteudo}
                          </li>
                          <li data-aos="fade-right" data-aos-duration="2000">
                            {topico.conteudo1}
                          </li>
                        </div>
                      ))}
                  </>
                ) : action.testamento ? (
                  <>
                    {textosDeTestamento
                      .filter((topico) => topico.id === "o-que-e")
                      .map((topico, index) => (
                        <div key={index}>
                          <h3>{topico.titulo}</h3>
                          <li data-aos="fade-right" data-aos-duration="2000">
                            {topico.conteudo}
                          </li>
                          <li data-aos="fade-right" data-aos-duration="2000">
                            {topico.conteudo1}
                          </li>
                        </div>
                      ))}
                  </>
                ) : action.procuracao ? (
                  <>
                    {textosDeProcuracao
                      .filter((topico) => topico.id === "o-que-e")
                      .map((topico, index) => (
                        <div key={index}>
                          <h3>{topico.titulo}</h3>
                          <li data-aos="fade-right" data-aos-duration="2000">
                            {topico.conteudo}
                          </li>
                          <li data-aos="fade-right" data-aos-duration="2000">
                            {topico.conteudo1}
                          </li>
                        </div>
                      ))}
                  </>
                ) : action.autenticacao ? (
                  <>
                    {textosDeAutenticacao
                      .filter((topico) => topico.id === "o-que-e")
                      .map((topico, index) => (
                        <div key={index}>
                          <h3>{topico.titulo}</h3>
                          <li data-aos="fade-right" data-aos-duration="2000">
                            {topico.conteudo}
                          </li>
                          <li data-aos="fade-right" data-aos-duration="2000">
                            {topico.conteudo1}
                          </li>
                        </div>
                      ))}
                  </>
                ) : action.atosDigitais ? (
                  <>
                    {textoAtosDigitais
                      .filter((topico) => topico.id === "o-que-e")
                      .map((topico, index) => (
                        <div key={index}>
                          <h3>{topico.titulo}</h3>
                          <li data-aos="fade-right" data-aos-duration="2000">
                            {topico.conteudo}
                          </li>
                          <li data-aos="fade-right" data-aos-duration="2000">
                            {topico.conteudo1}
                          </li>
                          <li data-aos="fade-right" data-aos-duration="2000">
                            {topico.conteudo2}
                          </li>
                        </div>
                      ))}
                  </>
                ) : action.escrituraCompraVenda ? (
                  <>
                    {textosDeEscrituraCompraVenda
                      .filter((topico) => topico.id === "o-que-e")
                      .map((topico, index) => (
                        <div key={index}>
                          <h3>{topico.titulo}</h3>
                          <li data-aos="fade-right" data-aos-duration="2000">
                            {topico.conteudo}
                          </li>
                          <li data-aos="fade-right" data-aos-duration="2000">
                            {topico.conteudo1}
                          </li>
                        </div>
                      ))}
                  </>
                ) : (
                  <>
                    {textoApresentacao.map((topico, index) => (
                      <div
                        key={index}
                        style={{
                          display: "flex",
                          justifyContent: "center",
                          margin: "0 auto",
                          textAlign: "center",
                          width: "100%",
                          fontSize: "1.5rem",
                        }}
                      >
                        <h4 data-aos="fade-right" data-aos-duration="2000">
                          {topico.conteudo}
                        </h4>
                      </div>
                    ))}
                  </>
                )}
              </>
            )}
          </ul>
        </div>
        <div className="container-documentation-procedure">
          <fieldset className="field-1">
            <legend>DOCUMENTAÇÃO NECESSÁRIA</legend>
            {action.abertura ? (
              <>
                {/* COMPONENTE VAI AQUI */}
                {textosDeAberturaFirma
                  .filter((topico) => topico.id === "documentacao")
                  .map((topico, index) => (
                    <div
                      key={index}
                      data-aos="zoom-in"
                      data-aos-duration="2000"
                    >
                      <h3>{topico.titulo}</h3>
                      <li>{topico.conteudo}</li>
                      <li>{topico.taxa}</li>
                    </div>
                  ))}
              </>
            ) : action.apostilamento ? (
              <>
                {textosDeApostilamento
                  .filter((topico) => topico.id === "documentacao")
                  .map((topico, index) => (
                    <div
                      key={index}
                      data-aos="zoom-in"
                      data-aos-duration="2000"
                    >
                      <h3>{topico.titulo}</h3>
                      <h4>{topico.conteudo1}</h4>
                      <li>{topico.conteudo2}</li>
                      <li>{topico.conteudo3}</li>
                      <li>{topico.conteudo4}</li>
                      <li>{topico.conteudo5}</li>
                      <li>{topico.conteudo6}</li>
                      <li>{topico.conteudo7}</li>
                      <li>{topico.taxa}</li>
                    </div>
                  ))}
              </>
            ) : action.certidaoEscritura ? (
              <>
                {textosDeCertidaoEscritura
                  .filter((topico) => topico.id === "documentacao")
                  .map((topico, index) => (
                    <div
                      key={index}
                      data-aos="zoom-in"
                      data-aos-duration="2000"
                    >
                      <h3>{topico.titulo}</h3>
                      <li>{topico.conteudo}</li>
                      <li>{topico.conteudo1}</li>
                      <li>{topico.conteudo2}</li>
                      <li>{topico.conteudo3}</li>
                      <li>{topico.taxa}</li>
                    </div>
                  ))}
              </>
            ) : action.certidaoProcuracao ? (
              <>
                {textosDeCertidaoProcuracao
                  .filter((topico) => topico.id === "documentacao")
                  .map((topico, index) => (
                    <div
                      key={index}
                      data-aos="zoom-in"
                      data-aos-duration="2000"
                    >
                      <h3>{topico.titulo}</h3>
                      <li>{topico.conteudo}</li>
                      <li>{topico.conteudo1}</li>
                      <li>{topico.conteudo2}</li>
                      <li>{topico.conteudo3}</li>
                      <li>{topico.taxa}</li>
                    </div>
                  ))}
              </>
            ) : action.certidaoSubstabelecimento ? (
              <>
                {textosDeCertidaoSubstabelecimento
                  .filter((topico) => topico.id === "documentacao")
                  .map((topico, index) => (
                    <div
                      key={index}
                      data-aos="zoom-in"
                      data-aos-duration="2000"
                    >
                      <h3>{topico.titulo}</h3>
                      <li>{topico.conteudo}</li>
                      <li>{topico.conteudo1}</li>
                      <li>{topico.conteudo2}</li>
                      <li>{topico.conteudo3}</li>
                      <li>{topico.taxa}</li>
                    </div>
                  ))}
              </>
            ) : action.confirmacaoProcuracao ? (
              <>
                {textosDeConfirmacaoProcuracao
                  .filter((topico) => topico.id === "documentacao")
                  .map((topico, index) => (
                    <div
                      key={index}
                      data-aos="zoom-in"
                      data-aos-duration="2000"
                    >
                      <h3>{topico.titulo}</h3>
                      <li>{topico.conteudo}</li>
                      <li>{topico.conteudo1}</li>
                      <li>{topico.conteudo2}</li>
                      <li>{topico.conteudo3}</li>
                      <li>{topico.taxa}</li>
                    </div>
                  ))}
              </>
            ) : action.divorcioExtrajudicial ? (
              <>
                {textosDeDivorcio
                  .filter((topico) => topico.id === "documentacao")
                  .map((topico, index) => (
                    <div
                      key={index}
                      data-aos="zoom-in"
                      data-aos-duration="2000"
                    >
                      <h3>{topico.titulo}</h3>
                      <li>{topico.conteudo}</li>
                      <li>{topico.conteudo1}</li>
                      <li>{topico.conteudo2}</li>
                      <li>{topico.conteudo3}</li>
                      <li>{topico.conteudo4}</li>
                      <li>{topico.taxa}</li>
                    </div>
                  ))}
              </>
            ) : action.inventarioPartilha ? (
              <>
                {textosDeInventarioPartilha
                  .filter((topico) => topico.id === "documentacao")
                  .map((topico, index) => (
                    <div
                      key={index}
                      data-aos="zoom-in"
                      data-aos-duration="2000"
                    >
                      <h3>{topico.titulo}</h3>
                      <li>{topico.conteudo}</li>
                      <li>{topico.conteudo1}</li>
                      <li>{topico.conteudo2}</li>
                      <li>{topico.conteudo3}</li>
                      <li>{topico.taxa}</li>
                    </div>
                  ))}
              </>
            ) : action.ataNotarial ? (
              <>
                {textosDeAtaNotarial
                  .filter((topico) => topico.id === "documentacao")
                  .map((topico, index) => (
                    <div
                      key={index}
                      data-aos="zoom-in"
                      data-aos-duration="2000"
                    >
                      <h3>{topico.titulo}</h3>
                      <li>{topico.conteudo}</li>
                      <li>{topico.conteudo1}</li>
                      <li>{topico.conteudo2}</li>
                      <li>{topico.taxa}</li>
                    </div>
                  ))}
              </>
            ) : action.testamento ? (
              <>
                {textosDeTestamento
                  .filter((topico) => topico.id === "documentacao")
                  .map((topico, index) => (
                    <div
                      key={index}
                      data-aos="zoom-in"
                      data-aos-duration="2000"
                    >
                      <h3>{topico.titulo}</h3>
                      <li>{topico.conteudo}</li>
                      <li>{topico.conteudo1}</li>
                      <li>{topico.conteudo2}</li>
                      <li>{topico.taxa}</li>
                    </div>
                  ))}
              </>
            ) : action.procuracao ? (
              <>
                {textosDeProcuracao
                  .filter((topico) => topico.id === "documentacao")
                  .map((topico, index) => (
                    <div
                      key={index}
                      data-aos="zoom-in"
                      data-aos-duration="2000"
                    >
                      <h3>{topico.titulo}</h3>
                      <li>{topico.conteudo}</li>
                      <li>{topico.conteudo1}</li>
                      <li>{topico.conteudo2}</li>
                      <li>{topico.conteudo3}</li>
                      <li>{topico.conteudo4}</li>
                      <li>{topico.conteudo5}</li>
                      <li>{topico.taxa}</li>
                    </div>
                  ))}
              </>
            ) : action.autenticacao ? (
              <>
                {textosDeAutenticacao
                  .filter((topico) => topico.id === "documentacao")
                  .map((topico, index) => (
                    <div
                      key={index}
                      data-aos="zoom-in"
                      data-aos-duration="2000"
                    >
                      <h3>{topico.titulo}</h3>
                      <li>{topico.conteudo}</li>
                      <li>{topico.conteudo1}</li>
                      <li>{topico.taxa}</li>
                    </div>
                  ))}
              </>
            ) : action.escrituraCompraVenda ? (
              <>
                {textosDeEscrituraCompraVenda
                  .filter((topico) => topico.id === "documentacao")
                  .map((topico, index) => (
                    <div
                      key={index}
                      data-aos="zoom-in"
                      data-aos-duration="2000"
                    >
                      <h3>{topico.titulo}</h3>
                      <li>{topico.conteudo}</li>
                      <li>{topico.conteudo1}</li>
                      <li>{topico.conteudo2}</li>
                      <li>{topico.taxa}</li>
                    </div>
                  ))}
              </>
            ) : (
              <></>
            )}
          </fieldset>
          <fieldset className="field-2">
            <legend>PROCEDIMENTO</legend>
            {action.abertura ? (
              <>
                {/* COMPONENTE VAI AQUI */}
                {textosDeAberturaFirma
                  .filter((topico) => topico.id === "procedimento")
                  .map((topico, index) => (
                    <div
                      key={index}
                      data-aos="zoom-in"
                      data-aos-duration="2000"
                    >
                      <h3>{topico.titulo}</h3>
                      <li>{topico.conteudo}</li>
                    </div>
                  ))}
              </>
            ) : action.apostilamento ? (
              <>
                {textosDeApostilamento
                  .filter((topico) => topico.id === "procedimento")
                  .map((topico, index) => (
                    <div
                      key={index}
                      data-aos="zoom-in"
                      data-aos-duration="2000"
                    >
                      <h3>{topico.titulo}</h3>
                      <li>{topico.conteudo}</li>
                      <li>{topico.conteudo1}</li>
                      <li>{topico.conteudo2}</li>
                    </div>
                  ))}
              </>
            ) : action.certidaoEscritura ? (
              <>
                {textosDeCertidaoEscritura
                  .filter((topico) => topico.id === "procedimento")
                  .map((topico, index) => (
                    <div
                      key={index}
                      data-aos="zoom-in"
                      data-aos-duration="2000"
                    >
                      <h3>{topico.titulo}</h3>
                      <li>{topico.conteudo}</li>
                      <li>{topico.conteudo1}</li>
                      <li>{topico.conteudo2}</li>
                      <li>{topico.conteudo3}</li>
                    </div>
                  ))}
              </>
            ) : action.certidaoProcuracao ? (
              <>
                {textosDeCertidaoProcuracao
                  .filter((topico) => topico.id === "procedimento")
                  .map((topico, index) => (
                    <div
                      key={index}
                      data-aos="zoom-in"
                      data-aos-duration="2000"
                    >
                      <h3>{topico.titulo}</h3>
                      <li>{topico.conteudo}</li>
                      <li>{topico.conteudo1}</li>
                      <li>{topico.conteudo2}</li>
                      <li>{topico.conteudo3}</li>
                    </div>
                  ))}
              </>
            ) : action.certidaoSubstabelecimento ? (
              <>
                {textosDeCertidaoSubstabelecimento
                  .filter((topico) => topico.id === "procedimento")
                  .map((topico, index) => (
                    <div
                      key={index}
                      data-aos="zoom-in"
                      data-aos-duration="2000"
                    >
                      <h3>{topico.titulo}</h3>
                      <li>{topico.conteudo}</li>
                      <li>{topico.conteudo1}</li>
                      <li>{topico.conteudo2}</li>
                      <li>{topico.conteudo3}</li>
                    </div>
                  ))}
              </>
            ) : action.confirmacaoProcuracao ? (
              <>
                {textosDeConfirmacaoProcuracao
                  .filter((topico) => topico.id === "procedimento")
                  .map((topico, index) => (
                    <div
                      key={index}
                      data-aos="zoom-in"
                      data-aos-duration="2000"
                    >
                      <h3>{topico.titulo}</h3>
                      <li>{topico.conteudo}</li>
                      <li>{topico.conteudo1}</li>
                      <li>{topico.conteudo2}</li>
                      <li>{topico.conteudo3}</li>
                    </div>
                  ))}
              </>
            ) : action.divorcioExtrajudicial ? (
              <>
                {textosDeDivorcio
                  .filter((topico) => topico.id === "procedimento")
                  .map((topico, index) => (
                    <div
                      key={index}
                      data-aos="zoom-in"
                      data-aos-duration="2000"
                    >
                      <h3>{topico.titulo}</h3>
                      <li>{topico.conteudo}</li>
                      <li>{topico.conteudo1}</li>
                      <li>{topico.conteudo2}</li>
                    </div>
                  ))}
              </>
            ) : action.inventarioPartilha ? (
              <>
                {textosDeInventarioPartilha
                  .filter((topico) => topico.id === "procedimento")
                  .map((topico, index) => (
                    <div
                      key={index}
                      data-aos="zoom-in"
                      data-aos-duration="2000"
                    >
                      <h3>{topico.titulo}</h3>
                      <li>{topico.conteudo}</li>
                      <li>{topico.conteudo1}</li>
                      <li>{topico.conteudo2}</li>
                      <li>{topico.conteudo3}</li>
                      <li>{topico.conteudo4}</li>
                    </div>
                  ))}
              </>
            ) : action.ataNotarial ? (
              <>
                {textosDeAtaNotarial
                  .filter((topico) => topico.id === "procedimento")
                  .map((topico, index) => (
                    <div
                      key={index}
                      data-aos="zoom-in"
                      data-aos-duration="2000"
                    >
                      <h3>{topico.titulo}</h3>
                      <li>{topico.conteudo}</li>
                      <li>{topico.conteudo1}</li>
                      <li>{topico.conteudo2}</li>
                      <li>{topico.conteudo3}</li>
                    </div>
                  ))}
              </>
            ) : action.testamento ? (
              <>
                {textosDeTestamento
                  .filter((topico) => topico.id === "procedimento")
                  .map((topico, index) => (
                    <div
                      key={index}
                      data-aos="zoom-in"
                      data-aos-duration="2000"
                    >
                      <h3>{topico.titulo}</h3>
                      <li>{topico.conteudo}</li>
                      <li>{topico.conteudo1}</li>
                      <li>{topico.conteudo2}</li>
                      <li>{topico.conteudo3}</li>
                    </div>
                  ))}
              </>
            ) : action.procuracao ? (
              <>
                {textosDeProcuracao
                  .filter((topico) => topico.id === "procedimento")
                  .map((topico, index) => (
                    <div
                      key={index}
                      data-aos="zoom-in"
                      data-aos-duration="2000"
                    >
                      <h3>{topico.titulo}</h3>
                      <li>{topico.conteudo}</li>
                      <li>{topico.conteudo1}</li>
                      <li>{topico.conteudo2}</li>
                      <li>{topico.conteudo3}</li>
                    </div>
                  ))}
              </>
            ) : action.autenticacao ? (
              <>
                {textosDeAutenticacao
                  .filter((topico) => topico.id === "procedimento")
                  .map((topico, index) => (
                    <div
                      key={index}
                      data-aos="zoom-in"
                      data-aos-duration="2000"
                    >
                      <h3>{topico.titulo}</h3>
                      <li>{topico.conteudo}</li>
                      <li>{topico.conteudo1}</li>
                      <li>{topico.conteudo2}</li>
                      <li>{topico.conteudo3}</li>
                    </div>
                  ))}
              </>
            ) : action.escrituraCompraVenda ? (
              <>
                {textosDeEscrituraCompraVenda
                  .filter((topico) => topico.id === "procedimento")
                  .map((topico, index) => (
                    <div
                      key={index}
                      data-aos="zoom-in"
                      data-aos-duration="2000"
                    >
                      <h3>{topico.titulo}</h3>
                      <li>{topico.conteudo}</li>
                      <li>{topico.conteudo1}</li>
                      <li>{topico.conteudo2}</li>
                      <li>{topico.conteudo3}</li>
                    </div>
                  ))}
              </>
            ) : (
              <></>
            )}
          </fieldset>
        </div>
      </div>
      <Mensalista />
      <div className="diligencia-container">
        <div>
          <button className="button-bills">Solicite um Orçamento</button>
        </div>
        <div>
          <h3 className="title">DILIGÊNCIA</h3>
          <h4 className="subtitle">LEVAMOS A SUA DEMANDA ATÉ VOCÊ!</h4>
        </div>
      </div>
      <div className="border-top"></div>
      <div style={{ backgroundColor: "#f9f9f951", height: "80vh" }}>
        <div className="title-container">
          <h2>FALE CONOSCO</h2>
          <div className="border" style={{ width: "9%" }} />
        </div>
        <div className="container-form-info-services">
          <div className="container-form">
            <h4 style={{ color: "#1b2838e8", fontSize: "1.25rem" }}>
              PREENCHA O FORMULÁRIO ABAIXO PARA SER ATENDIDO
            </h4>
            <form action="">
              <input type="text" placeholder="Nome*" />
              <input type="text" placeholder="Email" />
              <input type="text" placeholder="Telefone*" />
              <input type="text" placeholder="Assunto*" />
              <textarea name="" id="" placeholder="Mensagem*" rows="13" />
              <br />
            </form>
            <button>ENVIAR MENSAGEM</button>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default servicos;
