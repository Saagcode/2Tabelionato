import "./styles.css";

function Footer() {
  return (
    <>
      <div className="containerFooter">
        <span className="contentPhone">
          <span className="fa-solid fa-phone" />
          <div>
            <h3>Telefone</h3>
            <h4>(47) 98868-5377 | (47) 3539-9009</h4>
          </div>
        </span>
        <span className="contentEmail">
          <span className="fa-regular fa-envelope" />
          <div>
            <h3>Email</h3>
            <h4>atendimento@2tabelionatosbs.com.br</h4>
          </div>
        </span>
        <span className="contentTime">
          <span className="fa-regular fa-clock" />
          <div>
            <h3>Horario de Funcionamento</h3>
            <h4>SEG - SEX / 8:00 - 18:00</h4>
            <h4>Agendar atendimento</h4>
            <h4>Tabela de Emolumentos</h4>
          </div>
        </span>
        <span className="contentLocation">
          <span className="fa-solid fa-location-dot" />
          <div>
            <h3>Endereço</h3>
            <h4>
              Rua Barão do Rio Branco, n.º 197 - sala 2, Zipperer Park
              (Shopping) 2° piso - Centro. CEP 89280-355 / São Bento do Sul -
              Santa Catarina
            </h4>
          </div>
        </span>
      </div>
      <footer>
        Todos os direitos reservados © 2º Tabelionato de Notas de São Bento do
        Sul | Desenvolvido por{" "}
        <span
          onClick={() => window.open("https://www.instagram.com/sabino._g/")}
          style={{ cursor: "pointer", marginLeft: "5px" }}
        >
          Gabriel Sabino
        </span>
      </footer>
    </>
  );
}

export default Footer;
