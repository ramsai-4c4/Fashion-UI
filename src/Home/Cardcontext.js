import React, { Component,createContext} from 'react';
const Cardtoggle=createContext();
function itemstoadd(cartitems,product){
    const existing=cartitems.find((item)=>item.id===product.id);
    if(existing){
        return cartitems.map((item)=>{
            if(item.id===product.id){
                return { ...item,quantity:item.quantity+1 }
            }
            else{
                return item;
            }
        })
    }
    return [...cartitems,{ ...product,quantity:1 }];
}
function itemtoremove(cartitems,product){
    const existing=cartitems.find((item)=>item.id===product.id);
    if(existing.quantity===1){
        return cartitems.filter((item)=>item.id!==product.id)
    }
    else{
        return cartitems.map((x)=>{
            if(x.id===product.id){
                return { ...x,quantity:x.quantity-1}
            }
            else{
                return x;
            }
        })
    }
    
}
function itemtoclear(cartitems,product){
    return cartitems.filter((item)=>item.id!==product.id)
}
class Cardcontext extends Component{
    constructor(props){
        super(props);
        this.state={
            cartopen:false,
            cartitems:[]
        }
        this.handclick=this.handclick.bind(this);
        this.additem=this.additem.bind(this);
        this.removeitem=this.removeitem.bind(this);
        this.clearitem=this.clearitem.bind(this);
    }
    handclick(){
        this.setState(prev=>({
            cartopen:!prev.cartopen
        }));
    }
    additem(product){
        //console.log("Hurrah")
        const newitems=itemstoadd(this.state.cartitems,product)
        this.setState({cartitems:newitems});
    }
    removeitem(product){
        const newitems1=itemtoremove(this.state.cartitems,product)
        this.setState({cartitems:newitems1})
    }
    clearitem(product){
        const newitems2=itemtoclear(this.state.cartitems,product)
        this.setState({cartitems:newitems2})
    }

    render(){
        const value1=this.state.cartopen;
        const value2=this.handclick;
        const value3=this.state.cartitems;
        const value4=this.additem;
        const value5=this.removeitem;
        const value6=this.clearitem;
        const values={value1,value2,value3,value4,value5,value6}
        return <Cardtoggle.Provider value={values}>
                {this.props.children}
        </Cardtoggle.Provider>
    }
}
export default Cardcontext;
export {Cardtoggle};
