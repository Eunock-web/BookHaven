import {getAllUser} from './db';

//Fonction pour la connexion de l'utilisateur
export const LoginAuth = (email, password)=>{
    const users = getAllUser();  
    const authenticatedUser = users.find((u)=>u.email === email && u.password === password)

    if(authenticatedUser){
        localStorage.setItem('user_session', JSON.stringify(authenticatedUser));
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


//Fonction pour la deconnexion de l'utilisateur
export const Logout = ()=>{
    if(!localStorage.getItem('user_session')){
        return {
            "success" : false,
            "response" : "Veuillez vous connecter"
        }
    }
        localStorage.removeItem('user_login');
        return {
            "success" : true,
            "response" : "Deconnecter avec success"
        }
}