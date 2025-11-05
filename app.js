import express from "express";

const app = express();

app.use("/", (req, res, next) => {
    console.log("HOOOOOOOOOOOOOOOOOOOOO")
    next()
})

app.get("/", (req, res, next) => {
    console.log("hello world")
    res.send("<h1>Hello. Welcome to the application</h1>")
})


app.listen(3000, () => {
    console.log("application listening on port 3000")
})
