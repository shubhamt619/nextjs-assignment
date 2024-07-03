import { Select } from '@mantine/core';

interface SearchInputProps {
    value: string;
    onChange: (value: string) => void;
    mb?: number;
}

export const SearchInput = ({ value, onChange, mb }: SearchInputProps) => {
    return (
        <Select
            onChange={(value) => onChange(value || '')}
            value={value}
            label="Search"
            placeholder="Type Pokemon name..."
            searchable
            mb={mb ?? 0}
        />
    );
};
