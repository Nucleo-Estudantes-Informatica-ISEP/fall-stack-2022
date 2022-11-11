import React from 'react';

interface ModalTabsProps {
    activeTabIndex: number;
    setActiveTabIndex: React.Dispatch<React.SetStateAction<number>>;
}

const ModalTabs: React.FC<ModalTabsProps> = ({ activeTabIndex, setActiveTabIndex }) => {
    return (
        <div className="mx-auto flex w-full flex-col items-center justify-between md:flex-row">
            <div
                className={`absolute top-20 h-9 w-full rounded-lg bg-gray-200 py-2 transition-transform duration-300 ease-in-out hover:brightness-90 md:left-0 md:mr-2 md:h-10 md:w-1/3 md:translate-y-0 ${
                    activeTabIndex === 0
                        ? 'md:translate-x-0'
                        : activeTabIndex === 1
                        ? 'md:translate-x-full'
                        : 'md:translate-x-200'
                } ${
                    activeTabIndex === 0
                        ? 'translate-y-0'
                        : activeTabIndex === 1
                        ? 'translate-y-full'
                        : 'translate-y-200'
                }`}
                aria-hidden
            />
            <li
                className={`z-10 mx-4 h-full flex-1 cursor-pointer list-none rounded-lg py-1 text-center text-lg font-semibold md:py-2 ${
                    activeTabIndex === 0 ? 'font-semibold' : 'font-thin'
                }
            ${activeTabIndex !== 0 && 'hover:bg-gray-100'}`}
                onClick={() => setActiveTabIndex(0)}>
                Detalhes
            </li>
            <li
                className={`z-10 mx-4 h-full flex-1 cursor-pointer list-none rounded-lg py-1 text-center text-lg font-semibold md:py-2 ${
                    activeTabIndex === 1 ? 'font-semibold' : 'font-thin'
                }
            ${activeTabIndex !== 1 && 'hover:bg-gray-100'}`}
                onClick={() => setActiveTabIndex(1)}>
                Links
            </li>
            <li
                className={`z-10 mx-4 h-full flex-1 cursor-pointer list-none rounded-lg py-1 text-center text-lg font-semibold md:py-2 ${
                    activeTabIndex === 2 ? 'font-semibold' : 'font-thin'
                }
                ${activeTabIndex !== 2 && 'hover:bg-gray-100'}`}
                onClick={() => setActiveTabIndex(2)}>
                Vídeo
            </li>
        </div>
    );
};

export default ModalTabs;
