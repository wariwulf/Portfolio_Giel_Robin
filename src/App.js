import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './Home/home';
import About from './About/about';
import Error from './Error/error';
import Header from '../src/composant/header/header';
import CardDetails from './cards-details/cards-details';
import logementsData from '../src/data/logements.json';
import Footer from './composant/footer/footer';

function App() {

  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/card/:id" element={<CardDetails data={logementsData} />} />
        <Route path="*" element={<Error />} />
      </Routes>
      <Footer/>
    </Router>
  );
}

export default App;
