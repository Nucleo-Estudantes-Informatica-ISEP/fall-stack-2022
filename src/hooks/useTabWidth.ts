import { useEffect, useState } from 'react';

export default function useTabWidth(
    hasDetailsSection: boolean,
    hasLinksSection: boolean,
    hasVideoSection: boolean
) {
    const [width, setWidth] = useState('');

    useEffect(() => {
        const numberSectionsToShow = [hasDetailsSection, hasLinksSection, hasVideoSection].filter(
            (section) => section
        ).length;

        if (numberSectionsToShow === 1 || numberSectionsToShow === 0) setWidth('w-full');
        else setWidth(`w-1/${numberSectionsToShow}`);
    }, []);

    // return in array to make it easier to use in the component
    // expanding with other properties in the future is easier
    // ex. md, lg, xl and custom transition values
    return [width];
}
