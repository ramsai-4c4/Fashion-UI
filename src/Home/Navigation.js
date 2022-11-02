import React, { Component } from 'react';
import Cartdrop from "./Cartdrop";
import {Outlet,Link} from "react-router-dom";
import { Cardtoggle } from './Cardcontext';
import im2 from "./../Assets/crown.svg"
import im3 from "./../Assets/shopping-bag.svg";
import './Navigation.css';
class Navigation extends Component{
    render(){
        return <>
            <div className='Navigation'>
                <div className='left'>
                    <div className='left-title'>
                    <Link className="logo" to="/">
                        <img src={im2} alt=""/>
                       
                    </Link>
                    <span className='app-name'>!! BEVY !!</span>
                    </div>
                    <input className='search' type="text" placeholder='Search by products and brands...'/>
                </div>
                <div className='Navigation-right'>
                    <Link className='shop' to="/Shop">SHOP</Link>
                    <Link className='shop' to="/signin">SIGN IN</Link>
                    <Link className='shop' to="/checkout">CHECK OUT</Link>
                    <Cardtoggle.Consumer>
                        {(value)=>{
                            const isstate=value.value1;
                            const toggle=value.value2;
                            const quant=value.value3
                            const quantity=quant.reduce((pre,curr)=>pre+curr.quantity,0)
                            //const arra=value.value3;
                            //console.log(arra);
                            //console.log(toggle)
                            return <div className='par' >
                            <img onClick={toggle} className='cart'  src={im3} alt=""/>
                            <span className='child'>{quantity}</span>
                            {isstate && <Cartdrop/>}
                        </div>
                        }}
                    </Cardtoggle.Consumer>
                </div>

            </div>
            <Outlet/>
        </>
    }
}
export default Navigation