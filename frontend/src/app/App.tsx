import React from 'react';
import Navbar from '../components/logical/navbar';
import Articles from '../pages/articles';
import Home from '../pages/home';
import Websites from '../pages/websites';
import Article from '../pages/article';

export default function App() {
  return (
    <div>
      <Navbar />
      <Home />
      <Articles />
      <Websites />
      <Article />
    </div>

  )
}