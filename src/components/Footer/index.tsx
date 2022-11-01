import { FunctionComponent } from 'react';
import { Facebook, Instagram, Linkedin, Twitter } from 'react-bootstrap-icons';
import './style.css';

interface FooterProps {}

const Footer: FunctionComponent<FooterProps> = () => {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="w-full text-center">
            <div className="m-8 flex justify-center drop-shadow-lg hover:drop-shadow-xl">
                <div className="my-6 w-max  transition-all duration-500 hover:scale-105">
                    <a href="https://fallstack2020.nei-isep.org" target="_blank" rel="noreferrer">
                        <div className="rounded-3xl border-[5px] border-double border-white p-5 font-good__times text-[2.5rem] text-white drop-shadow-3xl transition-all duration-300">
                            Edição Anterior
                        </div>
                    </a>
                </div>
            </div>

            <div className="m-8 flex items-center justify-center">
                <div className="w-max py-4 transition-all duration-500 hover:scale-105">
                    <a href="https://www.nei-isep.org/" target="_blank" rel="noreferrer">
                        <img
                            className="mx-auto block h-auto max-w-full drop-shadow-3xl transition-all duration-300 hover:drop-shadow-4xl"
                            src="../../../src/assets/images/logo-white.png"
                            height="200px"
                            width="350px"
                            alt="Logo branco do Núcleo de Estudantes de Informática do ISEP (NEI)"
                        />
                    </a>
                </div>
            </div>

            <div className="m-8 flex items-center justify-center gap-20">
                <a
                    className="facebook drop-shadow-3xl transition-all duration-200 hover:scale-110 hover:drop-shadow-4xl"
                    href="https://www.facebook.com/nei.isep"
                    target="_blank"
                    rel="noreferrer">
                    <Facebook color="white" size={30} />
                </a>
                <a
                    className="twitter drop-shadow-3xl transition-all duration-200 hover:scale-110 hover:drop-shadow-4xl"
                    href="https://twitter.com/nei_isep"
                    target="_blank"
                    rel="noreferrer">
                    <Twitter color="white" size={30} />
                </a>
                <a
                    className="instagram drop-shadow-3xl transition-all duration-200 hover:scale-110 hover:drop-shadow-4xl"
                    href="https://www.instagram.com/nei_isep"
                    target="_blank"
                    rel="noreferrer">
                    <Instagram color="white" size={30} />
                </a>
                <a
                    className="linkedin drop-shadow-3xl transition-all duration-200 hover:scale-110 hover:drop-shadow-4xl"
                    href="https://www.linkedin.com/company/nei-isep"
                    target="_blank"
                    rel="noreferrer">
                    <Linkedin color="white" size={30} />
                </a>
            </div>

            <h4 className="select-none py-6 text-center font-good__times text-white drop-shadow-3xl">
                Copyright &copy; {currentYear} NEI-ISEP. All rights reserved.
            </h4>
        </footer>
    );
};
export default Footer;
