import React, { Component } from 'react';
import Product from "./Product";
import shop from "./shopdata.json";
import "./Shop.css"
import { v4 as uuidv4 } from 'uuid';
class Shop extends Component{
    render(){
        return <div className='Shop-container'>
            {shop.map((product)=>{
                return <Product key={uuidv4()} card={product}/>
            })}
        </div>
    }
}
export default Shop;
