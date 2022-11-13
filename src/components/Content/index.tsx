import InscriptionFigure from '../../assets/images/google-forms.png';
import Interview from '../../assets/images/interview.png';
import Roundtables from '../../assets/images/roundtables.png';
import Activity from '../Activity';
import CompaniesSection from '../CompaniesSection';
import HeadingText from '../HeadingText';
import InfoText from '../InfoText';
import Map from '../Map';
import Schedule from '../Schedule';
import SponsorsContainer from '../SponsorsContainer';

const Content: React.FC = () => {
    return (
        <section className="center container mx-auto w-11/12 rounded-lg bg-slate-100 p-6 sm:w-3/4 lg:p-14">
            <InfoText days={[15, 16]} month="Dezembro" begginingTime="15:00h" endTime="20:00h" />

            <section className="my-16 grid w-full grid-cols-1 justify-items-center gap-y-10 md:grid-cols-2 md:gap-x-5">
                <div className="col-span-1">
                    <Activity logo={Interview} title={'Sessão de entrevistas'} day={13}>
                        O objetivo da <strong>Sessão de Entrevistas</strong> é as empresas presentes
                        darem-se a conhecer aos estudantes, através de uma breve apresentação e
                        esclarecendo as questões que os estudantes tiverem para colocar.
                    </Activity>
                </div>

                <div className="col-span-1">
                    <Activity logo={Roundtables} title={"Connection's train"} day={14}>
                        O objetivo das <strong>Round Tables</strong> é o estudante ter contacto com
                        todas as empresas presentes no evento. <br /> Poderão ainda entrar em
                        contacto com as empresas que mais despertaram interesse{' '}
                        <strong>sem restrições de tempo</strong>!
                    </Activity>
                </div>
            </section>

            <hr />

            <div className="d-flex flex-column align-items-center justify-content-center text-center">
                <h1 className="my-5 text-center">Inscrições</h1>

                <a rel="noreferrer" target="_blank" href="">
                    <div className="flex items-center justify-center">
                        <img
                            width="140px"
                            height="140px"
                            src={InscriptionFigure}
                            alt="Link para as inscrições do evento FallStack"
                        />
                    </div>

                    <h6 className="mt-5">Inscrição no google forms</h6>
                </a>
            </div>

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
                scheduleEvents={[
                    [
                        {
                            hour: '09.00h - 10.40h',
                            activity: '	Sessão de entrevistas a empresas participantes'
                        },
                        { hour: '10.40h - 11.00h', activity: 'Coffee Break' },
                        { hour: '11.00h - 11.30h', activity: 'Coffee Break' },
                        { hour: '11.30h - 12.00h', activity: 'Coffee Break' },
                        { hour: '12.00h - 12.30h', activity: 'Coffee Break' },
                        { hour: '12.30h - 13.30h', activity: 'Coffee Break' },
                        { hour: '13.30h - 14.00h', activity: 'Coffee Break' }
                    ],
                    [
                        {
                            hour: '09.30h - 11.00h',
                            activity: 'Sessão de Round Tables e Networking'
                        },
                        { hour: '11.00h - 11.30h', activity: 'Coffee Break' },
                        { hour: '11.30h - 12.00h', activity: 'Coffee Break' },
                        { hour: '12.00h - 12.30h', activity: 'Coffee Break' },
                        { hour: '12.30h - 13.30h', activity: 'Coffee Break' },
                        { hour: '13.30h - 14.00h', activity: 'Coffee Break' }
                    ]
                ]}
            />

            <hr />

            <Map />
        </section>
    );
};

export default Content;
