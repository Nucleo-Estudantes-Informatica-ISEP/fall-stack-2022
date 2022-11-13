import React from 'react';
import Modal from '../Modal';

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
                  flex min-h-[11rem] items-center justify-center transition duration-300 ease-in-out hover:scale-105 `}
                onClick={() => setIsHidden(false)}>
                <img
                    className="h-full max-h-44 w-full max-w-[20rem] object-cover  lg:max-h-28 lg:max-w-[18rem] xl:max-h-32 xl:max-w-[16rem]"
                    src={logoHref}
                    alt={name}
                />
            </div>
            {modalBodyText && (
                <Modal
                    setHidden={setIsHidden}
                    hidden={isHidden}
                    title={name}
                    bodyText={modalBodyText}
                />
            )}
        </>
    );
};

export default Company;
