import mongoose from "mongoose";

const conversationSchema = new mongoose.Schema(
  {
    participants: [
      {
        type:mongoose.Schema.Types.ObjectId,
        ref:"User",
      },
    ],
    message:[
      {
        types:mongoose.Schema.Types.ObjectId,
        ref:"Message",
        default:[]
      }
    ]
  },{timestamps:true}
)