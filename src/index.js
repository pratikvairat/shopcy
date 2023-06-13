import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import NavBar from './components/navbar';
import HomeCont from './components/homecont';
import Category from './components/categories';
import Cards from './components/cards';
import Footer from './components/footer';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
  <NavBar/>
  <HomeCont/>
  <Category/>
  <h2 class="p-2">Trending in Shoes</h2>
  <Cards/>
  <h2 class="p-2">Trending in Fashion</h2>
  <Cards/>
  <h2 class="p-2">Trending in Electronics</h2>
  <Cards/>
  <h2 class="p-2">Latest Lauches</h2>
  <Cards/>
  <Footer/>
  </React.StrictMode>
);

reportWebVitals();
