import React, { createContext, useState, useContext, useCallback, useEffect } from 'react';
import { Login, Logout } from '../data/AuthFunctions'; 

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null); //L'etat pour enregistrer les infos de l'utilisateur

    // Au démarrage, on regarde si une session existe
    useEffect(() => {
        const savedSession = localStorage.getItem('user_session');
        if (savedSession) {
            setUser(JSON.parse(savedSession));
        }
    }, []);

    // On enveloppe le login dans useCallback pour la performance
    const login = useCallback((email, password) => {
        const result = Login(email, password);
        if (result.success) {
            setUser(result.data); // Mise à jour de l'état 
        }
        return result;
    }, []);

    const logout = useCallback(() => {
        Logout();
        setUser(null); // L'interface se vide instantanément
    }, []);

    return (
        <AuthContext.Provider value={{ user, login, logout }}>
            {children}
        </AuthContext.Provider>
    );
};

export const useAuth = () => useContext(AuthContext);