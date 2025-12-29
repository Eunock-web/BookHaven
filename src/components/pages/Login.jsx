import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { Mail, LockKeyhole, ArrowRight, BookOpen, BookOpenText } from "lucide-react";

function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    // Logique de connexion ici
  };

  return (
    <div className="flex h-screen w-full bg-background-light font-display">
      
      {/* SECTION GAUCHE : Visuel (Caché sur mobile) */}
      <div className="hidden lg:flex lg:w-1/2 relative bg-primary overflow-hidden">
        {/* Image d'arrière-plan avec overlay */}
        <div 
          className="absolute inset-0 bg-cover bg-center transition-transform duration-1000 hover:scale-105 hover:cursor-pointer"
          style={{ backgroundImage: `url('https://lh3.googleusercontent.com/aida-public/AB6AXuBpbiS0-Oi5dpM9a9EC_J1V7KHDmW3IAXy2rkKVsYWBRyFxLs2FW9X2Z_Bp0JPEybDG2_1WG3WmjcS0KDq2MWSpkRV4cSMMrSDrED9rB8ZkChviqMudAieeS63yJvVBc_42GGjckGXKmZGE8ruj3WhE0bqW39w9B77YYkHohSO1sPFTdG9lSnV9B9NBcPEARDziFy2XiHBcuS8mZMhlt5z6Vfr_LTSua1ABO8HiHdmeUlW87yaLOgsVYbRAdwCo4lKjtUIA14uodwU8')` }}
        >
          <div className="absolute inset-0 bg-linear-to-t from-blue-950/90 to-transparent" />
        </div>

        {/* Contenu textuel sur l'image */}
        <div className="relative z-10 flex flex-col justify-end p-16 h-full text-white">
          <div className="mb-8 animate-fade-in">
            <div className="inline-flex items-center justify-center p-3 bg-white/10 backdrop-blur-md rounded-full mb-6">
              <BookOpen size={32} />
            </div>
            <h2 className="font-serif text-5xl font-bold leading-tight mb-4">
              Votre prochaine aventure <br /> commence ici.
            </h2>
            <p className="text-lg text-gray-200 font-light max-w-md">
              Plongez dans un univers infini de savoir et d'imaginaire. BookHaven est votre sanctuaire littéraire.
            </p>
          </div>
        </div>
      </div>

      {/* SECTION DROITE : Formulaire */}
      <div className="w-full lg:w-1/2 flex flex-col justify-center items-center p-8 sm:p-12 bg-surface">
        
        {/* Logo Mobile */}
        <div className="lg:hidden absolute top-8 left-8 flex items-center gap-2 text-primary">
          <BookOpenText className="fill-current" />
          <span className="font-bold text-xl tracking-tight">BookHaven</span>
        </div>

        <div className="w-full max-w-md space-y-8">
          {/* Header du formulaire */}

            <div className="flex flex-col gap-2  items-center">
                <BookOpenText size={55} className=" text-blue-950 border p-2 border-gray-100 bg-gray-100 rounded-xl " />
            </div>
          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Champ Email */}
            <div className="space-y-2">
              <label htmlFor="email" className="text-blue-950 text-lg font-semibold ml-1">
                Adresse e-mail
              </label>
              <div className="relative group">
                <div className="absolute inset-y-0 left-0 flex items-center pl-4 text-gray-400 group-focus-within:text-primary transition-colors">
                  <Mail size={20} />
                </div>
                <input
                  type="email"
                  id="email"
                  placeholder="exemple@email.com"
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full pl-11 pr-4 py-3.5 bg-gray-50 border border-gray-200 rounded-xl focus:ring-2 focus:ring-primary/20 focus:border-primary outline-none transition-all placeholder:text-gray-400"
                  required
                />
              </div>
            </div>

            {/* Champ Mot de passe */}
            <div className="space-y-2">
              <div className="flex justify-between items-center px-1">
                <label htmlFor="password" className="text-blue-950 text-lg font-semibold">
                  Mot de passe
                </label>
                <Link to="#" className="text-sm font-medium text-red-500 hover:underline">
                  Mot de passe oublié ?
                </Link>
              </div>
              <div className="relative group">
                <div className="absolute inset-y-0 left-0 flex items-center pl-4 text-gray-400 group-focus-within:text-primary transition-colors">
                  <LockKeyhole size={20} />
                </div>
                <input
                  type="password"
                  id="password"
                  placeholder="••••••••"
                  onChange={(e) => setPassword(e.target.value)}
                  className="w-full pl-11 pr-4 py-3.5 bg-gray-50 border border-gray-200 rounded-xl focus:ring-2 focus:ring-primary/20 focus:border-primary outline-none transition-all"
                  required
                />
              </div>
            </div>

            {/* Bouton de connexion */}
            <button
              type="submit"
              className="w-full bg-primary hover:bg-primary-hover text-white font-bold py-4 rounded-xl bg-blue-950 flex items-center justify-center gap-2 transform active:scale-[0.98] transition-all group"
            >
              Se connecter
              <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
            </button>

            {/* Séparateur */}
            <div className="relative flex items-center py-2">
              <div className="grow border-t border-gray-200"> </div>
              <span className="shrink mx-4 text-gray-400 text-xs uppercase tracking-widest font-medium">
                Ou continuer avec
              </span>
              <div className="  grow border-t border-gray-200"></div>
            </div>

            {/* Boutons Sociaux / Création */}
            <div className="grid grid-cols-2 gap-4">
              <button
                type="button"
                className="flex items-center justify-center gap-2 py-3 border border-gray-200 rounded-xl transition-colors font-medium text-gray-700 hover:cursor-pointer  hover:bg-blue-950 hover:text-white"
              >
                <img src="https://www.svgrepo.com/show/475656/google-color.svg" alt="Google" className="w-5 h-5" />
                Google
              </button>
              <button
                type="button"
                onClick={() => navigate('/register')}
                className="flex items-center justify-center py-3 border border-blue-200 text-primary rounded-xl hover:bg-blue-950 hover:text-white transition-colors font-medium text-blue-950 cursor-pointer "
              >
                Créer un compte
              </button>
            </div>
          </form>

          {/* Footer ultra discret */}
          <div className="pt-8 flex justify-center gap-6 text-xs text-gray-400">
            <Link to="#" className="hover:text-primary transition-colors">Aide</Link>
            <Link to="#" className="hover:text-primary transition-colors">Confidentialité</Link>
            <Link to="#" className="hover:text-primary transition-colors">Conditions</Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;