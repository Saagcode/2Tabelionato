import { useState } from "react";
import Footer from "../../Components/Footer";
import Head from "../../Components/Head";
import './styles.css'

function servicos() {
    const [showMenu, setShowMenu] = useState();
    function handleShowMenu() {
        setShowMenu(!showMenu);
    }
    return (
        <>
            <Head />
            <div className="container-top-img">
                <div className="body-servicos">
                    <h3>
                        ABERTURA E RECONHECIMENTO DE FIRMA
                    </h3>
                </div>
            </div>
            <div className="container-main-content">
                <div className="menu-topics">
                    <ul>
                        <div className='container-options-buttons'>
                            <div onClick={handleShowMenu}>
                                <h3>
                                    SAIBA MAIS
                                </h3>
                            </div>
                            <div>
                                <h3>
                                    SERVIÇOS
                                </h3>
                            </div>
                        </div>
                        {showMenu ? (
                            <>
                                <li data-aos='fade-down' data-aos-duration='1500' data-aos-offset='0' style={{ transition: '0.3s' }}>
                                    Como funciona?
                                </li>
                                <li data-aos='fade-down' data-aos-duration='1500' data-aos-offset='0' style={{ transition: '0.3s' }}>
                                    Para que serve?
                                </li>
                                <li data-aos='fade-down' data-aos-duration='1500' data-aos-offset='0' style={{ transition: '0.3s' }}>
                                    Quando é necessário?
                                </li>
                            </>
                        ) : (
                            <></>
                        )}
                    </ul>
                </div >
                <div className="explanation">
                    <ul>
                        <h3>
                            O que é?
                        </h3>
                        <li>
                            Abertura de firma é o ato de registrar a assinatura de uma pessoa em um cartório de registro
                            de títulos e documentos ou de notas, no qual a pessoa comparece pessoalmente e assina uma ficha
                            própria para que sua assinatura seja arquivada.
                        </li>
                        <li>
                            Esse procedimento permite que, posteriormente, a assinatura registrada seja reconhecida como
                            válida e autêntica em qualquer documento, quando necessário.
                        </li>
                    </ul>
                </div>
                <div className="container-documentation-procedure">
                    <fieldset className="field-1">
                        <legend>
                            DOCUMENTAÇÃO NECESSÁRIA
                        </legend>
                        <h3>
                            Documento de identificação (RG, CPF, CNH, passaporte).
                        </h3>
                        <h3>
                            Documentos adicionais: O cartório pode solicitar comprovante de residência ou outros documentos, dependendo do procedimento.
                        </h3>
                        <h3>
                            Taxa:
                        </h3>
                    </fieldset>
                    <fieldset className="field-2">
                        <legend>
                            PROCEDIMENTO
                        </legend>
                        <h3>
                            Necessário comparecer ao cartório para registrar a assinatura.
                        </h3>
                    </fieldset>
                </div>
            </div >
            <Footer />
        </>
    )
}

export default servicos;