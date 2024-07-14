import React, { useState } from "react";
import { FaTruckMoving } from 'react-icons/fa';
import { CiHeart } from "react-icons/ci";
import { IoBagCheckOutline } from "react-icons/io5";
import { CiUser } from "react-icons/ci";
import { FiLogIn } from "react-icons/fi";
import { FiLogOut } from "react-icons/fi";
import { Link } from 'react-router-dom';
import './nav.css';
import { useAuth0 } from "@auth0/auth0-react";
const Nav = ({searchbtn}) => {
    const [search, setSearch] = useState()
    const { loginWithRedirect, logout, user, isAuthenticated } = useAuth0();
    return (
        <>
            <div className="free">
                <div className='icon'>
                    <FaTruckMoving />
                </div>
                <p> FREE shipping when shopping upto $1000 </p>
            </div>
            <div className='main_header'>
                <div className='container'>
                    <div className='logo'>
                        <img src='../logo1.png' alt="logon"></img>
                    </div>
                    <div className="search_box">
                        <input type='text' value={search} placeholder='Search your product' autoComplete="off" onChange={(e) => setSearch(e.target.value) } ></input>
                        <button onClick={() => searchbtn (search)} >Search</button>
                    </div>
                    <div className='icon'>
                        {
                            isAuthenticated &&
                            (
                                <div className='account'>
                                    <div className='user_icon'>
                                        <CiUser />
                                    </div>
                                    <p>Hello, {user.name}</p>
                                </div>
                            )
                        }

                        <div className='second_icon'>
                            <Link to="/" className='link'><CiHeart /></Link>
                            <Link to="/cart" className='link'><IoBagCheckOutline /></Link>
                        </div>
                    </div>
                </div>
            </div>
            <div className='header'>
                <div className='container'>
                    <div className='nav'>
                        <ul>
                            <li>
                                <Link to='/' className='link' >Home</Link>
                            </li>
                            <li>
                                <Link to='/product' className='link' >Product</Link>
                            </li>
                            <li>
                                <Link to='/about' className='link' >About</Link>
                            </li>
                            <li>
                                <Link to='/contact' className='link' >Contact</Link>
                            </li>
                        </ul>
                    </div>

                    <div className="auth">
                        {
                            isAuthenticated ?
                                <button onClick={() => logout({ logoutParams: { returnTo: window.location.origin } })}> <FiLogOut /> </button>
                                :
                                <button onClick={() => loginWithRedirect()} > <FiLogIn /> </button>
                        }



                    </div>
                </div>
            </div>
        </>
    );
};

export default Nav;
