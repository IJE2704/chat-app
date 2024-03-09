import express from 'express';
import dotenv from 'dotenv';
import cookieParser from 'cookie-parser';
import authRoutes from './routes/auth.routes.js'
import messageRoutes from './routes/message.routes.js'
import connectToMongoDB from './db/connectToMongoDB.js';

const app = express();
const PORT = process.env.PORT || 5000;

dotenv.config();

app.use(express.json());
app.use(cookieParser());


app.use('/api/auth', authRoutes)
app.use('/api/auth', messageRoutes)



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