import React from 'react';

interface HeadingTextProps {
    text: string;
}

const HeadingText: React.FC<HeadingTextProps> = ({ text }) => {
    return <h1 className="my-12 text-center font-good__times text-gray-600 lg:text-6xl">{text}</h1>;
};

export default HeadingText;
