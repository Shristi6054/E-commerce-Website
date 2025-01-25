import React from "react";
import bimage from '../images/background-home.jpg';
import '../CSSFile/home.css'

function Home() {
    return(
        <div className="home">
            <div className="discount">
                <p>Get 20% discount on every <span>FRIDAY SALE</span></p>
            </div>
            <div className="banner">
                <img src={bimage} className="background-image" alt="background-image"/>
            </div>
        </div>
    ) ;
}

export default Home;