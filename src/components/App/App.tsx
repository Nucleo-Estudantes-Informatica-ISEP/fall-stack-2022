import { FunctionComponent } from 'react';
import Footer from '../Footer/Footer';
import Header from '../Header/Header';

const App: FunctionComponent = () => {
    return (
        <div className="page__container">
            <Header />
            <Footer />
        </div>
    );
};

export default App;
