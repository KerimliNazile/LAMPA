import { hash } from "bcrypt";
import { Users } from "../Models/userModel.js";
const PrivateKey = "wexvlj@!@#$!__++=";



// ----------------------REGISTER-----------------------------
export async function Register(req, res) {
  try {
    const { name, email } = req.body;
    console.log(name,email)
    const hashedPassword = await hash(req.body.password, 10);
    const newUser = new Users({
      name: name,
      password: hashedPassword,
      role: "user",
      email: email,
    });
    await newUser.save();
    console.log(newUser)
    // const token = jwt.sign(
    //   { _id: newUser._id, name: newUser.name, role: newUser.role, newUser: newUser.email },
    //   PrivateKey
    // );
    // res.status(200).send(token);

  } catch (error) {
    res.status(500).send(`Internal Server Error: ${error.message}`);
  }
}


// // --------------------------LOGIN--------------------------------------------

// export async function Login(req, res) {
//   try {
//     const { name, password } = req.body;
//     const user = await Users.findOne({ name: name });
//     console.log(user)
//     const passwordMatch = await compare(password, user.password);
//     if (!user) {
//       res.status(404).send("Yanlış kullanici");
//       return
//     }
//     else if (!passwordMatch) {
//       res.status(404).send("Yanlış Parola");
//       return
//     }
//     const token = jwt.sign(
//       { _id: user._id, name: user.name, role: user.role },
//       PrivateKey // Burada PrivateKey yerine gerçek özel anahtarınızı kullanmalısınız
//     );
//     res.status(200).send(token);
//   } catch (error) {
//     res.status(500).send("İç Sunucu Hatası");
//   }
// }

// // --------------------------DELETE--------------------------------------------

// export async function deleteUser(req, res) {
//   try {
//     const token = req.headers.authorization;
//     const decoded = jwt.verify(token, PrivateKey);
//     if (decoded) {
//       if (decoded.role === "admin") {
//         const { id } = req.params;
//         const user = await Users.findByIdAndDelete(id);
//         if (user) {
//           res.status(200).send("User Deleted");
//         } else {
//           res.status(404).send("User Not Found");
//         }
//       } else {
//         res.status(403).send("You have not acces to delete user");
//       }
//     } else {
//       res.status(403).send("You have not acces to delete user");
//     }
//   } catch (error) {
//     res.status(500).send("Internal Server Error");
//   }
// }

// // --------------------------UPDATE USER--------------------------------------------

// export async function updateUser(req, res) {
//   try {
//     const { id } = req.params;
//     const token = req.headers.authorization;
//     const decoded = jwt.verify(token, PrivateKey);
//     if (decoded.role === "admin" || decoded._id === id) {
//       const hashedPassword = await hash(req.body.password, 10);
//       await User.findByIdAndUpdate(id, {
//         email: req.body.email,
//         password: hashedPassword,
//       });
//       res.status(200).send("user updated");
//     } else {
//       res.status(404).send("You have not access to update");
//     }
//   } catch (error) {
//     res.status(500).send(error.message);
//   }
// }

// // --------------------------GET ALL USERS--------------------------------------------

// export async function GetAllUsers(req, res) {
//   try {
//     const users = await Users.find({});
//     res.send(users);
//   } catch (error) {
//     res.status(500).send("Internal Server Error");
//   }
// }

// // --------------------------GET  USER ById--------------------------------------------

// export async function getUserById(req, res) {
//   try {
//     const { id } = req.params;
//     const user = await Users.findById(id).populate('wishlist.product')
//     res.send(user);
//   } catch (error) {
//     res.status(500).send("Internal Server Error");
//   }
// }