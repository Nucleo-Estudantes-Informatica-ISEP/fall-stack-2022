import { FunctionComponent } from 'react';

interface GenericContainerProps {
    children: React.ReactNode;
    width?: string;
}

const GenericContainer: FunctionComponent<GenericContainerProps> = ({
    children,
    width = 'w-11/12'
}) => {
    return <div className={`${width} my-0 mx-auto`}>{children}</div>;
};

export default GenericContainer;
