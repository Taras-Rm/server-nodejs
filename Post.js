import mongoose from "mongoose" 

const Post = new mongoose.Schema({
    user: {type: String, required: true},
    title: {type: String, required: true},
    content: {type: String, required: true},
})

export default mongoose.model('Post', Post)