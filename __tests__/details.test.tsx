import { waitFor } from '@testing-library/react';
import { render, screen, userEvent } from '../test-utils';
import Details from '../src/app/details/[id]/page';
import { fetchPokemonDetails } from '../src/app/services/api';
import { useRouter } from 'next/router';
import { useParams } from 'next/navigation';

// Mock the fetchPokemonDetails function
jest.mock('../src/app/services/api');
jest.mock('next/navigation', () => ({
    useParams: jest.fn(),
}));


const mockPokemonData = {
    id: 1,
    name: 'bulbasaur',
    image: 'https://img.pokemondb.net/artwork/bulbasaur.jpg',
    types: ['grass', 'poison'],
    height: 7,
    weight: 69,
    abilities: ['overgrow', 'chlorophyll'],
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
        render(<Details />);

        await waitFor(() => {
            expect(screen.getByText('bulbasaur')).toBeInTheDocument();
        });

        const backButton = screen.getByRole('button', { name: /back to pokemons list/i });
        expect(backButton).toBeInTheDocument();
        const link = backButton.closest('a');
        expect(link).toHaveAttribute('href', '/');

        userEvent.click(backButton);

    });


    it('displays Pokémon details', async () => {
        (fetchPokemonDetails as jest.Mock).mockResolvedValue(mockPokemonData);
        (useParams as jest.Mock).mockReturnValue({ id: 'bulbasaur' });
        render(<Details />);
        await waitFor(() => {
            expect(screen.getByText('bulbasaur')).toBeInTheDocument();
        });
    });

});
