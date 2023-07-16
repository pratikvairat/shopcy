import React from "react";
import HomeCont from "./homecont";
import Category from "./categories";
import ProductList from "./allProduct";
import { LapCards } from "./cards";
import NavBar from "./navbar";
import { Link } from "react-router-dom";
function Home(){
    return(
        <>
        <HomeCont/>
        <Category/>
        <h2 class="p-2">Trending in Laptops</h2>
       <LapCards category="laptops"/>
        <h2 class="p-2">Trending in Smartphone</h2>
        <LapCards category="smartphones"/>
        <h2 class="p-2">Trending in Shoes</h2>
        <LapCards category="mens-shoes"/>
        <h2 class="p-2">Trending in Watches Men</h2>
        <LapCards category="mens-watches"/>
        </>
    )
}
export default Home;