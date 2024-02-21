import React from 'react'
import { NavLink } from 'react-router-dom'
import './index.scss'
const NavbarAdmin = () => {
    return (
        <>
            <nav>
                <div className="MainAdminNavbar">
                    <ul>
                        <li><NavLink to='/adminlogo'>Logo</NavLink></li>
                        <li><NavLink to='/adminproduct'>Product</NavLink></li>
                        <li><NavLink to='/adminswiper'>Marketing Personals</NavLink></li>
                    </ul>
                </div>
            </nav>
        </>
    )
}

export default NavbarAdmin