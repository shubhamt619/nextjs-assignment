import { TextInput } from '@mantine/core';

interface SearchInputProps {
    value: string;
    onChange: (value: string) => void;
}

export const SearchInput = ({ value, onChange }: SearchInputProps) => {
    return (
        <TextInput
            value={value}
            onChange={(e) => onChange(e.currentTarget.value)}
            placeholder="Start Typing Pokemon name..."
        />
    );
};
