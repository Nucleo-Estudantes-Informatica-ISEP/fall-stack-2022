import React, { useEffect } from 'react';

import { X } from 'react-bootstrap-icons';
import ModalProps from '../../types/ModalProps';

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
            <div className="z-1 fixed inset-0 flex items-center justify-center overflow-y-auto overflow-x-hidden shadow-lg outline-none focus:outline-none">
                <div className="relative mx-auto h-1/2 w-4/5 max-w-3xl">
                    <div className="relative flex w-full flex-col rounded-lg border-0 bg-white shadow-lg outline-none focus:outline-none">
                        <div className="flex items-start justify-between rounded-t border-b border-solid border-slate-200 p-5">
                            <h3 className="w-full text-center text-3xl font-semibold capitalize">
                                {title}
                            </h3>
                            <button
                                className="float-right ml-auto border-0 bg-transparent p-1 text-3xl font-semibold leading-none focus:outline-none"
                                onClick={() => setHidden(true)}>
                                {<X className="text-red-600" />}
                            </button>
                        </div>

                        <div className="mx-auto flex w-full flex-col items-center justify-around md:w-3/4 md:flex-row">
                            <li
                                className="h-full w-full cursor-pointer list-none py-2 text-center text-lg hover:bg-gray-200"
                                onClick={() => setActiveTabIndex(0)}>
                                Detalhes
                            </li>
                            <li
                                className="h-full w-full cursor-pointer list-none py-2 text-center text-lg hover:bg-gray-200"
                                onClick={() => setActiveTabIndex(1)}>
                                Links
                            </li>
                            <li
                                className="h-full w-full cursor-pointer list-none py-2 text-center text-lg hover:bg-gray-200"
                                onClick={() => setActiveTabIndex(2)}>
                                Vídeo
                            </li>
                        </div>

                        <div className="relative flex-auto py-6 px-12">{tabs[activeTabIndex]}</div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Modal;
