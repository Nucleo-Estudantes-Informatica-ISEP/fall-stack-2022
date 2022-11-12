import React from 'react';
import HeadingText from '../HeadingText';
import EventDescription from '../EventDescription';

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

            <div id="intro-info" className="my-4">
                <span id="calendar-span">
                    {/* Missing Icon */}
                    <b>
                        {days.join(' e ')} de {month}
                    </b>
                </span>
                <span id="alarm-span">
                    {/* Missing Icon */}
                    <b>
                        {begginingTime} - {endTime}
                    </b>
                </span>
                <span id="location-span">
                    {/* Missing Icon */}
                    <b>Instituto Superior de Engenharia do Porto</b>
                </span>
            </div>

            <EventDescription>
                <p>
                    Mais um ano e mais uma edição do evento FallStack no Instituto Superior de
                    Engenharia do Porto!
                </p>
                <p>
                    Este evento que já vai na sua 4ª edição, será realizado nos dias{' '}
                    {days.join(' e ')} de {month} e está de volta ao formato presencial, com entrada
                    gratuita, tendo por objetivo fomentar o contacto direto entre empresas e alunos
                    finalistas do curso de Engenharia Informática.
                </p>
                <p>
                    No primeiro dia poderás contar com as entrevistas às empresas participantes,
                    onde ficarás a saber mais sobre as mesmas, desde as áreas em que trabalham até
                    propostas de estágio.
                </p>
                <p>
                    No segundo dia irão ocorrer as Round Tables, onde poderás interagir diretamente
                    com as empresas e conhecê-las com mais detalhe.
                </p>
                <p>
                    Contamos com a tua presença para este evento que te vai ajudar e esclarecer
                    dúvidas que tenhas sobre empresas da nossa área de estudos.
                </p>
            </EventDescription>
        </>
    );
};

export default InfoText;
