import { Router } from "express";
import { addToWishlist, deleteDataFromWishlist, getWishlistData } from "../Controllers/WishlistController";

const wishlistRouter = Router();

wishlistRouter.get('/users/:userId/wishlist', getWishlistData);
wishlistRouter.post('/users/:userId/addWishlist', addToWishlist);
wishlistRouter.post("/users/:userId/deletewish", deleteDataFromWishlist);

export default wishlistRouter;