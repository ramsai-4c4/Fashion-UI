import React, { Component } from 'react';
import "./Cartdrop.css";
import Additem from "./Additem";
import { Cardtoggle } from './Cardcontext';
class Cartdrop extends Component{
    render(){
        return <div className='cart-drop-container'>
            <Cardtoggle.Consumer>
                {(value)=>{
                    const cartitems=value.value3;
                    return <div className='cart-items'>
                        
                        {cartitems.map((x)=>{
                            return <Additem card={x}/>
                        })}
                    </div>
                }}

            </Cardtoggle.Consumer>
            <button>GO TO CHECKOUT</button>

        </div>
    }
}
export default Cartdrop;