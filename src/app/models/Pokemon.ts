export interface Pokemon {
    id: string;
    name: string;
    image: string;
    description: string;
    types: string[];
    height: number;
    weight: number;
    abilities: string[];
    stats: { name: string; base_stat: number }[];
}
