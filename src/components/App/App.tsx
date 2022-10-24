import { FunctionComponent } from 'react';
import Header from '../Header/Header';
import './App.module.scss';

const App: FunctionComponent = () => {
    return (
        <div className="background">
            <Header />
        </div>
    );
};

export default App;
