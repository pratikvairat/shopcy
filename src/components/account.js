import React, { useState } from 'react';
import AccImg from '../data/acpng.png'
import './css/account.css';
import {Login,Register} from './register';

function isLogin (){
    const email=localStorage.getItem('email');
    if(email===null){
        return true;
    }
    return false;
}
function AccountDetails() {
    const email=localStorage.getItem('email');
    var url='http://localhost:9000/accountDetails?email='+email;
    console.log(url);
    const [name,setName]=useState('');
    const [surname,setSurname]=useState('');
    const [city,setCity]=useState('');
    const [state,setState]=useState('');
    const [addressLine1,setAddressLine1]=useState('');
    const [addressLine2,setAddressLine2]=useState('');
    const [pincode,setPincode]=useState('');
    fetch(url, {
        method: 'GET',
        headers: { 'Content-Type': 'application/json' }
      }).then(response=>response.json()).then(data => {
        console.log(data);
        const accountDetails=data[0];
        setName(accountDetails.name);
        setSurname(accountDetails.surname);
        setAddressLine1(accountDetails.addressLine1);
        setAddressLine2(accountDetails.addressLine2);
        setCity(accountDetails.city);
        setState(accountDetails.state);
        setPincode(accountDetails.pincode);
        console.log("name :"+name);
      })
    return (
        <div class="container emp-profile">
            
            <form method="post">
                <div class="row">
                    <div class="col-md-4">
                        <div class="profile-img">
                            <img src={AccImg} alt="" />  
                        </div>
                    </div>
                    <div class="col-md-6">
                        <div class="profile-head">
                            <h5>
                               {name+" "+surname}
                            </h5>
                            <ul class="nav nav-tabs" id="myTab" role="tablist">
                                <li class="nav-item">
                                    <a class="nav-link active" id="home-tab" data-toggle="tab" href="#home" role="tab" aria-controls="home" aria-selected="true">About</a>
                                </li>
                            </ul>
                        </div>
                    </div>
                    
                </div>
                <div class="row">
                    <div class="col-md-4">
                        <div class="profile-work">
                            
                            <p>Address</p>
                            <a href="">{addressLine1}</a><br />
                            <a href="">{addressLine2}</a><br />
                            <a href="">{city}</a><br />
                            <a href="">{state}</a><br />
                            <a href="">{pincode}</a><br />
                        </div>
                    </div>
                    <div class="col-md-8">
                        <div class="tab-content profile-tab" id="myTabContent">
                            <div class="tab-pane fade show active" id="home" role="tabpanel" aria-labelledby="home-tab">
                               
                                <div class="row">
                                    <div class="col-md-6">
                                        <label>Name</label>
                                    </div>
                                    <div class="col-md-6">
                                        <p>{name}</p>
                                    </div>
                                </div>
                                <div class="row">
                                    <div class="col-md-6">
                                        <label>Surname</label>
                                    </div>
                                    <div class="col-md-6">
                                        <p>{surname}</p>
                                    </div>
                                </div>
                                <div class="row">
                                    <div class="col-md-6">
                                        <label>Email</label>
                                    </div>
                                    <div class="col-md-6">
                                        <p>{email}</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </form>
        </div>
    );
}
function Account() {
    if(isLogin()){
        return (Login());
    }else{
        return(AccountDetails());
    }
}
export default Account;