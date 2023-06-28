import React from "react";
import "./css/categories.css"
const Category = () => {
   return (
      <>
         <h2 class="text-center">Categories to Shop</h2>
         <div class="row text-center">
            <div className="col text-center catBtn ">
               <button class="fw-bold button">Furniture</button>
            </div>
            <div className=" col text-center catBtn">
               <button class="fw-bold button">Laptop</button>
            </div>
            <div className=" col text-center catBtn">
               <button class="fw-bold button">Smartphone</button>
            </div>
            <div className=" col text-center catBtn">
               <button class="fw-bold button">Shoes</button>
            </div>
            <div className=" col text-center catBtn">
               <button class="fw-bold  button">Watches</button>
            </div>
            <div className=" col text-center catBtn">
               <button class="fw-bold button">Beauty</button>
            </div>
            <div className=" col text-center catBtn">
               <button class="fw-bold button">Bags</button>
            </div>

         </div>
      </>
   );
}
export default Category;