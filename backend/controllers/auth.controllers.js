import express from 'express'

export const signup = (req,res) =>{
  try{
    const {fullName,userName,password,confirmPassword,gender} = req.body;
  }
  catch (error){}
}
export const login = (req,res) =>{
  res.send("server running")
  console.log("log in route")
}
export const logout = (req,res) =>{
  res.send("server running")
  console.log("log out route")
}