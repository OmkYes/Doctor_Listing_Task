const express = require("express")
const mongoose = require("mongoose")
const cors = require("cors")
require("dotenv").config()

const app = express()

app.use(express.json())
app.use(cors({ origin: "http://localhost:3000", credentials: true }))
app.use("/api/docter", require("./routes/docter.route"))


app.use((req, res) => {
    res.status(404).json({ message: "resource not found" }) 
})


app.use((err, req, res, next) => {
    console.log(err)
    res.status(500).json({ message: "server error", error: err.message })
})

mongoose.connect(process.env.MONGO_URL)
mongoose.connection.once("open", () => {
    console.log("mongo connected")
    app.listen(process.env.PORT, console.log("server running..."))
})