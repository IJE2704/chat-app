import jwt from 'jsonwebtoken'


const generateTokenAndSetCookie = (userid, res) =>{

  // here we create a token where we use jwt
  const token = jwt.sign({userid}, process.env.JWT_SECRET,{
    expiresIn:'15d'
  })

  // here we set the token in cookie
  res.cookie("jwt", token,{
    maxAge: 15 * 24 * 60 * 60 * 1000,
    httpOnly : true, //cros site attack
    sameSite : "strict" //cros site request
  });
}

export default generateTokenAndSetCookie;