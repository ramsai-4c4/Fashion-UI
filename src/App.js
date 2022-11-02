import React, { Component } from 'react';
import "./App.css";
import Home from './Home/Home';
import {Routes,Route} from 'react-router-dom';
import Navigation from "./Home/Navigation";
import Signin from "./Signin/Signin";
import Shop from "./Home/Shop";
import Checkout from "./Home/Checkout";

class App extends Component{
  render(){
    return <>
      <Routes>
        <Route path="/" element={<Navigation/>}>
          <Route index element={<Home/>} />
          <Route path="/shop" element={<Shop/>}/>
          <Route path="/signin" element={<Signin/>}/>
          <Route path="/checkout" element={<Checkout/>}/>
        </Route>
      </Routes>
    </>
  }
}
export default App;