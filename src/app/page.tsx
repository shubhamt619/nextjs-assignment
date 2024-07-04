'use client';
import { Title } from '@mantine/core';
import PokemonList from './components/PokemonList';

const Home = () => {
    return (
        <>
            <Title mt="150" mb="50">Welcome to Pokémon-Universe !</Title>
            <PokemonList />
        </>
    );
};

export default Home;
