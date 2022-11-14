import { FunctionComponent } from 'react';

interface EventDescriptionProps {
    children?: React.ReactNode;
}

const EventDescription: FunctionComponent<EventDescriptionProps> = ({ children }) => {
    return (
        <section className="flex flex-col space-y-2 px-10 text-lg leading-8">{children}</section>
    );
};

export default EventDescription;
