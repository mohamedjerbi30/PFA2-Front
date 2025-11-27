// Composant Navigation - Barre de navigation principale avec authentification
'use client';

import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { useState } from 'react';
import { useAuth } from '@/context/AuthContext';

export default function Navbar() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [showUserMenu, setShowUserMenu] = useState(false);
    const { user, isAuthenticated, isLoading, logout } = useAuth();
    const router = useRouter();

    const handleLogout = () => {
        logout();
        router.push('/');
        setShowUserMenu(false);
    };

    return (
        <nav className="bg-gradient-to-r from-blue-600 to-blue-800 text-white shadow-lg">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between items-center h-16">
                    {/* Logo */}
                    <div className="flex items-center">
                        <Link href="/" className="flex items-center space-x-2 hover:opacity-80 transition-opacity">
                            <div className="w-10 h-10 bg-white rounded-lg flex items-center justify-center">
                                <span className="text-blue-600 font-bold text-xl">TR</span>
                            </div>
                            <span className="text-xl font-bold hidden sm:block">TWEE RECRU</span>
                        </Link>
                    </div>

                    {/* Menu Desktop */}
                    <div className="hidden md:flex items-center space-x-1">
                        <NavLink href="/" label="Accueil" />
                        <NavLink href="/employes" label="Employés" />
                        <NavLink href="/recrutement" label="Recrutement" />
                        <NavLink href="/formations" label="Formations" />
                        <NavLink href="/documents" label="Documents" />
                        <NavLink href="/dashboard" label="Dashboard" />

                        {/* Auth Section - Hidden during loading to prevent flash */}
                        {isLoading ? (
                            // Loading skeleton - same size as the auth button
                            <div className="ml-4 w-32 h-10 bg-white/10 rounded-lg animate-pulse" />
                        ) : isAuthenticated && user ? (
                            <div className="relative ml-4">
                                <button
                                    onClick={() => setShowUserMenu(!showUserMenu)}
                                    className="flex items-center space-x-2 px-4 py-2 bg-white/10 rounded-lg hover:bg-white/20 transition-colors"
                                >
                                    <div className="w-8 h-8 bg-white rounded-full flex items-center justify-center">
                                        <span className="text-blue-600 font-semibold text-sm">
                                            {user.name ? user.name.charAt(0).toUpperCase() : user.email.charAt(0).toUpperCase()}
                                        </span>
                                    </div>
                                    <span className="font-medium">{user.name || user.email}</span>
                                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                                    </svg>
                                </button>

                                {showUserMenu && (
                                    <div className="absolute right-0 mt-2 w-48 bg-white rounded-lg shadow-lg py-1 z-50">
                                        <Link
                                            href="/profil"
                                            onClick={() => setShowUserMenu(false)}
                                            className="block px-4 py-2 text-gray-700 hover:bg-gray-100"
                                        >
                                            Mon Profil
                                        </Link>
                                        <button
                                            onClick={handleLogout}
                                            className="w-full text-left px-4 py-2 text-red-600 hover:bg-gray-100"
                                        >
                                            Déconnexion
                                        </button>
                                    </div>
                                )}
                            </div>
                        ) : (
                            <Link
                                href="/connexion"
                                className="ml-4 px-4 py-2 bg-white text-blue-600 rounded-lg font-semibold hover:bg-blue-50 transition-colors"
                            >
                                Connexion
                            </Link>
                        )}
                    </div>

                    {/* Bouton Menu Mobile */}
                    <button
                        onClick={() => setIsMenuOpen(!isMenuOpen)}
                        className="md:hidden p-2 rounded-lg hover:bg-blue-700 transition-colors"
                    >
                        <svg
                            className="w-6 h-6"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                        >
                            {isMenuOpen ? (
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth={2}
                                    d="M6 18L18 6M6 6l12 12"
                                />
                            ) : (
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth={2}
                                    d="M4 6h16M4 12h16M4 18h16"
                                />
                            )}
                        </svg>
                    </button>
                </div>
            </div>

            {/* Menu Mobile */}
            {isMenuOpen && (
                <div className="md:hidden bg-blue-700 border-t border-blue-600">
                    <div className="px-2 pt-2 pb-3 space-y-1">
                        <MobileNavLink href="/" label="Accueil" onClick={() => setIsMenuOpen(false)} />
                        <MobileNavLink href="/employes" label="Employés" onClick={() => setIsMenuOpen(false)} />
                        <MobileNavLink href="/recrutement" label="Recrutement" onClick={() => setIsMenuOpen(false)} />
                        <MobileNavLink href="/formations" label="Formations" onClick={() => setIsMenuOpen(false)} />
                        <MobileNavLink href="/documents" label="Documents" onClick={() => setIsMenuOpen(false)} />
                        <MobileNavLink href="/dashboard" label="Dashboard" onClick={() => setIsMenuOpen(false)} />

                        {/* Mobile Auth Section - Hidden during loading */}
                        {isLoading ? (
                            <div className="px-3 py-2">
                                <div className="h-10 bg-white/10 rounded-lg animate-pulse" />
                            </div>
                        ) : isAuthenticated && user ? (
                            <>
                                <div className="px-3 py-2 text-sm text-white/80">
                                    {user.name || user.email}
                                </div>
                                <MobileNavLink href="/profil" label="Mon Profil" onClick={() => setIsMenuOpen(false)} />
                                <button
                                    onClick={() => {
                                        handleLogout();
                                        setIsMenuOpen(false);
                                    }}
                                    className="w-full text-left px-3 py-2 rounded-lg text-red-200 hover:bg-blue-600 transition-colors font-medium"
                                >
                                    Déconnexion
                                </button>
                            </>
                        ) : (
                            <Link
                                href="/connexion"
                                onClick={() => setIsMenuOpen(false)}
                                className="block px-3 py-2 rounded-lg bg-white text-blue-600 font-semibold text-center hover:bg-blue-50 transition-colors"
                            >
                                Connexion
                            </Link>
                        )}
                    </div>
                </div>
            )}
        </nav>
    );
}

// Composant pour les liens de navigation desktop
function NavLink({ href, label }: { href: string; label: string }) {
    return (
        <Link
            href={href}
            className="px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors font-medium"
        >
            {label}
        </Link>
    );
}

// Composant pour les liens de navigation mobile
function MobileNavLink({
    href,
    label,
    onClick
}: {
    href: string;
    label: string;
    onClick: () => void;
}) {
    return (
        <Link
            href={href}
            onClick={onClick}
            className="block px-3 py-2 rounded-lg hover:bg-blue-600 transition-colors font-medium"
        >
            {label}
        </Link>
    );
}