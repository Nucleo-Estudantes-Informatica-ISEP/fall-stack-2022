import React from 'react';
import HeadingText from '../HeadingText';
import EventInfos from '../EventInfos/index';

interface InfoTextProps {
    days: number[];
    month: string;
    begginingTime: string;
    endTime: string;
}

const InfoText: React.FC<InfoTextProps> = ({ days, month, begginingTime, endTime }) => {
    return (
        <>
            <HeadingText text="O que é o Fallstack?" />
            <EventInfos days={days} month={month} begginingTime={begginingTime} endTime={endTime} />

            <p className="intro-font">
                Mais um ano e mais uma edição do evento FallStack no Instituto Superior de
                Engenharia do Porto!
            </p>
            <p className="intro-font">
                Este evento que já vai na sua 4ª edição, será realizado nos dias {days.join(' e ')}{' '}
                de {month} e está de volta ao formato presencial, com entrada gratuita, tendo por
                objetivo fomentar o contacto direto entre empresas e alunos finalistas do curso de
                Engenharia Informática.
            </p>
            <p className="intro-font">
                No primeiro dia poderás contar com as entrevistas às empresas participantes, onde
                ficarás a saber mais sobre as mesmas, desde as áreas em que trabalham até propostas
                de estágio.
            </p>
            <p className="intro-font">
                No segundo dia irão ocorrer as Round Tables, onde poderás interagir diretamente com
                as empresas e conhecê-las com mais detalhe.
            </p>
            <p className="intro-font">
                Contamos com a tua presença para este evento que te vai ajudar e esclarecer dúvidas
                que tenhas sobre empresas da nossa área de estudos.
            </p>
        </>
    );
};

export default InfoText;
