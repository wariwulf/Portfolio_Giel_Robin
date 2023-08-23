import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './Home/home';
import About from './About/about';
import Error from './Error/error';
import Header from '../src/composant/header/header';
import CardDetails from './cards-details/cards-details';
import Footer from './composant/footer/footer';
import SignIn from './Login/login';
import { useUser } from './customHooks';
import { UserProvider } from './UserContext';
import Projet from './About/projet/projet';
import CardsDetailsPro from './cards-details/cards-details-pro';

function App() {
  const [user, setUser] = useState(null);
  const { connectedUser } = useUser();

  useEffect(() => {
    setUser(connectedUser);
  }, [connectedUser]);

  return (
    <Router>
      <UserProvider>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<SignIn setUser={setUser} />} />
        <Route path="/about" element={<About />} />
        <Route path="/projet" element={<Projet/>}/>
        <Route path="/card/:_id" element={<CardDetails />} />
        <Route path="/card-pro/:_id" element={<CardsDetailsPro />} />
        <Route path="*" element={<Error />} />
      </Routes>
      <Footer/>
      </UserProvider>
    </Router>
  );
}

export default App;
