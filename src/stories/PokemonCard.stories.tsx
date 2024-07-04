import React from 'react';
import { Meta, StoryFn } from '@storybook/react';
import PokemonCard from '../app/components/PokemonCard';
import { MantineProvider } from '@mantine/core';
import { Pokemon } from '../app/models/Pokemon';
import "@mantine/core/styles.css";
import '../app/globals.css'; // Import your CSS file here
import { PokemonCardProps } from '../app/models/PokemonCardProps';
import { FavoritesProvider } from '@/app/context/FavouritesContext';

export default {
    title: 'Components/PokemonCard',
    component: PokemonCard,
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

const Template: StoryFn<PokemonCardProps> = (args) => <PokemonCard {...args} />;

export const Default = Template.bind({});
Default.args = {
    pokemon: {
        id: '1',
        name: 'Bulbasaur',
        image: 'https://img.pokemondb.net/artwork/bulbasaur.jpg',
        description: 'A Grass/Poison type Pokémon.',
    } as Pokemon,
};
