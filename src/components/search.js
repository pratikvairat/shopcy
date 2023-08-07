import React from "react";
import { useState } from "react";
export function SearchItem(){
    const [searchVal,setSearchVal]=useState('');
    const url="http://127.0.0.1:9000/getItems";
    fetch(url,{
        method:"GET",
        headers:{
            'Content-Type': 'application/json'
        },
    }).then(response=>{
        response.json()
    }).then(data=>{
        
    })
    return(
        <React.Fragment>
            <section>
                <div className="container m-5 ">
                    <p className="h3 text-center">Enter Product name to search</p>
                    <div className="input-group p-3">
                    <input scope='text' className="form-control" placeholder="Search a product"/>
                   <button className="btn btn-primary input-group-text">Search</button>
                   </div>
                </div>
            </section>
        </React.Fragment>
    );
}