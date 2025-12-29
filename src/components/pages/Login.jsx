import { useState } from "react";
import { useNavigate, Link } from "react-router-dom"; 
import { Mail, LockKeyhole } from "lucide-react";
// import { useAuth } from "../../context/AuthContext";
function Login(){

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState(''); 
    // const {login} = useAuth();
    const navigate = useNavigate();

    const handleSubmit = (e)=>{
        e.preventDefault();

        // const result = login(email, password);

        // if(result && result.success){
        //     navigate('/home');
        // }
    }

    return <>
        <div className=" flex flex-row h-screen justify-center items-center border-2 p-10  ">
            {/** Premiere section pour l'image a gauche */}
            <div className="w-1/2">
                <img src="public/_ (6).jpeg" alt="" className=" border w-full h-screen " />
            </div>

            {/** Deuxieme section pour le formulaire a droite */}
            <div className="w-1/2 ">
                {/** Image */}
                <div>

                </div>

                <div>
                    <form onSubmit={handleSubmit} className=" flex flex-col gap-5 mx-45 ">

                        <div className="flex flex-col gap-2">
                            <label htmlFor="email">Adresse e-mail</label>
                            <div className="flex flex-row gap-2 border border-gray-300 p-2 rounded-xl bg-gray-100 ">
                                <Mail size={30} className="text-gray-500"/>
                                <input type="email" id="email" name="email" placeholder="erwin@gmail.com" onChange={(e)=>{setEmail(e.currentTarget.value)}} className="input border-0"/>
                            </div>
                        </div>

                        <div className="flex flex-col gap-2">
                            <div className="flex flex-row justify-between">
                                <label htmlFor="password" className="text-blue-800 font-bold">Mot de passe</label>
                                <Link to="#" className="text-red-500 text-base ">Mot de passe oublié?</Link>
                            </div>
                            <div className="flex flex-row gap-2 border border-gray-300 p-2 rounded-xl bg-gray-100">
                                <LockKeyhole size={30} className="text-gray-500" />
                                <input type="password" id="password" name="password" onChange={(e)=>{setPassword(e.currentTarget.value)}}/>
                            </div>
                        </div>

                        {/**boutton connexion */}
                        <div>
                            <button type="submit" className="border border-blue-950 rounded-lg bg-blue-950 text-white justify-center items-center p-3 w-full " >Se connecter</button>
                        </div>

                        <p className="flex justify-center ">
                            OU CONTINUER AVEC 
                        </p>

                        {/**Les deux bouttons */}
                        <div className="flex justify-between gap-4">
                            <button className="w-1/2 border border-gray-50 bg-gray-100 p-2 rounded-xl">
                                Google
                            </button>

                            <button className="w-1/2 border border-blue-950 bg-gray-50 text-blue-950 rounded-xl p-2">
                                Créer mon compte
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    </>
}

export default Login;