import React from "react";
import ImgHead from "../data/boat_headphone.png"
import "./css/homecont.css";

const HomeCont=()=>{
    return(
        <>
        <div class="row bg-color">
        <div class="col text-center">
            <img src={ImgHead} class="imgHead"></img>
        </div>
        <div class="col text-center">
            <p class="discount">Weekend Special Offer is back....</p>
            <h2>20% Discount On Boat Headphone</h2>
            <p>Use Coupon: <b>SPECIAL20</b></p>
        </div>
        </div>
        </>
    );
}
export default HomeCont;