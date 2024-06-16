import React from 'react'
import { Link } from 'react-router-dom'
import { HiMiniArrowRight } from "react-icons/hi2";
import { FiTruck } from "react-icons/fi";
import { BsCurrencyDollar } from "react-icons/bs";
import { HiOutlineReceiptPercent } from "react-icons/hi2";
import { FiHeadphones } from "react-icons/fi";
import { CiPercent } from "react-icons/ci";
import { FiShoppingCart } from "react-icons/fi";
import { FaRegEye } from "react-icons/fa";
import { CiHeart } from "react-icons/ci";

import Homeproduct from './homeproduct';


import './home.css'
const Home = () => {
    return (
        <>
        <div className='top_banner'>
            <div className='container'>
                <div className='detail'>
                    <h2>The Best Notebook Collection</h2>
                    <Link to='/product' className='link' >Shop Now <HiMiniArrowRight/> </Link>
                </div>
                <div className='img_box'>
                    <img src='../seulivro.png' alt='sliderimg'></img>
                </div>
            </div>
        </div>
        <div className='product_type'>
            <div className='container'>
                <div className='box'>
                    <div className='img_box'>
                        <img src='../seulivro.png' alt='sliderimg'></img>
                    </div>
                    <div className='detail'>
                         <p>23 products</p>
                    </div>
                </div>
                <div className='box'>
                    <div className='img_box'>
                        <img src='../seulivro.png' alt='mobile'></img>
                    </div>
                    <div className='detail'>
                         <p>23 products</p>
                    </div>
                </div>
                <div className='box'>
                    <div className='img_box'>
                        <img src='../seulivro.png' alt='watch'></img>
                    </div>
                    <div className='detail'>
                         <p>23 products</p>
                    </div>
                </div>
            </div>
        </div>
        <div className='about'>
            <div className='container'>
                <div className='box'>
                    <div className='icon'>
                        <FiTruck />
                    </div>
                    <div className='detail'>
                        <h3>Free Shipping</h3>
                    </div>
                </div>
                <div className='box'>
                    <div className='icon'>
                    <BsCurrencyDollar />
                    </div>
                    <div className='detail'>
                        <h3>Free Shipping</h3>
                        <p>Order above $1000</p>
                    </div>
                </div>
                <div className='box'>
                    <div className='icon'>
                    <HiOutlineReceiptPercent />
                    </div>
                    <div className='detail'>
                        <h3>Return and Refund</h3>
                        <p>Money Back Gauranty</p>
                    </div>
                </div>
                <div className='box'>
                    <div className='icon'>
                    <CiPercent />
                    </div>
                    <div className='detail'>
                        <h3>Member Discount</h3>
                        <p>On every order</p>
                    </div>
                </div>
                <div className='box'>
                    <div className='icon'>
                    <FiHeadphones />
                    </div>
                    <div className='detail'>
                        <h3>Costume support</h3>
                        <p>Every time call support</p>
                    </div>
                </div>
            </div>
        </div>
        <div className='product'>
            <h2>Top Products</h2>
            <div className='container'>
                {
                    Homeproduct.map((curElm) => 
                        {
                            return(
                                <div className='box' key={curElm.id} >
                                    <div className='img_box'>
                                        <img src={curElm.Img} alt={curElm.Title}></img>
                                        <div className='icon'>
                                    <li><FiShoppingCart /> </li>
                                    <li><FaRegEye /> </li>
                                    <li><CiHeart /> </li>
                                        </div>
                                    </div>
                                    <div className='detail'>
                                        <h3>{curElm.Title}</h3>
                                        <p>{curElm.Cat}</p>                                        
                                        <h4>{curElm.Price}</h4>
                                    </div>
                                </div>
                                
                            );
                        })
                }

            </div>
        </div>
        <div className='banner'>
            <div className='container'>
            <div className='detail'>
                <h4>LATEST TECHNOLOGY</h4>
                <h3>Beat HeadPhone 10.2 9th Gen</h3>
                <p> $ 989 </p>
                <Link to='/product' className='link'>Shop Now <HiMiniArrowRight/> </Link>
            </div>
            <div className='img_box'>
                <img src='./headphone.jpg'></img>
            </div>
            </div>
            
        </div>
        </>
    )
}

export default Home