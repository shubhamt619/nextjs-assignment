import { Card, Button } from '@mantine/core';
import { Item } from '../models/Item';

interface ItemCardProps {
    item: Item;
}

export const ItemCard = ({ item }: ItemCardProps) => {
    return (
        <Card>
            <h2>{item.name}</h2>
            <p>{item.description}</p>
            <Button>Add to Favorites</Button>
        </Card>
    );
};
