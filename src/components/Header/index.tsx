import { FunctionComponent } from 'react';
import { ChevronDown } from 'react-bootstrap-icons';
import Typewriter from 'typewriter-effect';
import './style.css';

interface HeaderProps {}

const Header: FunctionComponent<HeaderProps> = () => {
    const animatedText = ['students.', 'companies.', 'enthusiasts.', 'your career prospects.'];

    // TODO: Investigate HREF Button on mobile and split this component into smaller ones.

    return (
        <div className="flex h-screen w-full flex-col items-center justify-center">
            <div className="flex min-h-[80vh] flex-col items-center justify-center text-center">
                <img
                    className="h-[200px] max-w-full  drop-shadow-md transition-all duration-200 hover:scale-105 hover:drop-shadow-2xl lg:h-[300px]"
                    src="../../../src/assets/images/logo.png"
                    alt="Logo principal do evento Fall-Stack 2022"
                />
                <h5 className="text-1xl my-6 mx-0 animate-fade font-good__times text-white opacity-0 drop-shadow-3xl lg:text-2xl">
                    13 e 14 de janeiro
                </h5>
                <h1 className="my-6 mx-0 animate-fade font-good__times text-4xl text-white opacity-0 drop-shadow-3xl lg:text-6xl">
                    Fallstack 21/22
                </h1>
                <h5 className="text-1xl my-6 mx-0 animate-fade font-good__times text-white opacity-0 drop-shadow-3xl lg:text-3xl">
                    <div>The time has come for</div>
                    <Typewriter
                        options={{
                            strings: animatedText,
                            autoStart: true,
                            loop: true,
                            delay: 200
                        }}
                    />
                </h5>
            </div>

            <div className="absolute bottom-0 mx-0 mb-6 h-12 w-12  text-center transition-all duration-500 hover:translate-y-1/2 hover:scale-105">
                <a className="animate-fade opacity-0 " href="#content">
                    <ChevronDown color="white" size={30} />
                </a>
            </div>
        </div>
    );
};

export default Header;
