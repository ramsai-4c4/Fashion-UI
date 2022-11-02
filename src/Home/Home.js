import React, { Component } from 'react';
import Homepage from  "./Homepage";
import "./Home.css";
class Home extends Component{
    render(){
        return <div className='Home-container'>
            <Homepage name="Hats" imageUrl= 'https://i.ibb.co/cvpntL1/hats.png'/>
            <Homepage name="Jackets" imageUrl= 'https://i.ibb.co/px2tCc3/jackets.png'/>
            <Homepage name="Sneakers"  imageUrl= 'https://i.ibb.co/0jqHpnp/sneakers.png'/>
            <Homepage name="Womens"  imageUrl='https://i.ibb.co/GCCdy8t/womens.png'/>
            <Homepage name="Mens" imageUrl='https://i.ibb.co/R70vBrQ/men.png'/>
        </div>
    }
}
export default Home;