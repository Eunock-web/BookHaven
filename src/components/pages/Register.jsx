import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { BookOpenText } from "lucide-react";
import { useAuth } from "../../context/AuthContext";

function Register(){
    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();
    const { register, errors } = useAuth();

    const handleSubmit = (e) => {
        e.preventDefault();
        const result = register(username, email, password);
        if (result && result.success) {
            navigate('/home');
        }
    };

    const inputClass = "w-full px-4 py-3.5 bg-gray-50 border border-gray-200 rounded-xl focus:ring-2 focus:ring-primary/20 focus:border-primary outline-none transition-all placeholder:text-gray-400";

    return (
        <div className="flex min-h-screen w-full items-center justify-center bg-surface p-8 pt-28">
            <div className="w-full max-w-md space-y-8">
                <div className="flex flex-col gap-2 items-center">
                    <BookOpenText size={55} className="text-blue-950 border p-2 border-gray-100 bg-gray-100 rounded-xl" />
                    <h1 className="text-2xl font-bold text-blue-950">Créer un compte</h1>
                </div>

                {errors && (
                    <div role="alert" className="p-3 rounded-lg bg-red-50 border border-red-200 text-red-600 text-sm font-medium">
                        {errors}
                    </div>
                )}

                <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="space-y-2">
                        <label htmlFor="username" className="text-blue-950 text-lg font-semibold ml-1">Nom d'utilisateur</label>
                        <input id="username" type="text" required minLength={2} value={username}
                            onChange={(e) => setUsername(e.target.value)} className={inputClass} />
                    </div>
                    <div className="space-y-2">
                        <label htmlFor="email" className="text-blue-950 text-lg font-semibold ml-1">Adresse e-mail</label>
                        <input id="email" type="email" required placeholder="exemple@email.com" value={email}
                            onChange={(e) => setEmail(e.target.value)} className={inputClass} />
                    </div>
                    <div className="space-y-2">
                        <label htmlFor="password" className="text-blue-950 text-lg font-semibold ml-1">Mot de passe</label>
                        <input id="password" type="password" required minLength={6} value={password}
                            onChange={(e) => setPassword(e.target.value)} className={inputClass} />
                    </div>
                    <button type="submit"
                        className="w-full text-white font-bold py-4 rounded-xl bg-blue-950 hover:bg-blue-900 transition-colors cursor-pointer">
                        S'inscrire
                    </button>
                </form>

                <p className="text-center text-sm text-gray-500">
                    Déjà un compte ? <Link to="/login" className="font-semibold text-blue-950 hover:underline">Se connecter</Link>
                </p>
            </div>
        </div>
    )
}

export default Register
