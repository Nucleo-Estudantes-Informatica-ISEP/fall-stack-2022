import mapImage from '../../assets/images/map.png';
import HeadingText from '../HeadingText';

const Map: React.FC = () => {
    return (
        <section className="container mx-auto w-full lg:max-w-3xl">
            <HeadingText text="Mapa" />
            <img
                className="my-2 mx-auto shadow-lg"
                src={mapImage}
                alt="Mapa Informativo dos locais das Atividades"
            />
        </section>
    );
};

export default Map;
