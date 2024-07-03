import { Item } from '../models/Item';

const API_URL = 'https://pokeapi.co/api/v2';

export const fetchItems = async (query: string): Promise<Item[]> => {
    const response = await fetch(`${API_URL}/pokemon?limit=10&offset=0`);
    const data = await response.json();
    return data.results.map((item: any) => ({
        id: item.name,
        name: item.name,
        description: 'A Pokemon',
    }));
};

export const fetchItemDetails = async (id: string): Promise<Item> => {
    const response = await fetch(`${API_URL}/pokemon/${id}`);
    const data = await response.json();
    return {
        id: data.name,
        name: data.name,
        description: 'A detailed description of the Pokemon',
    };
};
