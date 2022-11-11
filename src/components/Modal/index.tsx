import React, { useEffect } from 'react';

import { X } from 'react-bootstrap-icons';
import ModalProps from '../../types/ModalProps';
import ModalTabs from '../ModalTabs';

const Modal: React.FC<ModalProps> = ({ hidden, setHidden, title, bodyText }) => {
    useEffect(() => {
        const onKeyPress = (e: KeyboardEvent) => {
            if (!hidden && e.key === 'Escape') setHidden(true);
        };

        window.addEventListener('keydown', onKeyPress);
        return () => window.removeEventListener('keydown', onKeyPress);
    }, [hidden, setHidden]);

    const [activeTabIndex, setActiveTabIndex] = React.useState(0);

    const tabs: React.ReactNode[] = [
        <p key={0} className="mb-4 text-lg leading-relaxed text-slate-500">
            {bodyText}
        </p>,
        <p key={1} className="mb-4 text-lg leading-relaxed text-slate-500">
            Tab 2
        </p>,
        <p key={2} className="mb-4 text-lg leading-relaxed text-slate-500">
            Tab 3
        </p>
    ];

    return (
        <div
            className={`
            ${hidden ? 'hidden' : 'fixed'} 
            inset-0 animate-fade-imm bg-gray-700/60
            transition-opacity`}>
            <div className="fixed inset-0 z-10 my-auto flex h-3/4 items-center justify-center overflow-x-hidden overflow-y-scroll rounded-lg outline-none focus:outline-none md:h-1/2">
                <div className="relative mx-auto h-full w-4/5 max-w-3xl rounded-lg">
                    <div className="min-h-full w-full flex-col rounded-lg border-0 bg-white shadow-lg outline-none focus:outline-none">
                        <div className="flex w-full items-start justify-between rounded-t border-b border-solid border-slate-200 p-5">
                            <h3 className="w-full text-center text-3xl font-semibold capitalize">
                                {title}
                            </h3>
                            <button
                                className="float-right ml-auto border-0 bg-transparent p-1 text-3xl font-semibold leading-none focus:outline-none"
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
