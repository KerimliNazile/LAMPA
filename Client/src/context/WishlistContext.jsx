import React, { createContext, useEffect, useState } from "react";
import { getCookie } from '../../helpers/helpers';
import { jwtDecode } from "jwt-decode";
import axios from 'axios'
import toast, { Toaster } from 'react-hot-toast';
import { useTranslation } from 'react-i18next';

export const WishlistContext = createContext();

function WishlistProvider({ children }) {
    const [wish, setWish] = useState([])
    const token = getCookie("token")
    const decoded = token && jwtDecode(token)
    const [clickCount, setClickCount] = useState(0);
    const { t, i18n } = useTranslation();




    async function handleAddWishlist(id) {
        try {
            const res = await axios.post(`http://localhost:3000/users/${decoded._id}/addWishlist`, {
                productId: id
            })
            res.status === 201 ? toast.error(`${t("DeleteWishlist")}`) : toast.success(`${t("AddedWishlist")}`)

            await fetchAllWishlist()
        } catch (error) {
            alert(error.message)
        }
    }


    async function handleDeleteWishlist(id) {
        try {
            const res = await axios.post(`http://localhost:3000/users/${decoded._id}/deletewish`, {
                productId: id
            })
            toast.error("Delete ")
            await fetchAllPlaylist()
        } catch (error) {
            console.log(error.message);
        }
    }
  
    async function fetchAllWishlist(id) {
        if (decoded) {
            try {
                const res = await axios(`http://localhost:3000/users/${decoded._id}/wishlist`)
                setWish(res.data)
            } catch (error) {
                alert(error.message)
            }
        }

    }

    useEffect(() => {
        fetchAllPlaylist()
    }, [])

    const data = {
        wish,
        setWish,
        token,
        decoded,
        handleAddWishlist,
        fetchAllWishlist,
        handleDeleteWishlist,
    }

    return (
        <WishlistContext.Provider value={data}>
            {children}
        </WishlistContext.Provider>
    );
}

export default WishlistProvider;