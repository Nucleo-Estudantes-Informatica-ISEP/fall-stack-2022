import { FunctionComponent, useRef } from 'react';
import Logo from '../../assets/images/logo.png';
import Content from '../Content';
import Footer from '../Footer';
import GenericContainer from '../GenericContainer';
import Header from '../Header';
import HeroContainer from '../HeroContainer';

const App: FunctionComponent = () => {
    const contentRef = useRef<HTMLDivElement>(null);

    return (
        <HeroContainer>
            <GenericContainer>
                <Header
                    logoSrc={Logo}
                    logoAlt="Logo principal do evento Fall-Stack 2022"
                    eventName="Fallstack 22/23"
                    eventDate="19 e 20 de Dezembro"
                    contentRef={contentRef}
                />
                <Content contentRef={contentRef} />
                <Footer lastEditionUrl="https://fallstack-21-22.nei-isep.org/" />
            </GenericContainer>
        </HeroContainer>
    );
};

export default App;
