import { createContext, useContext, useState, useEffect } from 'react';
import { useAuth } from './AuthContext';

const FavoriteContext = createContext();

export function FavoriteProvider({ children }) {
    const { user } = useAuth();
    const [favorites, setFavorites] = useState([]);

    // Clé unique par utilisateur pour le localStorage
    const storageKey = user ? `favs_${user.id}` : null;

    // 1. Charger les favoris au démarrage ou quand l'utilisateur change
    useEffect(() => {
        if (storageKey) {
            const savedFavs = localStorage.getItem(storageKey);
            setFavorites(savedFavs ? JSON.parse(savedFavs) : []);
        } else {
            setFavorites([]); // Reset si déconnecté
        }
    }, [storageKey]);

    // 2. Fonction Toggle (Ajoute si absent, supprime si présent)
    const toggleFavorite = (book) => {
        if (!user) return alert("Connectez-vous pour ajouter des favoris !");

        const isExist = favorites.find(fav => fav.id === book.id);
        let updatedFavs;

        if (isExist) {
            updatedFavs = favorites.filter(fav => fav.id !== book.id);
        } else {
            updatedFavs = [...favorites, book];
        }

        setFavorites(updatedFavs);
        localStorage.setItem(storageKey, JSON.stringify(updatedFavs));
    };

    // 3. Vérifier si un livre est favori
    const isFavorite = (bookId) => favorites.some(fav => fav.id === bookId);

    return (
        <FavoriteContext.Provider value={{ favorites, toggleFavorite, isFavorite }}>
            {children}
        </FavoriteContext.Provider>
    );
}

export const useFavorites = () => useContext(FavoriteContext);