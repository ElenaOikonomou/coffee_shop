import React from 'react';

export default function Navbar(){
    return (
        <nav className="navbar">
        <div className="menu--div">
                <a href="">Menu</a>
            </div> 
            <div className="name--div">
                <h1 className="h1--nav"> CoffeeOTD</h1> 
                <h3 className="h3--nav">Your daily innocent pleasure</h3>
            </div>            
        </nav>
    );
}