import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import { ProductUtil } from '../Util/ProductsUtil';
import MenuTable from './MenuTable'
import './Menu.css'

let Menu = (props) => {
    let products = ProductUtil.getProducts;
    let bases = ProductUtil.getBase;
    let toppings = ProductUtil.getToppings;
    console.log(products)
    return (
        <div>
        <h2>           
        <div id="mainMenu">
            <MenuTable data = {products} />
        </div>
            <div id="customizeMenu">
            
                <div id="baseMenu">
                     <MenuTable data = {bases} />
                </div>
                <div id="toppingsMenu">
                     <MenuTable data = {toppings} />
                </div>
            </div>
        </h2>
     <Link to={'/'}> Home </Link>
     </div>
    )

}

export default Menu;