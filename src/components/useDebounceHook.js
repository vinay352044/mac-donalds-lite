import React, { useEffect, useState } from 'react';

const useDebounceHook = (value,delay) => {
    const [debouncedValue, setDebouncedValue] = useState(value);

    useEffect(() => {
        const handler = setTimeout(() => {
            setDebouncedValue(value);
        },delay);

        return () => {
            clearTimeout(handler);
        };
    }, [value,delay]);

    return debouncedValue;
};

export default useDebounceHook;
