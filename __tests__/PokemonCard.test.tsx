import React from 'react';
import { render, screen, waitFor } from '../test-utils/index';
import { PokemonCardProps } from '../src/app/models/PokemonCardProps';
import { MantineProvider } from '@mantine/core';
import { FavoritesProvider } from '@/app/context/FavouritesContext';
import PokemonCard from '@/app/components/PokemonCard';

// Mock data for a Pokemon
const mockPokemonData: Pick<PokemonCardProps['pokemon'], "id" | "name" | "description" | "image"> = {
    id: 'bulbasaur',
    name: 'bulbasaur',
    image: 'https://img.pokemondb.net/artwork/bulbasaur.jpg',
    description: 'A Grass/Poison type Pokémon.',
};
const mockPokemonSearchText: PokemonCardProps['searchText'] = 'bul';

describe('PokemonCard', () => {
    it('renders the Pokemon card correctly', async () => {
        render(
            <MantineProvider>
                <FavoritesProvider>
                    <PokemonCard pokemon={mockPokemonData} searchText={mockPokemonSearchText} />
                </FavoritesProvider>
            </MantineProvider>
        );

        await waitFor(() => {
            expect(screen.getByTestId('pokemon-card')).toBeInTheDocument();
        });
    });
});
