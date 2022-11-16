import React from 'react';

interface SocialMediaCardProps {
    title: string;
    icon: React.ReactNode;
}

const SocialMediaCard: React.FC<SocialMediaCardProps> = ({ title, icon }) => {
    return (
        <li className="flex list-none flex-row flex-wrap justify-around">
            <a
                className="mx-4 my-4 flex w-full flex-col items-center justify-center rounded-lg text-blue-500 transition-all duration-200 ease-in-out hover:scale-105 hover:text-blue-600"
                href="#">
                <div className="mb-2 text-4xl">{icon}</div>
                <span className="text-base">{title}</span>
            </a>
        </li>
    );
};

export default SocialMediaCard;
