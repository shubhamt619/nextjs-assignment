import React from 'react';
import { render, screen } from '../test-utils/index';
import PokemonDetailCard from '../src/app/components/PokemonDetailCard';
import { PokemonCardProps } from '../src/app/models/PokemonCardProps';
import { MantineProvider } from '@mantine/core';

// Mock data for a Pokemon
const mockPokemonData: PokemonCardProps['pokemon'] = {
    id: '1',
    name: 'Bulbasaur',
    image: 'https://img.pokemondb.net/artwork/bulbasaur.jpg',
    description: 'A Grass/Poison type Pokémon.',
    types: ['Grass', 'Poison'],
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

describe('PokemonDetailCard', () => {
    it('renders the Pokemon details correctly', () => {
        render(
            <MantineProvider>
                <PokemonDetailCard pokemon={mockPokemonData} />
            </MantineProvider>
        );

        expect(screen.getByRole('button', { name: /add to favorites/i })).toBeInTheDocument();
    });
});
