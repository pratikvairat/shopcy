import React from "react";
import "./css/categories.css"
const Category = () => {
   return (
      <>
         <h2 class="text-center">Categories to Shop</h2>
         <div class="row text-center">
            <div className="col text-center catBtn ">
               <p class="fw-bold button">Furniture</p>
            </div>
            <div className=" col text-center catBtn">
               <p class="fw-bold button">Electronics</p>
            </div>
            <div className=" col text-center catBtn">
               <p class="fw-bold button">Fashion</p>
            </div>
            <div className=" col text-center catBtn">
               <p class="fw-bold button">Kids</p>
            </div>
            <div className=" col text-center catBtn">
               <p class="fw-bold  button">Bags</p>
            </div>
            <div className=" col text-center catBtn">
               <p class="fw-bold button">Beauty</p>
            </div>
            <div className=" col text-center catBtn">
               <p class="fw-bold button">Shoes </p>
            </div>

         </div>
      </>
   );
}
export default Category;