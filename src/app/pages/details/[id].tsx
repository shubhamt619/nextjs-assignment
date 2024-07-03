import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import { Container, Card } from '@mantine/core';
import { fetchItemDetails } from '../../services/api';
import { Item } from '../../models/Item';

const Details = () => {
    const router = useRouter();
    const { id } = router.query;
    const [item, setItem] = useState<Item | null>(null);

    useEffect(() => {
        const fetchData = async () => {
            if (id) {
                const data = await fetchItemDetails(id as string);
                setItem(data);
            }
        };
        fetchData();
    }, [id]);

    if (!item) return <div>Loading...</div>;

    return (
        <Container>
            <Card>
                <h1>{item.name}</h1>
                <p>{item.description}</p>
            </Card>
        </Container>
    );
};

export default Details;
