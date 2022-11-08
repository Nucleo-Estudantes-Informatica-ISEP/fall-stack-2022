import React from 'react';

interface Props {
    children: React.ReactNode;
}

const HeadingText: React.FC<Props> = ({ children }) => {
    return <h1 className="my-5 text-center text-4xl">{children}</h1>;
};

export default HeadingText;
