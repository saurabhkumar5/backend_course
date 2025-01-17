import mongoose from "mongoose";


const subtodoSchema = new mongoose.Schema({
    content: {
        type: String,
        required: true,
    },
    complete: {
        type: Boolean,
        default: false,
    },
    createdBy: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
    }
},{timestamps})


export const subTodo = mongoose.model("SubTodo",subtodoSchema)