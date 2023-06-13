import React from "react";
import ImgDemo from "../data/shoes.jpg"
const Cards = () => {
    return (
        <> <div class="p-4">
            <div class="row row-cols-2 row-cols-md-4 g-4">
                <div class="col">
                    <div class="card">
                        <img src={ImgDemo} class="card-img-top" alt="..." />
                        <div class="card-body">
                            <h5 class="card-title">Card title</h5>
                            <p class="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                        </div>
                        <div class="row p-2">
                            <div class=" col">
                                <button class="btn  btn-primary">Add to Cart</button>
                            </div>
                            <div class=" col">
                                <button class="btn  btn-primary">Order Now</button>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="col">
                    <div class="card">
                        <img src={ImgDemo} class="card-img-top" alt="..." />
                        <div class="card-body">
                            <h5 class="card-title">Card title</h5>
                            <p class="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                        </div>
                        <div class="row p-2">
                            <div class=" col">
                                <button class="btn  btn-primary">Add to Cart</button>
                            </div>
                            <div class=" col">
                                <button class="btn  btn-primary">Order Now</button>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="col">
                    <div class="card">
                        <img src={ImgDemo} class="card-img-top" alt="..." />
                        <div class="card-body">
                            <h5 class="card-title">Card title</h5>
                            <p class="card-text">This is a longer card with supporting text below as a natural lead-in to additional content.This content is a little bit longer</p>

                        </div>
                        <div class="row p-2">
                            <div class=" col">
                                <button class="btn  btn-primary">Add to Cart</button>
                            </div>
                            <div class=" col">
                                <button class="btn  btn-primary">Order Now</button>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="col">
                    <div class="card">
                        <img src={ImgDemo} class="card-img-top" alt="..." />
                        <div class="card-body">
                            <h5 class="card-title">Card title</h5>
                            <p class="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                        </div>
                        <div class="row p-2">
                            <div class=" col">
                                <button class="btn  btn-primary">Add to Cart</button>
                            </div>
                            <div class=" col">
                                <button class="btn  btn-primary">Order Now</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        </>
    );
}
export default Cards;
