import express from 'express';
import dotenv from 'dotenv';
import authRoutes from './routes/auth.routes.js'
import connectToMongoDB from './db/connectToMongoDB.js';

const PORT = process.env.PORT || 5000;

const app = express();
dotenv.config();

app.use(express.json());


app.use('/api/auth', authRoutes)



// here is our home route
app.get("/", (req,res)=>{
  res.send("Server is ready")
})

// 


app.listen(PORT, ()=>{
  connectToMongoDB();
  console.log(`server is running on ${PORT}`)
  console.log(process.env.PORT)
})