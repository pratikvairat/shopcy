import React, { useState, useEffect } from "react";
import { FetchByCategory } from "../function";

const LapCards=(props)=>{
  const { category } = props;
  const [products, setProducts] = useState([]);

  useEffect(() => {
    FetchByCategory(category).then(items => {
      setProducts(items);
    });
  }, []);
 const lproducts=products.slice(0,4);

  return (
    <div className="p-5">
      <div className="row row-cols-2 row-cols-md-4 g-4">
        {lproducts.map(product => (
          <div className="col" key={product.id}>
            <div className="h-100 card">
              <img
                src={product.thumbnail}
                className="card-img-top"
                alt="..."
                height="250px"
                width="400px"
              />
              <div className="card-body">
                <h6 className="card-title">{product.title}</h6>
                <p className="card-text">
                  {product.description}
                </p>
                <h6>Price: Rs. {product.price*70}</h6>
              </div>
              <div className="row p-2">
                <div className="col">
                  <button className="btn btn-primary">Add to Cart</button>
                </div>
                <div className="col">
                  <button className="btn btn-primary">Order Now</button>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

  
export  {LapCards};
