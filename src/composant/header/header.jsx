import React from 'react';
import { Link } from 'react-router-dom';
import "./header.scss";
import { useLocation } from 'react-router-dom';
import { useUser } from '../../customHooks';

function Header() {
    const location = useLocation();
    const currentPath = location.pathname;
    const { user, authenticated, setUser } = useUser();

    const isUserLoggedIn = !!localStorage.getItem('token');

    const handleLogout = () => {
        // Supprimer le token et userId du local storage pour déconnecter l'utilisateur
        localStorage.removeItem('token');
        localStorage.removeItem('userId');

        window.location.reload();
    };

    return (
        <header>
            <div className='banner'>
                <h1>Portfolio Giel Robin</h1>
                <h2>Developpeur Web</h2>
            </div>
            <nav>
                <ul className='nav-header'>
                    <li className={currentPath === '/' ? 'active' : ''}>
                        <Link to="/">Accueil</Link>
                    </li>
                    <li className={currentPath === '/projet' ? 'active' : ''}>
                        <Link to ="/projet">Projet</Link>
                    </li>
                    <li className={currentPath === '/about' ? 'active' : ''}>
                        <Link to="/about">À Propos</Link>
                    </li>
                    <li className={currentPath === '/login' ? 'active' : ''}>
                        {isUserLoggedIn ? (
                            <Link to="/" onClick={handleLogout}>Déconnexion</Link>
                        ) : (
                            <Link to="/login">Connexion</Link>
                        )}
                    </li>
                </ul>
            </nav>
        </header>
    );
}

export default Header;
