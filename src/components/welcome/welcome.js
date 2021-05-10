import './welcome.css';
import React, {Component,useState} from 'react';
import {Route,BrowserRouter as Router,Switch,Link,NavLink} from "react-router-dom";
import {Redirect} from "react-router-dom";
export default function Welcome() {

    const [go_state,setGoState]=useState(false);

    const goToLoginPage=()=>{
        setGoState(true);
    }

    return (
        <div id="mydiv">
             { go_state? <Redirect to="/login"/>:null}
            <h1 className="no-margin title">maket</h1>
            <span className="subtitle">Home building, simplified</span>
            <br/>
            <button className="btn" onClick={goToLoginPage}>Get Started</button>
        </div>
    )
}