import React, { Component } from 'react';
import "./Homepage.css";
class Homepage extends Component{
    render(){
        return <div className='Homepage'
        style={{backgroundImage:`url(${this.props.imageUrl})`,
        color:"white",
        backgroundPosition:"center",
        backgroundSize:"cover",
        }}>
            <div className='body-container'>
                <h2>{this.props.name}</h2>
                <p>Shop now</p>
            </div>
        </div>
    }
}
export default Homepage;