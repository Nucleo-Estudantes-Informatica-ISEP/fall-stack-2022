import { FunctionComponent } from 'react';
import { DiamondCompanies } from '../../assets/information/DiamondCompanies';
import { GoldCompanies } from '../../assets/information/GoldCompanies';
import { SilverCompanies } from '../../assets/information/SilverCompanies';
import CompaniesContainer from '../CompaniesContainer';

import HeadingText from '../HeadingText';

interface CompaniesSectionProps {}

const CompaniesSection: FunctionComponent<CompaniesSectionProps> = () => {
    return (
        <section>
            <HeadingText text="Empresas" />
            <CompaniesContainer companies={DiamondCompanies} tier="Diamond" />
            <CompaniesContainer companies={GoldCompanies} tier="Gold" />
            <CompaniesContainer companies={SilverCompanies} tier="Silver" />
        </section>
    );
};

export default CompaniesSection;
