import Footer from "../../Components/Footer";
import Head from "../../Components/Head";
import './styles.css'
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import { useState, useEffect } from "react";

function Sobre() {
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


        return () => {
            window.removeEventListener("scroll", handleGoUpArrow);
        };
    }, []);
    function handleScrollWindow() {
        window.scrollTo({
            top: 0,
            behavior: "smooth",
        });
    }
    useEffect(() => {
        handleScrollWindow();
    }, []);
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
            <div className="container-top-img-about">
                <div className="body-servicos">
                    <div>
                        <h3>
                            SOBRE NÓS
                        </h3>
                    </div>
                </div>
            </div>
            <section className="container-Timeline">
                <h1>O 2º TABELIONATO DE NOTAS DE SÃO BENTO DO SUL</h1>
                <VerticalTimeline lineColor={'#cecece7b'}>
                    <VerticalTimelineElement
                        className="vertical-timeline-element--work"
                        contentStyle={{ background: '#1b2838', color: '#fff' }}
                        contentArrowStyle={{ borderRight: '7px solid  #1b2838' }}
                        date="19/08/2024"
                        iconStyle={{ background: '#1b2838', color: '#fff' }}
                        dateClassName="text-date"
                    >
                        <h3 className="vertical-timeline-element-title">História</h3>
                        <h4 className="vertical-timeline-element-subtitle">O 2° Tabelionato de São Bento do Sul foi instaurado pela Tabeliã Karine Stier Vieira no ano de 2024</h4>
                        <p>
                            IMAGEM AQUI
                        </p>
                    </VerticalTimelineElement>
                    <VerticalTimelineElement
                        className="vertical-timeline-element--work"
                        date="2024 - Atualmente"
                        contentStyle={{ background: '#1b2838', color: '#fff' }}
                        contentArrowStyle={{ borderRight: '7px solid  #1b2838' }}
                        iconStyle={{ background: '#1b2838', color: '#fff' }}
                        dateClassName="text-date"
                    >
                        <h3 className="vertical-timeline-element-title">Local</h3>
                        <h4 className="vertical-timeline-element-subtitle">Estamos no ZippererPark, 2° piso, sala 28</h4>
                        <h4 className="vertical-timeline-element-subtitle">Centro de São Bento do Sul</h4>
                        <p>
                            IMAGEM AQUI
                        </p>
                    </VerticalTimelineElement>
                    <VerticalTimelineElement
                        className="vertical-timeline-element--work"
                        date="2025"
                        contentStyle={{ background: '#1b2838', color: '#fff' }}
                        contentArrowStyle={{ borderRight: '7px solid  #1b2838' }}
                        iconStyle={{ background: '#1b2838', color: '#fff' }}
                        dateClassName="text-date"
                    >
                        <h3 className="vertical-timeline-element-title">Nossa Equipe</h3>
                        <h4 className="vertical-timeline-element-subtitle">Profissionais capacitados</h4>
                        <h4 className="vertical-timeline-element-subtitle">Carisma e Excelência para suprir da melhor forma qualquer demanda</h4>
                        <p>
                            IMAGEM AQUI
                        </p>
                    </VerticalTimelineElement>
                    <VerticalTimelineElement
                        className="vertical-timeline-element--work"
                        date="2006 - 2008"
                        dateClassName="text-date"
                        contentStyle={{ background: '#1b2838', color: '#fff' }}
                        contentArrowStyle={{ borderRight: '7px solid  #1b2838' }}
                        iconStyle={{ background: '#1b2838', color: '#fff' }}
                    >
                        <h3 className="vertical-timeline-element-title">Web Designer</h3>
                        <h4 className="vertical-timeline-element-subtitle">San Francisco, CA</h4>
                        <p>
                            User Experience, Visual Design
                        </p>
                    </VerticalTimelineElement>
                    <VerticalTimelineElement
                        className="vertical-timeline-element--education"
                        date="April 2013"
                        dateClassName="text-date"
                        contentStyle={{ background: 'rgb(112, 76, 10)', color: '#fff' }}
                        contentArrowStyle={{ borderRight: '7px solid  rgb(112, 76, 10)' }}
                        iconStyle={{ background: 'rgb(112, 76, 10)', color: '#fff' }}
                    >
                        <h3 className="vertical-timeline-element-title">Content Marketing for Web, Mobile and Social Media</h3>
                        <h4 className="vertical-timeline-element-subtitle">Online Course</h4>
                        <p>
                            Strategy, Social Media
                        </p>
                    </VerticalTimelineElement>
                    <VerticalTimelineElement
                        className="vertical-timeline-element--education"
                        date="November 2012"
                        dateClassName="text-date"
                        contentStyle={{ background: 'rgb(112, 76, 10)', color: '#fff' }}
                        contentArrowStyle={{ borderRight: '7px solid  rgb(112, 76, 10)' }}
                        iconStyle={{ background: 'rgb(112, 76, 10)', color: '#fff' }}

                    >
                        <h3 className="vertical-timeline-element-title">Nossa Estrutura</h3>
                        <h4 className="vertical-timeline-element-subtitle">Estacionamento privativo</h4>
                        <h4 className="vertical-timeline-element-subtitle">Localizado na região central da cidade</h4>
                        <h4 className="vertical-timeline-element-subtitle">Localizado na região central da cidade</h4>
                        <p>
                            IMAGEM AQUI
                        </p>
                    </VerticalTimelineElement>
                    <VerticalTimelineElement
                        className="vertical-timeline-element--education"
                        date="1983 - 2025"
                        dateClassName="text-date"
                        contentStyle={{ background: 'rgb(112, 76, 10)', color: '#fff' }}
                        contentArrowStyle={{ borderRight: '7px solid  rgb(112, 76, 10)' }}
                        iconStyle={{ background: 'rgb(112, 76, 10)', color: '#fff' }}

                    >
                        <h3 className="vertical-timeline-element-title">A Tabeliã</h3>
                        <h4 className="vertical-timeline-element-subtitle">Karine Stier Vieira, natural de Joinville/SC</h4>
                        <h4 className="vertical-timeline-element-subtitle">Experiencia profissional aqui</h4>
                        <h4 className="vertical-timeline-element-subtitle">Experiencia profissional aqui</h4>
                        <p>
                            IMAGEM AQUI
                        </p>
                    </VerticalTimelineElement>
                    <VerticalTimelineElement
                        iconStyle={{ background: 'rgb(112, 76, 10)', color: '#fff' }}
                    />
                </VerticalTimeline>
            </section>
            <Footer />
        </>
    )
}

export default Sobre;