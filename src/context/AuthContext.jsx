import React, { createContext, useState, useContext, useCallback, useEffect } from 'react';
import { Login, Logout } from '../data/AuthFunctions'; 

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null); //L'etat pour enregistrer les infos de l'utilisateur
    const [errors, setErrors] = useState(null); //Etat pour centraliser les erreurs lors de l'authentification

    // Au démarrage, on regarde si une session existe
    useEffect(() => {
        const savedSession = localStorage.getItem('user_session');
        if (savedSession) {
            setUser(JSON.parse(savedSession));
        }
    }, []);

    // On enveloppe le login dans useCallback pour la performance
    const login = useCallback((email, password) => {
        setErrors(null); //Initialisation de  l'etat a null a chaque appel de la fonction login
        
        const result = Login(email, password);
        if (result.success) {
            setUser(result.data); // Mise à jour de l'état 
        }else{
            setErrors(result.response); //Renvoyer le message d'erreur
        }
        
        return result;
    }, []);

    const logout = useCallback(() => {
        setErrors(null); //Initialisation de  l'etat a null a chaque appel de la fonction logout
       const result =  Logout();
       if(!result.success){
            setErrors(result.response); //Renvoyer le message d'erreur
       }else{
        setErrors(result.response); 
        setUser(null); // L'interface se vide instantanément
       }
    }, []);

    return (
        <AuthContext.Provider value={{ user, login, logout, errors }}>
            {children}
        </AuthContext.Provider>
    );
};

export const useAuth = () => useContext(AuthContext);