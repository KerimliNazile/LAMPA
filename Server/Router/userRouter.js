import { Router } from "express";
const UserRouter = Router();
// import { deleteUser, GetAllUsers, getUserById, Login, Register, updateUser } from "../Controllers/userController.js";
import { Register } from "../Controllers/userController.js";

UserRouter.post("/register", Register);
// UserRouter.get("/users", GetAllUsers);
// UserRouter.get("/users/:id", getUserById);
// UserRouter.post("/login", Login);
// UserRouter.delete("/users/:id", deleteUser);
// UserRouter.put("/users/:id", updateUser);

export default UserRouter;