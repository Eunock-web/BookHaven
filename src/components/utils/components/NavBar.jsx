import { BookOpen, Search, ShoppingCart, User2, Moon, Sun } from 'lucide-react';
import { useFilters } from '../../../context/FilterContext'; 
import { useAuth } from '../../../context/AuthContext';
import {  Link } from 'react-router-dom';

function NavBar() {
    const { filters, updateFilter } = useFilters();
    const { user } = useAuth();

    return (
        <header className="fixed top-0 left-0 right-0 z-50 bg-white border-b border-[#e9edf1] h-20 shadow-sm">
            <div className="max-w-400 mx-auto px-6 h-full flex items-center justify-between gap-8">
                
                {/* LOGO & TITRE */}
                <Link to={'/home'} > 
                    <div className="flex items-center gap-2 cursor-pointer group">
                        <div className="size-10 bg-primary/10 rounded-lg flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-white transition-all">
                            <BookOpen size={24} className='text-blue-900' />
                        </div>
                        <h1 className="text-blue-900 text-2xl font-display font-bold tracking-tight hidden sm:block">
                            BookHaven
                        </h1>
                    </div>
                </Link>

                {/* BARRE DE RECHERCHE (Connectée au Context) */}
                <div className="hidden md:flex flex-1 max-w-2xl">
                    <div className="flex w-full items-center rounded-xl bg-[#e9edf1] border-2 border-transparent focus-within:border-primary/20 focus-within:bg-white transition-all duration-200">
                        <div className="pl-4 text-gray-500 flex items-center justify-center">
                            <Search size={20} />
                        </div>
                        <input 
                            type="search" 
                            className="w-full bg-transparent border-none focus:ring-0 text-gray-900 placeholder-gray-500 h-11 px-3 text-base outline-none"
                            placeholder="Search by title, author, or ISBN..."
                            value={filters.search}
                            onChange={(e) => updateFilter("search", e.target.value)}
                        />
                    </div>
                </div>

                {/*  ACTIONS DROITE */}
                <div className="flex items-center gap-2 sm:gap-4">
                    {/* Bouton Thème (Visuel uniquement pour le moment) */}
                    {/* <button className="p-2.5 rounded-lg text-gray-600 hover:bg-gray-100 transition-colors">
                        <Sun size={22} />
                    </button> */}

                    {/* Profil Utilisateur */}
                    <button className="flex items-center gap-2 p-2 rounded-lg text-gray-600 hover:bg-gray-100 transition-colors">
                        <User2 size={22} className='text-blue-900' />
                        {user && <span className="text-lg font-medium hidden lg:block">{user.username}</span>}
                    </button>

                    {/* Panier avec badge notification */}
                    <button className="relative p-2.5 rounded-lg text-primary bg-primary/10 hover:bg-primary/20 transition-colors">
                        <ShoppingCart size={50} className='border border-gray-100 p-3 rounded-xl bg-gray-100' />
                        <span className="absolute top-1.5 right-1.5 h-2.5 w-2.5 rounded-full bg-red-500 border-2 border-white"></span>
                    </button>
                </div>
            </div>
        </header>
    );
}

export default NavBar;