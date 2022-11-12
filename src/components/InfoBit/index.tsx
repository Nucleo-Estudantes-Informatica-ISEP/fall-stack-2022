import { FunctionComponent } from 'react';

interface InfoBitProps {
    icon: string;
    info: string;
}

const InfoBit: FunctionComponent<InfoBitProps> = ({ icon, info }) => {
    return (
        <span className="flex items-center justify-center">
            <i className={`${icon} text-3xl`} />
            <b className="ml-3">{info}</b>
        </span>
    );
};

export default InfoBit;
