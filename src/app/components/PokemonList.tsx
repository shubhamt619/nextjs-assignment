import { useState, useEffect, useRef, useCallback } from 'react';
import { SimpleGrid, LoadingOverlay } from '@mantine/core';
import PokemonCard from './PokemonCard';
import { fetchPokemons } from '../services/api';
import { Pokemon } from '../models/Pokemon';

const PokemonList = () => {
    const [pokemons, setPokemons] = useState<Pokemon[]>([]);
    const [types, setTypes] = useState<string[]>([]);
    const [loading, setLoading] = useState(false);
    const [currentPage, setCurrentPage] = useState(1);
    const [selectedType, setSelectedType] = useState<string | null>(null);
    const observer = useRef<IntersectionObserver | null>(null);

    const loadMore = useCallback(() => {
        setLoading(true);
        fetchPokemons(currentPage + 1, selectedType).then(data => {
            setPokemons(prevPokemons => [...prevPokemons, ...data.pokemons]);
            setLoading(false);
            setCurrentPage(prevPage => prevPage + 1);
        });
    }, [currentPage, selectedType]);

    useEffect(() => {
        setLoading(true);
        fetchPokemons(1, selectedType).then(data => {
            setPokemons(data.pokemons);
            setTypes(data.types);
            setLoading(false);
            setCurrentPage(1);
        });
    }, [selectedType]);

    const lastItemRef = useCallback((node: HTMLElement | null) => {
        if (loading) return;
        if (observer.current) observer.current.disconnect();
        observer.current = new IntersectionObserver(entries => {
            if (entries[0].isIntersecting) {
                loadMore();
            }
        });
        if (node) observer.current.observe(node);
    }, [loading, loadMore]);

    return (
        <>
            < LoadingOverlay visible={loading} />
            <SimpleGrid
                cols={{ base: 3, sm: 2, lg: 3 }}
            >
                {pokemons.map((pokemon, index) => (
                    <div key={pokemon.id} ref={index === pokemons.length - 1 ? lastItemRef : null}>
                        <PokemonCard
                            key={pokemon.id}
                            pokemon={pokemon} />
                    </div>
                ))}
            </SimpleGrid>
        </>
    );
};

export default PokemonList;
