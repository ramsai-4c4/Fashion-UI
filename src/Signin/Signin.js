import React, { Component } from 'react';
import "./Signin.css"
class Signin extends Component{
    render(){
        return <div className='Signin'>
            <div className='firstform'>
                <h2>Already Have An Account!!!</h2>
                <p>Sign in with your email and password</p>
                <div className='form1'>
                    <div class="input">
                        <input className='inpone' type="text"/>
                        <label className='one'>Email</label>
                    </div>
                    <div class="input">
                        <input className='inpone' type="password"/>
                        <label className='one'>Password</label>
                    </div>
                    <div className='buttons'>
                        <button className='login'>SIGN IN</button>
                        <button className='google'>SIGN IN WITH GOOGLE</button>
                    </div>
                </div>
            </div>
            <div className='secondform'>
                <h2>Don't Have An Account?</h2>
                <p>Sign up with your email and password</p>
                <div className='form1'>
                    <div class="input">
                        <input className='inpone' type="text"/>
                        <label className='one'>Display Name</label>
                    </div>
                    <div class="input">
                        <input className='inpone' type="text"/>
                        <label className='one'>Email</label>
                    </div>
                    <div class="input">
                        <input className='inpone' type="text"/>
                        <label className='one'>Password</label>
                    </div>
                    <div class="input">
                        <input className='inpone' type="password"/>
                        <label className='one'>Confirm Password</label>
                    </div>
                    <div className='buttons'>
                        <button className='signup'>SIGN UP</button>
                    </div>
                </div>
            </div>
        </div>
    }
}
export default Signin;