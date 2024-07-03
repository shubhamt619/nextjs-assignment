import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import { Container, Card } from '@mantine/core';
import { fetchPokemonDetails } from '../../services/api';
import { Pokemon } from '../../models/Pokemon';

const Details = () => {
    const router = useRouter();
    const { id } = router.query;
    const [pokemon, setPokemon] = useState<Pokemon | null>(null);

    useEffect(() => {
        const fetchData = async () => {
            if (id) {
                const data = await fetchPokemonDetails(id as string);
                setPokemon(data);
            }
        };
        fetchData();
    }, [id]);

    if (!pokemon) return <div>Loading...</div>;

    return (
        <Container>
            <Card>
                <h1>{pokemon.name}</h1>
                <p>{pokemon.description}</p>
            </Card>
        </Container>
    );
};

export default Details;
