import { createContext, useContext, useState, ReactNode, useEffect } from 'react';
import { Pokemon } from '../models/Pokemon';

interface FavoritesContextProps {
    favorites: Pokemon[];
    addToFavorites: (pokemon: Pokemon) => void;
    removeFromFavorites: (pokemonId: string) => void;
}

const FavoritesContext = createContext<FavoritesContextProps | undefined>(undefined);

export const useFavorites = () => {
    const context = useContext(FavoritesContext);
    if (!context) throw new Error('useFavorites must be used within a FavoritesProvider');
    return context;
};

const FAVORITES_STORAGE_KEY = 'epm_favorites';

export const FavoritesProvider = ({ children }: { children: ReactNode }) => {
    const [favorites, setFavorites] = useState<Pokemon[]>(() => {
        if (typeof window !== 'undefined') {
            const savedFavorites = localStorage.getItem(FAVORITES_STORAGE_KEY);
            return savedFavorites ? JSON.parse(savedFavorites) : [];
        }
        return [];
    });

    useEffect(() => {
        localStorage.setItem(FAVORITES_STORAGE_KEY, JSON.stringify(favorites));
    }, [favorites]);

    const addToFavorites = (pokemon: Pokemon) => {
        setFavorites((prevFavorites) => [...prevFavorites, pokemon]);
    };

    const removeFromFavorites = (pokemonId: string) => {
        setFavorites((prevFavorites) => prevFavorites.filter((fav) => fav.id !== pokemonId));
    };

    return (
        <FavoritesContext.Provider value={{ favorites, addToFavorites, removeFromFavorites }}>
            {children}
        </FavoritesContext.Provider>
    );
};
