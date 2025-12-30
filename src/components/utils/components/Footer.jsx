import React from 'react';
import { Facebook, Twitter, Instagram, Youtube, Mail, MapPin, Phone } from 'lucide-react';

function Footer() {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="bg-white border-t border-[#e9edf1] pt-16 pb-8">
            <div className="max-w-[1600px] mx-auto px-6">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
                    
                    {/* Colonne 1: Branding & Bio */}
                    <div className="space-y-6">
                        <div className="flex items-center gap-3">
                            <div className="size-10 bg-primary/10 rounded-lg flex items-center justify-center text-primary">
                                <span className="material-symbols-outlined !text-[28px]">menu_book</span>
                            </div>
                            <h2 className="text-primary text-2xl font-display font-bold tracking-tight">BookHaven</h2>
                        </div>
                        <p className="text-gray-500 text-sm leading-relaxed">
                            Votre destination privilégiée pour découvrir les trésors de la littérature mondiale. De la fantasy épique aux thrillers technologiques, trouvez votre prochaine évasion.
                        </p>
                        <div className="flex gap-4">
                            <a href="#" className="p-2 rounded-full bg-gray-50 text-gray-400 hover:text-primary transition-colors">
                                <Facebook size={18} />
                            </a>
                            <a href="#" className="p-2 rounded-full bg-gray-50 text-gray-400 hover:text-primary transition-colors">
                                <Instagram size={18} />
                            </a>
                            <a href="#" className="p-2 rounded-full bg-gray-50 text-gray-400 hover:text-primary transition-colors">
                                <Twitter size={18} />
                            </a>
                        </div>
                    </div>

                    {/* Colonne 2: Liens Rapides */}
                    <div>
                        <h3 className="text-gray-900 font-bold mb-6">Navigation</h3>
                        <ul className="space-y-4 text-sm text-gray-500">
                            <li><a href="#" className="hover:text-primary transition-colors">Accueil</a></li>
                            <li><a href="#" className="hover:text-primary transition-colors">Nouveautés</a></li>
                            <li><a href="#" className="hover:text-primary transition-colors">Meilleures ventes</a></li>
                            <li><a href="#" className="hover:text-primary transition-colors">À propos de nous</a></li>
                        </ul>
                    </div>

                    {/* Colonne 3: Contact */}
                    <div>
                        <h3 className="text-gray-900 font-bold mb-6">Contact</h3>
                        <ul className="space-y-4 text-sm text-gray-500">
                            <li className="flex items-start gap-3">
                                <MapPin size={18} className="text-primary shrink-0" />
                                <span>12 rue de la Librairie, 75005 Paris, France</span>
                            </li>
                            <li className="flex items-center gap-3">
                                <Phone size={18} className="text-primary shrink-0" />
                                <span>+33 (0)1 23 45 67 89</span>
                            </li>
                            <li className="flex items-center gap-3">
                                <Mail size={18} className="text-primary shrink-0" />
                                <span>contact@bookhaven.fr</span>
                            </li>
                        </ul>
                    </div>

                    {/* Colonne 4: Newsletter */}
                    <div>
                        <h3 className="text-gray-900 font-bold mb-6">Newsletter</h3>
                        <p className="text-sm text-gray-500 mb-4">Inscrivez-vous pour recevoir nos dernières offres et actualités.</p>
                        <form className="space-y-3" onSubmit={(e) => e.preventDefault()}>
                            <div className="relative">
                                <input 
                                    type="email" 
                                    placeholder="Votre email" 
                                    className="w-full bg-gray-50 border border-gray-100 rounded-lg py-3 px-4 text-sm focus:outline-none focus:border-primary/20 transition-all"
                                />
                                <button className="absolute right-2 top-1.5 bg-primary text-white p-1.5 rounded-md hover:bg-primary/90 transition-colors">
                                    <Mail size={16} />
                                </button>
                            </div>
                        </form>
                    </div>
                </div>

                {/* Bottom Bar */}
                <div className="pt-8 border-t border-gray-100 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-gray-400">
                    <p>© {currentYear} BookHaven. Tous droits réservés.</p>
                    <div className="flex gap-8">
                        <a href="#" className="hover:text-gray-600 transition-colors">Conditions Générales</a>
                        <a href="#" className="hover:text-gray-600 transition-colors">Politique de Confidentialité</a>
                    </div>
                </div>
            </div>
        </footer>
    );
}

export default Footer;