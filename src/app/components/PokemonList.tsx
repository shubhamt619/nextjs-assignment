import { useState, useEffect, useRef, useCallback, use } from 'react';
import { SimpleGrid, LoadingOverlay } from '@mantine/core';
import PokemonCard from './PokemonCard';
import { fetchPokemons } from '../services/api';
import { Pokemon } from '../models/Pokemon';
import { SearchInput } from './SearchInput';

const PokemonList = () => {
    const [pokemons, setPokemons] = useState<Pokemon[]>([]);
    const [originalPokemons, setOriginalPokemons] = useState<Pokemon[]>([]);
    const [loading, setLoading] = useState(false);
    const [searching, setSearching] = useState(false);
    const [currentPage, setCurrentPage] = useState(1);
    const [searchText, setSearchText] = useState('');
    const observer = useRef<IntersectionObserver | null>(null);


    const loadMore = useCallback(() => {
        setLoading(true);
        fetchPokemons(currentPage + 1).then(data => {
            setPokemons(prevPokemons => [...prevPokemons, ...data.pokemons]);
            setOriginalPokemons(prevOriginalPokemons => [...prevOriginalPokemons, ...data.pokemons]);
            setLoading(false);
            setCurrentPage(prevPage => prevPage + 1);
        });
    }, [currentPage]);

    useEffect(() => {
        setLoading(true);
        fetchPokemons(1).then(data => {
            setPokemons(data.pokemons);
            setOriginalPokemons(data.pokemons);
            setLoading(false);
            setCurrentPage(1);
        });
    }, []);

    useEffect(() => {
        if (searchText) {
            setSearching(true);
            const filteredPokemons = pokemons.filter(pokemon =>
                pokemon.name.toLowerCase().includes(searchText.toLowerCase())
            );
            setPokemons(filteredPokemons);
        } else {
            setPokemons(originalPokemons);
            setSearching(false);
        }
    }, [searchText]);

    const lastItemRef = useCallback((node: HTMLElement | null) => {
        if (searching || loading) return;
        if (observer.current) observer.current.disconnect();
        observer.current = new IntersectionObserver(entries => {
            if (entries[0].isIntersecting) {
                loadMore();
            }
        });
        if (node) observer.current.observe(node);
    }, [searching, loading, loadMore]);

    return (
        <>
            < LoadingOverlay visible={loading} />
            <SearchInput
                value={searchText || ''}
                onChange={setSearchText}
            ></SearchInput>
            <SimpleGrid
                data-testid="pokemons-list-outer"
                mt={50}
                cols={{ base: 1, xs: 1, s: 1, sm: 2, md: 3, lg: 3 }}
            >
                { pokemons.map((pokemon, index) => (
                    <div key={`${pokemon.id}_${index}`} ref={index === pokemons.length - 1 ? lastItemRef : null}>
                        <PokemonCard
                            key={pokemon.id}
                            pokemon={pokemon}
                            searchText={searchText}
                        />
                    </div>
                ))}
            </SimpleGrid>
        </>
    );
};

export default PokemonList;
