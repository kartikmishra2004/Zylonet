// Import model

const signup = async (req, res) => {
    try {
        res.status(200).json({ message: "Hello world!!" });
    } catch (error) {
        res.status(400).json({ message: "Failed to signup!!" });
    }
}

export default signup;