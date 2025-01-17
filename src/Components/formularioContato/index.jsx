import "./styles.css";
import "aos/dist/aos.css";
import Aos from "aos";

function Formulariocontato() {
  Aos.init();
  return (
    <>
      <section className="body-talkus">
        <div className="title-container">
          <div className="teste">
            <div className="container-content-text">
              <h3 style={{ fontSize: "2.5rem" }}>
                Precisando de agilidade nos seus atos notariais?
              </h3>
              <h2 style={{ fontSize: "1.5rem" }}>
                Saiba na prática como podemos agilizar suas demandas e finalizar
                os processos em prazos surpreendentes.
              </h2>
              <h2 style={{ fontSize: "1.5rem" }}>
                Entre em contato com nossos profissionais e inicie o seu
                processo ainda hoje.
              </h2>
            </div>
            <div className="container-arrow-textForm">
              <span className="fa-regular fa-circle-right" />
              <h4 style={{ color: "#fff", fontSize: "1.5rem", width: "100%" }}>
                PREENCHA O FORMULÁRIO PARA SER ATENDIDO
              </h4>
            </div>
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
                <input type="text" placeholder="Nome*" />
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
                <input type="text" placeholder="Telefone*" />
              </div>
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  width: "100%",
                }}
              >
                <h1 style={{ textAlign: "left" }}>Assunto</h1>
                <input type="text" placeholder="Assunto*" />
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
                <input type="text" placeholder="Cidade*" />
              </div>
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  width: "100%",
                }}
              >
                <h1 style={{ textAlign: "left" }}>Estado</h1>
                <input type="text" placeholder="Estado*" />
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
              <textarea name="" id="" placeholder="Mensagem*" rows="10" />
            </div>
            <h1 style={{ textAlign: "left", color: "#000" }}>
              Tipo de Servico
            </h1>
            <select name="" id="">
              <option value="">Selecione</option>
              <option value="">Escritura de imovel</option>
              <option value="">Inventario</option>
              <option value="">Ata Notarial</option>
            </select>
            <div className="container-button-send">
              <button>ENVIAR MENSAGEM</button>
            </div>
          </div>
        </form>
      </section>
    </>
  );
}

export default Formulariocontato;
