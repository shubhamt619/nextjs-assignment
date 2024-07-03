import { Pokemon } from '../models/Pokemon';

const API_URL = process.env.POKEMON_API_URL || 'https://pokeapi.co/api/v2';

export const fetchPokemons = async (page: number, type: string | null): Promise<{ pokemons: Pokemon[], types: string[] }> => {
    const offset = (page - 1) * 10;
    const response = await fetch(`${API_URL}/pokemon?limit=10&offset=${offset}`);
    const data = await response.json();

    let pokemons = data.results.map((pokemon: Pokemon) => ({
        id: pokemon.name,
        name: pokemon.name,
        image: `https://img.pokemondb.net/artwork/${pokemon.name}.jpg`,
        description: `Description for ${pokemon.name}`,
    }));

    if (type) {
        const typeResponse = await fetch(`${API_URL}/type/${type}`);
        const typeData = await typeResponse.json();
        const typePokemons = typeData.pokemon.map((p: any) => p.pokemon.name);
        pokemons = pokemons.filter((pokemon: Pokemon) => typePokemons.includes(pokemon.name));
    }

    const typesResponse = await fetch(`${API_URL}/type`);
    const typesData = await typesResponse.json();
    const types = typesData.results.map((t: any) => t.name);

    return { pokemons, types };
};

export const fetchPokemonDetails = async (id: string): Promise<Pokemon> => {
    const response = await fetch(`${API_URL}/pokemon/${id}`);
    const data = await response.json();

    return {
        id: data.id,
        name: data.name,
        image: `https://img.pokemondb.net/artwork/${data.name}.jpg`,
        description: `Description for ${data.name}`,
        types: data.types.map((type: any) => type.type.name),
        height: data.height,
        weight: data.weight,
        abilities: data.abilities.map((ability: any) => ability.ability.name),
        stats: data.stats.map((stat: any) => ({
            name: stat.stat.name,
            base_stat: stat.base_stat,
        })),
    };
};