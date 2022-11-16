import { SponsorProps } from '../components/Sponsor';
import { aeIsepLogo, broinhasLogo, dominosLogo, mouraLogo } from './CompaniesImages';

export const Sponsors: SponsorProps[] = [
    {
        name: 'aeISEP logo',
        logoHref: aeIsepLogo,
        website: 'https://aeisep.pt/'
    },
    {
        name: "Domino's Pizza logo",
        logoHref: dominosLogo,
        website: 'https://www.dominospizza.pt/'
    },
    {
        name: 'Confeitaria Moura logo',
        logoHref: mouraLogo,
        website: 'https://confeitariamoura.pt/'
    },
    {
        name: 'Broinhas logo',
        logoHref: broinhasLogo,
        website: 'https://www.broinhas.pt/'
    }
];
