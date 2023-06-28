
import React, { useState } from "react";
function Login() {
    const [email,setEmail]=useState("");
    const [passd,setPassd]=useState("");
    const LoginUser=(e)=>{
        e.preventDefault();
        fetch("http://127.0.0.1:9000/login",{
            method:"POST",
            headers:{
                'Content-type':'application/json',
            },
            body:JSON.stringify({email:email,passd:passd,}),
        })
        .then((response)=>{
            return response.text();
        })
        .then((data)=>{
            console.log(data);
            if(data==="serverfault"){
                alert("Internal Error Occured");
            }else if(data==="NoUser"){
                alert("Cannot Find user details");
            }else if(data==="wrongcredintial"){
                alert("Wrong email or password entered");
            }else if(data==="success"){
                alert("login successful");
                localStorage.setItem("email",email);
            }
        })
    }
    return (
        <>
            <main class="form-signin p-5 bg-secondary text-white w-100 m-auto">
                <form className="p-5">
                    <h1>Shopping Kart</h1>
                    <h1 class="h3 mb-3 fw-normal">Please sign in</h1>

                    <div class="text-dark form-floating">
                        <input type="email" class="form-control" id="floatingInput" placeholder="name@example.com" value={email} onChange={(e)=>{setEmail(e.target.value)}} />
                        <label for="floatingInput">Email address</label>
                    </div>
                    <div class="text-dark form-floating">
                        <input type="password" class="form-control" id="floatingPassword" placeholder="Password" value={passd} onChange={(e)=>{setPassd(e.target.value)}} />
                        <label for="floatingPassword">Password</label>
                    </div>

                    <div class="form-check text-start my-3">
                        <input class="form-check-input" type="checkbox" value="remember-me" id="flexCheckDefault" />
                        <label class="form-check-label" for="flexCheckDefault">
                            Remember me
                        </label>
                    </div>
                    <button class="btn btn-primary w-100 py-2" type="submit" onClick={LoginUser}>Sign in</button>
                    <p class="mt-5 mb-3 text-body-secondary">© 2017–2023</p>
                </form>
            </main>
        </>
    );
}
function Register(){
    const [name, setName] = useState(" ");
    const [email,setEmail]=useState(" ");
    const [surname,setSurname]=useState(" ");
    const [passd,setPassd]=useState("");
    const [addressLine1,setAddressLine1]=useState("");
    const [addressLine2,setAddressLine2]=useState("");
    const [pincode,setPincode]=useState("");
    const [liveState,setLiveState]=useState("");
    const [city,setCity]=useState("");
    const RegisterUser = (e) => {
        e.preventDefault();
        fetch("http://127.0.0.1:9000/registerUser",{
            method:'POST',
            body:JSON.stringify({name:name, surname:surname, email:email, passd:passd, addressLine1:addressLine1, addressLine2:addressLine2, city:city, state:liveState, pincode:pincode}),
            headers:{
                'Content-type':'application/json',
            },
        })
        .then((response)=>{
            return response.text()
        })
        .then((data)=>{
            console.log(data);
            if(data==="success"){
                localStorage.setItem("email",email);
                alert("Registration successful. Please go to login");
            }
        })
        .catch((err)=>{
            console.log(err);
            alert("Cannot register at this time")
        });
     }
    return (
        <div className="p-5 rounded">
            <form class="row rounded text-white text-bold bg-secondary p-5 g-3">
                <h2>Sign Up to Shopping Kart</h2>
                <div class="col-md-6">
                    <label for="name" class="form-label">Name</label>
                    <input type="text" class="form-control" id="name" value={name} onChange={(e)=>{setName(e.target.value)}} />
                </div>
                <div class="col-md-6">
                    <label for="surname" class="form-label">Surname</label>
                    <input type="text" class="form-control" id="surname" value={surname} onChange={(e)=>{setSurname(e.target.value)}}/>
                </div>
                <div class="col-md-6">
                    <label for="email" class="form-label">Email</label>
                    <input type="email" class="form-control" id="email" value={email} onChange={(e)=>{setEmail(e.target.value)}}/>
                </div>
                <div class="col-md-6">
                    <label for="password" class="form-label">Password</label>
                    <input type="password" class="form-control" id="password" value={passd} onChange={(e)=>{setPassd(e.target.value)}}/>
                </div>
                <div class="col-12">
                    <label for="addressLine1" class="form-label">Address 1</label>
                    <input type="text" class="form-control" id="addressLine1" placeholder="Address Line 1" value={addressLine1} onChange={(e)=>{setAddressLine1(e.target.value)}}/>
                </div>
                <div class="col-12">
                    <label for="addressLine2" class="form-label">Address 2</label>
                    <input type="text" class="form-control" id="addressLine2" placeholder="Address Line 2" value={addressLine2} onChange={(e)=>{setAddressLine2(e.target.value)}}/>
                </div>
                <div class="col-md-6">
                    <label for="City" class="form-label">City</label>
                    <input type="text" class="form-control" id="City" value={city} onChange={(e)=>{setCity(e.target.value)}}/>
                </div>
                <div class="col-md-4">
                    <label for="state" class="form-label">State</label>
                    <select id="state" class="form-select" value={liveState} onChange={(e)=>{setLiveState(e.target.value)}}>
                        <option selected>Choose...</option>
                        <option>...</option>
                    </select>
                </div>
                <div class="col-md-2">
                    <label for="pincode" class="form-label">Pincode</label>
                    <input type="text" class="form-control" id="pincode" value={pincode} onChange={(e)=>{setPincode(e.target.value)}}/>
                </div>
                <div class="col-12">
                    <div class="form-check">
                        <input class="form-check-input" type="checkbox" id="gridCheck" />
                        <label class="form-check-label" for="gridCheck">
                            By Click on sign up you will creating an account with Shopping Kart
                        </label>
                    </div>
                </div>
                <div class="col-12">
                    <button type="submit" class="btn btn-primary" onClick={RegisterUser}>Sign in</button>
                </div>
            </form>
        </div>
    );
}
export { Register, Login };