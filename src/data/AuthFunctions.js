import { createUser, getAllUser } from './db';

const SESSION_KEY = 'user_session';

//Fonction pour la connexion de l'utilisateur
export const LoginAuth = (email, password)=>{
    const users = getAllUser();
    const authenticatedUser = users.find((u)=>u.email === email && u.password === password)

    if(authenticatedUser){
        localStorage.setItem(SESSION_KEY, JSON.stringify(authenticatedUser));
        return {
            "success" : true,
            "response" :  `Bienvenue ${authenticatedUser.username}`,
            "data" : authenticatedUser
        }
    }else{
        return {
            "success" : false,
            "response" :  `Mot de passe ou email incorrect`,
        }
    }
}

//Fonction pour l'inscription d'un nouvel utilisateur (role "user" uniquement)
export const RegisterAuth = (username, email, password)=>{
    const cleanEmail = email.trim().toLowerCase();
    const users = getAllUser();

    if(users.some((u)=>u.email.toLowerCase() === cleanEmail)){
        return {
            "success" : false,
            "response" : "Un compte existe déjà avec cet e-mail"
        }
    }

    const newUser = {
        id : users.reduce((max, u)=>Math.max(max, u.id), 0) + 1,
        username : username.trim(),
        email : cleanEmail,
        role : 'user',
        password
    };
    createUser(newUser);
    localStorage.setItem(SESSION_KEY, JSON.stringify(newUser));

    return {
        "success" : true,
        "response" : `Bienvenue ${newUser.username}`,
        "data" : newUser
    }
}

//Fonction pour la deconnexion de l'utilisateur
export const Logout = ()=>{
    if(!localStorage.getItem(SESSION_KEY)){
        return {
            "success" : false,
            "response" : "Veuillez vous connecter"
        }
    }
    localStorage.removeItem(SESSION_KEY);
    return {
        "success" : true,
        "response" : "Déconnexion réussie"
    }
}
