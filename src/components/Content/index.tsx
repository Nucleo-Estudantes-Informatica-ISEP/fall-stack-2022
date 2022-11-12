import { FunctionComponent } from 'react';

import './styles.css';

import Critical from '../../assets/images/companies/Critical.png';
import Interview from '../../assets/images/interview.png';
import Roundtables from '../../assets/images/roundtables.png';

import Company from '../Company';
import InfoText from '../InfoText';
import Schedule from '../Schedule';
import Activity from '../Activity';

const Content: FunctionComponent = () => {
    return (
        <section className="center container mx-auto w-3/4 rounded-lg bg-slate-100 p-14">
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

            <div
                id="content-enrollment-container"
                className="d-flex flex-column align-items-center justify-content-center text-center">
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

            <h1 className="title my-5 text-center">Empresas</h1>

            <div className="container-fluid">
                <div id="stands-diamond" className="mb-5">
                    <h2 id="stands-diamond-text" className="text-center ">
                        Diamond
                    </h2>
                </div>

                <div className="row mb-xl-2 justify-content-center">
                    <Company
                        logoHref={Critical}
                        name="Critical"
                        modalBodyText="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident"
                    />
                    <Company logoHref={Critical} name="Critical" />
                    <Company logoHref={Critical} name="Critical" />
                    <Company logoHref={Critical} name="Critical" />
                </div>

                <div id="stands-gold" className="mb-5">
                    <h3 id="stands-gold-text" className="mt-2 text-center">
                        Gold
                    </h3>
                </div>

                <Company logoHref={Critical} name="Critical" />
                <Company logoHref={Critical} name="Critical" />

                <div id="stands-silver" className="mb-5">
                    <h5 id="stands-silver-text" className="mt-5 text-center">
                        Silver
                    </h5>
                </div>

                <Company logoHref={Critical} name="Critical" />
                <Company logoHref={Critical} name="Critical" />
                <Company logoHref={Critical} name="Critical" />
                <Company logoHref={Critical} name="Critical" />
            </div>

            <h1 id="sponsors-title" className="retro my-5 text-center">
                Patrocinadores
            </h1>
            <div className="container-fluid">
                <div id="sponsors" className="row">
                    <a
                        target="_blank"
                        href="https://aeisep.pt/"
                        className="sponsor-container my-2"
                        rel="noreferrer">
                        <img
                            className="img-fluid d-block sponsor my-4 mx-auto"
                            src={'./assets/img/sponsors/ae.png'}
                            alt="AE ISEP Logo"
                        />
                    </a>
                    <a
                        target="_blank"
                        href="https://www.dominospizza.pt/"
                        className="sponsor-container my-2"
                        rel="noreferrer">
                        <img
                            className="img-fluid d-block sponsor my-4 mx-auto"
                            src={'./assets/img/sponsors/dominos.png'}
                            alt="Domino's Pizza Logo"
                        />
                    </a>
                    <a
                        target="_blank"
                        href="https://confeitariamoura.pt/"
                        className="sponsor-container my-2"
                        rel="noreferrer">
                        <img
                            className="img-fluid d-block sponsor my-4 mx-auto"
                            src={'./assets/img/sponsors/moura.png'}
                            alt="Conf. e Past. Moura Logo"
                        />
                    </a>
                </div>
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

            <div>
                <h1 className="my-5 text-center">Mapa</h1>
                <img
                    className="img-fluid d-block map my-2 mx-auto"
                    src={'./assets/img/map.png'}
                    alt="Mapa Informativo dos locais das Atividades"
                    width="850px"
                    height="850px"
                    draggable="false"
                />
            </div>
        </section>
    );
};

export default Content;
