import { Button, Paper, Highlight } from '@mantine/core';
import { Pokemon } from '../models/Pokemon';
import Image from 'next/image';
import Link from 'next/link';
import { PokemonCardProps } from '../models/PokemonCardProps';


const PokemonCard = ({ pokemon, searchText }: PokemonCardProps) => {

    return (
        <Link href={`/details/${pokemon.id}`} passHref>
            <Paper withBorder ta="center" shadow="xs" p="xl">
                <Image
                    src={pokemon.image}
                    width={150}
                    height={150}
                    alt={`Image for ${pokemon.name}`}
                />
                <h2>
                    <Highlight highlight={searchText ?? ''}>
                        {pokemon.name}
                    </Highlight>
                </h2>
                <p>{pokemon.description}</p>
                <Button>Add to Favorites</Button>
            </Paper>
        </Link>
    );
};

export default PokemonCard;