import mongoose from "mongoose";

const userSchema = mongoose.Schema({
    name: {
        type: String,
        required: [true, "Name is required"],
    },
    gmail: {
        type: String,
        required: [true, "Gmail is required"],
        unique: [true, "Gmail must be unique"],
    },
    age: {
        type: Number,
        required: [true, "Age is required"],
    },
    password: {
        type: String,
        required: [true, "Password is required"],
    }
});

mongoose.model("User", userSchema);

export { userSchema };