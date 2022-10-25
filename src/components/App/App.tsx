import { FunctionComponent } from 'react';
import Footer from '../Footer/Footer';
import Header from '../Header/Header';

const App: FunctionComponent = () => {
    return (
        <div className="aspect-square min-h-screen w-full bg-page-background bg-cover bg-fixed bg-center">
            <Header />
            <Footer />
        </div>
    );
};

export default App;
