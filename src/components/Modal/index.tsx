import React from 'react';

import { X } from 'react-bootstrap-icons';
import ModalProps from '../../types/ModalProps';

const Modal: React.FC<ModalProps> = ({ hidden, setHidden, title, bodyText }) => {
    return (
        <>
            {!hidden && (
                <div className="fixed inset-0 z-50 flex items-center justify-center overflow-y-auto overflow-x-hidden outline-none focus:outline-none">
                    <div className="relative my-6 mx-auto w-auto max-w-3xl">
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

                            <div className="mx-auto flex w-3/4 flex-row items-center justify-around pt-4">
                                <li className="b-y-black b-solid cursor-pointer list-none text-lg">
                                    Tab
                                </li>
                                <li className="b-y-black b-solid cursor-pointer list-none text-lg">
                                    Tab
                                </li>
                                <li className="b-y-black b-solid cursor-pointer list-none text-lg">
                                    Tab
                                </li>
                            </div>

                            <div className="relative flex-auto py-6 px-12">
                                <p className="mb-4 text-lg leading-relaxed text-slate-500">
                                    {bodyText}
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </>
    );
};

export default Modal;
