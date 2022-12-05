import Interview from '../../assets/images/interview.png';
import Roundtables from '../../assets/images/roundtables.png';
import Activity from '../Activity';
import InfoText from '../InfoText';

interface ContentProps {
    contentRef: React.RefObject<HTMLDivElement>;
}

const Content: React.FC<ContentProps> = ({ contentRef }) => {
    return (
        <section
            ref={contentRef}
            className="center container mx-auto w-11/12 rounded-lg bg-slate-100 p-6 sm:w-3/4 lg:p-14">
            <InfoText days={[15, 16]} month="Dezembro" beginningTime="15:00h" endTime="20:00h" />

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

            <section className="d-flex flex-column align-items-center justify-content-center my-12 text-center">
                <a rel="noreferrer" target="_blank" href="">
                    <h6 className="mt-12 text-center font-good__times text-lg text-cyan-800 transition-all duration-300 hover:scale-105 lg:text-2xl">
                        Inscrição no google forms
                    </h6>
                </a>
            </section>
        </section>
    );
};

export default Content;
