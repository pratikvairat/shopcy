import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import NavBar from './components/navbar';
import HomeCont from './components/homecont';
import Category from './components/categories';
import {LapCards,SmartPhaoneCards} from './components/cards';
import Footer from './components/footer';
import reportWebVitals from './reportWebVitals';
const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <React.StrictMode>
  <NavBar/>
  <HomeCont/>
  <Category/>
  <h2 class="p-2">Trending in Laptops</h2>
 <LapCards category="laptops"/>
  <h2 class="p-2">Trending in Smartphone</h2>
  <LapCards category="smartphones"/>
  <h2 class="p-2">Trending in Shoes</h2>
  <LapCards category="mens-shoes"/>
  <h2 class="p-2">Trending in Watches Men</h2>
  <LapCards category="mens-watches"/>
  <Footer/>
  </React.StrictMode>
);

reportWebVitals();
