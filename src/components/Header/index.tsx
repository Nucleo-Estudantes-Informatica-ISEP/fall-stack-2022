import { FunctionComponent } from 'react';
import { ChevronDown } from 'react-bootstrap-icons';
import AnimatedText from '../AnimatedText';

interface HeaderProps {
    logoSrc: string;
    logoAlt: string;
    eventDate: string;
    eventName: string;
}

const Header: FunctionComponent<HeaderProps> = ({ logoSrc, logoAlt, eventDate, eventName }) => {
    return (
        <section className="flex h-screen w-full flex-col items-center justify-center">
            <div className="flex min-h-[80vh] flex-col items-center justify-center text-center">
                <img
                    className="h-[200px] max-w-full  drop-shadow-md transition-all duration-200 hover:scale-105 hover:drop-shadow-2xl lg:h-[300px]"
                    src={logoSrc}
                    alt={logoAlt}
                />
                <h5 className="text-1xl my-6 mx-0 animate-fade font-good__times text-white opacity-0 drop-shadow-3xl lg:text-2xl">
                    {eventDate}
                </h5>
                <h1 className="my-6 mx-0 animate-fade font-good__times text-4xl text-white opacity-0 drop-shadow-3xl lg:text-6xl">
                    {eventName}
                </h1>
                <h5 className="text-1xl my-6 mx-0 animate-fade font-good__times text-white opacity-0 drop-shadow-3xl lg:text-3xl">
                    <div>The time has come for</div>
                    <AnimatedText />
                </h5>
            </div>

            <div className="absolute bottom-0 mx-0 mb-6 h-12 w-12  text-center transition-all duration-500 hover:translate-y-1/2 hover:scale-105">
                <a className="animate-fade opacity-0 " href="#content">
                    <ChevronDown color="white" size={30} />
                </a>
            </div>
        </section>
    );
};

export default Header;
