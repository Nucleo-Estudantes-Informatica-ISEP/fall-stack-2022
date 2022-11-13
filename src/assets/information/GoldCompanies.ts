import BysideLogoWithColors from '../../assets/images/companies/diamond/byside/byside_logo_colorid.png';
import CriticalLogo from '../../assets/images/companies/diamond/critical_logo.png';
import DevscopeLogo from '../../assets/images/companies/diamond/devscope_logo.png';
import { CompanyProps } from '../../components/Company';

/**
    Gold Companies
    Accenture: 
    Parfois:
    Natixis: 
 */

export const GoldCompanies: CompanyProps[] = [
    {
        logoHref: CriticalLogo,
        name: 'Critical Manufacturing Logo',
        modalBodyText:
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident'
    },
    {
        logoHref: DevscopeLogo,
        name: 'Devscope Logo'
    },
    {
        logoHref: BysideLogoWithColors,
        name: 'Byside Logo'
    }
];
