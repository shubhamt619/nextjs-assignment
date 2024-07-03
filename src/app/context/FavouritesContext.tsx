import { createContext, useContext, useState, ReactNode } from 'react';
import { Pokemon } from '../models/Pokemon';

interface FavoritesContextProps {
    favorites: Pokemon[];
    addToFavorites: (pokemon: Pokemon) => void;
}

const FavoritesContext = createContext<FavoritesContextProps | undefined>(undefined);

export const useFavorites = () => {
    const context = useContext(FavoritesContext);
    if (!context) throw new Error('useFavorites must be used within a FavoritesProvider');
    return context;
};

export const FavoritesProvider = ({ children }: { children: ReactNode }) => {
    const [favorites, setFavorites] = useState<Pokemon[]>([]);

    const addToFavorites = (pokemon: Pokemon) => {
        setFavorites((prevFavorites) => [...prevFavorites, pokemon]);
    };

    return (
        <FavoritesContext.Provider value={{ favorites, addToFavorites }}>
            {children}
        </FavoritesContext.Provider>
    );
};
