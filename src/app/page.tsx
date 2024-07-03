'use client';
import { useState, useEffect } from 'react';
import { Container, Grid } from '@mantine/core';
import { SearchInput } from './components/SearchInput';
import { ItemCard } from './components/ItemCard';
import { fetchItems } from './services/api';
import { Item } from './models/Item';

const Home = () => {
    const [searchTerm, setSearchTerm] = useState('');
    const [items, setItems] = useState<Item[]>([]);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        const fetchData = async () => {
            setLoading(true);
            const data = await fetchItems(searchTerm);
            setItems(data);
            setLoading(false);
        };

        if (searchTerm) {
            fetchData();
        }
    }, [searchTerm]);

    return (
        <Container>
            <SearchInput value={searchTerm} onChange={setSearchTerm} />
            {loading ? (
                <div>Loading...</div>
            ) : (
                <Grid>
                    {items.map((item) => (
                        <Grid.Col key={item.id} span={4}>
                            <ItemCard item={item} />
                        </Grid.Col>
                    ))}
                </Grid>
            )}
        </Container>
    );
};

export default Home;
