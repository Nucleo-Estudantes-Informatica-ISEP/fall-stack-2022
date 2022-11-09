import React from 'react';

export default interface ModalProps {
    hidden: boolean;
    setHidden: React.Dispatch<React.SetStateAction<boolean>>;
    title: string;
    bodyText: string;
}
