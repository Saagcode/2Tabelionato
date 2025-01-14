import { useState, useEffect } from "react";
import Footer from "../../Components/Footer";
import Head from "../../Components/Head";
import "./styles.css";
import { Link, useLocation } from "react-router-dom";
import { textosDeAberturaFirma } from "./aberturaDeFirma/index";
import { textoApresentacao } from "./apresentacao";
import { textosDeApostilamento } from "./apostilamento";
import contract from "../../../public/images/contract.gif"

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
    } else {
      setAction({ abertura: false, apostilamento: false });
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
  });
  function handleTypeAction(item) {
    setAction({
      abertura: item === "abertura",
      apostilamento: item === "apostilamento",
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
              <div onClick={handleShowMenu}>
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
                        <li
                          className="menu-options"
                          data-aos="fade-down"
                          data-aos-duration="500"
                          data-aos-offset="0"
                        >
                          <span className="fa-solid fa-certificate" /> Certidão
                          de escritura
                        </li>
                        <li
                          className="menu-options"
                          data-aos="fade-down"
                          data-aos-duration="500"
                          data-aos-offset="0"
                        >
                          <span className="fa-solid fa-certificate" /> Certidão
                          de procuração
                        </li>
                        <li
                          className="menu-options"
                          data-aos="fade-down"
                          data-aos-duration="500"
                          data-aos-offset="0"
                        >
                          <span className="fa-solid fa-certificate" /> Certidão
                          de substabelecimento
                        </li>
                        <li
                          className="menu-options"
                          data-aos="fade-down"
                          data-aos-duration="500"
                          data-aos-offset="0"
                        >
                          <span className="fa-solid fa-certificate" />{" "}
                          Confirmação de procuração
                        </li>
                        <div
                          className="border-li"
                          data-aos="fade-in"
                          data-aos-duration="2000"
                          data-aos-offset="0"
                        />
                      </>
                    ) : (
                      <></>
                    )}
                    <li
                      data-aos="fade-down"
                      data-aos-duration="500"
                      data-aos-offset="0"
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
                        <li
                          className="menu-options"
                          data-aos="fade-down"
                          data-aos-duration="500"
                          data-aos-offset="0"
                        >
                          <span className="fa-solid fa-file-contract" /> Compra
                          e venda
                        </li>
                        <li
                          className="menu-options"
                          data-aos="fade-down"
                          data-aos-duration="500"
                          data-aos-offset="0"
                        >
                          <span className="fa-solid fa-file-contract" /> Permuta
                        </li>
                        <li
                          className="menu-options"
                          data-aos="fade-down"
                          data-aos-duration="500"
                          data-aos-offset="0"
                        >
                          <span className="fa-solid fa-file-contract" /> União
                          Estável | Dissolução
                        </li>
                        <li
                          className="menu-options"
                          data-aos="fade-down"
                          data-aos-duration="500"
                          data-aos-offset="0"
                        >
                          <span className="fa-solid fa-file-contract" />{" "}
                          Estremação
                        </li>
                        <li
                          className="menu-options"
                          data-aos="fade-down"
                          data-aos-duration="500"
                          data-aos-offset="0"
                        >
                          <span className="fa-solid fa-file-contract" />{" "}
                          Extinção de Condomínio
                        </li>
                        <li
                          className="menu-options"
                          data-aos="fade-down"
                          data-aos-duration="500"
                          data-aos-offset="0"
                        >
                          <span className="fa-solid fa-file-contract" />{" "}
                          Servidão de passagem
                        </li>
                        <li
                          className="menu-options"
                          data-aos="fade-down"
                          data-aos-duration="500"
                          data-aos-offset="0"
                        >
                          <span className="fa-solid fa-file-contract" /> Divisão
                          amigável
                        </li>
                        <div
                          className="border-li"
                          data-aos="fade-in"
                          data-aos-duration="2000"
                          data-aos-offset="0"
                        />
                      </>
                    ) : (
                      <></>
                    )}
                    <li
                      className="menu_without_options"
                      data-aos="fade-down"
                      data-aos-duration="500"
                      data-aos-offset="0"
                    >
                      <span className="fa-solid fa-right-left" />
                      Inventario e Partilha
                    </li>
                    <li
                      className="menu_without_options"
                      data-aos="fade-down"
                      data-aos-duration="500"
                      data-aos-offset="0"
                    >
                      <span className="fa-solid fa-copy" />
                      Ata Notarial
                    </li>
                    <li
                      className="menu_without_options"
                      data-aos="fade-down"
                      data-aos-duration="500"
                      data-aos-offset="0"
                    >
                      <span className="fa-solid fa-pen-clip" />
                      Divorcio Extrajudicial
                    </li>
                    <Link to={{ search: '?section=apostilamento' }} style={{ display: 'flex', justifyContent: 'right' }}>
                      <li
                        className="menu_without_options"
                        data-aos="fade-down"
                        data-aos-duration="500"
                        data-aos-offset="0"
                        onClick={() => handleTypeAction("apostilamento")}
                      >
                        <span className="fa-solid fa-shield" />
                        Apostilamento
                      </li>
                    </Link>
                    <li
                      className="menu_without_options"
                      data-aos="fade-down"
                      data-aos-duration="500"
                      data-aos-offset="0"
                    >
                      <span className="fa-solid fa-book" />
                      Testamento
                    </li>
                    <li
                      className={openMenu.menuDigital ? "menu-changed" : "menu"}
                      onClick={() => handleOpenMenu("menuDigital")}
                    >
                      <span className="fa-solid fa-lock" />
                      Atos Digitais
                    </li>
                    {openMenu.menuDigital ? (
                      <>
                        <li
                          className="menu-options"
                          data-aos="fade-down"
                          data-aos-duration="500"
                          data-aos-offset="0"
                        >
                          <span className="fa-solid fa-lock" /> Certificado
                          digital
                        </li>
                        <li
                          className="menu-options"
                          data-aos="fade-down"
                          data-aos-duration="500"
                          data-aos-offset="0"
                        >
                          <span className="fa-solid fa-lock" /> Assinatura
                          digital
                        </li>
                        <li
                          className="menu-options"
                          data-aos="fade-down"
                          data-aos-duration="500"
                          data-aos-offset="0"
                        >
                          <span className="fa-solid fa-lock" /> Atos Eletrônicos
                        </li>
                        <div
                          className="border-li"
                          data-aos="fade-in"
                          data-aos-duration="2000"
                          data-aos-offset="0"
                        />
                      </>
                    ) : (
                      <></>
                    )}
                    <li className="menu_without_options">
                      <span className="fa-solid fa-file-signature" />
                      Procuração
                    </li>
                    <Link to={{ search: '?section=aberturadefirma' }} style={{ display: 'flex', justifyContent: 'right' }}>
                      <li
                        className="menu_without_options"
                        onClick={() => handleTypeAction("abertura")}
                      >
                        <span className="fa-solid fa-signature" />
                        Reconhecimento de firma
                      </li>
                    </Link>

                    <li className="menu_without_options">
                      <span className="fa-solid fa-check-to-slot" />
                      Autenticação de documentos
                    </li>
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
                          <li>{topico.conteudo}</li>
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
                          <li>{topico.conteudo}</li>
                          <li>{topico.conteudo1}</li>
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
                        <h4>{topico.conteudo}</h4>
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
                    <div key={index}>
                      <h3>{topico.titulo}</h3>
                      <li>{topico.conteudo}</li>
                    </div>
                  ))}
              </>
            ) : action.apostilamento ? (
              <>
                {textosDeApostilamento
                  .filter((topico) => topico.id === "documentacao")
                  .map((topico, index) => (
                    <div key={index}>
                      <h3>{topico.titulo}</h3>
                      <h4>{topico.conteudo1}</h4>
                      <li>{topico.conteudo2}</li>
                      <li>{topico.conteudo3}</li>
                      <li>{topico.conteudo4}</li>
                      <li>{topico.conteudo5}</li>
                      <li>{topico.conteudo6}</li>
                      <li>{topico.conteudo7}</li>
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
                    <div key={index}>
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
          </fieldset>
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
