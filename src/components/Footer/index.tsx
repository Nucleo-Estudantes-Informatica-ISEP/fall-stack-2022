import { FunctionComponent } from 'react';
import './style.css';
interface FooterProps {}

const Footer: FunctionComponent<FooterProps> = () => {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="w-full text-center">
            <div className="m-8 flex justify-center drop-shadow-lg hover:drop-shadow-xl">
                <div className="my-6 w-max  transition-all duration-500 hover:scale-105 ">
                    <a href="https://fallstack2020.nei-isep.org" target="_blank" rel="noreferrer">
                        <div className="rounded-3xl border-[5px] border-double border-white p-5 font-good__times text-[2.5rem] text-white drop-shadow-3xl transition-all duration-300">
                            Edição Anterior
                        </div>
                    </a>
                </div>
            </div>

            <div
                id="logo-nei"
                className="d-flex align-items-center
        justify-content-center my-3">
                <div id="footer-animation" className="my-3">
                    <a href="https://www.nei-isep.org/" target="_blank" rel="noreferrer">
                        <img
                            id="logo"
                            className="img-fluid d-block mx-auto"
                            src="../../../src/assets/images/logo-white.png"
                            height="200px"
                            width="350px"
                            alt="Logo branco do Núcleo de Estudantes de Informática do ISEP (NEI) "
                        />
                    </a>
                </div>
            </div>

            <p id="social-media" className="my-3">
                <a
                    className="facebook"
                    href="https://www.facebook.com/nei.isep"
                    target="_blank"
                    rel="noreferrer">
                    <i className="bi bi-facebook fb-btn"></i>
                </a>
                <a
                    className="twitter"
                    href="https://twitter.com/nei_isep"
                    target="_blank"
                    rel="noreferrer">
                    <i className="bi bi-twitter tt-btn"></i>
                </a>
                <a
                    className="instagram"
                    href="https://www.instagram.com/nei_isep"
                    target="_blank"
                    rel="noreferrer">
                    <i className="bi bi-instagram ig-btn"></i>
                </a>
                <a
                    className="linkedin"
                    href="https://www.linkedin.com/company/nei-isep"
                    target="_blank"
                    rel="noreferrer">
                    <i className="bi bi-linkedin li-btn"></i>
                </a>
            </p>

            <h4 id="direitos" className="text-light fs-6">
                Copyright &copy; {currentYear} NEI-ISEP. All rights reserved.
            </h4>
        </footer>
    );
};
export default Footer;
