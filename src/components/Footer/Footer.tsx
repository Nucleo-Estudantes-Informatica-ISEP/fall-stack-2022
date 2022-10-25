import { FunctionComponent } from 'react';
import './Footer.scss';
interface FooterProps {}

const Footer: FunctionComponent<FooterProps> = () => {
    return (
        <footer className="footer__container">
            <div className="footer__last__edition__container" id="last-edition-wrapper">
                <div className="footer__last__edition__animation">
                    <a
                        className="footer__last__edition__link"
                        href="https://fallstack2020.nei-isep.org"
                        target="_blank"
                        rel="noreferrer">
                        <div className="footer__last__edition__link__text">Edição Anterior</div>
                    </a>
                </div>
            </div>
        </footer>
    );
};
export default Footer;
