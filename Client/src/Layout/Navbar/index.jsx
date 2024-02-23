import React, { useState } from 'react';
import { FaShoppingCart } from "react-icons/fa";
import { IoMdHeart } from "react-icons/io";
import { FaBarsStaggered } from "react-icons/fa6";
import { IoClose } from "react-icons/io5";
import { IoPerson } from "react-icons/io5";
import './index.scss';
import { Link, NavLink } from 'react-router-dom';
import ModeBox from '../../Components/ModeBox/ModeBox';
import { useTranslation } from 'react-i18next';
import { useUser } from '../../context/UserContext';

const Navbar = () => {
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
                        {/* <div className="subMenu2">
                                <div className="subMenuArea">
                                    <div className="subMenuBox">
                                        <ul className='errorpage'>
                                          
                                        </ul>
                                    </div>
                                </div>
                            </div> */}



                        {/* <li><NavLink to='/search'><CiSearch /></NavLink></li> */}
                        <li><NavLink to='/login'><IoPerson /></NavLink></li>
                        <li><NavLink to='/basket'><FaShoppingCart /></NavLink></li>
                        <li><NavLink to='/wishlist'><IoMdHeart /></NavLink></li>
                        <li>
                            <button onClick={() => changeLang("az")}>AZ</button>
                            <button onClick={() => changeLang("en")}>EN</button>
                        </li>
                        {user._id && <button onClick={() => Logout()}>
                            Log out
                        </button>}

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
