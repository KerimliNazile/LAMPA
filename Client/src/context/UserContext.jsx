import { createContext, useContext } from "react";
import useLocalStorage from '../hooks/useLocalStorage'
import axios from "axios";
import { useNavigate } from "react-router-dom";

const userContext = createContext()

export const UserProvider = ({ children }) => {

    const navigate = useNavigate()
    const [user, setUser, ManualUpdate, ] = useLocalStorage("user", { username: "", role: "", basket: [], wishlist: [], token: "" })

    async function UpdateWishlist(wishlist) {
        try {
            const response = await axios({
                method: "put",
                url: `http://localhost:3000/wishlist`,
                headers: {
                    Authorization: `Bearer ${user.token}`
                },
                data: {

                    wishlist: wishlist,
                    username: user.username
                }
            }).then(res => res.data)

            console.log(response);

        } catch (error) {
            console.log(error.response.data);
        }
    }

    function AddToWishlist(item) {
        let WishlistCopy = [...user.wishlist]
        const itemIndex = WishlistCopy.findIndex(x => x._id === item._id)
        if (itemIndex === -1) {
            WishlistCopy.push(
                item
            )
            user.wishlist = WishlistCopy
            ManualUpdate()
            console.log(user.wishlist);
            UpdateWishlist(user.wishlist)
            return
        }
        WishlistCopy = WishlistCopy.filter(x => x._id !== item._id)
        user.wishlist = WishlistCopy
        ManualUpdate()
        console.log(user.wishlist);
        UpdateWishlist(user.wihslist ? user.wihslist : [])
    }

    function isInWishlist(item) {
        const found = user.wishlist.find(x => x._id === item._id)
        return found ? true : false
    }
    //////////////////////////////////////////////////
    function AddBasket(item) {
        const index = user.basket.findIndex((x) => x._id === item._id);
        if (index === -1) {
            item.count = 1
            user.basket.push(item)
            ManualUpdate()
            putBasket(user.basket, user._id)
            return
        }
        user.basket[index].count += 1;
        ManualUpdate()
        putBasket(user.basket, user._id)


    }
    function IncBasket(item) {
        const index = user.basket.findIndex((x) => x._id === item._id);
        user.basket[index].count+=1
        ManualUpdate()
        putBasket(user.basket, user._id)
    }
    function DecBasket(item) {
        const index = user.basket.findIndex((x) => x._id === item._id);
        if (user.basket[index].count === 1) {
            return
        }
        user.basket[index].count-=1
        ManualUpdate()
        putBasket(user.basket, user._id)
    }
    function BasketDelete(item) {
        user.basket = user.basket.filter((x) => x._id !== item._id);
        ManualUpdate()
        putBasket(user.basket, user._id)
    }

    async function putBasket(basket, _id) {
        try {
          const res = await axios.put(
            `http://localhost:3000/basket/${_id}`,
            {
              basket: basket,
            },
            {
              headers: {
                Authorization: `Bearer ${user.token}`,
              },
            }
          );
          console.log(res.data); // Gerekirse yanıtı işleyin
        } catch (error) {
          console.error(error.response.data); // Hata durumunu işleyin
        }
      }
    function Logout() {
        setUser({
            username: "",
            role: "",

            basket: [],
            wishlist: [],
            token: "",
        })

        navigate("/login")
    }

    const data = {
        user,
        setUser,
        AddBasket,
        IncBasket,
        DecBasket,
        BasketDelete,
        Logout,
        AddToWishlist,
        isInWishlist,
    }

    return (
        <userContext.Provider value={data}>
            {children}
        </userContext.Provider>
    )
}

export const useUser = () => useContext(userContext)