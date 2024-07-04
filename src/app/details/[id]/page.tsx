'use client';

import { useEffect, useState } from 'react';
import { useParams } from 'next/navigation';
import { Container, Paper, Image, Text, Title, Badge, Group, List, Space, Button, LoadingOverlay } from '@mantine/core';
import { fetchPokemonDetails } from '../../services/api';
import { Pokemon } from '../../models/Pokemon';
import { IconArrowLeft } from '@tabler/icons-react';
import Link from 'next/link';
import PokemonDetailCard from '@/app/components/PokemonDetailCard';

const Details = () => {
    const params = useParams();
    const id = params.id;
    const [pokemon, setPokemon] = useState<Pokemon | null>(null);
    const [loading, setLoading] = useState(true);



    useEffect(() => {
        const fetchData = async () => {
            if (id) {
                const data = await fetchPokemonDetails(id as string);
                setPokemon(data);
                setLoading(false);
            }
        };
        fetchData();
    }, [id]);

    if (loading) {
        return <LoadingOverlay visible={loading} />;
    }

    if (!pokemon) {
        return <div>No Pokemon found</div>;
    }

    if (!pokemon) return <div>Loading...</div>;

    return (
        <Container size="sm" mt={20}>
            <Link href="/" passHref>
                <Button data-testid="back-button" role="button" aria-label="Back to Pokemons List" leftSection={<IconArrowLeft size={14} />}>
                    Back to Pokemons List
                </Button>
            </Link>
            <Title mt="md">Pokemon Details for {pokemon.name}</Title>
            <PokemonDetailCard pokemon={pokemon} />
        </Container>
    );
};

export default Details;
