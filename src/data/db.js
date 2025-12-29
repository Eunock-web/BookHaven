/**
 * Ce fichier est destiné à la creation des fonctions de creation de notre BBD (localStorage)
 */

import { user } from "./user";

//Fonction pour initialiser la base de donnée
const init_db = () =>{
    if(!localStorage.getItem('user_db')){
        localStorage.setItem('user_db', JSON.stringify(user))
    }
}

//Fonctionner qui retourne la liste des utilisateurs inscrits
const getAllUser= () =>{
   return JSON.parse(localStorage.getItem('user_db')) || [];
}

//Fonction pour créer un utilisateur
export const createUser = (data)=>{
    const oldData = getAllUser();
    oldData.push(data);
    localStorage.setItem('user_db',JSON.stringify(oldData));
}

