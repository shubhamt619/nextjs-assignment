'use client';
import { useState, useEffect } from 'react';
import { Container, Grid, Title } from '@mantine/core';
import { SearchInput } from './components/SearchInput';
import { PokemonCard } from './components/PokemonCard';
import { fetchPokemons } from './services/api';
import { Pokemon } from './models/Pokemon';
import PokemonList from './components/PokemonList';

const Home = () => {
    // const [searchTerm, setSearchTerm] = useState('');
    // const [items, setItems] = useState<Item[]>([]);
    // const [loading, setLoading] = useState(false);

    // useEffect(() => {
    //     const fetchData = async () => {
    //         setLoading(true);
    //         const data = await fetchPokemons(searchTerm);
    //         setItems(data);
    //         setLoading(false);
    //     };

    //     if (searchTerm) {
    //         fetchData();
    //     }
    // }, [searchTerm]);

    return (
        <>
            <Title mt="150" mb="150">Welcome to Poke-Universe !</Title>
            {/* <SearchInput value={searchTerm} onChange={setSearchTerm} />
            {loading ? (
                <div>Loading...</div>
            ) : (
                <Grid>
                    {items.map((item) => (
                        <Grid.Col key={item.id} span={4}>
                            <ItemCard item={item} />
                        </Grid.Col>
                    ))}
                </Grid>
            )} */}
            <PokemonList />
        </>
    );
};

export default Home;
