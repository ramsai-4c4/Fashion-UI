import React, { Component } from 'react';
import { Cardtoggle } from './Cardcontext';
import Checkitem from './Checkitem';
import "./Checkout.css";
class Checkout extends Component{
    render(){
        return <div className='Checkout'>
            <div className='Checkout-header'>
                <div className='header-block'>
                    <span>Product</span>
                </div>
                <div className='header-block'>
                    <span>Description</span>
                </div>
                <div className='header-block'>
                    <span>Quantity</span>
                </div>
                <div className='header-block'>
                    <span>Price</span>
                </div>
                <div className='header-block'>
                    <span>Remove</span>
                </div>

            </div>
            <Cardtoggle.Consumer>
                {(value)=>{
                    const cartitems=value.value3
                    console.log(cartitems)
                    return (cartitems.map((x)=>{
                        return <Checkitem card={x}/>
                    })
                    )
                    
                }}
            </Cardtoggle.Consumer>
            <Cardtoggle.Consumer>
                {(value)=>{
                    const items=value.value3;
                    const quantity=items.reduce((prev,curr)=>prev+curr.quantity*curr.price,0)
                    return  <span className='total-amount'>Total:{quantity}$</span>
                }}
            </Cardtoggle.Consumer>
           
        </div>
    }
}
export default Checkout