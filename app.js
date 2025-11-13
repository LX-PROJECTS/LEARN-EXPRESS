import express from "express";
import mongoose from "mongoose";

const app = express();

// Import routers
import {userRouter} from "./routers/user.js";
app.use(express.json());

app.use("/user", userRouter);

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