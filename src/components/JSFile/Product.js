import React, {useState} from "react";
import '../CSSFile/product.css';
import menuItem from './productdetails';

function Product() {
    const[items] = useState(menuItem);
    return (
        <div className="product-page">
            <h1>Products</h1>
            <div className="product-wrap">
                <div className="sidebar">
                    <div className="menu-bar">
                        <h2>Category of Shoes</h2>
                        <button className="btn-boots">Boots</button>
                        <button className="btn-highheels">High heels</button>
                        <button className="btn-lowheels">Low Heels</button>
                        <button className="btn-oxfords">Oxfords</button>
                        <button className="btn-slippers">Slippers</button>
                        <button className="btn-sneekers">Sneekers</button>
                        <button className="btn-sports">Sports</button>
                    </div>
                </div>
                <div className="products">
                    <div className="row">
                        {
                            items.map((elem) => {
                                const{id, name, image, description, price} = elem;
                                return(
                                    <div className="product-overalldetails">
                                        <div className="product-image">
                                        <img src={image} alt={name} className="p-image"/>
                                        </div>
                                        <div className="product-details">
                                            <div className="product-description">
                                                <h1>{name}</h1>
                                                <p>{description}</p>
                                            </div>
                                            <div className="product-price">
                                                <h2>Price : {price}</h2>
                                                <a href="#">
                                                    <button className="btn btn-primary">see more</button>
                                                </a>
                                            </div>
                                        </div>  
                                    </div>
                                );
                            })
                        }                            
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Product;