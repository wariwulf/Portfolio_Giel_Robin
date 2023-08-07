import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './Home/home';
import About from './About/about';
import Error from './Error/error';
import Header from '../src/composant/header/header';
import CardDetails from './cards-details/cards-details';
import logementsData from '../src/data/logements.json';
import Footer from './composant/footer/footer';
import SignIn from './Login/login';
import { useUser } from './customHooks';
import { UserProvider } from './UserContext';

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
        <Route path="/card/:id" element={<CardDetails data={logementsData} />} />
        <Route path="*" element={<Error />} />
      </Routes>
      <Footer/>
      </UserProvider>
    </Router>
  );
}

export default App;
