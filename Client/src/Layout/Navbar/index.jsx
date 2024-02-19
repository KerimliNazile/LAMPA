import React, { useState } from 'react';
import { FaShoppingCart } from "react-icons/fa";
import { IoMdHeart } from "react-icons/io";
import { CiSearch } from "react-icons/ci";
import { FaBarsStaggered } from "react-icons/fa6";
import { IoClose } from "react-icons/io5";
import { IoPerson } from "react-icons/io5";
import './index.scss';
import { Link, NavLink } from 'react-router-dom';
import ModeBox from '../../Components/ModeBox/ModeBox';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    function handleClick() {
        setIsOpen(!isOpen);
    }
    return (
        <>
            <nav>
                <ModeBox/>
                <div className="LogoNav">
                    <img src="https://minery-store-demo.myshopify.com/cdn/shop/files/logo.png?v=1618913868" alt="" />
                </div>
                <div className="MainNav">
                    <ul id='NavIn'>
                        <li><NavLink  to='/'>Home</NavLink></li>
                        <li><NavLink to='/about'>About</NavLink></li>
                        <li><NavLink to='/shop'>Shop</NavLink></li>
                        <li><NavLink to='/contact'>Contact</NavLink></li>
                        <li className='pages'><NavLink to='/faqs'>Faqs</NavLink>
                            <div className="subMenu2">
                                <div className="subMenuArea">
                                    <div className="subMenuBox">
                                        <ul className='errorpage'>
                                            <li><NavLink to='*'>404 Page</NavLink></li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </li>
                        <li><NavLink to='/search'><CiSearch /></NavLink></li>
                        <li><NavLink to='/login'><IoPerson /></NavLink></li>
                        <li><NavLink to='/basket'><FaShoppingCart /></NavLink></li>
                        <li><NavLink to='/wishlist'><IoMdHeart /></NavLink></li>
                    </ul>
                </div>
                <div className="mobile" onClick={handleClick}>
                    {isOpen ? <IoClose /> : <FaBarsStaggered />}
                </div>
            </nav>
            {isOpen && 
                <div className="navlist">
                    <ul>
                        <li><NavLink exact to='/'>Home</NavLink></li>
                        <li><NavLink to='/shop'>Shop</NavLink></li>
                        <li><NavLink to='/contact'>Contact</NavLink></li>
                        <li><NavLink to='/faqs'>FAQS</NavLink></li>
                        <li><NavLink to='/wishlist'><IoMdHeart /></NavLink></li>
                    </ul>
                </div>
            }
        </>
    )
}

export default Navbar;
