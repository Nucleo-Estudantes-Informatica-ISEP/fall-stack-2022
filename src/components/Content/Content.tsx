import { FunctionComponent } from "react";

interface Props {
  
}
 
const Content: FunctionComponent<Props> = () => {
  return (
        <div id="content" className="container-fluid bg-light bg-gradient p-5">
      <h1 className="text-center mt-5 mb-4">O que é o Fallstack?</h1>
      <div id="intro-info" className="my-4">
        <span id="calendar-span"><i className="bi bi-calendar-event my-2"></i> <b>13
            e 14 de janeiro</b></span>
        <span id="alarm-span"><i className="bi bi-alarm my-2"></i> <b>9h00 - 17h30</b></span>
        <span id="location-span"><i className="bi bi-geo-alt my-2"></i> <b>Instituto
            Superior de<br>Engenharia do
            Porto</b></span>
      </div>

        <p id="intro-text" className="intro-font">
          Mais um ano e mais uma edição do evento FallStack no Instituto
          Superior de Engenharia do Porto!
        </p>
        <p id="intro-text" className="intro-font">
          Este evento que já vai na sua 4ª edição, será realizado nos dias 13 e
          14 de janeiro e está de volta ao formato presencial, com entrada
          gratuita, tendo por objetivo fomentar o contacto direto entre empresas
          e alunos finalistas do curso de Engenharia Informática.
        </p>
        <p id="intro-text" className="intro-font">
          No primeiro dia poderás contar com as entrevistas às empresas
          participantes, onde ficarás a saber mais sobre as mesmas, desde as
          áreas em que trabalham até propostas de estágio.
        </p>
        <p id="intro-text" className="intro-font">
          No segundo dia irão ocorrer as Round Tables, onde poderás interagir
          diretamente com as empresas e conhecê-las com mais detalhe.
        </p>
        <p id="intro-text" className="intro-font">
          Contamos com a tua presença para este evento que te vai ajudar e
          esclarecer dúvidas que tenhas sobre empresas da nossa área de estudos.
        </p>

        <div id="content-activity-main-container">
          <div id="content-activity-container">
            <div id="content-activity-image-container">
              <img id="content-activity-image" src="assets/img/interview.png"
                alt="interview"/>
            </div>
            <div id="content-activity">
              <h5>Sessão de Entrevistas<br/>(Dia 13)</h5>
              <div id="content-activity-text">
                <p>O objetivo da <strong>Sessão de Entrevistas</strong> é as
                  empresas presentes darem-se a conhecer aos estudantes, através
                  de uma breve apresentação e esclarecendo as questões que os
                  estudantes tiverem para colocar.</p>
              </div>
            </div>
          </div>

          <div id="content-activity-container">
            <div id="content-activity-image-container">
              <img id="content-activity-image" src="assets/img/roundtables.png"
                alt="round tables"/>
            </div>
            <div id="content-activity">
              <h5>Round Tables<br/>(Dia 14)</h5>
              <div id="content-activity-text">
                <p>O objetivo das <strong>Round Tables</strong> é o estudante
                  ter contacto com todas as empresas presentes no evento.
                  Poderão ainda entrar em contacto com as empresas que mais
                  despertaram interesse <b>sem restrições de tempo!</b></p>
              </div>
            </div>
          </div>
        </div>

        <hr/>

        <div id="content-enrollment-container"
          className="d-flex flex-column align-items-center justify-content-center
          text-center">
          <h1 className="text-center my-5">Inscrições</h1>

        <a id="content-enrollment-text" rel="noreferrer" target="_blank"
          href="https://docs.google.com/forms/d/e/1FAIpQLSeD1gx7vhavvW09w0Ciw2dXQ1H9dy6EoP6telW4hAsI5WihKg/viewform?usp=sf_link">
          <img id="enrollment-logo" width="140px" height="140px" className="img-fluid" src="./assets/img/google-forms.png"
            alt="Forms link to enrollment"/>
          <h6 id="enrollment-text" className="mt-5">Inscrição no google forms</h6>
        </a>
      </div>

      <hr/>
      
      <h1 className="text-center my-5 title">Empresas</h1>
      <div className="container-fluid">
      
        <div id="stands-diamond" className="mb-5">
          <h2 id="stands-diamond-text" className="text-center ">Diamond</h2>
          <div></div>
        </div>
      
        <div className="row mb-xl-2 justify-content-center">
      
          <div className="col-lg col-sm-4 col-xs-12 my-2 d-flex align-items-center
                    justify-content-start stand stand" style="height: 130px;"
                    data-toggle="modal" data-target="#minderaModal">
                <img className="img-fluid my-3 mx-auto" src="assets/img/companies/mindera-logo.png" height="170px" width="170px"
                  alt="Mindera"/>
          </div>
      
          <div className="col-lg col-sm-4 col-xs-12 my-2 d-flex align-items-center
                    justify-content-center stand"  style="height: 160px;"
                    data-toggle="modal" data-target="#primaveraModal">
            <img className="img-fluid my-3 mx-auto" src="assets/img/companies/primavera.svg" height="200px" width="200px"
              alt="Primavera">
          </div>
      
          <div className="col-lg col-sm-4 col-xs-12 my-2 d-flex align-items-center
                    justify-content-center stand"  style="height: 160px;"
                    data-toggle="modal" data-target="#devScopeModal">
            <img className="img-fluid my-3 mx-auto" src="assets/img/companies/devscope_logo.png" height="200px" width="200px"
              alt="DevScope">
          </div>
      
          <div className="col-lg col-sm-4 col-xs-12 my-2 d-flex align-items-center
                    justify-content-center stand"  style="height: 160px;"
                    data-toggle="modal" data-target="#armisModal">
            <img className="img-fluid my-3 mx-auto" src="assets/img/companies/armis.png" height="120px" width="120px" alt="Armis">
          </div>
      
          <div className="col-lg col-sm-4 col-xs-12 my-2 d-flex align-items-center
                    justify-content-center stand"  style="height: 160px;"
                    data-toggle="modal" data-target="#continentalModal">
            <img className="img-fluid my-3 mx-auto" src="assets/img/companies/continental.png" height="250px" width="250px"
              alt="Continental">
          </div>
      
        </div>
        <!-- STANDS DIAMOND [FIM] -->
      
        <!-- STANDS GOLD [INICIO] -->
        <div id="stands-gold" className="mb-5">
          <h3 id="stands-gold-text" className="text-center mt-2">Gold</h3>
          <div></div>
        </div>
      
      
        <div className="row mb-xl-2 justify-content-center">
          <div className="col-lg col-sm-4 col-xs-12 my-2  d-flex align-items-center
                    justify-content-center stand"   style="height: 160px;"
                    data-toggle="modal" data-target="#accentureModal">
            <img className="img-fluid my-3 mx-auto" src="assets/img/companies/accenture.png" height="150px" width="150px"
              alt="Accenture">
          </div>
          <div className="col-lg col-sm-4 col-xs-12 my-2 d-flex align-items-center
                    justify-content-center stand"   style="height: 160px;" 
                    data-toggle="modal" data-target="#jscramblerModal">
            <img className="img-fluid my-3 mx-auto" src="assets/img/companies/jscrambler.png" height="150px" width="150px"
              alt="jscrambler">
          </div>
        </div>
        <!-- STANDS GOLD [FIM] -->
      
        <!-- STANDS SILVER [INICIO] -->
        <div id="stands-silver" className="mb-5">
          <h5 id="stands-silver-text" className="text-center mt-5">Silver</h5>
          <div></div>
        </div>
      
      
        <div className="row mb-xl-2 justify-content-center">
          <div className="col-lg-3 col-sm-4 col-xs-12 my-2 d-flex align-items-center
                    justify-content-center stand"   style="height: 160px;">

                <a href="https://www.criticalmanufacturing.com" target="_blank">
                    <img className="img-fluid my-3 mx-auto" src="assets/img/companies/critical.png" height="200px" width="200px"
                        alt="Critical">
                </a>
          </div>
          <div className="col-lg-3 col-sm-4 col-xs-12 my-2 d-flex align-items-center
                    justify-content-center stand"   style="height: 160px;">
                <a href="https://www.craftablesoftware.com/" target="_blank">
                    <img className="img-fluid my-3 mx-auto" src="assets/img/companies/craftable.png" height="140px" width="140px"
                        alt="Craftable">
                </a>
          </div>
          <div className="col-lg-3 col-sm-4 col-xs-12 my-2 d-flex align-items-center
                    justify-content-center stand"   style="height: 160px;">
                <a href="https://www.byside.com/" target="_blank">
                    <img className="img-fluid my-3 mx-auto" src="assets/img/companies/byside.png" height="140px" width="140px"
                        alt="Byside">
                </a>
          </div>
          <div className="col-lg-3 col-sm-4 col-xs-12 my-2 d-flex align-items-center
                    justify-content-center stand"  style="height: 160px;">
                <a href="https://www.glintt.com/pt/Paginas/home.aspx" target="_blank">
                    <img className="img-fluid my-3 mx-auto" src="assets/img/companies/glintt.png" height="140px" width="140px"
                        alt="Glintt">
                </a>
          </div>
          <div className="col-lg-3 col-sm-4 col-xs-12 my-2 d-flex
                    align-items-center
                    justify-content-center stand stand"   style="height: 160px;">
                <a href="https://www.farfetch.com/pt/" target="_blank">
                    <img className="img-fluid my-3 mx-auto" src="assets/img/companies/farfetch.png" height="140px" width="140px"
                        alt="Farfetch">
                </a>
          </div>
          <div className="col-lg-3 col-sm-4 col-xs-12 my-2 d-flex align-items-center
                    justify-content-center stand"  style="height: 160px;">
                <a href="https://www.hitachi.eu/pt-pt" target="_blank">
                    <img className="img-fluid my-3 mx-auto" src="assets/img/companies/hitachi.png" height="200px" width="200px">
                </a>
          </div>
          <div className="col-lg-3 col-sm-4 col-xs-12 my-2 d-flex align-items-center
                    justify-content-center stand"  style="height: 160px;">
                <a href="http://www.konkconsulting.com/PT/" target="_blank">
                    <img className="img-fluid my-3 mx-auto" src="assets/img/companies/konk.png" height="150px" width="150px" alt="Konk">
                </a>
          </div>
      
          <div className="col-lg-3 col-sm-4 col-xs-12 my-2 d-flex align-items-center
                    justify-content-center stand"  style="height: 160px;">
                <a href="https://www.natixis.com/natixis/en/home-j_6.html" target="_blank">
                    <img className="img-fluid my-3 mx-auto" src="assets/img/companies/natixis.png" height="180px" width="180px"
                      alt="Natixis">
                </a>
          </div>
        </div>
        
        <!-- STANDS SILVER [FIM] -->
      
      </div>
      
      <!-- Modals -->
      
      <!-- Diamond -->
      <div className="modal big-modal fade" id="minderaModal" tabIndex="-1" aria-labelledby="minderaModal" aria-hidden="true">
        <div className="modal-dialog" role="document">
          <div className="modal-content">
            <div className="modal-body d-flex flex-column align-items-center">
              <div className="position-absolute close-modal">
                <button type="button" className="modal-close-btn" data-dismiss="modal" aria-label="Close"><i
                    className="fas fa-times"></i></button>
              </div>
              <img className="img-fluid mx-2 mb-5" src="assets/img/companies/mindera-logo.png" height="180px" width="180px"
                alt="Mindera" />
      
              <ul className="nav nav-tabs navbar-expand" id="tabContent">
                <li className="nav-item"><a className="nav-link active" href="#details-mindera" data-toggle="tab">Detalhes</a></li>
                <li className="nav-item"><a className="nav-link" href="#links-mindera" data-toggle="tab">Links</a></li>
                <li className="nav-item"><a className="nav-link" href="#video-mindera" data-toggle="tab">Vídeo</a></li>
              </ul>
      
              <div className="tab-content w-100">
                <div className="tab-pane active" id="details-mindera">
                  <p className="m-4"> At Mindera we use technology to build
                    products we are proud of, with people we love.
                    <br><br>
                    Software Engineering Applications, including Web and
                    Mobile, are at the core of what we do at Mindera.
                    <br><br>
                    You get to work with a bunch of great people, where the
                    whole team owns the project together. Our culture reflects
                    our lean and self-organization attitude. We encourage our
                    colleagues to take risks, make decisions, work in a
                    collaborative way and talk to everyone to enhance
                    communication.
                    <br><br>
                    We partner with our clients, to understand their product
                    and deliver high performance, resilient and scalable
                    software systems that create an impact in their users and
                    businesses across the world.
                    <br><br>
                    Check out our <a target="_blank" href="http://bit.ly/MinderaHanbook">Handbook</a>.
                    and subscribe our <a target="_blank" href="https://bit.ly/Mindera">YouTube channel</a>.
                    <br><br>
                    Our offices are located in: Portugal | UK | USA | India |
                    Romania
                    <br><br>
                    Visit our <a target="_blank" href="https://mindera.com">website</a>.
                  </p>
                </div>
      
                <div className="tab-pane" id="links-mindera">
                  <div id="links-container" className="col d-flex justify-content-around pt-5  align-items-center ">
                    <a target="_blank" href="https://mindera.com"><i className="bi-globe"></i> Website</a>
                    <a target="_blank" href="https://www.linkedin.com/company/mindera"><i className="bi-linkedin"></i> Linkedin</a>
                    <a target="_blank" className=" bi-facebook" href="https://www.facebook.com/minderasoftwarecraft"><i className="bi-"></i>
                      Facebook</a>
                    <a target="_blank" href="https://twitter.com/minderaswcraft"><i className="bi-twitter"></i> Twitter</a>
                    <a target="_blank" href="https://www.youtube.com/c/MinderaSoftware"><i className="bi-youtube"></i> Youtube</a>
                    <a target="_blank" href="https://www.instagram.com/minderascraft/"><i className="bi-instagram"></i> Instagram</a>
                  </div>
                </div>
      
                <div className="tab-pane" id="video-mindera">
      
                  <div className="d-flex align-items-center
                            justify-content-center">
                    <iframe className="center mt-5 mb-4" width="560" height="315" src="https://www.youtube.com/embed/pY7m-cucO6s"
                      title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write;
                              encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      
      <div className="modal big-modal fade" id="primaveraModal" tabIndex="-1" aria-labelledby="primaveraModal" aria-hidden="true">
        <div className="modal-dialog" role="document">
          <div className="modal-content">
            <div className="modal-body d-flex flex-column align-items-center">
              <div className="position-absolute close-modal">
                <button type="button" className="modal-close-btn" data-dismiss="modal" aria-label="Close"><i
                    className="fas fa-times"></i></button>
              </div>
              <img className="img-fluid mx-2 mb-5" src="assets/img/companies/primavera.svg" height="220px" width="220px"
                alt="primavera" />
      
              <ul className="nav nav-tabs navbar-expand" id="tabContent">
                <li className="nav-item"><a className="nav-link active" href="#details-primavera" data-toggle="tab">Detalhes</a></li>
                <li className="nav-item"><a className="nav-link" href="#links-primavera" data-toggle="tab">Links</a></li>
                <li className="nav-item"><a className="nav-link" href="#video-primavera" data-toggle="tab">Vídeo</a></li>
              </ul>
      
              <div className="tab-content w-100">
                <div className="tab-pane active mt-5" id="details-primavera">
                  <p className="m-4">
                    A PRIMAVERA é o resultado de uma ideia disruptiva e
                    determinação contínua que, desde 1993, junta um
                    ecossistema de 500 parceiros e mais de 40 mil clientes
                    espalhados por cerca de 20 países. Acreditamos na
                    importância de simplificar a vida das organizações e das
                    pessoas, mas não nos ficamos por aqui: deixamos a marca um
                    pouco por todo o Mundo, sempre com o foco na criação de
                    valor e soluções inovadoras que respondem às exigências
                    das empresas de todas as dimensões e setores de atividade.
                    <br><br>
                    Desde Junho 2021 que integramos o novo Grupo Primavera,
                    líder ibérico, contando já com 600 colaboradores, 60
                    milhões de Euros de receitas e 55.000 clientes. Desta
                    forma reforçamos o propósito de perseguir a estratégia de
                    inovar continuamente na gestão empresarial, com a firme
                    convicção de que a partir de agora existirão as condições
                    ideais para disponibilizar soluções ainda mais
                    inteligentes e disruptivas de suporte à transformação
                    digital do tecido empresarial.
                  </p>
                </div>
      
                <div className="tab-pane mt-5" id="links-primavera">
                  <div className="col d-flex justify-content-around mt-5">
                    <a target="_blank" href="https://pt.primaverabss.com/pt/pagina/jobs/"><i className="bi-globe"></i> Website
                    </a>
                  </div>
                </div>
      
                <div className="tab-pane" id="video-primavera">
                  <div className="d-flex align-items-center
                                              justify-content-center">
                    <iframe className="center mt-5 mb-4" width="560" height="315" src="https://youtube.com/embed/0iIZD3WVi-s"
                      title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write;
                                                encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      
      <div className="modal big-modal fade" id="devScopeModal" tabIndex="-1" aria-labelledby="devScopeModal" aria-hidden="true">
        <div className="modal-dialog" role="document">
          <div className="modal-content">
            <div className="modal-body d-flex flex-column align-items-center">
              <div className="position-absolute close-modal">
                <button type="button" className="modal-close-btn" data-dismiss="modal" aria-label="Close"><i
                    className="fas fa-times"></i></button>
              </div>
              <img className="img-fluid mx-2 mb-5" src="assets/img/companies/devscope_logo.png" height="220px" width="220px"
                alt="devScope" />
      
              <ul className="nav nav-tabs navbar-expand" id="tabContent">
                <li className="nav-item"><a className="nav-link active" href="#details-devScope" data-toggle="tab">Detalhes</a></li>
                <li className="nav-item"><a className="nav-link" href="#links-devScope" data-toggle="tab">Links</a></li>
                <li className="nav-item"><a className="nav-link" href="#video-devScope" data-toggle="tab">Vídeo</a></li>
              </ul>
      
              <div className="tab-content w-100" >
                <div className="tab-pane active mt-5" id="details-devScope">
                  <p className="m-4">
                    A DevScope é um parceiro Gold Microsoft especializado em
                    ajudar empresas a manter-se competitivas e a ultrapassar
                    desafios de mercado e organizacionais. Ao longo de mais de
                    18 anos, a DevScope desenvolveu e implementou soluções nas
                    mais variadas áreas, do retalho à saúde ou ao imobiliário,
                    trabalhando sempre com a tecnologia mais recente e
                    produzindo resultados duradouros.
                  </p>
                </div>
      
                <div className="tab-pane" id="links-devScope">
                  <div id="links-container" className="col d-flex justify-content-around mt-5 p-5" id="tabContent">
                    <a
                     target="_blank"
                      href="https://eur01.safelinks.protection.outlook.com/?url=https%3A%2F%2Flinkedin.com%2Fcompany%2Fdevscope&data=04%7C01%7Cdavid.mota%40devscope.net%7C7951adb7c0514a8896b708d9c08dfcb4%7C09e251dc5e8748bfb4d271b01adb984a%7C0%7C0%7C637752538317903925%7CUnknown%7CTWFpbGZsb3d8eyJWIjoiMC4wLjAwMDAiLCJQIjoiV2luMzIiLCJBTiI6Ik1haWwiLCJXVCI6Mn0%3D%7C3000&sdata=vaCp4KlTQ2nM%2BGAVPYLr9mk3ZBk7I4HVoInrZB6DrZs%3D&reserved=0"><i
                        className="bi-linkedin"></i> Linkedin
                    </a>
                    <a 
                      target="_blank"
                      href="https://eur01.safelinks.protection.outlook.com/?url=https%3A%2F%2Fwww.facebook.com%2Fdevscope%2F&data=04%7C01%7Cdavid.mota%40devscope.net%7C7951adb7c0514a8896b708d9c08dfcb4%7C09e251dc5e8748bfb4d271b01adb984a%7C0%7C0%7C637752538317903925%7CUnknown%7CTWFpbGZsb3d8eyJWIjoiMC4wLjAwMDAiLCJQIjoiV2luMzIiLCJBTiI6Ik1haWwiLCJXVCI6Mn0%3D%7C3000&sdata=bb40jS5ty2yLEBfJUJjhtA4s2Oguas3FDLBQHk%2F8%2FMY%3D&reserved=0"><i
                        className="bi-facebook"></i> Facebook
                    </a>
                    <a
                      target="_blank"
                      href="https://eur01.safelinks.protection.outlook.com/?url=https%3A%2F%2Ftwitter.com%2FDevScope&data=04%7C01%7Cdavid.mota%40devscope.net%7C7951adb7c0514a8896b708d9c08dfcb4%7C09e251dc5e8748bfb4d271b01adb984a%7C0%7C0%7C637752538317903925%7CUnknown%7CTWFpbGZsb3d8eyJWIjoiMC4wLjAwMDAiLCJQIjoiV2luMzIiLCJBTiI6Ik1haWwiLCJXVCI6Mn0%3D%7C3000&sdata=yNIwZh2%2BWeWo9uyy01%2BY35SmrFuhj7IqL0%2Fg59qba54%3D&reserved=0"><i
                        className="bi-twitter"></i> Twitter
                    </a>
                  </div>
                </div>
      
                <div className="tab-pane" id="video-devScope">
                  <div className="d-flex align-items-center justify-content-center">
                    <iframe className="center mt-5 mb-4" width="560" height="315" src="https://www.youtube.com/embed/WL1pRbjUs6c"
                      title="YouTube video player" frameborder="0"
                      allow="accelerometer; autoplay; clipboard-write;
                                                                                                          encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      
      <div className="modal big-modal fade" id="armisModal" tabIndex="-1" aria-labelledby="armisModal" aria-hidden="true">
        <div className="modal-dialog" role="document">
          <div className="modal-content">
            <div className="modal-body d-flex flex-column align-items-center">
              <div className="position-absolute close-modal">
                <button type="button" className="modal-close-btn" data-dismiss="modal" aria-label="Close"><i
                    className="fas fa-times"></i></button>
              </div>
              <img className="img-fluid mx-2 mb-5" src="assets/img/companies/armis.png" height="180px" width="180px"
                alt="armis" />
      
              <ul className="nav nav-tabs navbar-expand" id="tabContent">
                <li className="nav-item"><a className="nav-link active" href="#details-armis" data-toggle="tab">Detalhes</a></li>
                <li className="nav-item"><a className="nav-link" href="#links-armis" data-toggle="tab">Links</a></li>
                <li className="nav-item"><a className="nav-link" href="#video-armis" data-toggle="tab">Vídeo</a></li>
              </ul>
      
              <div className="tab-content w-100">
                <div className="tab-pane active mt-5" id="details-armis">
                  <p className="m-4">
                    A ARMIS é uma empresa dedicada à inovação tecnológica e
                    engenharia de software, focada no desenvolvimento e na
                    implementação de soluções ambiciosas que resolvem desafios
                    complexos do mercado.
                    <br><br>
                    Destacamo-nos por ter uma equipa de profissionais altamente
                    qualificados, capazes de realizar projetos desafiantes,
                    primando pela formação e pela dedicação em responder às
                    especificidades de cada projeto e negócio, com a máxima
                    agilidade e eficiência. No caminho para a digitalização,
                    valorizamos o capital humano e proporcionamos aos nossos
                    colaboradores um ambiente de trabalho dinâmico, motivador e
                    propício ao desenvolvimento e progressão profissional.
                    <br><br>
                    Com escritórios no Porto, Lisboa, São Paulo e Utrecht a
                    ARMIS tem vindo a desenvolver serviços de Tecnologias de
                    Informação personalizados a cada cliente, em todo o mundo,
                    ao longo dos seus 16 anos de história, nas áreas dos
                    transportes, desporto, banca, saúde, telecomunicações e
                    administração pública.
                  </p>
                </div>
      
                <div className="tab-pane" id="links-armis">
                  <div id="links-container" className="col d-flex justify-content-around mt-5">
                    <a target="_blank" href="https://www.armis.pt/"><i className="bi-globe"></i> Website
                    </a>
                    <a target="_blank" href="https://www.linkedin.com/company/armis/"><i className="bi-linkedin"></i> Linkedin
                    </a>
                    <a target="_blank" href="https://www.facebook.com/grupoarmis"><i className="bi-facebook"></i> Facebook
                    </a>
                    <a target="_blank" href="https://www.youtube.com/channel/UCB7fdbbTF7AtPGReTBKz1DA/featured">
                      <i className="bi-youtube"></i>
                      Youtube
                    </a>
                    <a target="_blank" href="https://www.instagram.com/armis_group/"><i className="bi-instagram"></i> Instagram
                    </a>
                  </div>
                </div>
      
              <div className="tab-pane" id="video-armis">
                <div className="d-flex align-items-center justify-content-center">
                  <iframe className="center mt-5 mb-4" width="560" height="315" src="https://youtube.com/embed/4YDWqkbrn_Q"
                    title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write;
                                                              encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                </div>
              </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      
      <div className="modal big-modal fade" id="continentalModal" tabIndex="-1" aria-labelledby="continentalModal"
        aria-hidden="true">
        <div className="modal-dialog" role="document">
          <div className="modal-content">
            <div className="modal-body d-flex flex-column align-items-center">
              <div className="position-absolute close-modal">
                <button type="button" className="modal-close-btn" data-dismiss="modal" aria-label="Close"><i
                    className="fas fa-times"></i></button>
              </div>
              <img className="img-fluid mx-2 mb-5" src="assets/img/companies/continental.png" height="230px" width="230px"
                alt="continental" />
      
              <ul className="nav nav-tabs navbar-expand" id="tabContent">
                <li className="nav-item"><a className="nav-link active" href="#details-continental" data-toggle="tab">Detalhes</a>
                </li>
                <li className="nav-item"><a className="nav-link" href="#links-continental" data-toggle="tab">Links</a></li>
                <li className="nav-item"><a className="nav-link" href="#video-continental" data-toggle="tab">Vídeos</a></li>
              </ul>
      
              <div className="tab-content w-100">
                <div className="tab-pane active mt-5" id="details-continental">
                  <p className="m-4">
                    <b>Grupo Continental</b>
                    <br><br>
                    Fundada em Hannover (Alemanha), em 1871, a Continental pode
                    orgulhar-se da sua história de sucesso. Nas suas cinco
                    divisões – Mobilidade Autónoma e Segurança, Informação e
                    Interligação dos Veículos, Pneus, ContiTech e Tecnologias
                    Powertrain – a Continental emprega cerca de 240 000
                    colaboradores em 61 países e mercados, todas elas a
                    trabalhar para fornecer mobilidade inteligente e conectada –
                    e torná-la segura, de fácil utilização, sustentável e limpa.
                    <br><br>
                    Pessoas apaixonadas por partilhar as suas ideias, criar
                    novos produtos, provocar a mudança e mostrar iniciativa para
                    atingir as suas metas. Pessoas que trabalham em conjunto
                    entre locais e países para concretizar projetos inovadores.
                    Pessoas que sabem que são parte de uma equipa global. Porque
                    ninguém define o futuro sozinho!
                    <br><br><br>
                    <b>Continental Mabor</b>
                    <br><br>
                    Localizada em Lousado, V. N. Famalicão afirma-se como uma
                    das fábricas de pneus mais eficientes do Grupo Continental.
                    <br><br>
                    Produz mais de 18 milhões de pneus por ano, quer para os
                    mais prestigiados construtores da indústria automóvel, quer
                    para o mercado de substituição.
                    <br><br>
                    Emprega na sua unidade, mais de 2500 pessoas e está entre as
                    maiores empresas exportadoras do país.
                  </p>
                </div>
      
                <div className="tab-pane" id="links-continental">
                  <div className="col d-flex justify-content-around mt-5">
                    <a target="_blank" href="https://www.continental.com/en/career"><i className="bi-globe"></i> Website
                    </a>
      
                    <!--!! Faltam redes sociais provavelmente !!-->
                  </div>
                </div>
      
                <div className="tab-pane" id="video-continental">
                  <div className="d-flex align-items-center justify-content-center">
                      <iframe className="center mt-5 mb-4" width="560" height="315" src="https://youtube.com/embed/hQwrS6c-IHg"
                        title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write;
                                                                    encrypted-media; gyroscope; picture-in-picture"
                        allowfullscreen></iframe>
                    </div>
                    <div className="d-flex align-items-center
                                                                  justify-content-center">
                      <iframe className="center mt-5 mb-4" width="560" height="315" src="https://www.youtube.com/embed/iLRi4_gUpA8"
                        title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write;
                                                                    encrypted-media; gyroscope; picture-in-picture"
                        allowfullscreen></iframe>
                    </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      <!-- Gold -->
      
      <div className="modal medium-modal fade" id="accentureModal" tabIndex="-1" aria-labelledby="accentureModal" aria-hidden="true">
        <div className="modal-dialog" role="document">
          <div className="modal-content">
            <div className="modal-body d-flex flex-column align-items-center">
              <div className="position-absolute close-modal">
                <button type="button" className="modal-close-btn" data-dismiss="modal" aria-label="Close"><i
                    className="fas fa-times"></i></button>
              </div>
              <img className="img-fluid mx-2 mb-5" src="assets/img/companies/accenture.png" height="180px" width="180px"
                alt="accenture" />
      
              <ul className="nav nav-tabs navbar-expand" id="tabContent">
                <li className="nav-item"><a className="nav-link active" href="#details-accenture" data-toggle="tab">Detalhes</a></li>
                <li className="nav-item"><a className="nav-link" href="#links-accenture" data-toggle="tab">Links</a></li>
              </ul>
      
              <div className="tab-content w-100">
                <div className="tab-pane active mt-5" id="details-accenture">
                  <p className="m-4">
                    Accenture is a global professional services company with leading 
                    capabilities in digital, cloud and security. Combining unmatched 
                    experience and specialized skills across more than 40 industries, 
                    we offer Strategy and Consulting, Interactive, Technology and 
                    Operations services—all powered by the world's largest network of 
                    Advanced Technology and Intelligent Operations centers. Our 537,000 
                    people deliver on the promise of technology and human ingenuity 
                    every day, serving clients in more than 120 countries. We embrace 
                    the power of change to create value and shared success for our 
                    clients, people, shareholders, partners and communities. Visit us 
                    at <a target="_blank" href='https://www.accenture.pt' target="_black">www.accenture.pt</a>.

                  </p>
                </div>
      
                <div className="tab-pane" id="links-accenture">
                  <div id="links-container" className="col d-flex justify-content-around mt-5">
                    <a target="_blank" href="https://www.accenture.pt"><i className="bi-globe"></i> Website
                    </a>
                    <a target="_blank" href="https://www.linkedin.com/company/accenture-portugal"><i className="bi-linkedin"></i> Linkedin
                    </a>
                    <a target="_blank" href="https://www.facebook.com/AccenturePortugal"><i className="bi-facebook"></i> Facebook
                    </a>
                    <a target="_blank" href="https://twitter.com/Accenture_PT"><i className="bi-twitter"></i> Twitter
                    </a>
                    <a target="_blank" href="https://www.youtube.com/user/AccenturePortugal">
                      <i className="bi-youtube"></i>
                      Youtube
                    </a>
                    <a target="_blank" href="https://www.instagram.com/accenturept/"><i className="bi-instagram"></i> Instagram
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      
      <div className="modal medium-modal fade" id="jscramblerModal" tabIndex="-1" aria-labelledby="jscramblerModal"
        aria-hidden="true">
        <div className="modal-dialog" role="document">
          <div className="modal-content">
            <div className="modal-body d-flex flex-column align-items-center">
              <div className="position-absolute close-modal">
                <button type="button" className="modal-close-btn" data-dismiss="modal" aria-label="Close"><i
                    className="fas fa-times"></i></button>
              </div>
              <img className="img-fluid mx-2 mb-5" src="assets/img/companies/jscrambler.png" height="180px" width="180px"
                alt="jscrambler" />
      
              <ul className="nav nav-tabs navbar-expand" id="tabContent">
                <li className="nav-item"><a className="nav-link active" href="#details-jscrambler" data-toggle="tab">Detalhes</a></li>
                <li className="nav-item"><a className="nav-link" href="#links-jscrambler" data-toggle="tab">Links</a></li>
              </ul>
      
              <div className="tab-content w-100">
                <div className="tab-pane active mt-5" id="details-jscrambler">
                  <p className="m-4">

                    Jscrambler is the leader in client-side web security. With Jscrambler, 
                    JavaScript applications become self-defensive and resilient to tampering 
                    and reverse-engineering, while also capable of detecting and blocking 
                    client-side attacks like Magecart and data exfiltration. The company is 
                    trusted by the Fortune 500 and major companies in sectors such as finance, 
                    e-commerce, media, software development and gaming. Jscrambler is recognized 
                    by Gartner in the Market Guide for In-App Protection, Market Guide for 
                    Online Fraud Detection, and Hype Cycle for Application Security, and has 
                    been recognized by Deloitte as one of EMEA’s fastest-growing tech companies.

                    <br>
                    <br>

                    Jscrambler started as AuditMark in 2009, when developing a solution to fight 
                    click fraud in advertising campaigns - a web traffic audit mechanism that was 
                    JavaScript-dependent. There was no tool capable of protecting JavaScript in the 
                    market so the need was met and Jscrambler was born. The solution has since made 
                    a giant leap forward in terms of resilience, potency, and efficiency attained 
                    through significant investment in R&D. The name of the flagship product - 
                    Jscrambler - also became the name of the company. Today, Jscrambler has offices 
                    in Porto, Lisbon, Los Angeles, and San Francisco and has grown to over 40 employees.

                  </p>
                </div>
      
                <div className="tab-pane" id="links-jscrambler">
                  <div id="links-container" className="col d-flex justify-content-around mt-5">
                    <a target="_blank" href="https://jscrambler.com/"><i className="bi-globe"></i> Website
                    </a>
                    <a target="_blank" href="https://www.linkedin.com/company/jscrambler/"><i className="bi-linkedin"></i> Linkedin
                    </a>
                    <a target="_blank" href="https://www.facebook.com/Jscrambler.AppSec"><i className="bi-facebook"></i> Facebook
                    </a>
                    <a target="_blank" href="https://twitter.com/Jscrambler"><i className="bi-twitter"></i> Twitter
                    </a>
                    <a target="_blank" href="https://blog.jscrambler.com/">
                      <i className="bi-file-text-fill"></i>
                      Blog
                    </a>
                
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      

      <hr className="my-5">

      <!-- Sponsors -->
      <h1 id="sponsors-title" className="text-center my-5 retro">Patrocinadores</h1>
      <div className="container-fluid">
        <div id="sponsors" className="row">
          <a target="_blank" href="https://aeisep.pt/" className="sponsor-container my-2" target="_blank">
            <img className="img-fluid my-4 mx-auto d-block sponsor" src="./assets/img/sponsors/ae.png" alt="AE ISEP Logo" />
          </a>
          <a target="_blank" href="https://www.dominospizza.pt/" className="sponsor-container my-2" target="_blank">
            <img className="img-fluid my-4 mx-auto d-block sponsor" src="./assets/img/sponsors/dominos.png" alt="Domino's Pizza Logo" />
          </a>
          <a target="_blank" href="https://confeitariamoura.pt/" className="sponsor-container my-2" target="_blank">
            <img className="img-fluid my-4 mx-auto d-block sponsor" src="./assets/img/sponsors/moura.png" alt="Conf. e Past. Moura Logo" />
          </a>
        </div>
      </div>

      <hr/>
      <h1 className="text-center my-5">Horário</h1>

      <ul className="nav nav-pills center-pills" id="myTab" role="tablist">
        <li className="nav-item" role="presentation">
          <button className="nav-link active" id="quinta-tab" data-toggle="tab"
            data-target="#quinta" type="button"
            role="tab" aria-controls="quinta" aria-selected="true">Quinta-feira
            -
            Auditório Magno</button>
        </li>
        <li className="nav-item" role="presentation">
          <button className="nav-link" id="sexta-tab" data-toggle="tab"
            data-target="#sexta" type="button" role="tab"
            aria-controls="sexta" aria-selected="false">Sexta-feira - Sala
            de
            Eventos</button>
        </li>
      </ul>
      <div className="tab-content" id="myTabContent">
        <div className="tab-pane fade show active" id="quinta" role="tabpanel"
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
        <!-- sexta-feira -->
        <div className="tab-pane fade" id="sexta" role="tabpanel"
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

      <hr className="mt-5">

      <div>
        <h1 className="text-center my-5">Mapa</h1>
        <img className='img-fluid my-2 mx-auto d-block map' src="./assets/img/map.png"
          alt="Mapa Informativo dos locais das Atividades" width="850px" height="850px" draggable="false">
      </div>
    </div>
    );
}
 
export default Content ;