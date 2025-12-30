import { Link, useNavigate } from 'react-router-dom';
import { Search, ArrowLeft, Home, BookOpen } from 'lucide-react';

const NotFound = () => {
    const navigate = useNavigate();

    // Suggestions de lecture (peuvent être extraites de ton fichier books.js plus tard)
    const suggestions = [
        { title: "L'Ombre du Vent", author: "Carlos Ruiz Zafón", img: "https://picsum.photos/id/10/200/300" },
        { title: "Le Grand Meaulnes", author: "Alain-Fournier", img: "https://picsum.photos/id/20/200/300" },
        { title: "1984", author: "George Orwell", img: "https://picsum.photos/id/30/200/300" },
        { title: "Dune", author: "Frank Herbert", img: "https://picsum.photos/id/40/200/300" },
    ];

    return (
        <main className="grow flex flex-col justify-center items-center px-4 py-12 md:py-20 relative overflow-hidden bg-[#faf8f3] text-slate-900 min-h-[calc(100vh-160px)]">
            
            {/* Effets de fond (Cercles flous décoratifs) */}
            <div className="absolute top-1/4 left-10 w-64 h-64 bg-[#093eaa]/5 rounded-full blur-3xl -z-10"></div>
            <div className="absolute bottom-1/4 right-10 w-96 h-96 bg-[#d4af37]/10 rounded-full blur-3xl -z-10"></div>

            <div className="flex flex-col max-w-200 w-full items-center text-center gap-8 z-10">
                
                {/* Section 404 avec l'icône de livre en fond */}
                <div className="relative">
                    <h1 className="font-serif text-[120px] md:text-[180px] font-bold leading-none text-[#093eaa] select-none tracking-tighter drop-shadow-md">
                        404
                    </h1>
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 rotate-12 opacity-10 pointer-events-none">
                        <BookOpen size={200} className="text-slate-900" />
                    </div>
                </div>

                {/* Textes d'erreur */}
                <div className="flex flex-col gap-4 max-w-2xl">
                    <p className="text-3xl md:text-4xl font-serif font-bold leading-tight text-slate-900">
                        Oups ! Ce chapitre est manquant.
                    </p>
                    <p className="text-slate-600 text-lg font-serif leading-relaxed">
                        La page que vous recherchez semble avoir disparu des rayons. Peut-être a-t-elle été empruntée ou déplacée vers une autre collection ?
                    </p>
                    <p className="text-[#093eaa] text-base font-medium mt-2">
                        Ne vous inquiétez pas, il y a des milliers d'autres histoires à découvrir !
                    </p>
                </div>

                {/* Barre de recherche style NotFound */}
                <div className="w-full max-w-lg mt-4">
                    <div className="flex h-14 w-full shadow-lg shadow-[#093eaa]/5 items-stretch rounded-xl bg-white border border-slate-200 hover:border-[#093eaa]/50 focus-within:border-[#093eaa] focus-within:ring-2 focus-within:ring-[#093eaa]/20 transition-all">
                        <div className="text-slate-400 flex items-center justify-center pl-5">
                            <Search size={24} />
                        </div>
                        <input 
                            type="text"
                            className="flex-1 bg-transparent border-none focus:ring-0 text-slate-900 px-4 text-base" 
                            placeholder="Rechercher un titre, un auteur..." 
                        />
                        <button className="px-6 bg-[#093eaa] hover:bg-blue-700 text-white font-medium rounded-r-xl transition-colors">
                            Chercher
                        </button>
                    </div>
                </div>

                {/* Boutons d'action (Navigation) */}
                <div className="flex flex-wrap justify-center gap-4 mt-2">
                    <button 
                        onClick={() => navigate(-1)}
                        className="flex items-center justify-center gap-2 h-12 px-8 rounded-full border-2 border-slate-300 text-slate-700 font-bold text-sm hover:border-[#093eaa] hover:text-[#093eaa] transition-all"
                    >
                        <ArrowLeft size={20} />
                        <span>Retour</span>
                    </button>
                    <Link 
                        to="/" 
                        className="flex items-center justify-center gap-2 h-12 px-8 rounded-full bg-[#093eaa] hover:bg-blue-700 text-white font-bold text-sm shadow-lg shadow-[#093eaa]/20 transition-all transform hover:-translate-y-0.5"
                    >
                        <Home size={20} />
                        <span>Aller à l'accueil</span>
                    </Link>
                </div>
            </div>

            {/* Section Suggestions */}
            <div className="w-full max-w-240 mt-20 px-4">
                <div className="flex items-center gap-4 mb-6">
                    <div className="h-px bg-slate-300 flex-1"></div>
                    <h3 className="text-sm font-bold text-slate-500 uppercase tracking-widest text-center">
                        Quelques suggestions de lecture
                    </h3>
                    <div className="h-px bg-slate-300 flex-1"></div>
                </div>

                <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                    {suggestions.map((book, index) => (
                        <Link key={index} to="/" className="group flex flex-col gap-3">
                            <div 
                                className="w-full aspect-2/3 bg-center bg-cover rounded-lg shadow-md group-hover:shadow-xl group-hover:-translate-y-1 transition-all duration-300 bg-slate-200 relative overflow-hidden" 
                                style={{ backgroundImage: `url(${book.img})` }}
                            >
                                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors"></div>
                            </div>
                            <div className="space-y-1">
                                <p className="text-sm font-bold text-slate-800 font-serif truncate">
                                    {book.title}
                                </p>
                                <p className="text-xs text-slate-500">
                                    {book.author}
                                </p>
                            </div>
                        </Link>
                    ))}
                </div>
            </div>
        </main>
    );
};

export default NotFound;