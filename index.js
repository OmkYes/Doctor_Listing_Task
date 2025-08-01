const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
require("dotenv").config();

const app = express();

// Middleware
app.use(express.json());
app.use(cors({
    origin: "https://doctor-listing-task-frontend.vercel.app",
    credentials: true
}));

// Routes
app.use("/api/docter", require("./routes/docter.route"));

app.use((req, res) => {
    res.status(404).json({ message: "resource not found" });
});

app.use((err, req, res, next) => {
    console.error(err);
    res.status(500).json({ message: "server error", error: err.message });
});

// MongoDB and server start
const PORT = process.env.PORT || 5000;

mongoose.connect(process.env.MONGO_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
}).then(() => {
    console.log("✅ MongoDB connected");
    app.listen(PORT, () => {
        console.log(`🚀 Server running on port ${PORT}`);
    });
}).catch((err) => {
    console.error("❌ MongoDB connection error:", err.message);
});
