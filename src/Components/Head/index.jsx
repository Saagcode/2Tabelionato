import './styles.css'
import { Link } from 'react-router-dom';
import 'aos/dist/aos.css';
import Aos from 'aos';
import logo from '../../../public/images/logo.png'
import logotabelionato from '../../../public/images/logotabelionato.png'
import { useEffect, useState } from 'react';

function Head() {
    const [imageIndex, setImageIndex] = useState(0);
    const images = [
        logotabelionato, logo
    ];
    function handleWindow() {
        const scrollY = window.scrollY
        const newIndex = Math.min(Math.floor(scrollY / 5), images.length - 1);
        setImageIndex(newIndex);
    };
    useEffect(() => {
        window.addEventListener('scroll', handleWindow);

        return () => {
            window.removeEventListener('scroll', handleWindow)
        };
    }, []);
    Aos.init()
    return (
        <>
            <section className='topContainer' data-aos="fade-down"
                data-aos-easing="linear"
                data-aos-duration="500">
                <div className='contactInfo'>
                    <h2>
                        <h2 className='phone'>
                            <span className='fa-solid fa-phone' style={{ fontSize: '1rem', padding: ' 0 10px' }} />
                            <span className='phone-1'>
                                (47) 98868-5377
                            </span>
                            <span style={{ padding: '0px 5px', fontStyle: 'bold' }}>
                                |
                            </span>
                            <span className='phone-2'>
                                (47) 3539-9009
                            </span>
                        </h2>
                    </h2>
                </div>
                <div className='mailInfo'>
                    <h2 className='mail'>
                        <span className='fa-regular fa-envelope' style={{ fontSize: '1rem', padding: ' 0 10px' }} />
                        <span>
                            atendimento@2tabelionatosbs.com.br
                        </span>
                    </h2>
                </div>
            </section>
            <div className={imageIndex ? 'container' : 'container_changed'} data-aos="fade-down"
                data-aos-easing="linear"
                data-aos-duration="500">
                <div className={imageIndex ? '' : 'container-images'}>
                    <img src={images[imageIndex]} alt="logo" className={imageIndex ? 'logotipo' : 'logotipo-circle'} />
                    {imageIndex ? (
                        <>
                        </>
                    ) : (
                        <div>
                            <span className='fa-brands fa-instagram' style={{ padding: '6px 10px', border: '2px solid white', borderRadius: '30px', margin: '5px' }} />
                            <span className='fa-brands fa-whatsapp' style={{ fontSize: '2rem', padding: '6px 10px', border: '2px solid white', borderRadius: '30px', margin: '5px' }} />
                            <span className='fa-regular fa-envelope' style={{ padding: '6px 10px', border: '2px solid white', borderRadius: '30px', margin: '5px' }} />
                        </div>
                    )}

                </div>
                <div>
                    <ul>
                        <Link to='/'>
                            <li>
                                INICIO
                            </li>
                        </Link>
                        <Link to='/sobre'>
                            <li>
                                QUEM SOMOS?
                            </li>
                        </Link>
                        <Link to='/servicos'>
                            <li>
                                SERVIÇOS
                            </li>
                        </Link>
                        <Link to='/emolumentos'>
                            <li>
                                TABELA DE EMOLUMENTOS
                            </li>
                        </Link>
                        <Link to='/contato'>
                            <li>
                                CONTATO
                            </li>
                        </Link>
                        {imageIndex ? (
                            <li style={{ margin: '0' }}>
                                <span className='fa-brands fa-instagram' style={{ padding: '6px 10px', border: '2px solid white', borderRadius: '30px' }} />
                                <span className='fa-brands fa-whatsapp' style={{ fontSize: '2rem', padding: '6px 10px', border: '2px solid white', borderRadius: '30px' }} />
                                <span className='fa-regular fa-envelope' style={{ padding: '6px 10px', border: '2px solid white', borderRadius: '30px' }} />
                            </li>
                        ) : (
                            <>
                            </>
                        )}
                    </ul>
                </div>
            </div>
        </>
    )
}

export default Head;