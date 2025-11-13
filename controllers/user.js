import { UserModel } from "../models/user.js";

async function getUser(req, res) {
    try {
        // How to get body data from request object
        const body = req.body;
        
        // Save user to database
        const newUser = new UserModel(body);
        await newUser.save()

        const { name, gmail, age } = newUser;

        // Send response
        res.status(201).json({
            message: "User created successfully",
            user: {
                name,
                gmail,
                age
            }
        })
    } catch (error) {
        res.status(error.status || 500).json({
            message: error.message || "Something went wrong",
        })

    }
}

export { getUser };