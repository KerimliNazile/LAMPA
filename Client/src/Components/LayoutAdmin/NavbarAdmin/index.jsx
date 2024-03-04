import React from 'react'
import { NavLink } from 'react-router-dom'
import './index.scss'
const NavbarAdmin = () => {
    return (
        <>
            <nav className='navadmin'>
                <div className="MainAdminNavbar">
                    <ul>
                        <li><NavLink to='/adminn/adminlogo'>Marketing Personals</NavLink></li>
                        <li><NavLink to='/adminn'>Product</NavLink></li>
                        <li><NavLink to='/adminn/adminuser'>Users</NavLink></li>
                        <li><NavLink to='/adminn/adminswiper'>Logo</NavLink></li>
                    </ul>
                </div>
            </nav>
        </>
    )
}

export default NavbarAdmin