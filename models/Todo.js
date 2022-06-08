const mongoose = require("mongoose") 

const TodoSchema = new mongoose.Schema({
    content: {type: String, required: true},
    done: {type: Boolean, required: true},
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User"
    }
})

module.exports = mongoose.model('Todo', TodoSchema)