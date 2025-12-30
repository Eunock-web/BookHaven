const BookModal = ({ isOpen, onClose, onSubmit, initialData = null }) => {
    const [formData, setFormData] = useState(initialData || {
        title: '', author: '', price: '', category: '', stock: '', coverImage: ''
    });

    useEffect(() => {
        if (initialData) {
            setFormData(initialData);
        } else {
            setFormData({ title: '', author: '', price: '', category: '', stock: '', coverImage: '' });
        }
    }, [initialData, isOpen]);

    if (!isOpen) return null;

    return (
        <div className="fixed inset-0 z-100 flex items-center justify-center bg-black/50 backdrop-blur-sm p-4">
            <div className="bg-white rounded-2xl w-full max-w-md p-8 shadow-2xl">
                <h2 className="text-2xl font-bold mb-6">{initialData ? 'Modifier le livre' : 'Ajouter un livre'}</h2>
                <form className="space-y-4" onSubmit={(e) => { e.preventDefault(); onSubmit(formData); }}>
                    <div>
                        <label className="block text-sm font-bold mb-1">Titre</label>
                        <input type="text" className="w-full border rounded-lg p-2" value={formData.title} onChange={e => setFormData({...formData, title: e.target.value})} required />
                    </div>
                    <div className="grid grid-cols-2 gap-4">
                        <div>
                            <label className="block text-sm font-bold mb-1">Prix (€)</label>
                            <input type="number" className="w-full border rounded-lg p-2" value={formData.price} onChange={e => setFormData({...formData, price: e.target.value})} required />
                        </div>
                        <div>
                            <label className="block text-sm font-bold mb-1">Stock</label>
                            <input type="number" className="w-full border rounded-lg p-2" value={formData.stock} onChange={e => setFormData({...formData, stock: e.target.value})} required />
                        </div>
                    </div>
                    <div>
                        <label className="block text-sm font-bold mb-1">URL de l'image</label>
                        <input type="text" className="w-full border rounded-lg p-2" value={formData.coverImage} onChange={e => setFormData({...formData, coverImage: e.target.value})} />
                    </div>
                    <div className="flex justify-end gap-3 mt-8">
                        <button type="button" onClick={onClose} className="px-4 py-2 text-gray-500 font-bold">Annuler</button>
                        <button type="submit" className="bg-primary text-white px-6 py-2 rounded-lg font-bold">Enregistrer</button>
                    </div>
                </form>
            </div>
        </div>
    );
};