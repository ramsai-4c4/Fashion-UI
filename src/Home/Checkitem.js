import React, { Component } from 'react';
import "./Checkitem.css";
import { Cardtoggle } from './Cardcontext';
class Checkitem extends Component{
    render(){
        return <div className='Checkitem'>
            <div className='image-container'>
                <img src={this.props.card.imageUrl} alt=""/>
            </div>
            
            <span className='checkitem-name'>{this.props.card.name}</span>
            <Cardtoggle.Consumer>
                {(value)=>{
                    const add=value.value4;
                    const remove=value.value5;
                    const clear=value.value6;
                    return <>
                        <span className='quantity'>
                            <div onClick={()=>remove(this.props.card)} className='arrow'>&#10094;</div>
                            <span className='quantity-num'>{this.props.card.quantity}</span>
                            <div onClick={()=>add(this.props.card)} className='arrow'>&#10095;</div>
                            </span>
                        <span className='price'>{this.props.card.price}</span>
                        <div onClick={()=>clear(this.props.card)} className='remove-item'>
                            &#10005;
                        </div>
                    </>
                }}
            </Cardtoggle.Consumer>
        </div>
    }
}
export default Checkitem;