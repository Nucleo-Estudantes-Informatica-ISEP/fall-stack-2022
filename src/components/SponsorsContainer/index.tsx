import React from 'react';
import Sponsor from '../Sponsor';

import { SPONSORS } from '../../utils/companies';

const SponsorsContainer: React.FC = () => {
    return (
        <div
            id="sponsors"
            className="mr-[-15px] ml-[-15px] flex flex-wrap items-center justify-center">
            {SPONSORS.map(({ name, logo, website }) => (
                <Sponsor logoHref={logo} name={name} website={website} />
            ))}
        </div>
    );
};

export default SponsorsContainer;
