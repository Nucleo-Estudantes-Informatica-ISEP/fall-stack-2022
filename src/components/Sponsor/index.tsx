import React from 'react';

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
            className="m-auto my-2 flex h-52 w-52 items-center justify-center">
            <img
                className="my-4 mx-auto block h-auto max-h-[90%] max-w-[90%] rounded-[5px]"
                src={logoHref}
                alt={name}
            />
        </a>
    );
};

export default Sponsor;
