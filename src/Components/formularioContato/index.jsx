import "./styles.css";

function Formulariocontato() {
  return (
    <>
      <section className="body-talkus">
        <div className="title-container">
          <h2>FALE CONOSCO</h2>
          <div className="border" style={{ width: "9%" }} />
        </div>
        <div className="container-form-info">
          <div className="container-form">
            <h4 style={{ color: "#fff", fontSize: "1.25rem" }}>
              PREENCHA O FORMULÁRIO ABAIXO PARA SER ATENDIDO
            </h4>
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
            </form>
            <div className="container-button-send">
              <button>ENVIAR MENSAGEM</button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Formulariocontato;
