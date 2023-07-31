import React from 'react';
import { Link } from 'react-router-dom';
import Banner from './banner';
import "./header.scss";
import { useLocation } from 'react-router-dom';

function Header() {
    const location = useLocation();
    const currentPath = location.pathname;
    const imagePath = process.env.PUBLIC_URL + '/kasa/logo_kasa.png';
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
        </ul>
      </nav>
    </header>
  );
}

export default Header;
