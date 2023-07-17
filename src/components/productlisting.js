import React, { useEffect, useState } from "react";
import { FetchById } from "../function";
import { useParams } from "react-router-dom";
const ProductDetails = () => {
    const id=useParams();
    console.log("id:"+id.id);
    const [product, setProduct] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const [curentImg,setCurrentImg]=useState("");
    const [title,setTitle]=useState("");
    const [description,setDescription]=useState("");
    const [price,setPrice]=useState("");
    const [discount,setDiscount]=useState("");
    const [brand,setBrand]=useState("");
    const [rating,setRating]=useState("");
    const [isDataSet,setIsDataSet]=useState(false);
    useEffect(() => {
      FetchById(id.id).then((data) => {
        if (data && data.result && Array.isArray(data.result)) {
          setProduct(data.result);
        } else {
          setProduct([]);
        }
        setIsLoading(false);
      });
    },[]);
    const ImgChange=(e)=>{
        setCurrentImg(e.target.src);
    }
    const setData=(title,description,price,rating,)=>{
      if(isDataSet===false){
        setDescription(description);
        setTitle(title);
        setPrice(price);
        setRating(rating);
        setIsDataSet(true);
      }
      
    }
    return (
      <div className="mx-5 card text-center border border-primary">
        {isLoading ? (
          <p>Loading...</p>
        ) : (
          <>
            <div className="mx-5 row p-2">
              <div className="mx-2 text-center bg-secondary border rounded border-primary">
                <img height="400px" width="400px" src={curentImg} onChange={(e)=>{setCurrentImg(e.target.src);}} alt="Product" />
              </div>
              {product.length > 0 ? (
                product.map((pimg, index) => (
                  <div className="col p-2" key={index}>
                    {setData(pimg.title,pimg.description,pimg.price,pimg.rating)}
                    <div className="m-2 border border-primary rounded p-2">
                      <img height="80px" width="80px" src={pimg.url} onClick={ImgChange} onLoad={ImgChange} alt="Loading..." />
                    </div>
                  </div>
                ))
              ) : (
                <p>No product images found.</p>
              )}
            </div>
            <p id="title">
              <b>{title}</b>
            </p>
            <p id="description">
              {description}
            </p>
            <p className="text-primary" id="discount">
              <b>Discount of flat 5%</b>
            </p>
            <h2 id="price">Rs. {50*price}</h2>
            <h5>Brand Name: {brand}</h5>
            <div className="row">
              <div className="col p-5">
                <button className="btn mb-2 btn-primary">Order Now</button>
              </div>
              <div className="col p-5">
                <button className="btn mb-2 btn-primary">Add to Card</button>
              </div>
            </div>
          </>
        )}
      </div>
    );
}
export default ProductDetails;