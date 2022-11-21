import { CompanyProps } from '../components/Company';
import {
    BysideLogoWithColors,
    ContinentalLogo,
    CriticalLogo,
    DevscopeLogo,
    FabamaqLogo,
    HitachiLogo,
    SonaeLogo
} from './CompaniesImages';

export const DiamondCompanies: CompanyProps[] = [
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
    },
    {
        logoHref: HitachiLogo,
        name: 'Hitachi Logo'
    },
    {
        logoHref: ContinentalLogo,
        name: 'Continental Logo'
    },
    {
        logoHref: FabamaqLogo,
        name: 'FabamaqLogo Logo'
    },
    {
        logoHref: SonaeLogo,
        name: 'Sonae Logo'
    }
];
