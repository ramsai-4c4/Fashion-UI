import React, { Component } from 'react';
import "./Product.css"
import { Cardtoggle } from './Cardcontext';
class Product extends Component{
    render(){
        return <div className='product-card'>

            <div className='main'>
                <img src={this.props.card.imageUrl} className="item" alt=""/>
                <Cardtoggle.Consumer>
                    {(value)=>{
                        const addnew=value.value4;
                        const arr=value.value3;
                        console.log(arr);
                        return <button onClick={()=>addnew(this.props.card)} className='add'>
                            ADD TO CART</button>
                    }}
                </Cardtoggle.Consumer>
            </div>
            <div className='footer'>
                <span className='name'>{this.props.card.name}</span>
                <span className='price'>{this.props.card.price}$</span>
            </div>
        </div>
    }
}
export default Product;