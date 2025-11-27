// Composant Footer - Pied de page
import Link from 'next/link';

export default function Footer() {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="bg-gray-900 text-gray-300">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
                    {/* À propos */}
                    <div>
                        <h3 className="text-white font-bold text-lg mb-4">TWEE RECRU</h3>
                        <p className="text-sm leading-relaxed">
                            Plateforme RH intelligente pour optimiser la gestion de vos ressources humaines,
                            du recrutement à la formation.
                        </p>
                    </div>

                    {/* Liens rapides */}
                    <div>
                        <h3 className="text-white font-semibold mb-4">Liens Rapides</h3>
                        <ul className="space-y-2 text-sm">
                            <li>
                                <Link href="/employes" className="hover:text-blue-400 transition-colors">
                                    Gestion des employés
                                </Link>
                            </li>
                            <li>
                                <Link href="/recrutement" className="hover:text-blue-400 transition-colors">
                                    Recrutement
                                </Link>
                            </li>
                            <li>
                                <Link href="/formations" className="hover:text-blue-400 transition-colors">
                                    Formations
                                </Link>
                            </li>
                            <li>
                                <Link href="/dashboard" className="hover:text-blue-400 transition-colors">
                                    Dashboard RH
                                </Link>
                            </li>
                        </ul>
                    </div>

                    {/* Support */}
                    <div>
                        <h3 className="text-white font-semibold mb-4">Support</h3>
                        <ul className="space-y-2 text-sm">
                            <li>
                                <Link href="/aide" className="hover:text-blue-400 transition-colors">
                                    Centre d&apos;aide
                                </Link>
                            </li>
                            <li>
                                <Link href="/contact" className="hover:text-blue-400 transition-colors">
                                    Nous contacter
                                </Link>
                            </li>
                            <li>
                                <Link href="/confidentialite" className="hover:text-blue-400 transition-colors">
                                    Politique de confidentialité
                                </Link>
                            </li>
                            <li>
                                <Link href="/mentions-legales" className="hover:text-blue-400 transition-colors">
                                    Mentions légales
                                </Link>
                            </li>
                        </ul>
                    </div>

                    {/* Contact & Réseaux sociaux */}
                    <div>
                        <h3 className="text-white font-semibold mb-4">Contact</h3>
                        <ul className="space-y-2 text-sm mb-4">
                            <li className="flex items-center space-x-2">
                                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                                    <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                                    <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                                </svg>
                                <span>contact@tweerecru.fr</span>
                            </li>
                            <li className="flex items-center space-x-2">
                                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                                    <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                                </svg>
                                <span>+33 1 23 45 67 89</span>
                            </li>
                        </ul>

                        {/* Réseaux sociaux */}
                        <div className="flex space-x-4">
                            <a href="#" className="hover:text-blue-400 transition-colors" aria-label="LinkedIn">
                                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                                    <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                                </svg>
                            </a>
                            <a href="#" className="hover:text-blue-400 transition-colors" aria-label="Twitter">
                                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                                    <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z" />
                                </svg>
                            </a>
                            <a href="#" className="hover:text-blue-400 transition-colors" aria-label="Facebook">
                                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                                    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                                </svg>
                            </a>
                        </div>
                    </div>
                </div>

                {/* Copyright */}
                <div className="border-t border-gray-800 mt-8 pt-8 text-center text-sm">
                    <p>&copy; {currentYear} TWEE RECRU. Tous droits réservés.</p>
                </div>
            </div>
        </footer>
    );
}
