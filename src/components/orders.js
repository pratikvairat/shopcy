import React, { useEffect, useState } from "react";
export function PlaceOrder(props){
    const {id}=props;
    const email=localStorage.getItem('email');
    var url=`http://127.0.0.1:9000/place-order?email=${email}&id=${id}`;
    fetch(url,{
        method:"POST",
        headers:{'Content-type': 'application/json; charset=UTF-8',},
        body:JSON.stringify({
            'email':email,
            'id':id,
        }),
    }).then(response=>{
        return response.text()
    }).then(data=>{
        if(data==='success'){
            alert("Order Placed Successfully. Check Your orders on orders page in account.");
        }else{
            alert("Something went wrong");
        }
    })
}
export function OrderDetails() {
  const email = localStorage.getItem("email");
  const url = "http://localhost:9000/orderDetails?email=" + email;
  const [Orders, setOrders] = useState([]);

  useEffect(() => {
    fetch(url, {
      method: 'GET',
      headers: { 'Content-Type': 'application/json' }
    }).then(response => response.json())
      .then(data => {
        console.log(data);
        setOrders(data);
      })
      .catch(error => {
        console.error('Error fetching data:', error);
      });
  }, []);

  return (
    <>
      {Orders.map(order => (
        <div className="text-center m-2 container" key={order.orderid}>
          <div className="card mb-3 container text-center" style={{ maxWidth: '980px' }}>
            <div className="row g-0">
              {console.log(order)}
              <div className="col-md-4">
                <img src={order.thumbnail} className="img-fluid rounded-start" alt={order.title} />
              </div>
              <div className="col-md-8">
                <div className="card-body">
                  <h5 className="card-title">{order.title}</h5>
                  <p className="card-text">Rs. {50*order.price}</p>
                  <p className="card-text"><small className="text-body-secondary">Delivered on DD-MM-YYYY</small></p>
                  <button className="btn btn-danger">Cancel Order</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      ))}
    </>
  );
}
