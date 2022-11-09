import React from 'react';

import { SPONSORS } from '../../utils/companies';

interface SponsorProps {
    logoHref: string;
    name: string;
    website: string;
}

const Sponsor: React.FC<SponsorProps> = ({ logoHref, name, website }) => {
    return (
        <a
            target="_blank"
            href={website}
            className="m-auto my-2 flex h-[200px] w-[200px] items-center justify-center">
            <img
                className="my-4 mx-auto block h-auto max-h-[90%] max-w-[90%] rounded-[5px]"
                src={logoHref}
                alt={name}
            />
        </a>
    );
};

export default Sponsor;
