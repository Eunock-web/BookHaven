import { useState } from "react";
import { useAuth } from "../../context/AuthContext";
import { Mail, LockKeyhole } from "lucide-react";

function Login(){

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState(''); 
    const {login} = useAuth();
    const navigate = useNavigate();

    const handleSubmit = (e)=>{
        e.preventDefault();

        const result = login(email, password);

        if(!result){
            navigate('home');
        }
    }
    return <>
        <div className=" flex flex-row h-screen  ">
            {/** Premiere section pour l'image a gauche */}
            <div>

            </div>

            {/** Deuxieme section pour le formulaire a droite */}
            <div>
                /** Image */
                <div>

                </div>

                <div>
                    <form onSubmit={handleSubmit(e)} >

                        <div>
                            <label htmlFor="email"></label>
                            <div>
                                <Mail size={10} className=""/>
                                <input type="email" id="email" name="email" placeholder="erwin@gmail.com" onChange={(e)=>{setEmail(e.currentTarget.value)}}/>
                            </div>
                        </div>

                        <div>
                            <div>
                                <label htmlFor="password">Mot de passe</label>
                                <Link to="#">Mot de passe oublié</Link>
                            </div>
                            <div>
                                <LockKeyhole size={10} className="" />
                                <input type="password" id="password" name="password" onChange={(e)=>{setPassword(e.currentTarget.value)}}/>
                            </div>
                        </div>

                        /**boutton connexion */
                        <div>

                        </div>

                        <p>
                            OU CONTINUER AVEC 
                        </p>

                        /**Les deux bouttons */
                        <div>

                        </div>
                    </form>
                </div>
            </div>
        </div>
    </>
}

export default Login;