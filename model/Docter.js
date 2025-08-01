const mongoose = require("mongoose")

module.exports = mongoose.model("Doctor", new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    specialization: {
        type: String,
        required: true,
    },
    experience: {
        type: Number,
        required: true,
    },
    location: {
        type: String,
        required: true,
    },
    fees: {
        type: Number,
        required: true,
    },
    rating: {
        type: Number,
        required: true,
    }
}, { timestamps: true }))


