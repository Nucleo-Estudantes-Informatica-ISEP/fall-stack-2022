import { CompanyProps } from '../components/Company';
import {
    craftableLogo,
    delloiteLogo,
    glinttLogo,
    konkLogo,
    minderaLogo,
    optimizerLogo
} from './CompaniesImages';

export const SilverCompanies: CompanyProps[] = [
    {
        logoHref: craftableLogo,
        name: 'Craftable Software'
    },
    {
        logoHref: glinttLogo,
        name: 'Glintt'
    },
    {
        logoHref: konkLogo,
        name: 'Konk'
    },
    {
        logoHref: minderaLogo,
        name: 'Mindera'
    },
    {
        logoHref: delloiteLogo,
        name: 'Deloitte'
    },
    {
        logoHref: optimizerLogo,
        name: 'Optimizer'
    }
];
