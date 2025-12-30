import { useState } from 'react';
import { useFavorites } from '../../context/FavoriteContext';
import { BookOpen, Star, Plus } from 'lucide-react';
import { Link, Links } from 'react-router-dom';

const Library = () => {
    const { favorites, toggleFavorite } = useFavorites();
    const [activeTab, setActiveTab] = useState('collection');

    return (
        <div className="bg-background-light min-h-screen font-display text-text-main transition-colors duration-200">
            <main className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
                
                {/* En-tête de la page */}
                <div className="mb-8 flex flex-col gap-2">
                    <h1 className="text-3xl font-black tracking-tight md:text-4xl">Ma Bibliothèque</h1>
                    <p className="text-lg text-gray-500 max-w-2xl">
                        Retrouvez ici tous les livres que vous avez ajoutés à vos favoris.
                    </p>
                </div>

                {/* Navigation par Onglets */}
                <div className="mb-8 border-b border-[#e7ebf3]">
                    <nav className="flex gap-8 overflow-x-auto pb-1">
                        <button 
                            onClick={() => setActiveTab('collection')}
                            className={`group relative flex items-center gap-2 px-1 pb-3 text-sm font-bold transition-colors ${activeTab === 'collection' ? 'text-primary' : 'text-text-secondary'}`}
                        >
                            <span className='text-lg'>Ma Collection</span>
                            <span className={`rounded-full px-3 py-1 text-lg font-bold ${activeTab === 'collection' ? 'bg-blue-900/10 text-primary' : 'bg-[#e7ebf3] text-text-secondary'}`}>
                                {favorites.length}
                            </span>
                            {activeTab === 'collection' && <span className="absolute bottom-0 left-0 h-0.5 w-full bg-primary rounded-t-full"></span>}
                        </button>
                    </nav>
                </div>

                {/* Grille de livres */}
                {favorites.length > 0 ? (
                    <div className="grid grid-cols-2 gap-4 sm:gap-6 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5">
                        {favorites.map((book) => (
                            <div key={book.id} className="group relative flex flex-col rounded-xl bg-surface-light p-3 shadow-sm hover:shadow-md transition-all duration-300 border border-transparent hover:-translate-y-1">
                                
                                {/* Image de couverture */}
                                <div className="relative mb-3 aspect-2/3 w-full overflow-hidden rounded-lg shadow-inner bg-gray-200 hover:cursor-pointer">
                                    <img 
                                        src={book.coverImage} 
                                        alt={book.title}
                                        className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                                    />
                                    
                                    {/* Badge de catégorie */}
                                    <div className="absolute top-2 left-2 rounded-md bg-primary/90 px-2 py-0.5 text-[10px] font-bold text-white shadow-sm">
                                        {book.category}
                                    </div>

                                    {/* Bouton pour retirer des favoris */}
                                    <button 
                                        onClick={() => toggleFavorite(book)}
                                        className="absolute top-2 right-2 rounded-md bg-white/90 backdrop-blur-sm p-1.5 shadow-sm opacity-0 group-hover:opacity-100 transition-opacity hover:text-red-500"
                                    >
                                        <Star size={18} fill="currentColor" className="text-yellow-500" />
                                    </button>
                                </div>

                                {/* Infos du livre */}
                                <div className="flex flex-1 flex-col">
                                    <h3 className="mb-1 text-lg font-bold leading-tight line-clamp-1" title={book.title}>
                                        {book.title}
                                    </h3>
                                    <p className="mb-3 text-sm font-medium text-gray-500 line-clamp-1">
                                        {book.author}
                                    </p>
                                    
                                    <div className="mt-auto">
                                        <Link 
                                            to={`/book/${book.id}`}
                                            className="flex w-full items-center justify-center gap-2 rounded-lg bg-primary/10 py-2 text-xs font-bold text-primary hover:bg-primary hover:text-white transition-colors"
                                        >
                                            <BookOpen size={14} className='text-blue-900' />
                                            <p className='text-blue-900 text-lg'>Détails</p>
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                ) : (
                    /* État vide */
                    <div className="flex flex-col items-center justify-center py-20 text-center">
                        <div className="size-20 bg-gray-100 rounded-full flex items-center justify-center mb-4">
                            <BookOpen size={40} className="text-gray-400" />
                        </div>
                        <h2 className="text-xl font-bold mb-2">Votre bibliothèque est vide</h2>
                        <p className="text-text-secondary mb-6">Commencez par ajouter des livres que vous aimez depuis l'accueil.</p>
                        <Link to="/home" className="bg-primary text-white px-6 py-2 rounded-full font-bold hover:bg-blue-700 transition-all">
                            Explorer les livres
                        </Link>
                    </div>
                )}

                {/* Bouton d'action en bas */}
                <div className="mt-12 flex justify-center">
                    <Link to='/'>
                        <button className="flex items-center gap-2 rounded-full border border-dashed border-[#cfd7e7] px-6 py-3 text-sm font-bold text-text-secondary hover:border-primary hover:text-blue-900 transition-all hover:cursor-pointer">
                        <Plus size={18} />
                        Ajouter un livre à ma liste
                    </button>
                    </Link>
                </div>
            </main>
        </div>
    );
};

export default Library;