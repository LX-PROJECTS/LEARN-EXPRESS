function getUser(req, res) {
    // How to get body data from request object
    const body = req.body;
    console.log("User data received:", body);
    

    // Send response
    res.status(401).send({ message: "User created successfully", data: body });
}

export { getUser };