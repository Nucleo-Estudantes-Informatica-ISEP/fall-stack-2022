import { useEffect, useState } from 'react';

export default function useTabWidth(
    hasDetailsSection: boolean,
    hasLinksSection: boolean,
    hasVideoSection: boolean
) {
    const [tabWidth, setTabWidth] = useState('w-full');

    useEffect(() => {
        const numberSectionsToShow = [hasDetailsSection, hasLinksSection, hasVideoSection].filter(
            (section) => section
        ).length;

        if (numberSectionsToShow === 1 || numberSectionsToShow === 0) {
            setTabWidth('w-full');
        } else {
            setTabWidth(`w-1/${numberSectionsToShow}`);
        }
    }, [hasDetailsSection, hasLinksSection, hasVideoSection]);

    return [tabWidth];
}
