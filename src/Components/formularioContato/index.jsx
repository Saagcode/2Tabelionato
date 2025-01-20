import "./styles.css";
import "aos/dist/aos.css";
import Aos from "aos";
import { useState, useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";

function Formulariocontato() {
  const [change, setChange] = useState(false);
  const [changeSend, setChangeSend] = useState(false);
  const [serviceType, setServiceType] = useState("selecionar");
  const [formValues, setFormValues] = useState({
    nome: "",
    telefone: "",
    assunto: "",
    cidade: "",
    estado: "",
    observacoes: "",
  });
  const location = useLocation();
  const navigate = useNavigate();

  // Lê o parâmetro 'section' da URL
  const queryParams = new URLSearchParams(location.search);
  const section = queryParams.get("section");

  // Atualiza o estado do formulário com base no valor de 'section'

  useEffect(() => {
    const isFormValid =
      Object.values(formValues).every((value) => value.trim() !== "") &&
      serviceType !== "selecionar";
    setChangeSend(isFormValid);
  }, [formValues, serviceType]);

  function handleWriteSomething(e) {
    const { name, value } = e.target;
    setFormValues({ ...formValues, [name]: value });
  }
  function handleSelectService(e) {
    const selectedValue = e.target.value;
    if (selectedValue === "" || selectedValue === "selecionar") {
      setChange(false);
    } else {
      setChange(true);
    }
    setServiceType(selectedValue);
  }

  function placeHolder() {
    if (serviceType === "selecionar") {
      return "Mensagem*";
    } else if (serviceType === "") {
      return "DIGITE O TIPO DE SERVIÇO DESEJADO AQUI*";
    }
    return `Mensagem*`;
  }

  function handleSelectDocumentation(e) {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
    e.preventDefault();
    const selectElement = document.querySelector("#tipo");
    const selectedValue = selectElement.value;
    if (change === "escrituraCompraVenda") {
      setChange(selectedValue === "escrituraCompraVenda");
    } else if (change === "inventarioPartilha") {
      setChange(selectedValue === "inventarioPartilha");
    } else if (change === "ataNotarial") {
      setChange(selectedValue === "ataNotarial");
    } else if (change === "divorcioExtrajudicial") {
      setChange(selectedValue === "divorcioExtrajudicial");
    } else if (change === "certidaoEscritura") {
      setChange(selectedValue === "certidaoEscritura");
    } else if (change === "apostilamento") {
      setChange(selectedValue === "apostilamento");
    } else if (change === "selecionar") {
      setChange(selectedValue === "");
    }

    const currentPath =
      location.pathname === "/"
        ? "/servicos"
        : location.pathname.replace(/\/$/, "");
    const newUrl = `${currentPath}?section=${selectedValue}`;
    navigate(newUrl, { replace: true });
  }
  Aos.init();
  return (
    <>
      <section className="body-talkus">
        <div className="title-container">
          <div className="container-content-text">
            <h3 style={{ fontSize: "2.5rem" }}>
              Precisando de agilidade nos seus atos notariais?
            </h3>
            <h2 style={{ fontSize: "1.5rem" }}>
              Saiba na prática como podemos agilizar suas demandas e finalizar
              os processos em prazos surpreendentes.
            </h2>
            <h2 style={{ fontSize: "1.5rem" }}>
              Entre em contato com nossos profissionais e inicie o seu processo
              ainda hoje.
            </h2>
          </div>
          <div className="container-arrow-textForm">
            <span className="fa-regular fa-circle-right" />
            <h4 style={{ color: "#fff", fontSize: "1.5rem", width: "100%" }}>
              PREENCHA O FORMULÁRIO PARA SER ATENDIDO
            </h4>
          </div>
        </div>
        <form action="">
          <div
            className="container-form"
            data-aos="fade-down"
            data-aos-duration="1000"
          >
            <div className="content-name-email">
              <div>
                <h1 style={{ textAlign: "left" }}>Nome</h1>
                <input
                  type="text"
                  placeholder="Nome*"
                  value={formValues.nome}
                  name="nome"
                  onChange={handleWriteSomething}
                />
              </div>
              <div>
                <h1 style={{ textAlign: "left" }}>E-mail</h1>
                <input type="text" placeholder="Email" />
              </div>
            </div>
            <div className="content-phone-assunto">
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  width: "100%",
                }}
              >
                <h1 style={{ textAlign: "left" }}>Telefone</h1>
                <input
                  type="text"
                  name="telefone"
                  placeholder="Telefone*"
                  value={formValues.telefone}
                  onChange={handleWriteSomething}
                />
              </div>
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  width: "100%",
                }}
              >
                <h1 style={{ textAlign: "left" }}>Assunto</h1>
                <input
                  type="text"
                  name="assunto"
                  placeholder="Assunto*"
                  value={formValues.assunto}
                  onChange={handleWriteSomething}
                />
              </div>
            </div>
            <div className="content-city-state">
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  width: "100%",
                }}
              >
                <h1 style={{ textAlign: "left" }}>Cidade</h1>
                <input
                  type="text"
                  value={formValues.cidade}
                  placeholder="Cidade*"
                  name="cidade"
                  onChange={handleWriteSomething}
                />
              </div>
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  width: "100%",
                }}
              >
                <h1 style={{ textAlign: "left" }}>Estado</h1>
                <input
                  type="text"
                  placeholder="Estado*"
                  name="estado"
                  value={formValues.estado}
                  onChange={handleWriteSomething}
                />
              </div>
            </div>
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "left",
              }}
            >
              <h1 style={{ textAlign: "left", color: "#000" }}>Observações</h1>
              <textarea
                name="observacoes"
                id=""
                placeholder={placeHolder()}
                rows="10"
                value={formValues.observacoes}
                onChange={handleWriteSomething}
              />
            </div>
            <h1 style={{ textAlign: "left", color: "#000" }}>
              Tipo de Servico
            </h1>
            <select name="" id="tipo" onChange={handleSelectService}>
              <option value="selecionar">Selecione*</option>
              <option value="escrituraCompraVenda">Escritura de imovel</option>
              <option value="inventarioPartilha">Inventario</option>
              <option value="ataNotarial">Ata Notarial</option>
              <option value="divorcioExtrajudicial">Divorcio</option>
              <option value="certidaoEscritura">Certidoes</option>
              <option value="apostilamento">Apostilamento</option>
              <option value="">Outros Serviços</option>
            </select>
            <div className="container-btn-functions">
              <button>ESCOLHER ARQUIVOS</button>
              <button
                className={change ? "unblock-btn" : "block-btn"}
                onClick={handleSelectDocumentation}
              >
                DOCUMENTAÇÃO NECESSÁRIA
              </button>
            </div>
            <div className="container-button-send">
              <button className={changeSend ? "unblock-btn" : "block-btn"}>
                ENVIAR MENSAGEM
              </button>
            </div>
          </div>
        </form>
      </section>
    </>
  );
}

export default Formulariocontato;
