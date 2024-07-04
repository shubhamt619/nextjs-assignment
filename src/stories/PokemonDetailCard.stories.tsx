import React from 'react';
import { Meta, StoryFn } from '@storybook/react';
import PokemonDetailCard from '../app/components/PokemonDetailCard';
import { MantineProvider } from '@mantine/core';
import { Pokemon } from '../app/models/Pokemon';
import "@mantine/core/styles.css";
import '../app/globals.css'; // Import your CSS file here
import { PokemonCardProps } from '../app/models/PokemonCardProps';
import { FavoritesProvider } from '@/app/context/FavouritesContext';

export default {
    title: 'Components/PokemonDetailCard',
    component: PokemonDetailCard,
    decorators: [
        (Story) => (
            <MantineProvider withGlobalClasses>
                <FavoritesProvider>
                <Story />
                </FavoritesProvider>
            </MantineProvider>
        ),
    ],
} as Meta;

const Template: StoryFn<PokemonCardProps> = (args) => <PokemonDetailCard {...args} />;

export const Default = Template.bind({});
Default.args = {
    pokemon: {
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
    } as Pokemon,
};
