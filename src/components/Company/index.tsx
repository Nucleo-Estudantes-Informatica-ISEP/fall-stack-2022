import React from 'react';
import Modal from '../Modal';

interface Props {
    logoHref: string;
    name: string;
    modalBodyText?: string;
}

const Company: React.FC<Props> = ({ logoHref, name, modalBodyText }) => {
    const [isHidden, setIsHidden] = React.useState(true);

    return (
        <>
            <li
                className={`
                ${modalBodyText && 'cursor-pointer'} 
                my-2 w-60 list-none transition duration-300 ease-in-out hover:scale-105`}
                onClick={() => setIsHidden(false)}>
                <img className="img-fluid my-3 mx-auto" src={logoHref} alt={name} />
            </li>
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
