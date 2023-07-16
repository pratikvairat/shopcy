
import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { useParams } from "react-router-dom";
import Category from "./categories";
function ProductList(props) {
    const { category } = props;
    const [product, setProduct] = useState([]);
    var api = "http://localhost:9000/product/category?category=" + category;
    console.log(api);
    useEffect(() => {
        fetch(api, {
            method: "GET",
            headers: { 'Content-Type': 'application/json' },
        }).then(response => {
            return response.json();
        }).then(data => {
            console.log("data :" + data.result);
            setProduct(data.result);
        })
    }, []);
    console.log("peoduct :" + product);
    return (
        <>
        <Category></Category>
        <div>
            {product.map(prod => (
                <div key={prod.id}>
                    <div class="card mb-3">
                        <div class="row g-0">
                            <div class="col-md-4">
                                <img src={prod.thumbnail} height="100%" width="100%" class="img-fluid rounded-start" alt="..." />
                            </div>
                            <div class="col-md-8">
                                <div class="card-body">
                                    <h5 class="card-title">{prod.title}</h5>
                                    <p class="card-text">{prod.description}</p>
                                    <p class="card-text"><small class="text-body-secondary">{prod.brand}</small></p>
                                    <p>Rating: ⭐{prod.rating}</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            ))}
        </div>
        </>
    );
}
export default ProductList;