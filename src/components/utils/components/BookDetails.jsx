import { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { books } from '../data/books';
import { Star, ShoppingCart, ArrowLeft, ShieldCheck, Truck, RotateCcw } from 'lucide-react';

function BookDetail() {
    const { id } = useParams();
    // On cherche le livre correspondant à l'ID dans l'URL
    const book = books.find(b => b.id === parseInt(id));

    // État pour gérer l'image principale (zoom/galerie)
    const [mainImage, setMainImage] = useState(book?.coverImage);

    if (!book) return <div className="pt-32 text-center">Livre non trouvé</div>;

    return (
        <div className="pt-28 pb-16 bg-white">
            <div className="max-w-350 mx-auto px-6">
                
                {/* Bouton Retour */}
                <Link to="/" className="inline-flex items-center gap-2 text-gray-500 hover:text-primary mb-8 transition-colors">
                    <ArrowLeft size={20} />
                    <span>Retour au catalogue</span>
                </Link>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
                    
                    {/* --- COLONNE GAUCHE : IMAGES --- */}
                    <div className="space-y-4">
                        <div className="aspect-3/4 rounded-2xl overflow-hidden bg-gray-100 border border-gray-100">
                            <img src={mainImage} alt={book.title} className="w-full h-full object-cover" />
                        </div>
                        
                        {/* Galerie d'images secondaires */}
                        <div className="grid grid-cols-4 gap-4">
                            <button 
                                onClick={() => setMainImage(book.coverImage)}
                                className={`aspect-square rounded-lg overflow-hidden border-2 transition-all ${mainImage === book.coverImage ? 'border-primary' : 'border-transparent'}`}
                            >
                                <img src={book.coverImage} className="w-full h-full object-cover" />
                            </button>
                            {book.images.map((img, idx) => (
                                <button 
                                    key={idx}
                                    onClick={() => setMainImage(img)}
                                    className={`aspect-square rounded-lg overflow-hidden border-2 transition-all ${mainImage === img ? 'border-primary' : 'border-transparent'}`}
                                >
                                    <img src={img} className="w-full h-full object-cover" />
                                </button>
                            ))}
                        </div>
                    </div>

                    {/* --- COLONNE DROITE : INFOS --- */}
                    <div className="flex flex-col">
                        <div className="mb-6">
                            <span className="text-primary font-bold uppercase tracking-widest text-sm">{book.category}</span>
                            <h1 className="text-4xl font-display font-bold text-gray-900 mt-2 mb-4 leading-tight">
                                {book.title}
                            </h1>
                            <div className="flex items-center gap-6">
                                <div className="flex items-center gap-1 text-accent">
                                    <Star size={20} fill="currentColor" />
                                    <span className="font-bold text-lg">{book.rating}</span>
                                    <span className="text-gray-400 font-normal">({book.reviewCount} avis)</span>
                                </div>
                                <span className="text-gray-300">|</span>
                                <span className="text-gray-600 italic">par <span className="font-semibold text-gray-900">{book.author}</span></span>
                            </div>
                        </div>

                        <div className="text-3xl font-bold text-primary mb-8">
                            {book.price.toFixed(2)}€
                        </div>

                        <div className="space-y-6 mb-10">
                            <h3 className="font-bold text-gray-900">Résumé</h3>
                            <p className="text-gray-600 leading-relaxed text-lg">
                                {book.description}
                            </p>
                        </div>

                        {/* Actions d'achat */}
                        <div className="flex gap-4 mb-10">
                            <button className="flex-1 bg-primary hover:bg-primary/90 text-white h-14 rounded-xl font-bold flex items-center justify-center gap-3 transition-all">
                                <ShoppingCart size={22} />
                                Ajouter au panier
                            </button>
                            <button className="w-14 h-14 border-2 border-gray-100 rounded-xl flex items-center justify-center text-gray-400 hover:text-red-500 hover:border-red-100 transition-all">
                                <Heart size={24} />
                            </button>
                        </div>

                        {/* Réassurance client */}
                        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 pt-10 border-t border-gray-100">
                            <div className="flex flex-col items-center text-center gap-2">
                                <Truck size={24} className="text-secondary" />
                                <span className="text-xs font-bold uppercase">Livraison offerte</span>
                                <span className="text-[10px] text-gray-500">Dès 35€ d'achat</span>
                            </div>
                            <div className="flex flex-col items-center text-center gap-2">
                                <ShieldCheck size={24} className="text-secondary" />
                                <span className="text-xs font-bold uppercase">Paiement Sécurisé</span>
                                <span className="text-[10px] text-gray-500">SSL 256 bits</span>
                            </div>
                            <div className="flex flex-col items-center text-center gap-2">
                                <RotateCcw size={24} className="text-secondary" />
                                <span className="text-xs font-bold uppercase">Retour gratuit</span>
                                <span className="text-[10px] text-gray-500">Sous 30 jours</span>
                            </div>
                        </div>

                        {/* Fiche Technique */}
                        <div className="mt-12 p-6 bg-gray-50 rounded-2xl">
                            <h3 className="font-bold text-gray-900 mb-4">Informations détaillées</h3>
                            <div className="grid grid-cols-2 gap-y-4 text-sm">
                                <span className="text-gray-500">ISBN</span>
                                <span className="font-medium">{book.isbn}</span>
                                <span className="text-gray-500">Langue</span>
                                <span className="font-medium">{book.language}</span>
                                <span className="text-gray-500">Éditeur</span>
                                <span className="font-medium">{book.publisher}</span>
                                <span className="text-gray-500">Date de parution</span>
                                <span className="font-medium">{book.publicationDate}</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default BookDetail;