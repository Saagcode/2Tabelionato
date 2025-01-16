import "./styles.css";

function Formulariocontato() {
  return (
    <>
      <section className="body-talkus">
        <div className="title-container">
          <div className="teste">
            <div className="container-content-text">
              <h3>
                Precisando de agilidade nos seus atos notariais?
              </h3>
              <h2>
                Saiba na prática como podemos agilizar suas demandas e finalizar os processos em prazos surpreendentes.
              </h2>
              <h2>
                Entre em contato com nossos profissionais e inicie o seu processo ainda hoje.
              </h2>
            </div>
            <div className="container-arrow-textForm">
              <span className="fa-regular fa-circle-right" />
              <h4 style={{ color: "#fff", fontSize: "1.25rem" }}>
                PREENCHA O FORMULÁRIO PARA SER ATENDIDO
              </h4>
            </div>
          </div>
          <div className="border" style={{ width: "9%" }} />
        </div>
        <div className="container-form-info">
          <div className="container-form">
            <form action="">
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
                  }}
                >
                  <h1 style={{ textAlign: "left" }}>Telefone</h1>
                  <input type="text" placeholder="Telefone*" />
                </div>
                <div style={{ display: "flex", flexDirection: "column" }}>
                  <h1 style={{ textAlign: "left" }}>Assunto</h1>
                  <input type="text" placeholder="Assunto*" />
                </div>
              </div>
              <div className="content-city-state">
                <div
                  style={{
                    display: "flex",
                    flexDirection: "column",
                  }}
                >
                  <h1 style={{ textAlign: "left" }}>Cidade</h1>
                  <input type="text" placeholder="Cidade*" />
                </div>
                <div
                  style={{
                    display: "flex",
                    flexDirection: "column",
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
                <h1 style={{ textAlign: "left" }}>Observações</h1>
                <textarea name="" id="" placeholder="Mensagem*" rows="10" />
              </div>
              <h1 style={{ textAlign: "left" }}>Tipo de Servico</h1>
              <select name="" id="">
                <option value="">Selecione</option>
                <option value="">Escritura de imovel</option>
                <option value="">Inventario</option>
                <option value="">Ata Notarial</option>
              </select>
              <div className="container-button-send">
                <button>ENVIAR MENSAGEM</button>
              </div>
            </form>
          </div>
        </div>
      </section>
    </>
  );
}

export default Formulariocontato;
