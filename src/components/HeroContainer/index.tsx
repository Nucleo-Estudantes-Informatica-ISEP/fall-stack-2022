import { FunctionComponent } from 'react';

interface HeroContainerProps {
    backgroundSrc?: string;
    children: React.ReactNode;
}

const HeroContainer: FunctionComponent<HeroContainerProps> = ({ children }) => {
    return (
        <section
            className={`aspect-square min-h-screen w-full bg-page-background bg-cover bg-fixed bg-center`}>
            {children}
        </section>
    );
};

export default HeroContainer;
