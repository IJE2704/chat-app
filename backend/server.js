import express from 'express';
import dotenv from 'dotenv';
import authRoutes from './routes/auth.routes.js'
import connectToMongoDB from './db/connectToMongoDB.js';


const app = express();
dotenv.config();

const PORT = process.env.PORT || 5000;

// here is our home route
app.get("/", (req,res)=>{
  res.send("Server is ready")
})

// 

app.use('/api/auth', authRoutes)


app.listen(PORT, ()=>{
  connectToMongoDB();
  console.log(`server is running on ${PORT}`)
  console.log(process.env.PORT)
})