import { FunctionComponent, useId } from 'react';
import Company, { CompanyProps } from '../Company';
import { CompaniesTier, getColorOfTier } from '../Utils';

interface CompaniesContainerProps {
    tier: CompaniesTier;
    companies: CompanyProps[];
}

const CompaniesContainer: FunctionComponent<CompaniesContainerProps> = ({ tier, companies }) => {
    const colorTier = getColorOfTier(tier);
    const getTierStyling = (tier: CompaniesTier): string => {
        switch (tier) {
            case 'Diamond':
                return `border-${colorTier} text-${colorTier} drop-shadow-[2px_2px_2px_#3b82f6] text-4xl`;
            case 'Gold':
                return `border-${colorTier} text-${colorTier} drop-shadow-[2px_2px_2px_#facc15] text-3xl`;
            case 'Silver':
                return `border-${colorTier} text-${colorTier} drop-shadow-[2px_2px_2px_#6b7280] text-2xl`;
            default:
                throw new Error('Tier not found');
        }
    };

    return (
        <section className="mb-12">
            <div>
                <h2 className={`${getTierStyling(tier)}  border-b-2 text-center font-good__times`}>
                    {tier}
                </h2>
            </div>

            <div className="mt-12 grid grid-cols-responsiveness-180px-columns place-items-center xl:grid-cols-3">
                {companies.map(({ logoHref, name, modalBodyText }) => {
                    const companyId = useId();
                    return (
                        <Company
                            key={companyId}
                            logoHref={logoHref}
                            name={name}
                            modalBodyText={modalBodyText}
                        />
                    );
                })}
            </div>
        </section>
    );
};

export default CompaniesContainer;
