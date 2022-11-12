import { FunctionComponent } from 'react';

interface ActivityProps {
    logo: string;
    title: string;
    day: number;
    children?: React.ReactNode;
}

const Activity: FunctionComponent<ActivityProps> = ({ logo, title, day, children }) => {
    return (
        <section className="flex w-full flex-col items-center justify-center text-center">
            <div id="w-full">
                <img src={logo} alt={`Atividade ${title}`} className="w-32" />
            </div>
            <div>
                <h5 className="my-5 font-good__times text-2xl text-gray-600">
                    {title}
                    <br />
                    (Dia {day})
                </h5>
                <div className="text-lg leading-7">{children}</div>
            </div>
        </section>
    );
};

export default Activity;
