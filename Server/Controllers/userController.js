import { compare, hash } from "bcrypt";
import { Users } from "../Models/userModel.js";
import jwt from 'jsonwebtoken'
const PrivateKey = "wexvlj@!@#$!__++=";



// ----------------------REGISTER-----------------------------
export async function Register(req, res) {
  try {
    const { name, email, password } = req.body;
    console.log(name, email)
    const hashedPassword = await hash(password, 10);
    const newUser = new Users({
      name: name,
      password: hashedPassword,
      role: "user",
      email: email,
    });
    await newUser.save();
    console.log(newUser)
    const token = jwt.sign(
      { _id: newUser._id, name: newUser.name, role: newUser.role, email: newUser.email, wishlist: newUser.wishlist, basket: newUser.basket },
      PrivateKey
    );
    res.status(200).send(token);

  } catch (error) {
    res.status(500).send(`Internal Server Error: ${error.message}`);
  }
}


export async function UpdateUserWishlistByID(req, res) {
  try {
    const { id } = req.params
    const { wishlist } = req.body

    const findUser = await Users.findById(id)

    if (!findUser) {
      res.status(404).json({ message: "User not found!" })
      return
    }

    const updatedUser = await Users.findByIdAndUpdate(id, { wishlist: wishlist })

    res.status(200).send(`${updatedUser.username}'s wishlist updated!`)
  } catch (error) {
    res.status(500).json({ message: "Server error" })
  }
}

//---------------------------Basket--------------------------------------------//

export const UpdateBasket = async (req, res) => {
  try {
    const { id } = req.params
    const { basket } = req.body
    console.log(req.body)
    const data = await Users.findByIdAndUpdate(id, { basket: basket })
    res.status(200).send({ message: "sucsess DELETE", data })
  } catch (error) {
    res.status(500).send({ message: "NOT sucsess Update" })
  }
}


// --------------------------LOGIN--------------------------------------------//

export async function Login(req, res) {
  try {
    const { name, password } = req.body;
    const user = await Users.findOne({ name: name });

    const passwordMatch = await compare(password, user.password);
    console.log(user)
   

    if (!passwordMatch) {
      res.status(404).send("Yanlış Parola");
      return
    }
    console.log("Test");
    const token = jwt.sign(
      { _id: user._id, name: user.name, role: user.role, wishlist: user.wishlist, basket: user.basket },
      PrivateKey // Burada PrivateKey yerine gerçek özel anahtarınızı kullanmalısınız
    );
    res.status(200).send(token);
  } catch (error) {
    res.status(500).send("İç Sunucu Hatası");
  }
}

// --------------------------DELETE--------------------------------------------

export async function deleteUser(req, res) {
  try {
    const token = req.headers.authorization;
    const decoded = jwt.verify(token, PrivateKey);
    if (decoded) {
      if (decoded.role === "admin") {
        const { id } = req.params;
        const user = await Users.findByIdAndDelete(id);
        if (user) {
          res.status(200).send("User Deleted");
        } else {
          res.status(404).send("User Not Found");
        }
      } else {
        res.status(403).send("You have not acces to delete user");
      }
    } else {
      res.status(403).send("You have not acces to delete user");
    }
  } catch (error) {
    res.status(500).send("Internal Server Error");
  }
}

// --------------------------UPDATE USER--------------------------------------------

export async function updateUser(req, res) {
  try {
    const { id } = req.params;
    const token = req.headers.authorization;
    const decoded = jwt.verify(token, PrivateKey);
    if (decoded.role === "admin" || decoded._id === id) {
      const hashedPassword = await hash(req.body.password, 10);
      await Users.findByIdAndUpdate(id, {
        email: req.body.email,
        password: hashedPassword,
      });
      res.status(200).send("user updated");
    } else {
      res.status(404).send("You have not access to update");
    }
  } catch (error) {
    res.status(500).send(error.message);
  }
}

// --------------------------GET ALL USERS--------------------------------------------

export async function GetAllUsers(req, res) {
  try {
    const users = await Users.find({});
    res.send(users);
  } catch (error) {
    res.status(500).send("Internal Server Error");
  }
}

// --------------------------GET  USER ById--------------------------------------------

export async function getUserById(req, res) {
  try {
    const { id } = req.params;
    const user = await Users.findById(id).populate('wishlist.product')
    res.send(user);
  } catch (error) {
    res.status(500).send("Internal Server Error");
  }
}