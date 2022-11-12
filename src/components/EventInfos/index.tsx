import { FunctionComponent } from 'react';
import InfoBit from '../InfoBit';

interface EventInfosProps {
    days: number[];
    month: string;
    begginingTime: string;
    endTime: string;
}

const EventInfos: FunctionComponent<EventInfosProps> = ({
    days,
    month,
    begginingTime,
    endTime
}) => {
    return (
        <section className="my-4 my-10 grid grid-cols-1 items-center justify-items-center gap-y-5 px-20 md:grid-cols-3 md:px-32">
            <InfoBit icon="bi-calendar-event" info={`${days.join(' e ')} de ${month}`} />
            <InfoBit icon="bi-alarm" info={`${begginingTime} - ${endTime}`} />
            <InfoBit icon="bi-geo-alt" info={'Instituto Superior de Engenharia do Porto'} />
        </section>
    );
};

export default EventInfos;
