import Conversation from "../models/conversation.model.js";
import Message from "../models/message.models.js";



export const sendMessage = async (req,res) =>{
 try{
  const {message} = req.body;
  const {id:recieverId} = req.params;
  const senderId = req.user._id;

  let conversation = await Conversation.findOne({
    participants: {$all : [senderId,recieverId]},
  })

  if(!conversation){
    conversation = await Conversation.create({
      participants:[senderId,recieverId],
    })
  }
  const newMessage = new Message({
    senderId,
    recieverId,
    message
  })
  if(message){
    conversation.message.push(newMessage._id)
  }

  res.status(201).json(newMessage)
 }
 catch(error){
  console.log("Error is sendmessage controler" , error.message)
  res.status(500).json({error: "Internal server error"})
 }
}