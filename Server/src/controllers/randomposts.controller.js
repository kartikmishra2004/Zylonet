import Post from "../models/post.model.js";

const randomposts = async (req, res) => {
    try {
        // Function to shuffle the array (Fisher-Yates shuffle algorithm)
        function shuffleArray(array) {
            for (let i = array.length - 1; i > 0; i--) {
                const j = Math.floor(Math.random() * (i + 1));
                [array[i], array[j]] = [array[j], array[i]];
            }
            return array;
        }
        const randomPosts = await Post.find().populate('author');
        const shuffledData = shuffleArray(randomPosts);
        res.status(200).json(shuffledData);
    } catch (error) {
        res.status(400).json({ message: "Failed to get posts!!" });
    }
}

export default randomposts;