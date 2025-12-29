import React, { createContext, useState, useContext, useCallback, useEffect } from 'react';
import { LoginAuth, Logout } from '../data/AuthFunctions'; 

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null); //L'etat pour enregistrer les infos de l'utilisateur
    const [errors, setErrors] = useState(null); //Etat pour centraliser les erreurs lors de l'authentification

    // Au démarrage, on regarde si une session existe
    useEffect(() => {
        const savedSession = localStorage.getItem('user_session');
        if (savedSession) {
            try {
                setUser(JSON.parse(savedSession));
            } catch (e) {
                localStorage.removeItem('user_session'); 
            }
        }
    }, []);

    // On enveloppe le login dans useCallback pour la performance
    const login = useCallback((email, password) => {
        setErrors(null); //Initialisation de  l'etat a null a chaque appel de la fonction login
        
        const result = LoginAuth(email, password);
        if (result.success) {
            setUser(result.data); // Mise à jour de l'état 
        }else{
            setErrors(result.response); //Renvoyer le message d'erreur
        }
        
        return result;
    }, []);

    const logout = useCallback(() => {
       const result = Logout();
        if (result.success) {
            setUser(null);
            setErrors(null); // On nettoie les erreurs au logout
            localStorage.removeItem('user_session'); 
        } else {
            setAuthError(result.response);
        }
    }, []);

    return (
        <AuthContext.Provider value={{ user, login, logout, errors }}>
            {children}
        </AuthContext.Provider>
    );
};

export const useAuth = () => useContext(AuthContext);   