import React from 'react';

interface ModalTabsProps {
    activeTabIndex: number;
    setActiveTabIndex: React.Dispatch<React.SetStateAction<number>>;
}

const ModalTabs: React.FC<ModalTabsProps> = ({ activeTabIndex, setActiveTabIndex }) => {
    return (
        <div className="mx-auto flex w-full flex-col items-center justify-between md:flex-row">
            <div
                className={`absolute left-0 top-28 mt-2 hidden rounded-lg bg-orange-400 transition-transform duration-300 ease-in-out hover:brightness-90 sm:block md:mr-2 md:h-1 md:w-1/3 md:translate-y-0 ${
                    activeTabIndex === 0
                        ? 'md:translate-x-0'
                        : activeTabIndex === 1
                        ? 'md:translate-x-full'
                        : 'md:translate-x-200'
                }`}
                aria-hidden
            />
            <li
                className={`z-10 mx-4 h-full max-h-10 flex-1 cursor-pointer list-none rounded-lg py-2 text-center text-lg font-semibold 
                ${activeTabIndex === 0 ? 'font-semibold' : 'font-thin'}
                ${activeTabIndex === 0 ? 'text-orange-500' : 'text-black'}
                ${activeTabIndex !== 0 && 'hover:bg-gray-100'}`}
                onClick={() => setActiveTabIndex(0)}>
                Detalhes
            </li>
            <li
                className={`z-10 mx-4 h-full max-h-10 flex-1 cursor-pointer list-none rounded-lg py-2 text-center text-lg font-semibold 
                ${activeTabIndex === 1 ? 'font-semibold' : 'font-thin'}
                ${activeTabIndex === 1 ? 'text-orange-500' : 'text-black'}
                ${activeTabIndex !== 1 && 'hover:bg-gray-100'}`}
                onClick={() => setActiveTabIndex(1)}>
                Links
            </li>
            <li
                className={`z-10 mx-4 h-full max-h-10 flex-1 cursor-pointer list-none rounded-lg py-2 text-center text-lg font-semibold 
                ${activeTabIndex === 2 ? 'font-semibold' : 'font-thin'}
                ${activeTabIndex === 2 ? 'text-orange-500' : 'text-black'}
                ${activeTabIndex !== 2 && 'hover:bg-gray-100'}`}
                onClick={() => setActiveTabIndex(2)}>
                Vídeo
            </li>
        </div>
    );
};

export default ModalTabs;
