import { useState } from 'react';
import { 
    LayoutDashboard, 
    Users, 
    Settings, 
    Trash2, 
    Edit, 
    Search,
    TrendingUp,
    Package,
    Plus
} from 'lucide-react';
import { useBooks } from '../../context/BookContext';
import BookModal from '../../components/utils/components/BookModal';

const AdminDashboard = () => {
    // 1. Extraction des fonctions du Context (ajoute updateBook)
    const { books, deleteBook, addBook, updateBook } = useBooks();
    
    // 2. États pour la gestion de la modale et de la recherche
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [editingBook, setEditingBook] = useState(null); 
    const [searchTerm, setSearchTerm] = useState("");

    // 3. Logique d'ouverture de la modale
    const handleAddClick = () => {
        setEditingBook(null); // Reset pour être sûr d'être en mode "Ajout"
        setIsModalOpen(true);
    };

    const handleEditClick = (book) => {
        setEditingBook(book); // On passe le livre sélectionné
        setIsModalOpen(true);
    };

    // 4. Logique de soumission (distingue Ajout et Modification)
    const handleFormSubmit = (data) => {
        if (editingBook) {
            updateBook(editingBook.id, data);
        } else {
            addBook(data);
        }
        setIsModalOpen(false);
    };

    // 5. Calcul des statistiques
    const totalStockValue = books.reduce((acc, book) => acc + (Number(book.price) * Number(book.stock || 0)), 0);

    // 6. Filtrage pour la recherche
    const filteredBooks = books.filter(book => 
        book.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        book.author.toLowerCase().includes(searchTerm.toLowerCase())
    );

    return (
        <div className="flex min-h-screen bg-[#f8fafc]">
            {/* SIDEBAR GAUCHE */}
            <aside className="w-64 bg-white border-r border-[#e2e8f0] hidden md:flex flex-col sticky top-0 h-screen">
                <div className="p-6">
                    <h2 className="text-xl font-bold text-primary flex items-center gap-2">
                        <LayoutDashboard size={20} /> AdminPanel
                    </h2>
                </div>
                <nav className="flex-1 px-4 space-y-2">
                    <button className="flex w-full items-center gap-3 px-4 py-3 rounded-lg bg-primary/10 text-primary font-bold">
                        <Package size={20} /> Catalogue
                    </button>
                    <button className="flex w-full items-center gap-3 px-4 py-3 rounded-lg text-text-secondary hover:bg-gray-50 transition-colors">
                        <Users size={20} /> Utilisateurs
                    </button>
                    <button className="flex w-full items-center gap-3 px-4 py-3 rounded-lg text-text-secondary hover:bg-gray-50 transition-colors">
                        <Settings size={20} /> Paramètres
                    </button>
                </nav>
            </aside>

            {/* CONTENU PRINCIPAL */}
            <main className="flex-1 p-8">
                {/* Stats Cards */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
                    <div className="bg-white p-6 rounded-xl border border-[#e2e8f0] shadow-sm">
                        <div className="flex items-center justify-between mb-4">
                            <span className="text-text-secondary font-medium">Total Livres</span>
                            <div className="p-2 bg-blue-50 text-blue-600 rounded-lg"><Package size={20}/></div>
                        </div>
                        <p className="text-3xl font-bold text-text-main">{books.length}</p>
                    </div>
                    <div className="bg-white p-6 rounded-xl border border-[#e2e8f0] shadow-sm">
                        <div className="flex items-center justify-between mb-4">
                            <span className="text-text-secondary font-medium">Valeur Stock</span>
                            <div className="p-2 bg-green-50 text-green-600 rounded-lg"><TrendingUp size={20}/></div>
                        </div>
                        <p className="text-3xl font-bold text-text-main">{totalStockValue.toLocaleString()} €</p>
                    </div>
                    <div className="bg-white p-6 rounded-xl border border-[#e2e8f0] shadow-sm">
                        <div className="flex items-center justify-between mb-4">
                            <span className="text-text-secondary font-medium">Nouveaux Users</span>
                            <div className="p-2 bg-purple-50 text-purple-600 rounded-lg"><Users size={20}/></div>
                        </div>
                        <p className="text-3xl font-bold text-text-main">48</p>
                    </div>
                </div>

                {/* TABLE DE GESTION */}
                <div className="bg-white rounded-xl border border-[#e2e8f0] shadow-sm overflow-hidden">
                    <div className="p-6 border-b border-[#e2e8f0] flex flex-col md:flex-row md:items-center justify-between gap-4">
                        <h3 className="text-lg font-bold">Gestion du Catalogue</h3>
                        <div className="flex items-center gap-3">
                            <div className="relative">
                                <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" size={18} />
                                <input 
                                    type="text" 
                                    placeholder="Rechercher un livre..." 
                                    className="pl-10 pr-4 py-2 border border-[#e2e8f0] rounded-lg text-sm focus:ring-2 focus:ring-primary/20 outline-none w-64"
                                    value={searchTerm}
                                    onChange={(e) => setSearchTerm(e.target.value)}
                                />
                            </div>
                            <button 
                                onClick={handleAddClick}
                                className="bg-primary text-white px-4 py-2 rounded-lg text-sm font-bold flex items-center gap-2 hover:bg-blue-700 transition-colors"
                            >
                                <Plus size={18} /> Ajouter un livre
                            </button>
                        </div>
                    </div>

                    <div className="overflow-x-auto">
                        <table className="w-full text-left border-collapse">
                            <thead>
                                <tr className="bg-[#f8fafc] text-text-secondary text-xs uppercase tracking-wider font-semibold">
                                    <th className="px-6 py-4">Livre</th>
                                    <th className="px-6 py-4">Catégorie</th>
                                    <th className="px-6 py-4">Prix</th>
                                    <th className="px-6 py-4">Stock</th>
                                    <th className="px-6 py-4 text-right">Actions</th>
                                </tr>
                            </thead>
                            <tbody className="divide-y divide-[#e2e8f0]">
                                {filteredBooks.map((book) => (
                                    <tr key={book.id} className="hover:bg-gray-50 transition-colors">
                                        <td className="px-6 py-4">
                                            <div className="flex items-center gap-3">
                                                <div className="size-10 bg-gray-100 rounded overflow-hidden shrink-0">
                                                    <img src={book.coverImage} alt={book.title} className="object-cover h-full w-full" />
                                                </div>
                                                <div className="max-w-50    ">
                                                    <p className="text-sm font-bold text-text-main truncate">{book.title}</p>
                                                    <p className="text-xs text-text-secondary truncate">{book.author}</p>
                                                </div>
                                            </div>
                                        </td>
                                        <td className="px-6 py-4">
                                            <span className="px-2 py-1 bg-blue-50 text-blue-600 rounded-md text-[10px] font-bold uppercase">
                                                {book.category}
                                            </span>
                                        </td>
                                        <td className="px-6 py-4 text-sm font-medium">{book.price} €</td>
                                        <td className="px-6 py-4">
                                            <span className={`text-sm font-bold ${book.stock < 5 ? 'text-red-500' : 'text-green-600'}`}>
                                                {book.stock || 0} en stock
                                            </span>
                                        </td>
                                        <td className="px-6 py-4 text-right">
                                            <div className="flex justify-end gap-2">
                                                <button 
                                                    onClick={() => handleEditClick(book)}
                                                    className="p-2 text-text-secondary hover:text-primary hover:bg-primary/5 rounded-lg transition-colors"
                                                >
                                                    <Edit size={18} />
                                                </button>
                                                <button 
                                                    onClick={() => deleteBook(book.id)}
                                                    className="p-2 text-text-secondary hover:text-red-600 hover:bg-red-50 rounded-lg transition-colors"
                                                >
                                                    <Trash2 size={18} />
                                                </button>
                                            </div>
                                        </td>
                                    </tr>
                                ))}
                                {filteredBooks.length === 0 && (
                                    <tr>
                                        <td colSpan="5" className="px-6 py-10 text-center text-gray-500">
                                            Aucun livre trouvé pour "{searchTerm}"
                                        </td>
                                    </tr>
                                )}
                            </tbody>
                        </table>
                    </div>
                </div>
            </main>

            {/* MODALE D'AJOUT / ÉDITION */}
            <BookModal 
                isOpen={isModalOpen} 
                onClose={() => setIsModalOpen(false)} 
                onSubmit={handleFormSubmit}
                initialData={editingBook}
            />
        </div>
    );
};

export default AdminDashboard;