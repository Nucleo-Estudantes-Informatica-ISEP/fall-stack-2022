import InscriptionFigure from '../../assets/images/google-forms.png';
import Interview from '../../assets/images/interview.png';
import Roundtables from '../../assets/images/roundtables.png';
import { ScheduleDays } from '../../utils/ScheduleDays';
import Activity from '../Activity';
import CompaniesSection from '../CompaniesSection';
import HeadingText from '../HeadingText';
import InfoText from '../InfoText';
import Map from '../Map';
import Schedule from '../Schedule';
import SponsorsContainer from '../SponsorsContainer';

interface ContentProps {
    contentRef: React.RefObject<HTMLDivElement>;
}

const Content: React.FC<ContentProps> = ({ contentRef }) => {
    return (
        <section
            ref={contentRef}
            className="center container mx-auto w-11/12 rounded-lg bg-slate-100 p-10 sm:w-3/4 lg:p-14">
            <InfoText days={[19, 20]} month="Dezembro" beginningTime="9h00" endTime="17:30h" />

            <section className="my-16 grid w-full grid-cols-1 justify-items-center gap-y-10 md:grid-cols-2 md:gap-x-5">
                <div className="col-span-1">
                    <Activity logo={Interview} title={'Sessão de entrevistas'} day={19}>
                        O objetivo da <strong>Sessão de Entrevistas</strong> é as empresas presentes
                        darem-se a conhecer aos estudantes, através de uma breve apresentação e
                        esclarecendo as questões que os estudantes tiverem para colocar.
                    </Activity>
                </div>

                <div className="col-span-1">
                    <Activity logo={Roundtables} title={"Connection's train"} day={20}>
                        <p>
                            O objetivo das <strong>Connection's train</strong> é o estudante ter
                            contacto com todas as empresas presentes no evento.
                        </p>
                        <p>
                            Poderão ainda entrar em contacto com as empresas que mais despertaram
                            interesse <strong>sem restrições de tempo</strong>!
                        </p>
                    </Activity>
                </div>
            </section>

            <hr />

            <section className="d-flex flex-column align-items-center justify-content-center my-12 text-center">
                <HeadingText text="Inscrições" />

                <a rel="noreferrer" target="_blank" href="">
                    <div className="flex items-center justify-center">
                        <img
                            width="140px"
                            height="140px"
                            src={InscriptionFigure}
                            alt="Link para as inscrições do evento FallStack"
                        />
                    </div>

                    <h6 className="mt-12 text-center font-good__times text-lg lg:text-2xl">
                        Inscrição no google forms
                    </h6>
                </a>
            </section>

            <hr />

            <CompaniesSection />

            <hr />

            <HeadingText text="Patrocinadores" />
            <section className="container-fluid">
                <SponsorsContainer />
            </section>

            <hr />

            <Schedule
                firstDayTitle="Quinta-Feira - Auditório Magno"
                secondDayTitle="Sexta-feira - Sala de Eventos"
                scheduleEvents={ScheduleDays}
            />

            <hr />

            <Map />
        </section>
    );
};

export default Content;
