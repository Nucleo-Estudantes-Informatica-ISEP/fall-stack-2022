import React from 'react';

interface HeadingTextProps {
    text: string;
}

const HeadingText: React.FC<HeadingTextProps> = ({ text }) => {
    return <h1 className="my-5 text-center text-4xl">{text}</h1>;
};

export default HeadingText;
