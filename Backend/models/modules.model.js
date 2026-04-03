import mongoose from 'mongoose'

const moduleSchema = mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    url: {
        type: String,
        required: true
    },
    public_id: {
        type: String,
        required: true
    },
    resource_type: {
        type: String,
        required: true
    },
    course: {
        type: String,
        required: true
    },
    file_size: {
        type: Number,
        required: true,
    },
}, { timestamps: true })


export const moduleModel = mongoose.model("Module", moduleSchema)
