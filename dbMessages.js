import mongoose from 'mongoose';

const realChatSchema = mongoose.Schema({
    message: String, 
    name: String,
    timestamp: String, 
    received: Boolean
})


export default mongoose.model("messagecontents", realChatSchema);