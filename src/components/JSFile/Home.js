import React from "react";
// import bimage from '../images/background-home.jpg';
import brandimage from '../images/brand-image.png';
import '../CSSFile/home.css';
import image from '../images/boots/caliber.jpg';

function Home() {
    return(
        <div className="home">
            <div className="discount">
                <p>Get 20% discount on every <span>FRIDAY SALE</span></p>
            </div>
            <div className="banner"></div>
            <div className="images-wrap">
                <h2>Check Out Our New Items</h2>
                <div className="new-items">
                    {/* <h2>Check out our new items</h2> */}
                    <div className="items">
                        <img src={image} className="item" alt="image1" />
                        <img src={image} className="item" alt="image2"/>
                        <img src={image} className="item" alt="image3"/>
                    </div>
                </div>
            </div>

            <div className="shop-description">
                <div className="description">
                    <h2>Quality never goes out of style</h2>
                    <p>The slogan is Worth for Starting a Business and expecially Shoe
                     Store. Every Shoe Store Owner should aware of the importance
                     of a slogan for brand Image.</p>
                     <button>See more</button>
                </div>
                <div className="brand-image">
                    <img src={brandimage} alt="brand-image"/>
                </div>
            </div>

            <div className="news-letter">
                <h2>Newsletter</h2>
                <p>Sign up for a regular digital update.</p>
                <input placeholder="Enter Your Email Address" type="text" /><button>Suscribe</button>
            </div>
        </div>
        
    ) ;
}

export default Home;