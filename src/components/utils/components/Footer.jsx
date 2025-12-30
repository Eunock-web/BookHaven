
function Footer() {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="bg-white  border-[#e9edf1] pt-16 pb-8">

                {/* Bottom Bar */}
                <div className="pt-8 border-t border-gray-100 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-gray-400">
                    <p>© {currentYear} BookHaven. Tous droits réservés.</p>
                    <div className="flex gap-8">
                        <a href="#" className="hover:text-gray-600 transition-colors">Conditions Générales</a>
                        <a href="#" className="hover:text-gray-600 transition-colors">Politique de Confidentialité</a>
                    </div>
            </div>
        </footer>
    );
}

export default Footer;