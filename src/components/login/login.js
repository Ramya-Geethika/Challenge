import '../welcome/welcome.css';
import './login.css';
import React, {Component,useEffect,useState} from 'react';
import {Redirect} from "react-router-dom";
export default function Login() {

    useEffect(() => {
        const script = document.createElement('script');
        script.src = "global.js";
        script.async = true;
        document.body.appendChild(script);
      return () => {
          document.body.removeChild(script);
        }
      }, []);


    const [email,setEmail]=useState('');
    const [pass,setPass]=useState('');

    const [buyer_state,setBuyerState]=useState(false);
    const [seller_state,setSellerState]=useState(false);

      const moveToUser=()=>{

        //check the user type(after done with the authentication process get the user type and some details of user from the db using API and based on the usertype will redirect to corresponding page otherwise simply throw an error)
        if(email==='test_buyer@gmail.com' && pass==="Pass123@")
        {
            //move to buyer page
            //alert('hi buyer');
            setBuyerState(true);
        }
        else if(email==='test_seller@gmail.com' && pass==="Pass123@")
        {
            //move to seller page
            //alert('hi seller');
            setSellerState(true);

        }else{
            alert('email or password wrong');
        }


      }


    return (
        <div id="mydiv">
            <div className="login-top">
            <div className="form-box">

                 { buyer_state? <Redirect to="/buyer"/>:null}
                 { seller_state? <Redirect to="/seller"/>:null}
                        
                    <div className="head">
                        Welcome Back
                    </div>        
                    <div id="login-form">
                        <div className="form-group">
                        <label className="label-control">
                            <span className="label-text">Email</span>
                        </label>
                        <input type="email" name="email" className="form-control" onChange={(e)=>{setEmail(e.target.value)}}/>
                        </div>
                        <div className="form-group">
                        <label className="label-control">
                            <span className="label-text">Password</span>
                        </label> 
                        <input type="password" name="password" className="form-control" onChange={(e)=>{setPass(e.target.value)}}/>
                        </div>
                        <input type="button" onClick={moveToUser} value="Login" className="btn" />
                        <p className="text-p">Don't have an account? <a href="#">Sign up</a> </p>
                        <br/>
                        <p className="text-ps">for buyer- Email: test_buyer@gmail.com and password: Pass123@</p>
                        <p className="text-ps">for seller- Email: test_seller@gmail.com and password: Pass123@</p>
                    </div>
            </div>
            </div>
        </div>
    )
}