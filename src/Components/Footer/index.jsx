import './styles.css'

function Footer() {
    return (
        <>
            <div className="containerFooter">
                <span className="contentPhone">
                    <span className='fa-solid fa-phone' />
                    <div>
                        <h3>
                            Telefone
                        </h3>
                        <h4>
                            47 9999-9999
                        </h4>
                    </div>
                </span>
                <span className="contentEmail">
                    <span className='fa-regular fa-envelope' />
                    <div>
                        <h3>
                            Email
                        </h3>
                        <h4>
                            atendimento@2tabelionatosbs.com.br
                        </h4>
                    </div>
                </span>
                <span className="contentTime">
                    <span className='fa-regular fa-clock' />
                    <div>
                        <h3>
                            Horario de Funcionamento
                        </h3>
                        <h4>
                            SEG - SEX / 8:00 - 18:00
                        </h4>
                        <h4>
                            Agendar atendimento
                        </h4>
                        <h4>
                            Tabela de Emolumentos
                        </h4>
                    </div>
                </span>
                <span className="contentMedia">
                    <span className='fa-brands fa-instagram' />
                </span>
            </div>
            <footer>
                Todos os direitos reservados © 2º Tabelionato de Notas de São Bento do Sul
            </footer>
        </>
    )
}

export default Footer;