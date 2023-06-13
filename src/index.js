import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
//import App from './App';
import NavBar from './components/navbar';
import HomeCont from './components/homecont';
import Category from './components/categories';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
  <NavBar/>
  <HomeCont/>
  <Category/>
  </React.StrictMode>
);

reportWebVitals();
