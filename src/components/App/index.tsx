import { FunctionComponent } from 'react';
import Logo from '../../assets/images/logo.png';
import Content from '../Content';
import Footer from '../Footer';
import GenericContainer from '../GenericContainer';
import Header from '../Header';
import HeroContainer from '../HeroContainer';

const App: FunctionComponent = () => {
    return (
        <HeroContainer>
            <GenericContainer>
                <Header
                    logoSrc={Logo}
                    logoAlt="Logo principal do evento Fall-Stack 2022"
                    eventName="Fallstack 21/22"
                    eventDate="13 e 14 de janeiro"
                />
                <Content />
                <Footer lastEditionUrl="https://fallstack2020.nei-isep.org" />
            </GenericContainer>
        </HeroContainer>
    );
};

export default App;
