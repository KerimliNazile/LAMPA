import React from 'react'
import NavbarAdmin from '../NavbarAdmin'
import { Outlet } from 'react-router-dom'

const MainLayoutAdmin = () => {
    return (
        <>
            <NavbarAdmin />
            <Outlet />
        </>
    )
}

export default MainLayoutAdmin