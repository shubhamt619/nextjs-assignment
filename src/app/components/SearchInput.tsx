import React, { useEffect, useState, useMemo, useCallback } from 'react';
import { Input } from '@mantine/core';

interface SearchInputProps {
    value: string;
    onChange: (value: string) => void;
}

export const SearchInput = ({ value, onChange }: SearchInputProps) => {
    const [displayValue, setDisplayValue] = useState(value);

    useEffect(() => {
        setDisplayValue(value);
    }, [value]);

    const debounce = (func: (...args: any[]) => void, delay: number) => {
        let timeoutId: NodeJS.Timeout;
        return (...args: any[]) => {
            if (timeoutId) {
                clearTimeout(timeoutId);
            }
            timeoutId = setTimeout(() => {
                func(...args);
            }, delay);
        };
    };

    const debouncedOnChange = useMemo(() => debounce(onChange, 500), [onChange]);

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setDisplayValue(event.target.value);
        debouncedOnChange(event.target.value);
    };

    return (
        <Input
            onChange={handleChange}
            value={displayValue}
            placeholder="Type Pokemon name..."
        />
    );
};
