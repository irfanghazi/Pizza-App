const express = require("express");
const UserModel = require("../Models/userModel");
// const { bcryptString, verifyBcrypt } = require("../helper/password");
const router = express.Router();

// router.post("/registration", async (req, res) => {
//   try {
//     const { name, email, password } = req.body;
//     const hashedPassword = await bcryptString(password);
//     const newUserModel = new UserModel({
//       name,
//       email,
//       password: hashedPassword,
//     });
//     newUserModel.save();
//     res.status(200).json({
//       sucsess: true,
//       message: " register successfully ",
//     });
//   } catch (error) {
//     res.status(400).json({
//       message: error,
//     });
//   }
// });

// router.post("/login", async (req, res) => {
//   try {
//     const { email, password } = req.body;
//     const newUserModel = await UserModel.findOne({ email: email });
//     const confirmPassword = await verifyBcrypt(newUserModel.password, password);
//     if (confirmPassword) {
//       res.json({ message: "sign in successfully" });
//     } else {
//       throw new Error("Incorrect user name or password");
//     }
//   } catch (error) {
//     res.send(error);
//   }
// });

router.post("/registration", (req, res) => {
  const { name, email, password } = req.body;
  const newUser = new UserModel({ name, email, password });
  try {
    newUser.save();
    res.status(200).json({
      success: true,
      message: "Register success",
    });
  } catch (error) {
    res.status(400).json({
      message: error,
    });
  }
});

router.post("/login", async (req, res) => {
  const { email, password } = req.body;
  try {
    const user = await UserModel.find({ email, password });
    if (user.length > 0) {
      const currentUser = {
        name: user[0].name,
        email: user[0].email,
        isAdmin: user[0].isAdmin,
        _id: user[0].Id,
      };
      res.status(200).send(currentUser);
    } else {
      res.status(400).json({
        message: "Login Failed",
      });
    }
  } catch (error) {
    res.status(404).json({
      message: "Something Went wrong",
    });
  }
});

router.get("/getAllusers", async (req, res) => {
  try {
    const users = await UserModel.find({});
    res.send(users);
  } catch (error) {
    res.send(error);
  }
});

router.post("/deleteuser", async (req, res) => {
  const { userId } = req.body;
  try {
    const deleteUser = await UserModel.findOneAndDelete({ _id: userId });
    res.send(deleteUser);
  } catch (error) {
    res.send(error);
  }
});

module.exports = router;
