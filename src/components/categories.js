import React from "react";
import "./css/categories.css"
const Category = () => {
   
   return (
      <div>
         <h2 class="text-center">Categories to Shop</h2>
         <div class="row text-center">
            <div className="col text-center catBtn ">
               <button class="fw-bold button"><a href="/furniture" className="text-decoration-none">Furniture</a></button>
            </div>
            <div className=" col text-center catBtn">
                <button class="fw-bold button"><a href="/laptops" className="text-decoration-none">Laptop</a></button>
            </div>
            <div className=" col text-center catBtn">
              <button class="fw-bold button"><a href="/smartphone" className="text-decoration-none">Smartphone</a></button>
            </div>
            <div className=" col text-center catBtn">
               <button class="fw-bold button"><a href="/shoes" className="text-decoration-none">Shoes</a></button>
            </div>
            <div className=" col text-center catBtn">
               <button class="fw-bold  button"><a href="/watches" className="text-decoration-none">Watches</a></button>
            </div>
            <div className=" col text-center catBtn">
               <button class="fw-bold button"><a href="/jewellery" className="text-decoration-none">Jewellery</a></button>
            </div>
            <div className=" col text-center catBtn">
               <button class="fw-bold button"><a href="/bags" class="text-decoration-none" >Bags</a></button>
            </div>
         </div>
         
      </div>
   );
}
export default Category;