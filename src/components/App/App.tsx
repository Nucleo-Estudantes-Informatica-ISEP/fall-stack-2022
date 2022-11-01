import { FunctionComponent } from 'react';
import Footer from '../Footer';
import Header from '../Header';

const App: FunctionComponent = () => {
    return (
        <div className="min-h-screen w-full bg-page-background bg-cover bg-fixed bg-center">
            <div className="my-0 mx-auto w-9/12">
                <Header />
                <Footer />
            </div>
        </div>
    );
};

export default App;
