import { useState } from "react";
import Footer from "../../Components/Footer";
import Head from "../../Components/Head";
import "./styles.css";
import { Link } from "react-router-dom";
import aberturaDeFirma from "./aberturaDeFirma";

function servicos() {
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
  return (
    <>
      <Head />
      <div className="container-top-img">
        <div className="body-servicos">
          <h3>ABERTURA E RECONHECIMENTO DE FIRMA</h3>
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
                    <li
                      className="menu_without_options"
                      data-aos="fade-down"
                      data-aos-duration="500"
                      data-aos-offset="0"
                    >
                      <span className="fa-solid fa-shield" />
                      Apostilamento
                    </li>
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
                      </>
                    ) : (
                      <></>
                    )}
                    <li className="menu_without_options">
                      <span className="fa-solid fa-file-signature" />
                      Procuração
                    </li>
                    <Link
                      to={"/servicos"}
                      style={{ display: "flex", justifyContent: "right" }}
                    >
                      <li className="menu_without_options">
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
                <h3>Como funciona?</h3>
                <li>
                  A pessoa interessada se dirige a um cartório com um documento
                  de identidade (RG ou CNH) e realiza o seu registro de
                  assinatura.
                </li>
                <li>
                  O cartório verifica a autenticidade do documento apresentado e
                  procede ao arquivamento da assinatura, tornando-a disponível
                  para futura verificação.
                </li>
              </>
            ) : text.whatIsItFor ? (
              <>
                <h3>Para que serve?</h3>
                <li>
                  Validação de documentos: Quando um indivíduo assina um
                  documento, como um contrato, o cartório pode confirmar que a
                  assinatura é verdadeira.
                </li>
                <li>
                  Autenticação de identidade: Confirma que a assinatura
                  realmente pertence àquela pessoa. Segurança jurídica: Garante
                  que a pessoa é quem diz ser e que sua assinatura é genuína.
                </li>
              </>
            ) : text.whenNecessary ? (
              <>
                <h3>Quando é necessário?</h3>
                <li>
                  Quando uma pessoa vai assinar um contrato ou outro tipo de
                  documento importante e deseja garantir a autenticidade da
                  assinatura.
                </li>
                <li>
                  Em transações imobiliárias, financeiras e em diversas
                  situações que exigem reconhecimento formal de documentos.
                </li>
              </>
            ) : (
              <>
                <h3>O que é?</h3>
                <li>
                  Abertura de firma é o ato de registrar a assinatura de uma
                  pessoa em um cartório de registro de títulos e documentos ou
                  de notas, no qual a pessoa comparece pessoalmente e assina uma
                  ficha própria para que sua assinatura seja arquivada.
                </li>
                <li>
                  Esse procedimento permite que, posteriormente, a assinatura
                  registrada seja reconhecida como válida e autêntica em
                  qualquer documento, quando necessário.
                </li>
              </>
            )}
          </ul>
        </div>
        <div className="container-documentation-procedure">
          <fieldset className="field-1">
            <legend>DOCUMENTAÇÃO NECESSÁRIA</legend>
            <h3>Documento de identificação (RG, CPF, CNH, passaporte).</h3>
            <h3>
              Documentos adicionais: O cartório pode solicitar comprovante de
              residência ou outros documentos, dependendo do procedimento.
            </h3>
            <h3>Taxa:</h3>
          </fieldset>
          <fieldset className="field-2">
            <legend>PROCEDIMENTO</legend>
            <h3>
              Necessário comparecer ao cartório para registrar a assinatura.
            </h3>
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
