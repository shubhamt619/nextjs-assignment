import { Badge, Button, Group, List, Paper, Space, Title, Image, Text } from '@mantine/core';
import { PokemonCardProps } from '../models/PokemonCardProps';
import { useFavorites } from '../context/FavouritesContext';



const PokemonDetailCard = ({ pokemon }: PokemonCardProps) => {

    const { addToFavorites, removeFromFavorites, favorites } = useFavorites();

    const isFavorite = favorites.some(favName => favName === pokemon.name);

    const handleFavoriteClick = () => {
        if (isFavorite) {
            removeFromFavorites(pokemon.name);
        } else {
            addToFavorites(pokemon.name);
        }
    };

    return (
        <Paper withBorder p="xl" shadow="xs" mt={40} data-testid="pokemon-detail-card">
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
            <Button fullWidth onClick={handleFavoriteClick} color={isFavorite ? 'red' : 'blue'}>
                {isFavorite ? 'Remove from Favorites' : 'Add to Favorites'}
            </Button>
        </Paper>
    );
};

export default PokemonDetailCard;