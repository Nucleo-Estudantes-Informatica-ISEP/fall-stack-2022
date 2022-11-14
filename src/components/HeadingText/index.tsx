import React from 'react';

interface HeadingTextProps {
    text: string;
}

const HeadingText: React.FC<HeadingTextProps> = ({ text }) => {
    return <h1 className="my-5 text-center font-good__times text-6xl text-gray-600">{text}</h1>;
};

export default HeadingText;
