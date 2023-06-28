import React from "react";
import Img from "../data/boat_headphone.png"
const ProductDetails = () => {
    return (
        <>
            <div class="card text-center border border-primary">
            <div className="row">
            <div className="col">
                <img height="400px" width="400px" src={Img} />
                </div>
                    <div className="row">
                        <div class=" col"><img height="80px" width="80px" src={Img} /></div>
                        <div class=" col"><img height="80px" width="80px" src={Img} /></div>
                        <div class="col"><img height="80px" width="80px" src={Img} /></div>
                        <div class="col"><img height="80px" width="80px" src={Img} /></div>
                        <div class="col"><img height="80px" width="80px" src={Img} /></div>
                    </div>
                </div>
                <p><b>Boat Headphone</b></p>
                <p>
                    Stylish Watch For Man (Luxury) Classy Men's Stainless Steel Wrist Watch - Box Packed
                </p>
                <p className="text-primary"><b>Discount of flat 5%</b></p>
                <h2>Rs. 7000</h2>
                <h5>Boat</h5>
                <div class="row">
                    <div class="col p-5">
                        <button class="btn mb-2 btn-primary">Order Now</button>
                    </div>
                    <div class="col p-5">
                        <button class="btn mb-2  btn-primary">Add to Card</button>
                    </div>
                </div>
            </div>
        </>
    );
}
export default ProductDetails;