import { FunctionComponent } from 'react';
import utilStyles from '../../utils.module.scss';
import './Header.module.scss';

interface HeaderProps {}

const Header: FunctionComponent<HeaderProps> = () => {
    return (
        <div className="header__container">
            <div id="header-info" className="text-center">
                <img
                    id="header-logo"
                    className={utilStyles.img__fluid}
                    src="assets/img/logo.png"
                    alt="Logo principal do evento Fall-Stack 2022"
                />
                <h5 className="text-light my-4">13 e 14 de janeiro</h5>
                <h1 className="text-light my-4">Fallstack 21/22</h1>
                <h5 id="header-text" className="text-light mt-4">
                    <div>The time has come for</div>
                    <span id="header-animated-text"></span>
                    <span id="header-text-cursor">|</span>
                </h5>

                <a
                    id="enrollment-text"
                    className="text-light underline my-5"
                    target="_blank"
                    href="https://docs.google.com/forms/d/e/1FAIpQLSeD1gx7vhavvW09w0Ciw2dXQ1H9dy6EoP6telW4hAsI5WihKg/viewform?usp=sf_link"
                    rel="noreferrer">
                    <h5 className="text-light underline" id="header-enrollment-text">
                        Inscreve-te já!
                    </h5>
                </a>
            </div>

            <div id="scroll-div" className="text-center my-4">
                {/* TODO CHECK TAB INDEX */}
                <a id="scroll-href" href="#content">
                    <i className="bi bi-chevron-down fs-2"></i>
                </a>
            </div>
        </div>
    );
};

export default Header;
