import React,{useState} from "react";
import "./navbar.css";
import {GiHamburgerMenu} from "react-icons/gi";
import Logo from "../logos/Rise11Logo.png";


const Navbar=()=>{
    const[showLink,setShowLink]=useState(false);
    return(
        <>
            <div className="nav">
            <nav className="main-nav">

            <div className="hamburger_menu" onClick={()=>{
                setShowLink(!showLink);
            }}>
                    <a href="#">
                    <GiHamburgerMenu/>
                    </a>
            </div>

                <div className="logo">
                    <img src={Logo}/>
                </div>
                
                <div className="verticalLine1"></div>
                <div className="menu">
                    <ul>
                        <li>
                            <a href="#">BOOK</a>
                        </li>
                        <li>
                            <a href="#">CHECK IN</a>
                        </li>
                        <li>
                            <a href="#">MANAGE</a>
                        </li>
                    </ul>
                </div>

                <div className="verticalLine2"></div>

                <div className={showLink?"menu-link mobile-menu-link":"menu-link"}>
                    <ul>
                        <li>
                            <a href="#">Deals</a>
                        </li>
                        <li>
                            <a href="#">Flying With Us</a>
                        </li>
                        <li>
                            <a href="#">Where We Fly</a>
                        </li>
                        <li>
                            <a href="#">Shop</a>
                        </li>
                        <li>
                            <a href="#">FAQ</a>
                        </li>
                        <li>
                            <a href="#">Fees</a>
                        </li>
                    </ul>
                </div>
                
                <div className="signing">
                    <ul className="signing-desktop">
                    <li>
                        <div className="verticalLine3"></div>
                    </li>
                    <li className="elevate">
                        <a href="#">elevate</a>
                    </li>
                    <li className="signin">
                        <a href="#" className="signIn">Sign in</a>
                    </li>
                    <li className="signup">
                        <a href="#">Sign Up</a>
                    </li>
                    </ul>
                </div>

                <div className="verticalLine4"></div>
            
            <div className="hamburger_menu_tab" onClick={()=>{
                setShowLink(!showLink);
            }}>
                    <a href="#">
                    <GiHamburgerMenu/>
                    </a>
            </div>
            </nav>
            </div>
        </>
    );
}

export default Navbar;