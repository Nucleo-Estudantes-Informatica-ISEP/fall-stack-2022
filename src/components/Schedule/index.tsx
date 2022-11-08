import React, { useState } from 'react';
import HeadingText from '../HeadingText';

interface ScheduleDay {
    hour: string;
    activity: string;
}

interface Props {
    firstDayTitle: string;
    secondDayTitle: string;
    scheduleEvents: ScheduleDay[][];
}

const Schedule: React.FC<Props> = ({ firstDayTitle, secondDayTitle, scheduleEvents }) => {
    const [activeScheduleEventIndex, setActiveScheduleEventIndex] = useState<number>(0);

    return (
        <div className="container flex flex-col items-center justify-center">
            <HeadingText>Horário</HeadingText>

            <div className="flex w-4/5 flex-col justify-center lg:flex-row">
                <button
                    className={`
                    ${activeScheduleEventIndex == 0 ? 'bg-orange-400' : 'bg-gray-200'}
                    ${activeScheduleEventIndex == 0 ? 'text-white' : 'text-black'}
                    w-full rounded-t-lg py-2 hover:brightness-95 lg:rounded-l-lg lg:rounded-r-none`}
                    onClick={() => setActiveScheduleEventIndex(0)}>
                    {firstDayTitle}
                </button>
                <button
                    className={`
                    ${activeScheduleEventIndex == 1 ? 'bg-orange-400' : 'bg-gray-200'} 
                    ${activeScheduleEventIndex == 1 ? 'text-white' : 'text-black'}
                    w-full
                    rounded-b-lg px-1 py-2 transition-all duration-300
                    hover:brightness-95 lg:rounded-r-lg lg:rounded-l-none`}
                    onClick={() => setActiveScheduleEventIndex(1)}>
                    {secondDayTitle}
                </button>
            </div>
            <table className="text-md mt-6 w-2/3 table-auto border-collapse">
                <thead>
                    <tr className="border-b-2 border-gray-500">
                        <th className="py-4 px-4 text-left">Hora</th>
                        <th className="text-left">Atividade</th>
                    </tr>
                </thead>

                <tbody>
                    {scheduleEvents[activeScheduleEventIndex].map((entry, index) => (
                        <tr className="border-b-2 border-gray-500" key={index}>
                            <td className="py-4 px-4">{entry.hour}</td>
                            <td>{entry.activity}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default Schedule;
