import { FunctionComponent } from 'react';
import { ChevronDown } from 'react-bootstrap-icons';
import AnimatedText from '../AnimatedText';

interface HeaderProps {
    logoSrc: string;
    logoAlt: string;
    eventDate: string;
    eventName: string;
    contentRef: React.RefObject<HTMLDivElement>;
}

const Header: FunctionComponent<HeaderProps> = ({
    logoSrc,
    logoAlt,
    eventDate,
    eventName,
    contentRef
}) => {
    return (
        <section className="flex h-screen w-full flex-col items-center justify-around px-6">
            <img
                className="my-6 aspect-square h-max max-h-[400px] min-h-[300px] w-max drop-shadow-md transition-all duration-200 hover:scale-105 hover:drop-shadow-fallstack-logo-shadow"
                src={logoSrc}
                alt={logoAlt}
            />
            <h5 className="my-2 mx-0 animate-fade text-center font-good__times text-xl text-white opacity-0 drop-shadow-3xl lg:my-6 lg:text-2xl">
                {eventDate}
            </h5>
            <h1 className="my-2 mx-0 animate-fade text-center font-good__times text-4xl text-white opacity-0 drop-shadow-3xl lg:my-6 lg:text-6xl">
                {eventName}
            </h1>
            <h5 className="my-2 mx-0 animate-fade text-center font-good__times text-xl text-white opacity-0 drop-shadow-3xl lg:my-6 lg:text-3xl">
                <div>The time has come for</div>
                <AnimatedText />
            </h5>

            <div className="flex h-12 animate-bounce cursor-pointer items-center justify-center justify-self-end transition-all duration-200 hover:scale-105">
                <a
                    className="animate-fade opacity-0"
                    onClick={() => contentRef.current?.scrollIntoView()}>
                    <ChevronDown color="white" size={30} />
                </a>
            </div>
        </section>
    );
};

export default Header;
