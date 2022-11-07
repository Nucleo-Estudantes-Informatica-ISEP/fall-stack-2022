import { FunctionComponent } from 'react';
import Content from '../Content';
import Footer from '../Footer/Footer';
import Header from '../Header/Header';

const App: FunctionComponent = () => {
    return (
        <div className="aspect-square min-h-screen w-full bg-page-background bg-cover">
            <Header />
            <Content />
            <Footer />
        </div>
    );
};

export default App;
