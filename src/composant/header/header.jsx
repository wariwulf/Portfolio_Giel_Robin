import React from 'react';
import { Link } from 'react-router-dom';
import Banner from './banner';
import "./header.scss";
import { useLocation } from 'react-router-dom';
import { useUser } from '../../customHooks';

function Header() {
    const location = useLocation();
    const currentPath = location.pathname;
    const imagePath = process.env.PUBLIC_URL + '/kasa/logo_kasa.png';
    const { user, authenticated, setUser } = useUser();

    const handleLogout = () => {
        // Supprimer le token et userId du local storage pour déconnecter l'utilisateur
        localStorage.removeItem('token');
        localStorage.removeItem('userId');
        setUser(null); // Mettre à jour l'utilisateur déconnecté ici
    };

    return (
        <header>
            <div className='banner'>
                <Banner imagePath={imagePath} />
            </div>
            <nav>
                <ul className='nav-header'>
                    <li className={currentPath === '/' ? 'active' : ''}>
                        <Link to="/">Accueil</Link>
                    </li>
                    <li className={currentPath === '/about' ? 'active' : ''}>
                        <Link to="/about">À Propos</Link>
                    </li>
                    <li className={currentPath === '/login' ? 'active' : ''}>
                        {authenticated ? (
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
