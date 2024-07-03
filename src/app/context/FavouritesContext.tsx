import { createContext, useContext, useState, ReactNode } from 'react';
import { Item } from '../models/Item';

interface FavoritesContextProps {
    favorites: Item[];
    addToFavorites: (item: Item) => void;
}

const FavoritesContext = createContext<FavoritesContextProps | undefined>(undefined);

export const useFavorites = () => {
    const context = useContext(FavoritesContext);
    if (!context) throw new Error('useFavorites must be used within a FavoritesProvider');
    return context;
};

export const FavoritesProvider = ({ children }: { children: ReactNode }) => {
    const [favorites, setFavorites] = useState<Item[]>([]);

    const addToFavorites = (item: Item) => {
        setFavorites((prevFavorites) => [...prevFavorites, item]);
    };

    return (
        <FavoritesContext.Provider value={{ favorites, addToFavorites }}>
            {children}
        </FavoritesContext.Provider>
    );
};
