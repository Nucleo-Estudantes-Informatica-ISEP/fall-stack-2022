import React from 'react';
import Sponsor from '../Sponsor';

import { SPONSORS } from '../../utils/companies';

const SponsorsContainer: React.FC = () => {
    return (
        <div className="flex flex-wrap items-center justify-center">
            {SPONSORS.map(({ id, name, logo, website }) => (
                <Sponsor key={id} logoHref={logo} name={name} website={website} />
            ))}
        </div>
    );
};

export default SponsorsContainer;
