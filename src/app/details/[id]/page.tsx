'use client';

import { useEffect, useState } from 'react';
import { useParams } from 'next/navigation';
import { Container, Paper, Image, Text, Title, Badge, Group, List, Space, Button } from '@mantine/core';
import { fetchPokemonDetails } from '../../services/api';
import { Pokemon } from '../../models/Pokemon';
import { IconArrowLeft } from '@tabler/icons-react';
import Link from 'next/link';

const Details = () => {
    const params = useParams();
    const id = params.id;
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
        <Container size="sm" mt={20}>
            <Link href="/" passHref>
                <Button leftSection={<IconArrowLeft size={14} />}>
                    Back to Pokemons List
                </Button>
            </Link>
            <Title mt="md">Pokemon Details for {pokemon.name}</Title>
            <Paper withBorder p="xl" shadow="xs" mt={40}>
                <Image
                    fit="contain"
                    src={pokemon.image}
                    height={150}
                    alt={`Image for ${pokemon.name}`}
                />
                <Title order={2} mt="md">{pokemon.name}</Title>
                <Group mt="sm">
                    {pokemon.types.map(type => (
                        <Badge key={type} color="green" variant="light">
                            {type}
                        </Badge>
                    ))}
                </Group>
                <Text mt="md"><strong>Height:</strong> {pokemon.height / 10} m</Text>
                <Text mt="sm"><strong>Weight:</strong> {pokemon.weight / 10} kg</Text>
                <Text mt="sm"><strong>Abilities:</strong></Text>
                <List>
                    {pokemon.abilities.map(ability => (
                        <List.Item key={ability}>{ability}</List.Item>
                    ))}
                </List>
                <Text mt="sm"><strong>Base Stats:</strong></Text>
                <List>
                    {pokemon.stats.map(stat => (
                        <List.Item key={stat.name}>
                            <strong>{stat.name}:</strong> {stat.base_stat}
                        </List.Item>
                    ))}
                </List>
                <Space h="md" />
                <Button fullWidth>Add to Favorites</Button>
            </Paper>
        </Container>
    );
};

export default Details;
