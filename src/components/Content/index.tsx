import { FunctionComponent } from 'react';

import './styles.css';

import critical from '../../assets/images/companies/critical.png';
import InfoText from '../InfoText';

const Content: FunctionComponent = () => {
    return (
        <div id="content" className="container-fluid bg-light bg-gradient p-5">
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
                <h1 className="text-center my-5">Inscrições</h1>

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

            <h1 className="text-center my-5 title">Empresas</h1>
            <div className="container-fluid">
                <div id="stands-diamond" className="mb-5">
                    <h2 id="stands-diamond-text" className="text-center ">
                        Diamond
                    </h2>
                    <div></div>
                </div>

                <div className="row mb-xl-2 justify-content-center">
                    <div
                        className="col-lg col-sm-4 col-xs-12 my-2 d-flex align-items-center
                    justify-content-start stand stand"
                        data-toggle="modal"
                        data-target="#minderaModal">
                        <img
                            className="img-fluid my-3 mx-auto"
                            src={critical}
                            height="170px"
                            width="170px"
                            alt="Mindera"
                        />
                    </div>

                    <div
                        className="col-lg col-sm-4 col-xs-12 my-2 d-flex align-items-center
                    justify-content-center stand"
                        data-toggle="modal"
                        data-target="#primaveraModal">
                        <img
                            className="img-fluid my-3 mx-auto"
                            src={critical}
                            height="200px"
                            width="200px"
                            alt="Primavera"
                        />
                    </div>

                    <div
                        className="col-lg col-sm-4 col-xs-12 my-2 d-flex align-items-center
                    justify-content-center stand"
                        data-toggle="modal"
                        data-target="#devScopeModal">
                        <img
                            className="img-fluid my-3 mx-auto"
                            src={critical}
                            height="200px"
                            width="200px"
                            alt="DevScope"
                        />
                    </div>

                    <div
                        className="col-lg col-sm-4 col-xs-12 my-2 d-flex align-items-center
                    justify-content-center stand"
                        data-toggle="modal"
                        data-target="#armisModal">
                        <img
                            className="img-fluid my-3 mx-auto"
                            src={critical}
                            height="120px"
                            width="120px"
                            alt="Armis"
                        />
                    </div>

                    <div
                        className="col-lg col-sm-4 col-xs-12 my-2 d-flex align-items-center
                    justify-content-center stand"
                        data-toggle="modal"
                        data-target="#continentalModal">
                        <img
                            className="img-fluid my-3 mx-auto"
                            src={critical}
                            height="250px"
                            width="250px"
                            alt="Continental"
                        />
                    </div>
                </div>

                <div id="stands-gold" className="mb-5">
                    <h3 id="stands-gold-text" className="text-center mt-2">
                        Gold
                    </h3>
                    <div></div>
                </div>

                <div className="row mb-xl-2 justify-content-center">
                    <div
                        className="col-lg col-sm-4 col-xs-12 my-2  d-flex align-items-center
                    justify-content-center stand"
                        data-toggle="modal"
                        data-target="#accentureModal">
                        <img
                            className="img-fluid my-3 mx-auto"
                            src={critical}
                            height="150px"
                            width="150px"
                            alt="Accenture"
                        />
                    </div>
                    <div
                        className="col-lg col-sm-4 col-xs-12 my-2 d-flex align-items-center
                    justify-content-center stand"
                        data-toggle="modal"
                        data-target="#jscramblerModal">
                        <img
                            className="img-fluid my-3 mx-auto"
                            src={critical}
                            height="150px"
                            width="150px"
                            alt="jscrambler"
                        />
                    </div>
                </div>

                <div id="stands-silver" className="mb-5">
                    <h5 id="stands-silver-text" className="text-center mt-5">
                        Silver
                    </h5>
                    <div></div>
                </div>

                <div className="row mb-xl-2 justify-content-center">
                    <div
                        className="col-lg-3 col-sm-4 col-xs-12 my-2 d-flex align-items-center
                    justify-content-center stand">
                        <a
                            href="https://www.criticalmanufacturing.com"
                            target="_blank"
                            rel="noreferrer">
                            <img
                                className="img-fluid my-3 mx-auto"
                                src={critical}
                                height="200px"
                                width="200px"
                                alt="Critical"
                            />
                        </a>
                    </div>
                    <div
                        className="col-lg-3 col-sm-4 col-xs-12 my-2 d-flex align-items-center
                    justify-content-center stand">
                        <a
                            href="https://www.craftablesoftware.com/"
                            target="_blank"
                            rel="noreferrer">
                            <img
                                className="img-fluid my-3 mx-auto"
                                src={critical}
                                height="140px"
                                width="140px"
                                alt="Craftable"
                            />
                        </a>
                    </div>
                    <div
                        className="col-lg-3 col-sm-4 col-xs-12 my-2 d-flex align-items-center
                    justify-content-center stand">
                        <a href="https://www.byside.com/" target="_blank" rel="noreferrer">
                            <img
                                className="img-fluid my-3 mx-auto"
                                src={critical}
                                height="140px"
                                width="140px"
                                alt="Byside"
                            />
                        </a>
                    </div>
                    <div
                        className="col-lg-3 col-sm-4 col-xs-12 my-2 d-flex align-items-center
                    justify-content-center stand">
                        <a
                            href="https://www.glintt.com/pt/Paginas/home.aspx"
                            target="_blank"
                            rel="noreferrer">
                            <img
                                className="img-fluid my-3 mx-auto"
                                src={critical}
                                height="140px"
                                width="140px"
                                alt="Glintt"
                            />
                        </a>
                    </div>
                    <div
                        className="col-lg-3 col-sm-4 col-xs-12 my-2 d-flex
                    align-items-center
                    justify-content-center stand stand">
                        <a href="https://www.farfetch.com/pt/" target="_blank" rel="noreferrer">
                            <img
                                className="img-fluid my-3 mx-auto"
                                src={critical}
                                height="140px"
                                width="140px"
                                alt="Farfetch"
                            />
                        </a>
                    </div>
                    <div
                        className="col-lg-3 col-sm-4 col-xs-12 my-2 d-flex align-items-center
                    justify-content-center stand">
                        <a href="https://www.hitachi.eu/pt-pt" target="_blank" rel="noreferrer">
                            <img
                                className="img-fluid my-3 mx-auto"
                                src={critical}
                                height="200px"
                                width="200px"
                            />
                        </a>
                    </div>
                    <div
                        className="col-lg-3 col-sm-4 col-xs-12 my-2 d-flex align-items-center
                    justify-content-center stand">
                        <a
                            href="http://www.konkconsulting.com/PT/"
                            target="_blank"
                            rel="noreferrer">
                            <img
                                className="img-fluid my-3 mx-auto"
                                src={critical}
                                height="150px"
                                width="150px"
                                alt="Konk"
                            />
                        </a>
                    </div>

                    <div
                        className="col-lg-3 col-sm-4 col-xs-12 my-2 d-flex align-items-center
                    justify-content-center stand">
                        <a
                            href="https://www.natixis.com/natixis/en/home-j_6.html"
                            target="_blank"
                            rel="noreferrer">
                            <img
                                className="img-fluid my-3 mx-auto"
                                src={critical}
                                height="180px"
                                width="180px"
                                alt="Natixis"
                            />
                        </a>
                    </div>
                </div>
            </div>

            <h1 id="sponsors-title" className="text-center my-5 retro">
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
                            className="img-fluid my-4 mx-auto d-block sponsor"
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
                            className="img-fluid my-4 mx-auto d-block sponsor"
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
                            className="img-fluid my-4 mx-auto d-block sponsor"
                            src={'./assets/img/sponsors/moura.png'}
                            alt="Conf. e Past. Moura Logo"
                        />
                    </a>
                </div>
            </div>

            <hr />
            <h1 className="text-center my-5">Horário</h1>

            <ul className="nav nav-pills center-pills" id="myTab" role="tablist">
                <li className="nav-item" role="presentation">
                    <button
                        className="nav-link active"
                        id="quinta-tab"
                        data-toggle="tab"
                        data-target="#quinta"
                        type="button"
                        role="tab"
                        aria-controls="quinta"
                        aria-selected="true">
                        Quinta-feira - Auditório Magno
                    </button>
                </li>
                <li className="nav-item" role="presentation">
                    <button
                        className="nav-link"
                        id="sexta-tab"
                        data-toggle="tab"
                        data-target="#sexta"
                        type="button"
                        role="tab"
                        aria-controls="sexta"
                        aria-selected="false">
                        Sexta-feira - Sala de Eventos
                    </button>
                </li>
            </ul>
            <div className="tab-content" id="myTabContent">
                <div
                    className="tab-pane fade show active"
                    id="quinta"
                    role="tabpanel"
                    aria-labelledby="quinta-tab">
                    <table className="schedule-table">
                        <tr>
                            <th>Hora</th>
                            <th>Atividade</th>
                        </tr>

                        <tr>
                            <td>09.00h - 10.40h</td>
                            <td>Sessão de entrevistas a empresas participantes</td>
                        </tr>

                        <tr>
                            <td>10.40h - 11.00h</td>
                            <td>Coffee Break</td>
                        </tr>

                        <tr>
                            <td>11.00h - 13.00h</td>
                            <td>Sessão de entrevistas a empresas participantes</td>
                        </tr>

                        <tr>
                            <td>13.00h - 14.30h</td>
                            <td>Pausa para almoço</td>
                        </tr>

                        <tr>
                            <td>14.30h - 15.50h</td>
                            <td>Sessão de entrevistas a empresas participantes</td>
                        </tr>

                        <tr>
                            <td>15.50h - 16.10h</td>
                            <td>Coffee Break</td>
                        </tr>

                        <tr>
                            <td>16.10h - 17.30h</td>
                            <td>Sessão de entrevistas a empresas participantes</td>
                        </tr>
                    </table>
                </div>

                <div
                    className="tab-pane fade"
                    id="sexta"
                    role="tabpanel"
                    aria-labelledby="sexta-tab">
                    <table className="schedule-table">
                        <tr>
                            <th>Hora</th>
                            <th>Atividade</th>
                        </tr>

                        <tr>
                            <td>09.30h - 11.00h</td>
                            <td>Sessão de Round Tables e Networking</td>
                        </tr>

                        <tr>
                            <td>11.00h - 11.30h</td>
                            <td>Coffee Break</td>
                        </tr>

                        <tr>
                            <td>11.30h - 13.00h</td>
                            <td>Sessão de Round Tables e Networking</td>
                        </tr>

                        <tr>
                            <td>13.00h - 14.00h</td>
                            <td>Pausa para almoço</td>
                        </tr>

                        <tr>
                            <td>14.00h - 15.30h</td>
                            <td>Sessão de Round Tables e Networking</td>
                        </tr>

                        <tr>
                            <td>15.30h - 16.00h</td>
                            <td>Coffee Break</td>
                        </tr>

                        <tr>
                            <td>16.00h - 17.30h</td>
                            <td>Sessão de Round Tables e Networking</td>
                        </tr>
                    </table>
                </div>
            </div>

            <div>
                <h1 className="text-center my-5">Mapa</h1>
                <img
                    className="img-fluid my-2 mx-auto d-block map"
                    src={'./assets/img/map.png'}
                    alt="Mapa Informativo dos locais das Atividades"
                    width="850px"
                    height="850px"
                    draggable="false"
                />
            </div>
        </div>
    );
};

export default Content;
