import { Input } from '@mantine/core';

interface SearchInputProps {
    value: string;
    onChange: (value: string) => void;
}

export const SearchInput = ({ value, onChange }: SearchInputProps) => {
    return (
        <Input
            onChange={(event) => onChange((event.target as HTMLInputElement).value)}
            value={value}
            placeholder="Type Pokemon name..."
        />
    );
};
