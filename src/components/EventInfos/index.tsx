import { FunctionComponent } from 'react';
import { Alarm, CalendarEvent, GeoAlt } from 'react-bootstrap-icons';
import InfoBit from '../InfoBit';

interface EventInfosProps {
    days: number[];
    month: string;
    beginningTime: string;
    endTime: string;
}

const EventInfos: FunctionComponent<EventInfosProps> = ({
    days,
    month,
    beginningTime,
    endTime
}) => {
    return (
        <section className="my-10 grid grid-cols-1 items-center justify-items-center gap-5 md:grid-cols-3 md:px-32 lg:px-20">
            <InfoBit icon={<CalendarEvent />} info={`${days.join(' e ')} de ${month}`} />
            <InfoBit icon={<Alarm />} info={`${beginningTime} - ${endTime}`} />
            <InfoBit icon={<GeoAlt />} info={'Instituto Superior de Engenharia do Porto'} />
        </section>
    );
};

export default EventInfos;
