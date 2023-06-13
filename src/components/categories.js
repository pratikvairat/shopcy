import React from "react";
import "./css/categories.css"
const Category=()=>{
    return(
        <>  
            <h2 class="text-center">Categories to Shop</h2>
            <div class="row text-center">
                <div className=" col text-center catBtn">
                   <h5 class="shoes fw-bold">Shoes & Bags</h5>
                </div>
                <div className=" col text-center catBtn">
                   <h5 class="shoes fw-bold">Shoes & Bags</h5>
                </div>
                <div className=" col text-center catBtn">
                   <h5 class="shoes fw-bold">Shoes & Bags</h5>
                </div>
                <div className=" col text-center catBtn">
                   <h5 class="shoes fw-bold">Shoes & Bags</h5>
                </div>
                <div className=" col text-center catBtn">
                   <p class="shoes text-white fw-bold">Shoes & Bags</p>
                </div>
                <div className=" col text-center catBtn">
                   <h5 class="shoes text-white fw-bold">Shoes & Bags</h5>
                </div>
                <div className=" col text-center catBtn">
                   <p class="shoes text-white fw-bold">Shoes </p>
                </div>

            </div>
        </>
    );
}
export default Category;