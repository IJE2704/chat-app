import bcrypt from "bcryptjs";
import express from "express";
import User from "../models/user.models.js";
import generateTokenAndSetCookie from "../utils/generateToken.js";

// this method for signup route
export const signup = async (req, res) => {
  try {

    // here we get data from req body
    const { fullName, userName, password, confirmPassword, gender } = req.body;

    // here check the password and confirm password matching or not
    if (password !== confirmPassword) {
      return res.status(400).json({ error: "Password not matching" });
    }

    // here check the user already exist in database or not
    const user = await User.findOne({ userName });

    // here if we get the user already in database then send status and error
    if (user) {
      return res.status(400).json({ error: "User name already exists" });
    }

    // create a salt using bcrypt for hash the password
    const salt = await bcrypt.genSalt(10);

    // secure the password with salt which we genarate by the bcryptJs
    const hashPassword = await bcrypt.hash(password, salt);

    // take random avatar from this api with username for user profile , one for girl another one for boy
    const boyProfilePic = `https://avatar.iran.liara.run/public/boy?username=${userName}`;
    const girlProfilePic = `https://avatar.iran.liara.run/public/girl?username=${userName}`;

    // crete a newUser in database User controler using data which we got from req.body , hashpassword and random profile avatar
    const newUser = new User({
      fullName,
      userName,
      password: hashPassword,
      gender,
      profilePic: gender === "male" ? boyProfilePic : girlProfilePic,
    });

    // here we check the newUser created or not
    if (newUser) {
      // when we got newUser then we save this data in User collection
      await newUser.save();
      // for create a token call this function and send user id as a perameter
      generateTokenAndSetCookie(newUser._id, res);
      // then send the status and user information
      res.status(201).json({
        _id: newUser._id,
        fullName: newUser.fullName,
        userName: newUser.userName,
        profilePic: newUser.profilePic,
      });
    }
    else{
      // if we don't get the newuser then send status and error message
      res.status(400).json({error:"Invalid user data"});
    }
  } catch (error) {
    console.log("Erro in signUp controller", error.message);
    res.status(500).json({ error: "Internal server Error" });
  }
};

// this method for login route 
export const login = (req, res) => {
  res.send("server running");
  console.log("log in route");
};

// this method for logout route
export const logout = (req, res) => {
  res.send("server running");
  console.log("log out route");
};
