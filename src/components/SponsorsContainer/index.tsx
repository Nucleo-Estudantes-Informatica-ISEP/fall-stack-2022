import React, { useId } from 'react';
import Sponsor, { SponsorProps } from '../Sponsor';

interface SponsorsContainerProps {
    sponsors: SponsorProps[];
}
const SponsorsContainer: React.FC<SponsorsContainerProps> = ({ sponsors }) => {
    return (
        <div className="flex flex-wrap items-center justify-center">
            {sponsors.map(({ name, logoHref, website }) => {
                const id = useId();
                return <Sponsor key={id} logoHref={logoHref} name={name} website={website} />;
            })}
        </div>
    );
};

export default SponsorsContainer;
