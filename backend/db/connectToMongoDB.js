import mongose from 'mongoose'
const connectToMongoDB = async ()=>{
  try{
    await mongose.connect(process.env.MONGO_DB_URI)
    console.log("connected to mongd")
  }
  catch(error){
    console.log("error connecting to mongodb", error.message)
  }
}

export default connectToMongoDB;