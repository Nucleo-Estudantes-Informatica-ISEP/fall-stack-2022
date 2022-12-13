import { CompanyProps } from '../components/Company';
import { BysideLogoWithColors, CriticalLogo, DevscopeLogo } from './CompaniesImages';

/**
    Gold Companies
    Accenture: 
    Parfois:
    Natixis: 
 */

export const GoldCompanies: CompanyProps[] = [
    {
        logoHref: CriticalLogo,
        name: 'Critical Manufacturing Logo'
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
