import React from 'react';

export default interface ModalProps {
    hidden: boolean;
    setHidden: React.Dispatch<React.SetStateAction<boolean>>;
    modalInformation: ModalInformation;
}

export interface ModalInformation {
    title: string;
    bodyText: string;
    videoHref?: string;
    videoTitle?: string;
    twitterLink?: string;
    facebookLink?: string;
    instagramLink?: string;
    youtubeLink?: string;
    linkedinLink?: string;
}
