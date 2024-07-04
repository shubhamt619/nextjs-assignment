import { setupServer } from 'msw/node';
import { rest } from 'msw';

// Define handlers to mock API responses
const handlers = [
    rest.get('https://pokeapi.co/api/v2/pokemon/:id', (req, res, ctx) => {
        const { id } = req.params;
        const mockPokemon = {
            id,
            name: 'bulbasaur',
            sprites: {
                other: {
                    'official-artwork': {
                        front_default: 'https://img.pokemondb.net/artwork/bulbasaur.jpg',
                    },
                },
            },
            types: [{ type: { name: 'grass' } }, { type: { name: 'poison' } }],
            height: 7,
            weight: 69,
            abilities: [{ ability: { name: 'overgrow' } }, { ability: { name: 'chlorophyll' } }],
            stats: [
                { base_stat: 45, stat: { name: 'hp' } },
                { base_stat: 49, stat: { name: 'attack' } },
                { base_stat: 49, stat: { name: 'defense' } },
                { base_stat: 65, stat: { name: 'special-attack' } },
                { base_stat: 65, stat: { name: 'special-defense' } },
                { base_stat: 45, stat: { name: 'speed' } },
            ],
        };
        return res(ctx.json(mockPokemon));
    }),
];

// Set up the server with the defined handlers
const server = setupServer(...handlers);

export { server, rest };
