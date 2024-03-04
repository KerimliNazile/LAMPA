import React, { useEffect, useState } from 'react';
import { FaShoppingCart } from "react-icons/fa";
import { IoMdHeart } from "react-icons/io";

import { GrShop } from "react-icons/gr";
import { FaBarsStaggered } from "react-icons/fa6";
import { IoClose } from "react-icons/io5";
import { IoPerson } from "react-icons/io5";
import { jwtDecode } from 'jwt-decode';
import './index.scss';
import { Link, NavLink } from 'react-router-dom';
import ModeBox from '../../Components/ModeBox/ModeBox';
import { useTranslation } from 'react-i18next';
import { useUser } from '../../context/UserContext';
import axios from 'axios';

const Navbar = () => {
    const [token, setToken] = useState(localStorage.getItem("token"))
    const userData = token ? jwtDecode(token) :null
    const {
        datas
    } = useUser()
    // console.log(userData.basket);
    const { Logout, user } = useUser()
    const [isOpen, setIsOpen] = useState(false);
    function handleClick() {
        setIsOpen(!isOpen);
    }
    const { t, i18n } = useTranslation();
    function changeLang(lang) {
        i18n.changeLanguage(lang)
    }

    console.log("user: ", user)

    return (
        <>
            <nav>

                <ModeBox />

                <div className="LogoNav">
                    <NavLink to={'/'}>  <img src="https://minery-store-demo.myshopify.com/cdn/shop/files/logo.png?v=1618913868" alt="" /></NavLink>
                </div>
                <div className="MainNav">
                    <ul id='NavIn'>
                        <li><NavLink to='/'>{t("Home")}</NavLink></li>
                        <li><NavLink to='/about'>{t("About")}</NavLink></li>
                        <li><NavLink to='/shop'>{t("Shop")}</NavLink></li>
                        <li><NavLink to='/contact'>{t("Contact")}</NavLink></li>
                        <li className='pages'><NavLink to='/faqs'>{t("FAQs")}</NavLink></li>
                        <li><NavLink to='*'></NavLink></li>
                      



                        {/* <li><NavLink to='/search'><CiSearch /></NavLink></li> */}

                        <li><NavLink to='/login'><IoPerson className='person' /></NavLink></li>
                        <li className='LiBasket'>
                           
                            {datas && datas.map((item) => (

                                <p className='PBasket'>{ token && userData.name === item.name ? item.basket.length : ""}</p>

                            ))

                            }
                            <NavLink to='/basket'><GrShop className='person' /></NavLink></li>
                        <li className='LiBasket'>
                            {/* {datas && datas.map((item) => (

                                <p className='PBasket'>{ token &&userData.name === item.name ? item.wishlist.length : ""}</p>

                            ))

                            } */}
                            <NavLink to='/wishlist'><IoMdHeart className='person' /></NavLink></li>
                        <li>
                            <button className='enbutton' onClick={() => changeLang("az")}>AZ</button>
                            <button className='enbutton' onClick={() => changeLang("en")}>EN</button>
                        </li>
                        <li>
                            {user._id && <button className='logoutbutton' onClick={() => Logout()}>
                                Log out
                            </button>}
                        </li>


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
                        <li><NavLink to='/about'>About</NavLink></li>
                        <li><NavLink to='/shop'>Shop</NavLink></li>
                        <li><NavLink to='/contact'>Contact</NavLink></li>
                        <li><NavLink to='/faqs'>FAQS</NavLink></li>
                        {user._id && <button onClick={() => Logout()}>
                            Log out
                        </button>}
                        {/* <li><NavLink to='/wishlist'><IoMdHeart /></NavLink></li> */}
                    </ul>
                </div>
            }
        </>
    )
}

export default Navbar;
