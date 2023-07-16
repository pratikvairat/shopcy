import React from "react";
import ProductList from "./allProduct";
import { BrowserRouter, Routes, Link, Route,useNavigate } from 'react-router-dom';
import "./css/categories.css"
const Category = () => {
   const navigate=useNavigate();
   return (
      <div>
         <h2 class="text-center">Categories to Shop</h2>
         <div class="row text-center">
            <div className="col text-center catBtn ">
               <a href="/furniture"><button class="fw-bold button">Furniture</button></a>
            </div>
            <div className=" col text-center catBtn">
                <button class="fw-bold button"><a href="/laptops" className="text-decoration-none">Laptop</a></button>
            </div>
            <div className=" col text-center catBtn">
              <button class="fw-bold button"><a href="/smartphone" className="text-decoration-none">Smartphone</a></button>
            </div>
            <div className=" col text-center catBtn">
               <button class="fw-bold button">Shoes</button>
            </div>
            <div className=" col text-center catBtn">
               <button class="fw-bold  button"><a href="/watches">Watches</a></button>
            </div>
            <div className=" col text-center catBtn">
               <button class="fw-bold button">Beauty</button>
            </div>
            <div className=" col text-center catBtn">
               <button class="fw-bold button">Bags</button>
            </div>
         </div>
         
      </div>
   );
}
export default Category;