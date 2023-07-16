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
               <a href="/mens-watches"><button class="fw-bold  button">Watches</button></a>
            </div>
            <div className=" col text-center catBtn">
               <button class="fw-bold button">Beauty</button>
            </div>
            <div className=" col text-center catBtn">
               <button class="fw-bold button">Bags</button>
            </div>
         </div>
         <Routes> 
            <Route exact path="/shoes" element={<ProductList category="mens-shoes" />}></Route>
            <Route exact path="/watches" element={<ProductList category="mens-watches" />}></Route>
            <Route exact path="/furniture" element={<ProductList category=" furniture" />}></Route>
            <Route exact path="/laptops" element={<ProductList category="laptops" />}></Route>
            <Route exact path="/laptops" element={<ProductList category="laptops" />}></Route>
            <Route exact path="/smartphone" element={<ProductList category="smartphones" />}></Route>
         </Routes>
      </div>
   );
}
export default Category;