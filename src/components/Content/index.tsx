import critical from '../../assets/images/companies/critical.png';
import HeadingText from '../HeadingText';
import Company from '../Company';
import InfoText from '../InfoText';
import Map from '../Map';
import Schedule from '../Schedule';
import SponsorsContainer from '../SponsorsContainer';

const Content: React.FC = () => {
    return (
        <div className="center container mx-auto w-3/4 rounded-lg bg-slate-100 p-14">
            <InfoText days={[15, 16]} month="Dezembro" beggingTime="15:00h" endTime="20:00h" />

            <div id="content-activity-main-container">
                <div id="content-activity-container">
                    <div id="content-activity-image-container">
                        <img
                            id="content-activity-image"
                            src={'assets/img/interview.png'}
                            alt="interview"
                        />
                    </div>
                    <div id="content-activity">
                        <h5>
                            Sessão de Entrevistas
                            <br />
                            (Dia 13)
                        </h5>
                        <div id="content-activity-text">
                            <p>
                                O objetivo da <strong>Sessão de Entrevistas</strong> é as empresas
                                presentes darem-se a conhecer aos estudantes, através de uma breve
                                apresentação e esclarecendo as questões que os estudantes tiverem
                                para colocar.
                            </p>
                        </div>
                    </div>
                </div>

                <div id="content-activity-container">
                    <div id="content-activity-image-container">
                        <img
                            id="content-activity-image"
                            src={'assets/img/roundtables.png'}
                            alt="round tables"
                        />
                    </div>
                    <div id="content-activity">
                        <h5>
                            Round Tables
                            <br />
                            (Dia 14)
                        </h5>
                        <div id="content-activity-text">
                            <p>
                                O objetivo das <strong>Round Tables</strong> é o estudante ter
                                contacto com todas as empresas presentes no evento. Poderão ainda
                                entrar em contacto com as empresas que mais despertaram interesse{' '}
                                <b>sem restrições de tempo!</b>
                            </p>
                        </div>
                    </div>
                </div>
            </div>

            <hr />

            <div
                id="content-enrollment-container"
                className="d-flex flex-column align-items-center justify-content-center
          text-center">
                <h1 className="my-5 text-center">Inscrições</h1>

                <a
                    id="content-enrollment-text"
                    rel="noreferrer"
                    target="_blank"
                    href="https://docs.google.com/forms/d/e/1FAIpQLSeD1gx7vhavvW09w0Ciw2dXQ1H9dy6EoP6telW4hAsI5WihKg/viewform?usp=sf_link">
                    <img
                        id="enrollment-logo"
                        width="140px"
                        height="140px"
                        className="img-fluid"
                        src={'./assets/img/google-forms.png'}
                        alt="Forms link to enrollment"
                    />
                    <h6 id="enrollment-text" className="mt-5">
                        Inscrição no google forms
                    </h6>
                </a>
            </div>

            <hr />

            <HeadingText text="Empresas" />
            <div className="container-fluid">
                <div id="stands-diamond" className="mb-5">
                    <h2 id="stands-diamond-text" className="text-center ">
                        Diamond
                    </h2>
                </div>

                <div className="row mb-xl-2 justify-content-center">
                    <Company
                        logoHref={critical}
                        name="critical"
                        modalBodyText="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident"
                    />
                    <Company logoHref={critical} name="critical" />
                    <Company logoHref={critical} name="critical" />
                    <Company logoHref={critical} name="critical" />
                </div>

                <div id="stands-gold" className="mb-5">
                    <h3 id="stands-gold-text" className="mt-2 text-center">
                        Gold
                    </h3>
                </div>

                <Company logoHref={critical} name="critical" />
                <Company logoHref={critical} name="critical" />

                <div id="stands-silver" className="mb-5">
                    <h5 id="stands-silver-text" className="mt-5 text-center">
                        Silver
                    </h5>
                </div>

                <Company logoHref={critical} name="critical" />
                <Company logoHref={critical} name="critical" />
                <Company logoHref={critical} name="critical" />
                <Company logoHref={critical} name="critical" />
            </div>

            <HeadingText text="Patrocinadores" />
            <div className="container-fluid">
                <SponsorsContainer />
            </div>

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

            <Map />
        </div>
    );
};

export default Content;
