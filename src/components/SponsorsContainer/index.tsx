import React, { useId } from 'react';
import { Sponsors } from '../../utils/Sponsors';
import Sponsor from '../Sponsor';

const SponsorsContainer: React.FC = () => {
    return (
        <div className="flex flex-wrap items-center justify-center">
            {Sponsors.map(({ name, logoHref, website }) => {
                const id = useId();
                return <Sponsor key={id} logoHref={logoHref} name={name} website={website} />;
            })}
        </div>
    );
};

export default SponsorsContainer;
