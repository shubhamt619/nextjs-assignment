import { Button, Paper, Highlight, Text, Image } from '@mantine/core';
import Link from 'next/link';
import { PokemonCardProps } from '../models/PokemonCardProps';
import { useFavorites } from '../context/FavouritesContext';


const PokemonCard: React.FC<{
    pokemon: Pick<PokemonCardProps['pokemon'], "id" | "name" | "description" | "image">;
    searchText?: PokemonCardProps['searchText'];
}> = ({ pokemon, searchText }) => {

    const { addToFavorites, removeFromFavorites, favorites } = useFavorites();

    const isFavorite = favorites.some(favName => favName === pokemon.id);



    const handleFavoriteClick = () => {
        if (isFavorite) {
            removeFromFavorites(pokemon.name);
        } else {
            addToFavorites(pokemon.name);
        }
    };

    return (
        <Paper withBorder ta="center" shadow="xs" p="xl" data-testid="pokemon-card">
            <Link href={`/details/${pokemon.id}`} passHref>
                <Image
                    src={pokemon.image}
                    width={150}
                    height={150}
                    alt={`Image for ${pokemon.name}`}
                />
                <Text tt="capitalize" fw={800}>
                    <Highlight highlight={searchText ?? ''}>
                        {pokemon.name}
                    </Highlight>
                </Text>
                <p>{pokemon.description}</p>
            </Link>
            <Button onClick={handleFavoriteClick} color={isFavorite ? 'red' : 'blue'}>
                {isFavorite ? 'Remove from Favorites' : 'Add to Favorites'}
            </Button>
        </Paper>
    );
};

export default PokemonCard;