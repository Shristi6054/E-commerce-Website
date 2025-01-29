import React, { useState} from 'react';
import '../CSSFile/nav&footer.css';
import {BrowserRouter as Router, Link, Route,Routes} from 'react-router-dom';
import Home from './Home';
import Product from './Product';
import Inquiry from './Inquiry';
import { FaFacebook } from 'react-icons/fa';
import { FaTwitter } from 'react-icons/fa';
import { FaYoutube } from 'react-icons/fa';
import { FaInstagram } from 'react-icons/fa';

function NavbarFooter() {
    const [menuOpen, setMenuOpen] = useState(false);
    const menu = () => {
        setMenuOpen(!menuOpen);
    }
    
    return(
        <Router>
            <div>
                <nav className='Navbar'>
                    <div className='App-logo'>
                        <h1>Logo</h1>
                    </div>
                    <div className='menu' onClick={menu}>
                        <div className='menu-icons'></div>
                        <div className='menu-icons'></div>
                        <div className='menu-icons'></div>
                    </div>
                    <ul className={menuOpen ? 'nav-links active' : 'nav-links' }>
                        <li><Link to = "/" onClick={menu}>Home</Link></li>
                        <li><Link to = "/product" onClick={menu}>Product</Link></li>
                        <li><Link to = "/inquiry" onClick={menu}>Inquiry</Link></li>
                    </ul>
                </nav>
                

                <Routes>
                    <Route exact path='/' Component={Home}/>
                    <Route path='/product' Component={Product}/>
                    <Route path='/Inquiry' Component={Inquiry}/>
                </Routes>

                <div className='footer'>
                    <div className='address'>
                        <h1>Contact us</h1>
                        <p>Email : shristimahato6054@gmail.com
                            <br/>Phone : +977 9817538939
                            <br/>Address : Kathmandu, putalisadak
                        </p>
                    </div>
                    <div className='about'>
                        <h1>About Us</h1>
                        <p>We are a team dedicated to providing the best products <br/>and services to our customer. </p>
                    </div>
                    <div className='quick-links'>
                        <h1>Quick Links</h1>
                        <ul className='links'>
                            <li><Link to = "/">Home</Link></li>
                            <li><Link to = "/product">Product</Link></li>
                            <li><Link to = "/inquiry">Inquiry</Link></li>
                        </ul>
                    </div>
                    <div className='social-icons'>
                        <h1>Social Platforms</h1>
                        <div className='foot-icons'>
                            <div className='facebook'>
                                <FaFacebook/>
                            </div>
                            <div className='twitter'>
                                <FaTwitter/>
                            </div>
                            <div className='youtube'>
                                <FaYoutube/>
                            </div>
                            <div className='insta'>
                                <FaInstagram/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </Router>
    );
}

export default NavbarFooter;