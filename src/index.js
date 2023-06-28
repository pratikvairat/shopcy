import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
import Footer from './components/footer';
import Account from './components/account';
import NavBar from './components/navbar';
import { BrowserRouter, Route,Routes} from 'react-router-dom';
const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <React.StrictMode>
    <NavBar/>
    <Footer/>
  </React.StrictMode>
);

reportWebVitals();
