import React from 'react';

export interface CompanyProps {
    logoHref: string;
    name: string;
    modalBodyText?: string;
}

const Company: React.FC<CompanyProps> = ({ logoHref, name, modalBodyText }) => {
    const [isHidden, setIsHidden] = React.useState(true);

    return (
        <>
            <li
                className={`
                ${modalBodyText && 'cursor-pointer'} 
                 my-2 max-h-32 w-full list-none transition duration-300 ease-in-out hover:scale-105 `}
                onClick={() => setIsHidden(false)}>
                <img className="h-auto max-w-full " src={logoHref} alt={name} />
            </li>
            {/** modalBodyText && (
                <Modal
                    setHidden={setIsHidden}
                    hidden={isHidden}
                    title={name}
                    bodyText={modalBodyText}
                />
            ) */}
        </>
    );
};

export default Company;
