import express from 'express';
const userRouter = express.Router();

// IMport controller
import {getUser} from "../controllers/test.js";

userRouter.post("/create-user", getUser);


export { userRouter };