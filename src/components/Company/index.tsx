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
            <div
                className={`
                ${modalBodyText && 'cursor-pointer'} 
                 my-2 flex h-32 w-full items-center justify-center transition duration-300 ease-in-out hover:scale-105 `}
                onClick={() => setIsHidden(false)}>
                <img className="max-h-32" src={logoHref} alt={name} />
            </div>
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
