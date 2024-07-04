import { createContext, useContext, useState, ReactNode, useEffect } from 'react';

interface FavoritesContextProps {
    favorites: string[];
    addToFavorites: (pokemonName: string) => void;
    removeFromFavorites: (pokemonName: string) => void;
}

const FavoritesContext = createContext<FavoritesContextProps | undefined>(undefined);

export const useFavorites = () => {
    const context = useContext(FavoritesContext);
    if (!context) throw new Error('useFavorites must be used within a FavoritesProvider');
    return context;
};

const FAVORITES_STORAGE_KEY = 'epm_favorites';

export const FavoritesProvider = ({ children }: { children: ReactNode }) => {
    const [favorites, setFavorites] = useState<string[]>(() => {
        if (typeof window !== 'undefined') {
            const savedFavorites = localStorage.getItem(FAVORITES_STORAGE_KEY);
            return savedFavorites ? JSON.parse(savedFavorites) : [];
        }
        return [];
    });

    useEffect(() => {
        localStorage.setItem(FAVORITES_STORAGE_KEY, JSON.stringify(favorites));
    }, [favorites]);

    const addToFavorites = (pokemonName: string) => {
        if (pokemonName !== null) {
            setFavorites((prevFavorites) => [...prevFavorites, pokemonName]);
        }
    };

    const removeFromFavorites = (pokemonName: string) => {
        setFavorites((prevFavorites) => prevFavorites.filter((favId) => favId !== pokemonName));
    };

    return (
        <FavoritesContext.Provider value={{ favorites, addToFavorites, removeFromFavorites }}>
            {children}
        </FavoritesContext.Provider>
    );
};
