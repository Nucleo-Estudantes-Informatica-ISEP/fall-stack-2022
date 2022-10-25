import { FunctionComponent } from 'react';
import { ChevronDown } from 'react-bootstrap-icons';
import './Header.css';

interface HeaderProps {}

const Header: FunctionComponent<HeaderProps> = () => {
    return (
        <div className="header__container">
            <div className="header__info">
                <img
                    className="header__logo"
                    src="../../../src/assets/images/logo.png"
                    alt="Logo principal do evento Fall-Stack 2022"
                />
                <h5 className="header__text">13 e 14 de janeiro</h5>
                <h1 className="header__text">Fallstack 21/22</h1>
                <h5 className="header__text">
                    <div>The time has come for</div>
                    <span id="header-animated-text"></span>
                    <span id="header-text-cursor">|</span>
                </h5>
            </div>

            <div className="header__scroll">
                <a className="header__scroll__href" href="#content">
                    <ChevronDown color="white" size={30} />
                </a>
            </div>
        </div>
    );
};

export default Header;
