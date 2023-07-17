import React, { Component } from "react";
import "./css/navbar.css";
import { BrowserRouter, Routes, Link, Route } from 'react-router-dom';
import Account from './account'
import Home from "./home";
import ProductDetails from "./productlisting";
import ProductList from "./allProduct";

const NavBar = () => {
    return (
        <>
            <BrowserRouter>
                <div class="bg-dark bgcol">
                    <nav class="navbar bg-dark navbar-expand-lg border-bottom border-bottom-dark" data-bs-theme="dark">
                        <div class="container-fluid">
                            <a class="navbar-brand text-white" href="#">Shopping Kart</a>
                            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                                <span class="navbar-toggler-icon"></span>
                            </button>
                            <div class="collapse navbar-collapse" id="navbarSupportedContent">

                                <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                                    <li class="nav-item">
                                        <Link to="/" class="nav-link active" aria-current="page" >Home</Link>
                                    </li>
                                    <li class="nav-item">
                                        <Link to='/account' class="nav-link " href="#">Account</Link>
                                    </li>
                                    <li class="nav-item">
                                        <Link to="/detail" class="nav-link" href="#">Cart</Link>
                                    </li>
                                    <li class="nav-item">
                                        <a class="nav-link" href="#">Favorite</a>
                                    </li>
                                </ul>
                                <form class="d-flex" role="search">
                                    <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
                                    <button class="btn btn-outline-success" type="submit">Search</button>
                                </form>
                            </div>
                        </div>
                    </nav>
                </div>
                <Routes>
                    <Route path="/" index element={<Home />}></Route>
                    <Route path="/account" element={<Account />}></Route>
                    <Route path="/detail/:id" element={<ProductDetails />}></Route>
                    <Route exact path="/shoes" element={<ProductList category="mens-shoes" />}></Route>
                    <Route exact path="/watches" element={<ProductList category="mens-watches" />}></Route>
                    <Route exact path="/furniture" element={<ProductList category="furniture" />}></Route>
                    <Route exact path="/bags" element={<ProductList category="womens-bags" />}></Route>
                    <Route exact path="/laptops" element={<ProductList category="laptops" />}></Route>
                    <Route exact path="/jewellery" element={<ProductList category="womens-jewellery" />}></Route>
                    <Route exact path="/smartphone" element={<ProductList category="smartphones" />}></Route>
                </Routes>
            </BrowserRouter>
        </>

    );

};
export default NavBar;