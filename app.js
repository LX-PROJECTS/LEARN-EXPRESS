import express from "express";
import mongoose from "mongoose";

const app = express();

// Import routers


// Other common middlewares
app.use(express.json());

// Connect to MongoDB
mongoose.connect("mongodb://localhost:27017/mydatabase")
    .then(() => {
        app.listen(3000, () => {
            console.log("Connected to database");
            console.log("Server is running on port 3000");
        })
    })
    .catch((error) => {
        console.log("Error connecting to database:", error);
    })