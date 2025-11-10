import express from "express";

const app = express();

// Import routers
import {userRouter} from "./routers/user.js";
app.use(express.json());

app.use("/user", userRouter);


app.listen(3000, () => {
    console.log("application listening on port 3000")
})
