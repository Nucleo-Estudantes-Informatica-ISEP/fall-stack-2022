import { FunctionComponent } from 'react';
import BysideLogoWithColors from '../../assets/images/companies/diamond/byside/byside_logo_colorid.png';
import ContinentalLogo from '../../assets/images/companies/diamond/continental_logo.png';
import CriticalLogo from '../../assets/images/companies/diamond/critical_logo.png';
import DevscopeLogo from '../../assets/images/companies/diamond/devscope_logo.png';
import FabamaqLogo from '../../assets/images/companies/diamond/fabamaq_logo.png';
import HitachiLogo from '../../assets/images/companies/diamond/hitachi_logo.png';
import SonaeLogo from '../../assets/images/companies/diamond/sonae_logo.png';
import Company from '../Company';
import HeadingText from '../HeadingText';

interface CompanyContainerProps {
    // Vou ter um tier de ranks para cada empresa
}

/*
    TODO: Diamond level: 
    Byside: // TODO Logo feito
    Devscope: // TODO Logo feito
    Fabamaq: // TODO Logo feito
    CriticalLogo Manufacturing: // TODO Logo feito
    Hitachi: // TODO Logo feito
    Continental: // TODO Logo feito
    Sonae:
*/

const CompanyContainer: FunctionComponent<CompanyContainerProps> = () => {
    return (
        <section>
            <HeadingText text="Empresas" />\
            <div>
                <div>
                    <div className="my-12">
                        <h2 className="border-b-2 border-blue-500 text-center font-good__times text-4xl text-blue-500 drop-shadow-3xl__Diamond">
                            Diamond
                        </h2>
                    </div>

                    <div className="grid items-center justify-center lg:grid-cols-4">
                        <Company
                            logoHref={CriticalLogo}
                            name="Critical Manufacturing Logo"
                            modalBodyText="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident"
                        />
                        <Company logoHref={DevscopeLogo} name="Devscope Logo" />
                        <Company logoHref={BysideLogoWithColors} name="Byside Logo" />
                        <Company logoHref={HitachiLogo} name="Hitachi Logo" />
                        <Company logoHref={ContinentalLogo} name="Continental Logo" />
                        <Company logoHref={FabamaqLogo} name="FabamaqLogo Logo" />
                        <Company logoHref={SonaeLogo} name="Sonae Logo" />
                    </div>
                </div>

                <div className="mb-5">
                    <h3 className="mt-2 text-center">Gold</h3>
                </div>

                <div className="mb-5">
                    <h5 className="mt-5 text-center">Silver</h5>
                </div>
            </div>
        </section>
    );
};

export default CompanyContainer;
