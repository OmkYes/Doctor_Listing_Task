// /api/index.js
const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
require("dotenv").config();

const app = express();
app.use(express.json());
app.use(cors({
    origin: "https://doctor-listing-task-frontend.vercel.app",
    credentials: true
}));

app.use("/api/docter", require("../server/routes/docter.route"));

app.use((req, res) => {
    res.status(404).json({ message: "resource not found" });
});

app.use((err, req, res, next) => {
    console.error(err);
    res.status(500).json({ message: "server error", error: err.message });
});

let isConnected = false;

module.exports = async (req, res) => {
    if (!isConnected) {
        await mongoose.connect(process.env.MONGO_URL);
        isConnected = true;
        console.log("MongoDB connected");
    }
    return app(req, res);
};
