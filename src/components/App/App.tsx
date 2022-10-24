import { FunctionComponent } from 'react';
import Footer from '../Footer/Footer';
import Header from '../Header/Header';
import styles from './App.module.scss';

const App: FunctionComponent = () => {
    return (
        <div className={styles.page__background}>
            <div className={styles.page__container}>
                <Header />
                <Footer />
            </div>
        </div>
    );
};

export default App;
