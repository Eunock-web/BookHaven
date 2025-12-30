import  { useState, useMemo } from 'react';
import { useFilters } from '../../context/FilterContext';
import { books } from '../../data/books'; 
import { Star, ShoppingCart, Heart, RotateCcw } from 'lucide-react';
import { ListCatalogue } from '../../data/catalogueFunction';
function Home() {
    const { filters, updateFilter, resetFilters } = useFilters();
    const [currentPage, setCurrentPage] = useState(1);
    const itemsPerPage = 8;
    const categories = useMemo(() => ListCatalogue(), []);
    // const langues = useMemo(() => ListLangues(), []);
    
    const filteredBooks = useMemo(() => {
        return books.filter(book => {
            // Recherche par titre ou auteur
            const matchesSearch = book.title.toLowerCase().includes(filters.search.toLowerCase()) || 
                                 book.author.toLowerCase().includes(filters.search.toLowerCase());
            
            // Filtre par catégories (si aucune sélectionnée, on affiche tout)
            const matchesCategory = filters.categories.length === 0 || filters.categories.includes(book.category);
            
            // Filtre par prix
            const matchesPrice = book.price <= filters.maxPrice;
            
            // Filtre par langue
            const matchesLanguage = filters.language === "Tous" || book.language === filters.language;
            
            // Filtre par stock (ton champ s'appelle 'stock')
            const matchesStock = !filters.onlyInStock || book.stock > 0;
            
            // Filtre par note
            const matchesRating = book.rating >= filters.minRating;

            return matchesSearch && matchesCategory && matchesPrice && matchesLanguage && matchesStock && matchesRating;
        });
    }, [filters]);

    // --- PAGINATION ---
    const totalPages = Math.ceil(filteredBooks.length / itemsPerPage);
    const currentBooks = filteredBooks.slice((currentPage - 1) * itemsPerPage, currentPage * itemsPerPage);

    // Handler pour les catégories
    const handleCategoryChange = (cat) => {
        const newCats = filters.categories.includes(cat)
            ? filters.categories.filter(c => c !== cat)
            : [...filters.categories, cat];
        updateFilter("categories", newCats);
        setCurrentPage(1); 
    };

    return (
        <div className="flex flex-1 pt-20 max-w-400 mx-auto w-full">
            
            {/* --- SIDEBAR FILTERS (20%) --- */}
            <aside className="w-72 hidden lg:flex flex-col border-r border-[#e9edf1] bg-white h-[calc(100vh-5rem)] sticky top-20 overflow-y-auto">
                <div className="p-6 space-y-8">
                    <div className="flex items-center justify-between">
                        <h2 className="text-lg font-bold font-display text-primary">Filtres</h2>
                        <button onClick={resetFilters} className="text-primary hover:text-accent transition-colors">
                            <RotateCcw size={18} />
                        </button>
                    </div>

                    {/* Catégories Dynamiques */}
                    <div className="space-y-3">
                        <h3 className="text-xs font-semibold uppercase tracking-wider text-gray-400">Catégories</h3>
                        {categories.map(cat => (
                            <label key={cat} className="flex items-center gap-3 group cursor-pointer">
                                <input 
                                    type="checkbox" 
                                    checked={filters.categories.includes(cat)}
                                    onChange={() => handleCategoryChange(cat)}
                                    className="h-4 w-4 rounded border-gray-300 text-primary focus:ring-primary/20" 
                                />
                                <span className={`text-sm transition-colors ${filters.categories.includes(cat) ? 'text-primary font-bold' : 'text-gray-600'}`}>
                                    {cat}
                                </span>
                            </label>
                        ))}
                    </div>

                    {/* Prix */}
                    <div className="space-y-4">
                        <h3 className="text-xs font-semibold uppercase tracking-wider text-gray-400">Prix Max : <span className="text-primary font-bold">{filters.maxPrice}€</span></h3>
                        <input 
                            type="range" min="10" max="50" 
                            value={filters.maxPrice}
                            onChange={(e) => updateFilter("maxPrice", Number(e.target.value))}
                            className="w-full h-1.5 bg-gray-200 rounded-lg appearance-none cursor-pointer accent-primary"
                        />
                    </div>

                    {/* Disponibilité */}
                    <div className="pt-4 border-t border-gray-100">
                        <label className="flex items-center justify-between cursor-pointer">
                            <span className="text-gray-700 font-medium text-sm">En stock uniquement</span>
                            <div className="relative inline-flex items-center cursor-pointer">
                                <input 
                                    type="checkbox" 
                                    className="sr-only peer"
                                    checked={filters.onlyInStock}
                                    onChange={(e) => updateFilter("onlyInStock", e.target.checked)}
                                />
                                <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:bg-secondary after:content-[''] after:absolute after:top-0.5 after:left-0.5 after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all"></div>
                            </div>
                        </label>
                    </div>
                </div>
            </aside>

            {/* --- MAIN CONTENT (80%) --- */}
            <main className="flex-1 p-8 bg-background-light">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-8">
                    <div>
                        <h2 className="text-3xl font-display font-bold text-gray-900">Catalogue de Livres</h2>
                        <p className="text-gray-500 mt-1">
                            {filteredBooks.length > 0 
                                ? `${filteredBooks.length} livres trouvés` 
                                : "Aucun livre ne correspond à vos critères"}
                        </p>
                    </div>
                </div>

                {/* Grille de livres */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-x-6 gap-y-10">
                    {currentBooks.map(book => (
                        <div key={book.id} className="group flex flex-col h-full bg-white rounded-xl overflow-hidden hover:shadow-soft transition-all duration-300 border border-transparent hover:border-gray-100">
                            {/* Image avec Overlay */}
                            <div className="relative aspect-2/3 w-full overflow-hidden bg-gray-100">
                                <img 
                                    src={book.coverImage} 
                                    alt={book.title} 
                                    className="object-cover w-full h-full transition-transform duration-500 group-hover:scale-105" 
                                />
                                <button className="absolute top-3 right-3 h-8 w-8 rounded-full bg-white/90 backdrop-blur-sm text-gray-400 hover:text-red-500 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all shadow-sm">
                                    <Heart size={18} />
                                </button>
                                {book.rating >= 4.8 && (
                                    <span className="absolute top-3 left-3 bg-accent text-white text-[10px] font-bold px-2 py-1 rounded shadow-sm">COUP DE CŒUR</span>
                                )}
                            </div>

                            {/* Détails du livre */}
                            <div className="p-4 flex flex-col flex-1">
                                <div className="text-[10px] font-bold text-primary uppercase tracking-widest mb-1">{book.category}</div>
                                <h3 className="font-display font-bold text-md text-gray-900 leading-tight mb-1 group-hover:text-primary transition-colors cursor-pointer line-clamp-1">
                                    {book.title}
                                </h3>
                                <p className="text-xs text-gray-500 mb-3 italic">par {book.author}</p>
                                
                                {/* Étoiles */}
                                <div className="flex items-center gap-1 mb-4">
                                    <Star size={14} className="text-accent fill-accent" />
                                    <span className="text-sm font-bold text-gray-700">{book.rating}</span>
                                    <span className="text-[10px] text-gray-400">({book.reviewCount})</span>
                                </div>

                                {/* Prix et Action */}
                                <div className="mt-auto pt-4 border-t border-gray-100 flex items-center justify-between">
                                    <div className="flex flex-col">
                                        <span className="text-lg font-bold text-primary">{book.price.toFixed(2)}€</span>
                                        <span className={`text-[10px] font-medium ${book.stock > 0 ? 'text-secondary' : 'text-red-500'}`}>
                                            {book.stock > 0 ? `En stock (${book.stock})` : 'Rupture'}
                                        </span>
                                    </div>
                                    <button 
                                        disabled={book.stock === 0}
                                        className={`p-2 rounded-lg transition-colors ${book.stock > 0 ? 'bg-primary text-white hover:bg-primary/90' : 'bg-gray-100 text-gray-400 cursor-not-allowed'}`}
                                    >
                                        <ShoppingCart size={18} />
                                    </button>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Pagination */}
                {totalPages > 1 && (
                    <div className="mt-12 flex justify-center items-center gap-4">
                        <button 
                            disabled={currentPage === 1}
                            onClick={() => setCurrentPage(prev => prev - 1)}
                            className="px-4 py-2 text-sm font-medium text-primary bg-white border border-gray-200 rounded-lg hover:bg-gray-50 disabled:opacity-50"
                        >
                            Précédent
                        </button>
                        <span className="text-sm text-gray-600 font-medium">Page {currentPage} sur {totalPages}</span>
                        <button 
                            disabled={currentPage === totalPages}
                            onClick={() => setCurrentPage(prev => prev + 1)}
                            className="px-4 py-2 text-sm font-medium text-primary bg-white border border-gray-200 rounded-lg hover:bg-gray-50 disabled:opacity-50"
                        >
                            Suivant
                        </button>
                    </div>
                )}
            </main>
        </div>
    );
}

export default Home;