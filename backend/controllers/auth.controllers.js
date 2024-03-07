import express from 'express'

export const signup = (req,res) =>{
  res.send("server running")
  console.log("sign up route")
}
export const login = (req,res) =>{
  res.send("server running")
  console.log("log in route")
}
export const logout = (req,res) =>{
  res.send("server running")
  console.log("log out route")
}