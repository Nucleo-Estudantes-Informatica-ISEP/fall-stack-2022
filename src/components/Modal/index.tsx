import React, { useEffect, useId } from 'react';

import { Facebook, Linkedin, Twitter, X, Youtube } from 'react-bootstrap-icons';
import ModalProps from '../../types/ModalProps';
import ModalTabs from '../ModalTabs';
import SocialMediaCard from '../SocialMediaCard';

const Modal: React.FC<ModalProps> = ({
    hidden,
    setHidden,
    title,
    bodyText,
    videoHref,
    videoTitle
}) => {
    useEffect(() => {
        const onKeyPress = (e: KeyboardEvent) => {
            if (!hidden && e.key === 'Escape') setHidden(true);
        };

        window.addEventListener('keydown', onKeyPress);
        return () => window.removeEventListener('keydown', onKeyPress);
    }, [hidden, setHidden]);

    const [activeTabIndex, setActiveTabIndex] = React.useState(0);

    const tabs: React.ReactNode[] = [
        <p key={useId()} className="mb-4 text-lg leading-relaxed text-slate-500">
            {bodyText}
        </p>,
        <ul key={useId()} className="flex flex-row flex-wrap items-center justify-around px-4">
            <SocialMediaCard href="#" icon={<Twitter />} title="Twitter" />
            <SocialMediaCard href="#" icon={<Linkedin />} title="Linkedin" />
            <SocialMediaCard href="#" icon={<Facebook />} title="Facebook" />
            <SocialMediaCard href="#" icon={<Youtube />} title="Youtube" />
        </ul>,
        <div className="flex h-full w-full items-center justify-center" key={useId()}>
            <iframe
                className="rounded-lg"
                width="560"
                height="315"
                src={videoHref}
                title={videoTitle}
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"></iframe>
        </div>
    ];

    return (
        <div
            className={`
            ${hidden ? 'hidden' : 'fixed'} 
            inset-0 z-10 animate-fade-imm
            bg-gray-700/60 transition-opacity`}>
            <div className="fixed inset-0 my-auto flex h-4/5 items-center justify-center overflow-x-hidden overflow-y-scroll rounded-lg outline-none focus:outline-none md:h-3/5">
                <div className="relative mx-auto h-full w-4/5 max-w-3xl rounded-lg">
                    <div className="min-h-full w-full flex-col rounded-lg border-0 bg-white shadow-lg outline-none focus:outline-none">
                        <div className="flex w-full items-start justify-center rounded-t border-b border-solid border-slate-200 p-5">
                            <h3 className="w-full text-center text-3xl font-semibold capitalize">
                                {title}
                            </h3>
                            <button
                                className="absolute right-4 ml-auto rounded-xl border-0 bg-transparent p-1 text-3xl font-semibold leading-none transition-colors duration-300 ease-in-out hover:rounded-full hover:bg-gray-100 focus:outline-none"
                                onClick={() => setHidden(true)}>
                                {<X className="text-red-600" />}
                            </button>
                        </div>

                        <ModalTabs
                            activeTabIndex={activeTabIndex}
                            setActiveTabIndex={setActiveTabIndex}
                        />

                        <div className="h-min-fit relative h-full flex-auto py-6 px-12">
                            {tabs[activeTabIndex]}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Modal;
