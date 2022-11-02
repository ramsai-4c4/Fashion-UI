import React, { Component } from 'react';
import "./Additem.css"
import { Cardtoggle } from './Cardcontext';
class Additem extends Component{
    render(){
        return <div className='cartitem'>
            <div className='left'>
                <img className=' Additem-carticons' src={this.props.card.imageUrl} alt=""/>
            </div>
            <div className='right'>
                <span className='name'>{this.props.card.name}</span>
                <span className='qprice'>
                    {this.props.card.quantity}X ${this.props.card.price}
                </span>
            </div>
            <Cardtoggle.Consumer>
                {(value)=>{
                    const remove=value.value5;
                    const handclick=()=>{
                        remove(this.props.card)
                    }
                    console.log(remove)
                    console.log("dcv")
                    return <div className='remove'>
                            <span onClick={handclick}>X</span>
                           </div>
                }}
            </Cardtoggle.Consumer>
        </div>
    }
}



export default Additem;