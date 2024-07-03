'use client';
import { useState } from 'react';
import { Title } from '@mantine/core';
import { SearchInput } from './components/SearchInput';
import PokemonList from './components/PokemonList';

const Home = () => {
    const [searchTerm, setSearchTerm] = useState('');
    return (
        <>
            <Title mt="150" mb="50">Welcome to Pokémon-Universe !</Title>
            <SearchInput value={searchTerm} onChange={setSearchTerm} mb={50} />
            <PokemonList />
        </>
    );
};

export default Home;
