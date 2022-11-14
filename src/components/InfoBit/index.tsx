import { FunctionComponent } from 'react';

interface InfoBitProps {
    icon: React.ReactNode;
    info: string;
}

const InfoBit: FunctionComponent<InfoBitProps> = ({ icon, info }) => {
    return (
        <span className="flex items-center justify-center">
            <span className="text-3xl">{icon}</span>
            <b className="ml-3">{info}</b>
        </span>
    );
};

export default InfoBit;
