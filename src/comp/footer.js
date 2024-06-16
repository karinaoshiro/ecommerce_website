import React from "react";
import { FaGithub } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import './footer.css'

const Footer = () => {
    return (
        <>
        <div className="footer">
            <div className="container">
                <div className="about">
                    <div className="logo">
                    <img src='../logo1.png' alt="logon"></img>
                    </div>
                    <div className="detail">
                        <p>Encontre tudo o que você precisa em um só lugar. Oferecemos uma ampla variedade de produtos de alta qualidade</p>
                        <div className="icon">
                            <li><FaGithub /></li>
                            <li><FaFacebook /></li>
                            <li><FaYoutube /></li>
                            <li><FaInstagram /></li>
                        </div>
                    </div>
                </div>
                <div className="account">
                    <h3>My Account</h3>
                    <ul>
                        <li>Account</li>
                        <li>Order</li>
                        <li>Cart</li>
                        <li>Shipping</li>
                        <li>Return</li>
                    </ul>
                </div>
                <div className="page">
                    <h3>Pages</h3>
                    <ul>
                        <li>Home</li>
                        <li>About</li>
                        <li>Contact</li>
                        <li>Terms and Conditions</li>

                    </ul>
                </div>
            </div>
        </div>
        </>
    )
}

export default Footer