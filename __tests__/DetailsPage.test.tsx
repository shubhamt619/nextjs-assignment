import { render, screen, userEvent } from '../test-utils';
import Details from '../src/app/details/[id]/page';
import { fetchPokemonDetails } from '../src/app/services/api';
import { useRouter, useParams } from 'next/navigation';
// import '@testing-library/jest-dom/extend-expect'; // for the toBeInTheDocument matcher
import { MantineProvider } from '@mantine/core';
import { waitFor } from '@testing-library/react';

jest.mock('../src/app/services/api');
jest.mock('next/navigation', () => ({
    useParams: jest.fn(),
    useRouter: jest.fn(),
}));

const mockPokemonData = {
    id: 1,
    name: 'Bulbasaur',
    image: 'https://img.pokemondb.net/artwork/bulbasaur.jpg',
    types: ['grass', 'poison'],
    height: 7,
    weight: 69,
    abilities: ['Overgrow', 'Chlorophyll'],
    stats: [
        { name: 'hp', base_stat: 45 },
        { name: 'attack', base_stat: 49 },
        { name: 'defense', base_stat: 49 },
        { name: 'special-attack', base_stat: 65 },
        { name: 'special-defense', base_stat: 65 },
        { name: 'speed', base_stat: 45 },
    ],
};

describe('Details Page', () => {
    it('renders the BackButton and navigates when clicked', async () => {
        (fetchPokemonDetails as jest.Mock).mockResolvedValue(mockPokemonData);
        (useParams as jest.Mock).mockReturnValue({ id: 'bulbasaur' });
        const push = jest.fn();
        (useRouter as jest.Mock).mockReturnValue({ push });

        render(
            <MantineProvider>
                <Details />
            </MantineProvider>
        );
        // Wait for the data to load
        await waitFor(() => {
            expect(screen.getByRole('button', { name: 'Back to Pokemons List' })).toBeInTheDocument();
        });

        // Check that the BackButton is rendered correctly
        const backButton = screen.getByRole('button', { name: 'Back to Pokemons List' });
        const link = backButton.closest('a');
        expect(link).toHaveAttribute('href', '/');

        // Simulate a click on the back button
        userEvent.click(backButton);
        // You can add assertions to check if the URL changed if needed
    });
});
